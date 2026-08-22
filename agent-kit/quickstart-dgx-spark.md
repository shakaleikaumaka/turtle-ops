# ⚡ Quickstart: DGX Spark (fully offline, on-playa) 🐢🏜️

Run your camp agent **on your own NVIDIA DGX Spark** — no cloud, no internet,
no API keys. The model, the memory, and the turtle all live in a little gold
box on the camp LAN. This is the deep-playa deployment: when the nearest
cell tower is a dream, Terri still answers.

Written for Terrible Turtle Camp's own on-playa plans — fork it for yours.
**CC0, like everything in this kit.**

---

## What you need

- **DGX Spark** (GB10 Grace Blackwell, 128 GB unified memory, aarch64, DGX OS)
- ~80 GB free disk for models
- Power on playa: the Spark tops out around **240 W** — a small inverter lane
  on camp power handles it fine
- 🏜️ **Dust plan**: playa dust is conductive and everywhere. Keep the Spark in
  a sealed tote or filtered box, intake filtered (furnace-filter + box fan
  positive-pressure works), and only crack it open in the shade tent.

## Step 1 — Pull everything BEFORE you leave wifi 📡

There is no `ollama pull` at 4:30 & G. At home, with real internet:

```bash
# Ollama runs natively on the Spark (aarch64 build)
curl -fsSL https://ollama.com/install.sh | sh

# Pick your brain (both fit in 128 GB unified memory):
ollama pull gpt-oss:120b     # ~65 GB — the deep, wise turtle
ollama pull gpt-oss:20b      # ~13 GB — the fast turtle (snappy chat)
# solid alternates: llama3.3:70b · qwen3:32b
```

Test offline mode before you pack: `systemctl stop NetworkManager` (or pull
the cable) and make sure everything below still works.

## Step 2 — Give the model a soul 🐢

Create `Modelfile.terri` (this is the kit's [Agent Instructions](run.md)
with your camp facts filled in — TTC's shown as the example):

```
FROM gpt-oss:20b

SYSTEM """
You are Terri — the Terrible Turtle Camp agent for Burning Man 2026.
Open source, a gift to the playa (https://terribleturtle.camp/).
Motto: "Move Slow & Bite Things." Warm, playful, radically welcoming;
calm when someone's stressed — one step at a time. You embody the 10
Principles, you don't just quote them. Never condescending.

CAMP FACTS:
- Terrible Turtle Camp · Burning Man 2026 · Boulder CO → Black Rock City
- Build week ~Aug 24–30 (10 ppl) · Main camp ~Aug 31–Sep 6 (20–30 ppl) ·
  Strike ~Sep 7–10
- Water: 2–3 gal/person/day · Shower: two 275-gal IBC totes, gravity solar bags
- Kitchen: trailer build, 2x dual propane burners, chest freezer, 3 fridges
- The Shell: Aluminet 52x52 roofs + 52x8.5 ft walls, 4x4 posts, aircraft cable
- Domains: Kitchen · Shade · AI Oracle Tent · Water · Power · Shower · Food ·
  Health & Safety · Ops · Open Source Orchestra jams

HONESTY: never invent inventory counts, costs, or specs — say "I don't
know, ask the domain lead." No unsafe electrical/propane/structural advice.
GIFT ECONOMY: no money talk on playa — decommodification. Participation is
the currency.
"""
```

Then:

```bash
ollama create terri -f Modelfile.terri
ollama run terri "what's our water plan?"
```

## Step 3 — Feed her the camp's knowledge 📚

Small camps: paste [`inventory-starter.json`](inventory-starter.json) (or your
export) straight into the SYSTEM block. Bigger brains: run
[Open WebUI](https://github.com/open-webui/open-webui) against Ollama and
upload the kit files as knowledge:

```bash
docker run -d --network=host -v open-webui:/app/backend/data \
  -e OLLAMA_BASE_URL=http://127.0.0.1:11434 \
  --name camp-chat ghcr.io/open-webui/open-webui:main
```

(Pull the docker image at home too!) Upload your inventory export,
[`templates/MEMORY-template.md`](templates/MEMORY-template.md),
[`field-guide.md`](field-guide.md), build plans — the persistence loop from
[`workflows.md`](workflows.md) applies unchanged.

## Step 4 — Put her on the camp LAN 📶

The Spark serves the whole camp over a \$20 travel router (no internet needed):

1. Router SSID `TURTLE-ORACLE`, Spark on ethernet
2. Open WebUI listens on `:8080` → campers visit `http://<spark-ip>:8080`
   from any phone
3. Tape a QR code of that URL to the AI Oracle Tent pole 🐢✨

Now anyone in camp can ask "what's blocking the shower build?" at 2am from
their sleeping bag, and the answer never leaves the playa.

## The AI Oracle Tent lane 🔮

This is the same box that can render art overnight (video/image models),
transcribe the day's meeting from a voice memo (whisper.cpp runs great on
the Spark), and hold the whole camp's memory — one gold brick, zero cloud.
Domain lead runs the persistence loop: end of day, ask the agent for an
updated MEMORY file, save it, feed it back tomorrow.

## No Spark? No problem

The zero-hardware fallback rides in your pocket:
[`camp-agent-offline.html`](camp-agent-offline.html) — the kit's offline
page, no GPU required. And the cloud lanes are
[Claude](quickstart-claude.md) · [GPT](quickstart-gpt.md) ·
[Taurus](quickstart-taurus.md) (where Terri herself lives).

---

*Fork freely. Gift forward. Keep the dust out of the fans. — Terrible Turtle Camp 🐢*
