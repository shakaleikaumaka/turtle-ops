#!/usr/bin/env python3
"""
🐢🕳️ SHELLPIT FORGE BUILDER — PIT BOY
Terri's export -> canonical pit data:
  video-transcripts/*.md  -> transcripts/*.txt  (Esmeralda canonical format)
  manifest.json + drive-inventory.json -> data/catalog.json (Esmeralda schema + consent canon)
  camp-data/inventory-data.json -> data/armory.json (10 domains, 277 items)
  meeting-transcripts/*.md -> data/meetings.json
  transcripts -> data/search-index.json
CONSENT CANON: LAUNCH 2026-07-29 — every entry carries consent:"assumed-2026-07-29" (Shaka canon: consent assumed for all launch footage) · takedown: consent@publicinform.com 🦀
CC0 · dependency-free
"""
import json, re, os, sys, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def p(*a): return os.path.join(ROOT, *a)

manifest = json.load(open(p('manifest.json')))
inventory = json.load(open('/shared/handoff/shellpit/drive-inventory.json'))

# ---------- drive lookup: normalize filenames ("IMG_4359 2.MOV" == "IMG_4359_2.MOV") ----------
norm = lambda s: re.sub(r'[^a-z0-9]', '', s.lower())
drive_by_name = {norm(i['filename']): i for i in inventory['items']}

# ---------- honest titles (intel: pit-build-footage-intel.md + MACHINE-GUIDANCE.md) ----------
TITLES = {
 'IMG_4359_2':  ("Counting hardware — “there's only 75 of these in there”", None),
 'IMG_4417_2':  ("The Tool Maker session — “we almost built a fire” (grinder-as-saw, smoking)", 'build'),
 'IMG_4418_2':  ("The Tool Maker teaches: “it's going to cut right on the line”", 'build'),
 'IMG_4420_2':  ("The Tool Maker session · expert cuts continue", 'build'),
 'IMG_4422_2':  ("The Tool Maker session · at the saw", 'build'),
 'IMG_4423_2':  ("The Tool Maker session · measuring up", 'build'),
 'IMG_4425_2':  ("The Tool Maker session · shop craft", 'build'),
 'IMG_4427_2':  ("The Tool Maker session · the yard", 'build'),
 'IMG_4428_2':  ("The Tool Maker session · cuts & talk", 'build'),
 'IMG_4429_2':  ("“We got to watch that these are METAL saw horses” (blade meets sawhorse)", 'build'),
 'IMG_4430_2':  ("The Tool Maker session · more cuts", 'build'),
 'IMG_4431_2':  ("The Tool Maker session · fit check", 'build'),
 'IMG_4432_2':  ("“Don't wait for inspiration — cut that podcast now” 🎙️", 'build'),
 'IMG_4433_2':  ("Craftsmanship honesty — “wish we clean up the one that we did”", 'build'),
 'IMG_4434_2':  ("“Pretty, but not nearly as smooth as the Tool Maker's”", 'build'),
 'IMG_4435_2':  ("The Tool Maker session · wrap", 'build'),
 'IMG_4439_2':  ("The Tool Maker session · last cuts", 'build'),
 'IMG_4441':    ("Build session, evening 7/16 · clip 1", 'build'),
 'IMG_4442':    ("Build session, evening 7/16 · clip 2", 'build'),
 'IMG_4443':    ("Build session, evening 7/16 · clip 3", 'build'),
 'IMG_4445':    ("Build session, evening 7/16 · clip 4", 'build'),
 'IMG_4447':    ("Build session, evening 7/16 · clip 5", 'build'),
 'IMG_4451':    ("Build session, evening 7/16 · clip 6", 'build'),
 'IMG_4452':    ("VEGGIE COFFIN WALLS GO UP — plywood box assembly + window AC unboxed (7-min feature)", 'kitchen'),
 'IMG_4453':    ("Build session, night 7/16→17 · coffin work", 'kitchen'),
 'IMG_4459':    ("Evening session 7/17 · clip 1", 'build'),
 'IMG_4460':    ("Evening session 7/17 · clip 2", 'build'),
 'IMG_4461':    ("Evening session 7/17 · clip 3", 'build'),
 'IMG_4467':    ("Pocket clip 😄 (sub-second accidental capture)", None),
 'IMG_4469':    ("Pocket clip · SILENT (no audio track) 🔇", None),
 'IMG_4471':    ("SILENT clip (no audio track) 🔇", None),
 'IMG_4623':    ("🔧 THE NAMING — “you just bring in the experts like Jared the Machine” + the shower RUNS", 'water'),
 'IMG_4624':    ("🔧 THE TRAILER, MACHINIFIED — transfer switch, 16 outlets, 30A both sides", 'power'),
 'IMG_4625':    ("🔧 The machinified trailer — b-roll (speechless)", 'power'),
 'IMG_4626':    ("🔧 THE WATER LOOP, taught end to end — coupler → pump → kitchen → foot switch → greywater", 'water'),
}
MACHINE_CLIPS = {'IMG_4623','IMG_4624','IMG_4626'}
MACHINE_LIKELY = {'IMG_4625'}
# radical honesty: silent/speechless detected from the transcript headers themselves, not hardcoded
NOTES = {
 'IMG_4467': "Sub-second accidental pocket capture. We keep the artifact. Pits are honest.",
 'IMG_4469': "No audio track in the source file — a visual-only clip. Frame-stills lane pending.",
 'IMG_4471': "No audio track in the source file — a visual-only clip. Frame-stills lane pending.",
 'IMG_4625': "0 transcript segments — speechless b-roll from the 7/28 Machine session. Terri's footage intel mentions a rock show-and-tell in this session; which clip shows it is unconfirmed. Frame-stills lane pending.",
 'IMG_4626': "The full greywater loop in one lesson: IBC coupler + thread tape + channel locks + cam-lock → transfer pump → kitchen → Jeremy's foot switch → greywater float switch → sump → shower basin float switch → greywater tank. Ends with Victor — “Victory!”",
 'IMG_4624': "“The machine turned the trailer into a machine.” Transfer switch (panel ↔ battery, generator kill), 16 outlets, 30A on both sides, USB/USB-C charge points.",
 'IMG_4623': "The naming moment itself — and the shower RUNS.",
}

