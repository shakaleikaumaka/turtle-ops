# ShellPit nova-3 vs Whisper — honest fidelity diff
**Generated:** 2026-08-01 20:25 UTC by PIT BULL 🐂
**Job:** re-harvest 23 voiced camp clips at max fidelity — Deepgram nova-3, smart_format+punctuate+diarize+utterances, **word-level timestamps** for Terri's scene-note sync.

## Headline
- 23/23 voiced clips transcribed · 12/12 silent clips ffprobe-confirmed no-audio · **0 failed**
- Total words: **1,282** (nova-3) vs 1,149 (old whisper) — +12%
- Total audio: **19.18 min** · avg confidence (clips with words): **0.85**
- Cost: est **$0.0825** @ $0.0043/min (est before job: ~$0.08 — on target, GREEN)

## Word-count comparison (all 23 voiced clips)
| slug | whisper | nova-3 | conf | speakers | sec |
|---|---|---|---|---|---|
| IMG_4624 | 206 | 301 | 0.924 | 2 | 118.8 |
| IMG_4626 | 290 | 300 | 0.951 | 1 | 150.3 |
| IMG_4452 | 117 | 103 | 0.834 | 1 | 414.9 |
| IMG_4461 | 72 | 87 | 0.959 | 1 | 41.0 |
| IMG_4417_2 | 60 | 68 | 0.930 | 1 | 20.5 |
| IMG_4460 | 58 | 57 | 0.960 | 2 | 25.0 |
| IMG_4418_2 | 61 | 55 | 0.745 | 2 | 19.1 |
| IMG_4432_2 | 20 | 53 | 0.876 | 1 | 22.5 |
| IMG_4428_2 | 61 | 50 | 0.787 | 1 | 22.8 |
| IMG_4435_2 | 56 | 50 | 0.752 | 1 | 62.2 |
| IMG_4623 | 33 | 39 | 0.934 | 1 | 19.6 |
| IMG_4429_2 | 21 | 32 | 0.850 | 1 | 44.1 |
| IMG_4423_2 | 11 | 25 | 0.710 | 1 | 7.0 |
| IMG_4433_2 | 18 | 18 | 0.908 | 1 | 66.4 |
| IMG_4434_2 | 16 | 18 | 0.879 | 1 | 9.5 |
| IMG_4359_2 | 16 | 16 | 0.927 | 1 | 22.7 |
| IMG_4442 | 18 | 4 | 0.840 | 1 | 12.5 |
| IMG_4453 | 0 | 4 | 0.753 | 1 | 2.1 |
| IMG_4431_2 | 1 | 2 | 0.630 | 1 | 2.3 |
| IMG_4430_2 | 3 | 0 | — | 0 | 19.7 |
| IMG_4439_2 | 0 | 0 | — | 0 | 11.0 |
| IMG_4443 | 11 | 0 | — | 0 | 8.8 |
| IMG_4625 | 0 | 0 | — | 0 | 28.3 |
| **TOTAL** | **1149** | **1282** | | | **19.2 min** |

## Fidelity gains
- **Biggest win — IMG_4624** (the 2-min camp tour): 206→301 words, 2 speakers now separated, every word timestamped. Diarization worked on 3 clips (4624, 4460, 4418_2).
- **IMG_4432_2: 20→53 words** — whisper was clearly under-hearing; nova-3 caught full sentences at 0.876 conf.
- **IMG_4453: 0→4 words** — whisper got nothing (codec-none stream bug?); nova-3 heard *"The fabric is synthetic."* after re-encoding with `-map 0:a:0`.
- Word-level timestamps verified **byte-honest**: all monotonic, all within clip duration, all 23 files.

## ⚑ Honest flags (low confidence / garbles / disagreements)
1. **IMG_4431_2 (conf 0.63, 2w)** + **IMG_4423_2 (conf 0.71, 25w)** — lowest-confidence clips. 4423_2 is quick overlapping chatter ("Think we got an office a little bit…") — directionally right, word-level shaky.
2. **IMG_4430_2** — nova-3 EMPTY (verified 3×: en/multi/ja) vs whisper's 3 words. Loud audio (peak 0dB); Groq whisper heard *"Shaka la kala!"* — possible faint exclamation OR whisper-on-noise hallucination. Multi-mode detected `ja` but no transcript. ⚑ uncertain.
3. **IMG_4625** — nova-3 EMPTY (3× verified) despite loud audio (peak 0dB). Groq whisper hallucinated *"I'm going to go."* (classic whisper-on-music artifact). ⚑ treated as no-speech — likely music/ambient.
4. **IMG_4443** — nova-3 EMPTY vs whisper's 11 words. Quiet clip (RMS -31dB). Groq whisper produced *"Thank you."* — textbook hallucination phrase; old 11-word whisper text likely invented. ⚑ treated as no-speech.
5. **IMG_4442** — old whisper's 18 words were noise-inflated. nova-3's *"Is that right? Yes."* (4w) matches Groq whisper cross-check exactly. nova-3 count is the honest one.
6. **IMG_4439_2** — genuinely near-silent (RMS -51dB). Confirmed no speech.

## Silent-clip probe (12 clips)
All 12 ffprobe-confirmed **no audio track**: IMG_4471, IMG_4420_2, IMG_4422_2, IMG_4425_2, IMG_4427_2, IMG_4441, IMG_4445, IMG_4447, IMG_4451, IMG_4459, IMG_4467, IMG_4469. **0 surprises** (no silent-flagged clip secretly had audio).

## Notes for Terri
- Every voiced clip's `words[]` array has `{word, start, end, confidence, speaker}` — sync scene notes straight off `start`.
- `segments[]` = diarized utterance blocks with speaker labels (speaker 0/1/…) — speaker labels are per-clip, not global.
- This footage is genuinely speech-light (demo/walkthrough-heavy): 19 min of audio → 1,282 words ≈ 67 wpm, most of it in the two long clips (4452/4624/4626).

— PIT BULL 🐂🕳️ · the pit provides — WITH PERMISSION, FOR THE PLAYA. 💪🏜️