def fmt_dur(sec):
    sec = int(round(sec or 0)); h, r = divmod(sec, 3600); m, s = divmod(r, 60)
    return f"{h:02d}:{m:02d}:{s:02d}" if h else f"{m:02d}:{s:02d}"

def slug(v): return v['video'].rsplit('.',1)[0]  # IMG_4624.MOV -> IMG_4624

# ---------- 1) transcripts/*.txt ----------
os.makedirs(p('transcripts'), exist_ok=True)
seg_re = re.compile(r'^\[\s*([\d.]+)s\s*→\s*([\d.]+)s\]\s*(.*)$', re.M)
tx_index = {}
converted = 0
for v in manifest['videos']:
    sl = slug(v)
    src = p(v['transcript'])
    if not os.path.exists(src): print('MISSING TX', sl); continue
    raw = open(src).read()
    segs = [(float(a), float(b), t.strip()) for a,b,t in seg_re.findall(raw)]
    title = TITLES.get(sl, (sl, None))[0]
    d = drive_by_name.get(norm(v['video']), {})
    out = [f"# {title}\n",
           f"Date: {(v.get('recorded') or '')[:10]}",
           f"Source video: {v['video']}",
           f"Drive: https://drive.google.com/file/d/{d.get('drive_id','')}/view" if d.get('drive_id') else "Drive: (id pending)",
           f"Duration: {fmt_dur(v.get('duration_s'))}",
           f"Transcribed: 2026-07-28 · Terri turtlePIT · faster-whisper (small, int8) · consent: assumed-2026-07-29",
           "\n---\n"]
    for a, b, t in segs:
        m, s = divmod(int(a), 60); h, m = divmod(m, 60)
        ts = f"[{h:02d}:{m:02d}:{s:02d}]" if h else f"[{m:02d}:{s:02d}]"
        out.append(f"{ts} {t}")
    open(p('transcripts', sl + '.txt'), 'w').write('\n'.join(out) + '\n')
    tx_index[sl] = segs
    converted += 1
print(f"transcripts: {converted} converted")

# ---------- 2) data/catalog.json ----------
os.makedirs(p('data'), exist_ok=True)
catalog = []
for v in manifest['videos']:
    sl = slug(v)
    d = drive_by_name.get(norm(v['video']), {})
    title, domain = TITLES.get(sl, (sl, None))
    e = {
        'id': d.get('drive_id', ''),
        'slug': sl,
        'title': title,
        'date': (v.get('recorded') or '')[:10] or None,
        'week': None,
        'domain': domain,
        'source': 'Phoenix Gulch build · July 2026',
        'media': ([{'id': d.get('drive_id',''), 'kind': 'video',
                    'size': d.get('bytes'), 'stream': True,
                    'preview': d.get('preview','unknown')}] if d.get('drive_id') else []),
        'transcript': sl if sl in tx_index and tx_index[sl] else None,
        'duration': fmt_dur(v.get('duration_s')),
        'duration_s': v.get('duration_s'),
        'words': v.get('word_count'),
        'quality': 'ok',
        'transponder': bool(tx_index.get(sl)),
        'consent': v.get('consent', 'assumed-2026-07-29'),
        'speakers': [],
    }
    if sl in MACHINE_CLIPS: e['machine'] = True
    if sl in MACHINE_LIKELY: e['machine'] = 'likely'
    # --- honesty badges, detected from Terri's own transcript headers ---
    txraw = open(p(v['transcript'])).read() if os.path.exists(p(v['transcript'])) else ''
    if '[SILENT VIDEO' in txraw:
        e['silent'] = True
        e.setdefault('note', "No audio track in the source file — a visual-only clip. Frame-stills lane pending.")
    elif not tx_index.get(sl):
        e['speechless'] = True
        e.setdefault('note', "Audio present but no speech detected (0 transcript segments) — demo footage. Frame-stills lane pending.")
    if sl in NOTES: e['note'] = NOTES[sl]
    catalog.append(e)
catalog.sort(key=lambda e: (e['date'] or '', e['slug']))
json.dump(catalog, open(p('data','catalog.json'),'w'), indent=1)
print(f"catalog: {len(catalog)} sessions · {sum(1 for e in catalog if e['transcript'])} with transcripts · {sum(1 for e in catalog if e.get('machine')==True)} machine")

# ---------- 3) data/photos.json ----------
photos = []
for ph in manifest.get('photos', []):
    d = drive_by_name.get(norm(ph['file']), {})
    photos.append({'id': d.get('drive_id',''), 'file': ph['file'],
                   'date': (ph.get('recorded') or '').replace(':', '-', 2)[:10],
                   'size': d.get('bytes'), 'consent': ph.get('consent','assumed-2026-07-29')})
photos.sort(key=lambda x: x['date'] or '')
json.dump(photos, open(p('data','photos.json'),'w'), indent=1)
print(f"photos: {len(photos)}")

# ---------- 4) data/armory.json ----------
inv = json.load(open(p('camp-data','inventory-data.json')))
domains = {}
for it in inv:
    dom = it.get('domain') or 'Unsorted'
    domains.setdefault(dom, []).append(it)
armory = {'generated': '2026-07-28', 'source': 'Shell Supply and Armory (Terri sync)',
          'total': len(inv),
          'domains': [{'name': k, 'count': len(v)} for k, v in sorted(domains.items(), key=lambda kv: -len(kv[1]))],
          'items': inv}
json.dump(armory, open(p('data','armory.json'),'w'), indent=1)
print(f"armory: {len(inv)} items · {len(domains)} domains")

# ---------- 5) data/meetings.json ----------
meetings = []
mdir = p('meeting-transcripts')
spk_re = re.compile(r'^\*\*(.+?)\*\*\s*\*\[([^\]]+)\]\*', re.M)
for fn in sorted(os.listdir(mdir)):
    if not fn.endswith('.md'): continue
    raw = open(os.path.join(mdir, fn)).read()
    title = (raw.split('\n')[0].lstrip('# ').strip() or fn)
    date_m = re.search(r'Meeting Date:\*\*\s*(.+)', raw)
    speakers = []
    for name in spk_re.findall(raw):
        if name[0] not in speakers: speakers.append(name[0])
    meetings.append({'file': f'meeting-transcripts/{fn}', 'slug': fn[:-3],
                     'title': title, 'date': fn[:10],
                     'date_label': date_m.group(1).strip() if date_m else None,
                     'speakers': speakers, 'words': len(raw.split()),
                     'machine': any('Henson' in s for s in speakers),
                     'consent': 'assumed-2026-07-29'})
json.dump(meetings, open(p('data','meetings.json'),'w'), indent=1)
print(f"meetings: {len(meetings)} · machine speaks in {sum(1 for m in meetings if m['machine'])}")

# ---------- 6) data/search-index.json ----------
idx = {}
for sl, segs in tx_index.items():
    idx[sl] = [{'t': int(a), 'x': t} for a, b, t in segs]
json.dump(idx, open(p('data','search-index.json'),'w'))
print(f"search-index: {len(idx)} transcripts indexed")
print("FORGE BUILD COMPLETE 🐢🔥")
