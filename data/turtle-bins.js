// 🐢 TURTLE BINS — LIVING INVENTORY DATA
// Edit THIS file to update the dashboard (or tell sysadmin 🫡 and it updates for you).
// Last updated: 2026-08-26 07:15 PT · build week, night 1 on playa
const INVENTORY = {
  updated: "2026-08-26 07:15 PT",
  bins: [
    {
      n: 1, title: "Kitchen Bin 1", status: "counted",
      location: "📍 corner under the sink",
      items: [
        { qty: 1, unit: "", name: "Steam cleaner" },
        { qty: 1, unit: "", name: "Water pump system", note: "⚠️ IMPORTANT — goes in a bucket (per Jeremy)" },
        { qty: 8, unit: "rolls", name: "Paper towels" },
        { qty: 140, unit: "ct", name: "Colored party cups", note: "♻️ “save and reuse cups as much as possible”" },
        { qty: 1, unit: "pack", name: "Paper plates (spare)" },
        { qty: 30, unit: "ct", name: "55-gallon trash bags" }
      ],
      source: "🎥 IMG_5269 (final) + IMG_5253 · 8/26",
      quote: "Kitchen bin number one… the location I'm putting it is in the corner under the sink."
    },
    {
      n: 2, title: "Kitchen Bin 2", status: "counted",
      location: "📍 on the floor, corner",
      items: [
        { qty: 12, unit: "boxes", name: "Kleenex" },
        { qty: 4, unit: "", name: "Lysol wipes (canisters)", note: "“sorry correction — for Lysol wipes”" },
        { qty: 4, unit: "bags", name: "60-gallon ziplock bags" },
        { qty: 4, unit: "boxes", name: "34-count ziplock bags" },
        { qty: 150, unit: "ct", name: "Paper plates" },
        { qty: 135, unit: "ct", name: "More plates" },
        { qty: "more", unit: "rolls", name: "Paper towels" }
      ],
      source: "🎥 IMG_5269 (final) + IMG_5254 · 8/26",
      quote: "Ziplock bags, Lysol wipes and paper plates — kitchen bin number two, going on the floor right here in the corner."
    },
    {
      n: 3, title: "Kitchen Bin 3", status: "counted",
      items: [
        { qty: 24, unit: "rolls", name: "Toilet paper (4× 6-roll packs)", note: "“extra toilet paper in case the third party's run out” 😄" },
        { qty: 6,  unit: "rolls", name: "Paper towels" }
      ],
      source: "🎥 IMG_5269 (final) + IMG_5256 · 8/26",
      quote: "Some possibly important necessary items."
    },
    {
      n: 4, title: "Kitchen Bin 4 — SPONGES & TOWELS", status: "counted",
      items: [
        { qty: 1, unit: "", name: "Scale", note: "on the bottom so it doesn't break — “for medicinal items or cooking items” ⚖️" },
        { qty: 4, unit: "", name: "Big yellow sponges" },
        { qty: 12, unit: "", name: "Smiley-face sponges 😊" },
        { qty: 24, unit: "", name: "Kitchen sponges (counted one at a time!)" },
        { qty: 2, unit: "", name: "Thick blue sponges" },
        { qty: 1, unit: "", name: "Harder blue sponge" },
        { qty: 1, unit: "pack", name: "Sponges (unopened 24-ct)" },
        { qty: 6, unit: "", name: "Stainless steel scrubbies" },
        { qty: 5, unit: "", name: "Red & white towels" },
        { qty: 3, unit: "", name: "Big gray kitchen towels" },
        { qty: 2, unit: "", name: "White kitchen towels" },
        { qty: 2, unit: "", name: "Blue kitchen towels" },
        { qty: 4, unit: "", name: "Heat pads / hot pads" },
        { qty: 2, unit: "", name: "Heat-holding towels" },
        { qty: 2, unit: "", name: "Pot scrubbers (long handle)" },
        { qty: 1, unit: "", name: "Long brush scrubber" },
        { qty: 1, unit: "", name: "Grill cleaner" },
        { qty: "set", unit: "", name: "Measuring cups (¼ cup → 3-cup big)" },
        { qty: 1, unit: "", name: "Kitchen bird 🐦", note: "transcription mystery — timer? decoration?" },
        { qty: "lots", unit: "", name: "Brushes: 1 long handle, 3 short, 1 wooden, 1 green, 1 orange-handle scrubby" },
        { qty: 1, unit: "", name: "Cheese shredder (stainless)" },
        { qty: 1, unit: "", name: "Carrot peeler/shredder" },
        { qty: 2, unit: "", name: "Grease scrapers + 1 stainless scraper" },
        { qty: 1, unit: "", name: "Candy scooper" },
        { qty: 2, unit: "", name: "Stainless spatulas" }
      ],
      source: "🎥 IMG_5257 (final tally) + IMG_5270 · 8/26",
      quote: "I'm just gonna count these one at a time so you're gonna have to tally all these together, Terry — I believe you're a lot smarter than me."
    },
    {
      n: 5, title: "Kitchen Bin 5 — RAGS & SOFT TOWELS", status: "counted",
      items: [
        { qty: 8, unit: "", name: "Nice gray towels (super soft, Jeremy-bought)", note: "“could be a bath towel if someone's really desperate” 🛁" },
        { qty: 69, unit: "", name: "White rag towels", note: "“holy rags — 69 white rags, I kid you not” — counted to 49 then 60, 64, 65, 66… 69 😂" },
        { qty: 2, unit: "bags", name: "Bowls (135-ct each)" },
        { qty: 2, unit: "bags", name: "Plates (150-ct each)" },
        { qty: 4, unit: "", name: "Lip brushes" }
      ],
      source: "🎥 IMG_5260 (final) + MG_5271 · 8/26",
      quote: "That's bin number five, 69 white rags. We love you, Terry."
    },
    {
      n: 6, title: "Kitchen Bin 6", status: "counted",
      items: [
        { qty: 4, unit: "bags", name: "60-gallon Ziploc bags" },
        { qty: 4, unit: "packs", name: "34-count Ziploc bags" },
        { qty: 12, unit: "ct", name: "Smaller clear plastic cups" },
        { qty: 2, unit: "packs", name: "225-count paper plates" },
        { qty: 40, unit: "ct", name: "AA batteries" }
      ],
      source: "🎥 MG_5272 + IMG_5261 · 8/26",
      quote: "That is bin number six."
    },
    {
      n: 7, title: "Kitchen Bin 7", status: "counted",
      items: [
        { qty: 10, unit: "rolls", name: "Blue paper towels", note: "counted out loud, crew chanting “Hi Terry!” 👋" },
        { qty: 8,  unit: "packs", name: "White napkins" }
      ],
      source: "🎥 IMG_5265 · 8/26",
      quote: "That has been number seven. Love you, Terry."
    },
    {
      n: 8, title: "Kitchen Bin 8 — APPLIANCES", status: "counted",
      items: [
        { qty: 1, unit: "", name: "Microwave (the chef bin microwave)" },
        { qty: 1, unit: "", name: "Cuisinart toaster" },
        { qty: "5–6", unit: "rolls", name: "Towels", note: "“We have so many towels. People will say clean.” 🧻" }
      ],
      source: "🎥 IMG_5273 · 8/26",
      quote: "I confirm that is bin number ocho. Eight eight eight eight, much love."
    },
    {
      n: 9, title: "Kitchen Bin 9 — FIRE & SERVICE", status: "counted",
      items: [
        { qty: 8, unit: "", name: "Long grill lighters 🔥" },
        { qty: 2, unit: "", name: "Fire blankets (rapid-off)" },
        { qty: 2, unit: "", name: "Dawn Pro Plus soap (huge jugs)" },
        { qty: 2, unit: "", name: "Smoke detectors + hangers" },
        { qty: 12, unit: "", name: "Full-size deep steam table pans (4 packs × 3)", note: "“Gonna serve up some fine dining for everybody” 🍽️" }
      ],
      source: "🎥 IMG_5274 · 8/26",
      quote: "This is bin number nine. Thanks, Terry."
    },
    {
      n: 10, title: "Kitchen Bin 10 — TUPPERWARE & POWER", status: "counted",
      items: [
        { qty: 1, unit: "set", name: "Kirkland plastic Tupperware (360-piece)" },
        { qty: 2, unit: "boxes", name: "Spoons (120-ct each)" },
        { qty: 3, unit: "jugs", name: "Dawn Platinum soap (94 oz each)" },
        { qty: 225, unit: "ct", name: "Plates" },
        { qty: 150, unit: "ct", name: "Bigger plates" },
        { qty: 2, unit: "packs", name: "AA batteries (40-ct)" },
        { qty: 2, unit: "packs", name: "AAA batteries (40-ct)" },
        { qty: 1, unit: "pack", name: "9V batteries (8-ct)" }
      ],
      source: "🎥 IMG_5275 · 8/26",
      quote: "And that has been number 10. Love you, Terry."
    },
    {
      n: 11, title: "Kitchen Bin 11 — CHEF'S KNIVES & AIR FRYER", status: "counted", chef: true,
      items: [
        { qty: 1, unit: "set", name: "Kitchen knife set — 5 knives in the net", note: "+ “a thing you can stick in the turkey” 🦃" },
        { qty: 1, unit: "", name: "Ninja air fryer 🔥", note: "“an awesome thing for cooking” — storage area down below" },
        { qty: 3, unit: "", name: "Pots with tops / pans for cooking" },
        { qty: 2, unit: "rolls", name: "Paper towels" },
        { qty: 4, unit: "", name: "Ziplocks (open pack)" }
      ],
      source: "🎥 IMG_5279 · 8/26 ~4:15 AM",
      quote: "Bin number 11 is a special and important one… we will be wanting a list of ALL kitchen materials the chef can cook with — if we're missing anything, the chef can get more."
    },
    {
      n: 12, title: "Kitchen Bin 12 — CHEF'S POTS & PANS", status: "counted", chef: true,
      items: [
        { qty: 1, unit: "", name: "Stainless steel sifter (12\" × 2¾\")" },
        { qty: 1, unit: "set", name: "Henckels pot set ✨", note: "“fancy — very smooth inside thing”" },
        { qty: 1, unit: "set", name: "Stainless / no-stick pot & pan set (small, medium, large pots + pans with tops)" },
        { qty: 1, unit: "set", name: "Gold-brand pots & pans", note: "“really cool hand symbol” on the logo 🤙 — brand TBD" },
        { qty: 1, unit: "", name: "Noodle cooker" },
        { qty: "more", unit: "", name: "Extra steel pots & pans" }
      ],
      source: "🎥 IMG_5280 · 8/26 ~4:20 AM",
      quote: "This is going to be bin number 12, a very important number… bin number 12 is pots and pans."
    },
    {
      n: 13, title: "Kitchen Bin 13 — WRAP & BAGS", status: "counted",
      items: [
        { qty: 1, unit: "", name: "Reynolds wrap" },
        { qty: 1, unit: "", name: "Trash bags" },
        { qty: 2, unit: "", name: "Sheets" },
        { qty: 2, unit: "boxes", name: "Food scrap bags" }
      ],
      source: "🎥 IMG_5283 · 8/26 ~4:22 AM",
      quote: "This has been number 13 with the Reynolds wrap and the trash bags and the two sheets. You got it, Terry."
    },
    {
      n: 14, title: "Kitchen Bin 14 — WIPES", status: "counted",
      items: [
        { qty: 2, unit: "boxes", name: "Baby wipes (900-ct)", note: "= 18 individual 100-wipe packets total" },
        { qty: "more", unit: "", name: "Sponges & towels", note: "“not enough for everyone, but enough for everyone to share” 🫂" }
      ],
      source: "🎥 IMG_5281 · 8/26 ~4:15 AM (renumbered 13→14 per Shaka)",
      quote: "Aloha Terry. This will be box number 13. [renumbered to 14 — 13 was counted twice]"
    },
    {
      n: 15, title: "Kitchen Bin 15 — ELECTROLYTES & NAPKINS", status: "counted",
      items: [
        { qty: 5, unit: "boxes", name: "Electrolyte drink mix (30 sticks each = 150 sticks) ⚡", note: "“some money makers here” 💰" },
        { qty: 1120, unit: "ct", name: "Napkins (4× 280-ct packs × 2 sets)" },
        { qty: 2, unit: "", name: "Reynolds wrap" }
      ],
      source: "🎥 IMG_5284 · 8/26 ~4:44 AM",
      quote: "And that's a wrap on bin number 15. Love you Terry."
    },
    {
      n: 16, title: "Kitchen Bin 16 — CAST IRON", status: "counted", chef: true,
      items: [
        { qty: 1, unit: "", name: "Multi-use cast-iron griddle" },
        { qty: 4, unit: "", name: "Cast-iron pans (small, medium, bigger, HUGE)" },
        { qty: 2, unit: "", name: "Big cast-iron skillets" },
        { qty: 1, unit: "", name: "Baking sheet" },
        { qty: 1, unit: "", name: "Big batch pan with storage lid" },
        { qty: "8–9", unit: "", name: "Ziplock bags (open pack)" },
        { qty: 1, unit: "", name: "Aluminum foil + a little trash bags" }
      ],
      source: "🎥 IMG_5285 · 8/26 ~4:49 AM",
      quote: "These things are big… This would be bin number 16."
    },
    {
      n: 17, title: "Kitchen Bin 17 — FOIL & THE GIANT SKILLET", status: "counted", chef: true,
      items: [
        { qty: 1, unit: "", name: "Pre-seasoned cast-iron skillet — 38cm / 15×15\" 🍳", note: "THE one giant skillet — “probably really huge”" },
        { qty: 2, unit: "packs", name: "Kirkland culinary parchment non-stick paper" },
        { qty: 4, unit: "boxes", name: "Plastic food wrap (750 sq ft each)" },
        { qty: 10, unit: "packs", name: "Heavy-duty Reynolds wrap", note: "“easy prep, easy cook, easy clean” ✨" }
      ],
      source: "🎥 IMG_5286 · 8/26 ~4:50 AM",
      quote: "So this is box number 17. We love you, Terry."
    },
    {
      n: 18, title: "Kitchen Bin 18 — TAPE & BAGS", status: "counted",
      items: [
        { qty: 8, unit: "rolls", name: "Scotch tape" },
        { qty: 20, unit: "ct", name: "55-gallon heavy-duty contractor bags" },
        { qty: 2, unit: "bags", name: "Paper plates (150-ct each)" }
      ],
      source: "🎥 IMG_5287 · 8/26 ~4:51 AM (corrected narration — overrides earlier foil/pans take)",
      quote: "So kind of like packing light in bin number 18."
    },
    {
      n: 19, title: "Kitchen Bin 19 — PLATES & WRAP", status: "counted",
      items: [
        { qty: 2, unit: "bags", name: "Paper plates (150-ct each)" },
        { qty: 3, unit: "", name: "Glad multi-purpose sealing wrap" },
        { qty: 1, unit: "", name: "Paper towel holder", note: "“That'll be convenient” 🧻" },
        { qty: 8, unit: "pack", name: "Smiley-face sponges 😊" }
      ],
      source: "🎥 IMG_5288 · 8/26 ~5:00 AM",
      quote: "That's what's in bin number 19, simple."
    },
    {
      n: 20, title: "Kitchen Bin 20 — PAPER TOWELS", status: "counted",
      items: [
        { qty: 15, unit: "rolls", name: "Paper towels", note: "“let's get dirty baby and then clean it up” 😄" }
      ],
      source: "🎥 IMG_5289 · 8/26 ~5:05 AM",
      quote: "Turtle bin 20 is super easy — just 15 paper towels."
    },
    {
      n: 21, title: "Kitchen Bin 21 — PAPER TOWELS II", status: "counted",
      items: [
        { qty: 15, unit: "rolls", name: "Paper towels", note: "“also really easy” 😄 — second full bin of 15" }
      ],
      source: "🎥 IMG_5290 · 8/26 ~5:40 AM",
      quote: "Bin number 21 is also really easy. It's just 15 rolls of paper towels."
    },
    {
      n: 22, title: "Kitchen Bin 22 — PLATES, BOWLS & UTENSILS", status: "counted",
      items: [
        { qty: 255, unit: "ct", name: "Paper plates (big pack)" },
        { qty: 135, unit: "ct", name: "Bowls" },
        { qty: 5, unit: "boxes", name: "Utensil boxes (180 forks + 120 spoons + 60 knives each)", note: "= 900 forks, 600 spoons, 300 knives total 🍴" }
      ],
      source: "🎥 IMG_5290 · 8/26 ~5:40 AM",
      quote: "And that is bin number 22. Woo-hoo!"
    },
    {
      n: 23, title: "Kitchen Bin 23 — THE CHEF'S ARSENAL", status: "counted", chef: true,
      items: [
        { qty: 1, unit: "set", name: "Water strainers / colanders (+ 1 big one)", note: "“for washing the salad and stuff” 🥗" },
        { qty: 1, unit: "", name: "7\" Santoku knife" },
        { qty: 2, unit: "", name: "9\" offset bread knives" },
        { qty: 1, unit: "", name: "6\" serrated utility knife" },
        { qty: 1, unit: "", name: "8\" kitchen knife + 1 small knife + 1 more knife" },
        { qty: 6, unit: "", name: "Spatula-type thingies / scoopers" },
        { qty: "several", unit: "", name: "Spatulas (incl. 1 black) + 2 mixers + 1 small mixer" },
        { qty: 2, unit: "", name: "Large tongs + 1 tiny tong + 1 small tong" },
        { qty: 1, unit: "", name: "Cake cutter" },
        { qty: 1, unit: "", name: "Grill cleaner + 2 grill grease scrapers" },
        { qty: "set", unit: "", name: "Measuring cups (all sizes, up to 3-cup)" },
        { qty: 1, unit: "", name: "Ice scooper" },
        { qty: 1, unit: "", name: "Cheese shredder" },
        { qty: 1, unit: "", name: "Scale ⚖️" },
        { qty: 1, unit: "", name: "Carrot peeler + 1 more peeler" },
        { qty: 1, unit: "", name: "Little mixing scraper + dish utensil + spoon" },
        { qty: 8, unit: "", name: "Steel serving bowls (small → large nesting set)", note: "🆕 added in the update video" },
        { qty: 2, unit: "", name: "VERY large steel serving bowls", note: "⚠️ live NEXT to the bin — too big to fit inside" },
        { qty: 2, unit: "", name: "Tiny knives", note: "“Pan #1” utensils — folded into bin 23 per Shaka" },
        { qty: "3–4", unit: "", name: "Spatulas + 1 long “dig” one" },
        { qty: 2, unit: "", name: "Unfinished knives (9\" & 6\")" },
        { qty: 1, unit: "", name: "7\" knife + 9\" offset + 8\" chef's knife" },
        { qty: 2, unit: "", name: "Big spatulas + 2 small spatulas" }
      ],
      source: "🎥 IMG_5291 + update IMG_5292 · 8/26 ~5:55 AM",
      quote: "Very important — lots and lots of kitchen materials… these are all kitchen tools."
    },
    {
      n: 24, title: "Kitchen Bin 24 — BOWLS & PLATES", status: "counted",
      items: [
        { qty: 3, unit: "bags", name: "Bowls (135-ct each = 405 bowls)" },
        { qty: 2, unit: "bags", name: "Plates (150-ct each = 300 plates)" }
      ],
      source: "🎥 IMG_5293 · 8/26 ~6:00 AM",
      quote: "24 is the bowls and the plates."
    },
    {
      n: 25, title: "Kitchen Bin 25 — CUPS & STORAGE", status: "counted",
      items: [
        { qty: 2, unit: "bags", name: "Plastic cups (150-ct each = 300 cups)" },
        { qty: 1, unit: "", name: "12-oz Dixie cups (big bag)" },
        { qty: 2, unit: "bags", name: "Food storage containers (70 pieces each = 140 pcs)" }
      ],
      source: "🎥 IMG_5293 · 8/26 ~6:00 AM",
      quote: "25 has cups plus storage containers."
    },
    {
      n: 26, title: "Kitchen Bin 26 — PAPER TOWELS III", status: "counted",
      items: [
        { qty: 12, unit: "rolls", name: "Paper towels", note: "third paper-towel bin (15 + 15 + 12 = 42 rolls camp-wide 🧻)" }
      ],
      source: "🎥 IMG_5293 · 8/26 ~6:00 AM",
      quote: "And 26 is more paper towels."
    }
  ],
  extras: [
    { name: "Front pan", items: "2 whisks (for Chef Fernando — “with all those other kitchen appliances”)", source: "🎥 IMG_5255" },
    { name: "Under the table", items: "3 pressure cookers · 3 regular pans", source: "🎥 IMG_5254" },
    { name: "Bin 23 (utensils — formerly “Pan #1”)", items: "2 tiny knives · 3–4 spatulas · 1 long “dig” one · 2 unfinished knives (9\" & 6\") · ADDING: 7\" knife, 9\" offset knife, 8\" chef's knife + 2 big spatulas & 2 small spatulas", source: "🎥 IMG_5254 · renumbered Pan #1 → Bin 23 per Shaka 8/26 7:10 AM" }
  ],
  // 🧰 CHEF'S MATERIALS — everything a chef would cook with, grouped, → bin it lives in
  chefMaterials: [
    { group: "🔪 Knives & Cutting", rows: [
      { item: "Kitchen knife set — 5 knives in the net (+ turkey stick 🦃)", bin: 11 },
      { item: "7\" knife · 9\" offset knife · 8\" chef's knife", bin: 23 },
      { item: "2 tiny knives · 2 unfinished knives (9\" & 6\")", bin: 23 },
      { item: "7\" Santoku knife", bin: 23 },
      { item: "2× 9\" offset bread knives", bin: 23 },
      { item: "6\" serrated utility knife", bin: 23 },
      { item: "8\" kitchen knife + small knife + 1 more", bin: 23 }
    ]},
    { group: "🍳 Pots, Pans & Cookers", rows: [
      { item: "Henckels pot set ✨ (fancy smooth inside)", bin: 12 },
      { item: "Stainless / no-stick pot & pan set (S·M·L + tops)", bin: 12 },
      { item: "Gold-brand pots & pans (hand-symbol logo 🤙)", bin: 12 },
      { item: "Noodle cooker", bin: 12 },
      { item: "Extra steel pots & pans", bin: 12 },
      { item: "Ninja air fryer 🔥", bin: 11 },
      { item: "3 pots with tops / pans", bin: 11 },
      { item: "CAST IRON: multi-use griddle", bin: 16 },
      { item: "CAST IRON: 4 pans (S·M·L·HUGE)", bin: 16 },
      { item: "CAST IRON: 2 big skillets", bin: 16 },
      { item: "CAST IRON: 15×15\" pre-seasoned skillet 🍳 (THE giant one)", bin: 17 },
      { item: "Baking sheet", bin: 16 },
      { item: "Big batch pan with storage lid", bin: 16 },
      { item: "Microwave", bin: 8 },
      { item: "Cuisinart toaster", bin: 8 },
      { item: "3 pressure cookers", bin: "under table" },
      { item: "3 regular pans", bin: "under table" }
    ]},
    { group: "🥄 Utensils & Prep Tools", rows: [
      { item: "3–4 spatulas + 1 long “dig” one", bin: 23 },
      { item: "2 big spatulas + 2 small spatulas", bin: 23 },
      { item: "2 stainless spatulas", bin: 4 },
      { item: "2 whisks", bin: 23 },
      { item: "Stainless steel sifter (12\" × 2¾\")", bin: 12 },
      { item: "Measuring cups (¼ cup → 3-cup)", bin: 4 },
      { item: "Cheese shredder (stainless)", bin: 4 },
      { item: "Carrot peeler/shredder", bin: 4 },
      { item: "Candy scooper", bin: 4 },
      { item: "Scale ⚖️ (weigh cooking items)", bin: "4 & 23" },
      { item: "4 lip brushes", bin: 5 },
      { item: "Water strainer/colander set + 1 big", bin: 23 },
      { item: "6 spatula-type scoopers + more spatulas", bin: 23 },
      { item: "2 large tongs + tiny + small tongs", bin: 23 },
      { item: "Cake cutter", bin: 23 },
      { item: "Ice scooper", bin: 23 },
      { item: "2 mixers + 1 small mixer + mixing scraper", bin: 23 },
      { item: "Cheese shredder #2", bin: 23 },
      { item: "2 peelers", bin: 23 },
      { item: "Grill cleaner + 2 grease scrapers", bin: 23 },
      { item: "Measuring cups set #2", bin: 23 },
      { item: "8 steel serving bowls (nesting S→L)", bin: 23 },
      { item: "2 VERY large steel serving bowls (next to bin)", bin: 23 }
    ]},
    { group: "🧽 Cleaning & Scrub", rows: [
      { item: "24 kitchen sponges + 1 unopened 24-pack", bin: 4 },
      { item: "4 big yellow sponges · 12 smiley-face sponges 😊", bin: 4 },
      { item: "8-pack smiley-face sponges 😊", bin: 19 },
      { item: "2 thick blue sponges + 1 harder blue sponge", bin: 4 },
      { item: "6 stainless steel scrubbies", bin: 4 },
      { item: "2 pot scrubbers (long handle) + long brush scrubber", bin: 4 },
      { item: "Grill cleaner + 2 grease scrapers + 1 stainless scraper", bin: 4 },
      { item: "Brush set: 1 long, 3 short, 1 wooden, 1 green, 1 orange-handle", bin: 4 },
      { item: "Steam cleaner", bin: 1 },
      { item: "3 jugs Dawn Platinum soap (94 oz)", bin: 10 },
      { item: "2 Dawn Pro Plus soap (huge jugs)", bin: 9 }
    ]},
    { group: "🧻 Towels, Rags & Wipes", rows: [
      { item: "5 red & white towels", bin: 4 },
      { item: "3 big gray + 2 white + 2 blue kitchen towels", bin: 4 },
      { item: "4 heat pads + 2 heat-holding towels", bin: 4 },
      { item: "8 nice gray soft towels (Jeremy-bought)", bin: 5 },
      { item: "69 white rag towels 😂", bin: 5 },
      { item: "10 blue paper towels", bin: 7 },
      { item: "8 packs white napkins", bin: 7 },
      { item: "8 rolls paper towels", bin: 1 },
      { item: "6 rolls paper towels", bin: 3 },
      { item: "more paper towels", bin: "2, 11, 20, 21 & 26 (42 rolls!)" },
      { item: "5–6 rolls towels", bin: 8 },
      { item: "12 boxes Kleenex", bin: 2 },
      { item: "4 Lysol wipes canisters", bin: 2 },
      { item: "2 boxes baby wipes (900-ct = 18 packets)", bin: 14 }
    ]},
    { group: "🍽️ Service & Storage", rows: [
      { item: "12 full-size deep steam table pans", bin: 9 },
      { item: "2 sets half-size steam pans (30-ct)", bin: 15 },
      { item: "360-pc Kirkland Tupperware set", bin: 10 },
      { item: "2 boxes spoons (120-ct)", bin: 10 },
      { item: "2 bags bowls (135-ct)", bin: 5 },
      { item: "2 bags plates (150-ct)", bin: 5 },
      { item: "150-ct + 135-ct plates", bin: 2 },
      { item: "2 packs 225-ct paper plates", bin: 6 },
      { item: "225-ct plates + 150-ct bigger plates", bin: 10 },
      { item: "12 plastic cups", bin: 6 },
      { item: "140 colored party cups ♻️", bin: 1 },
      { item: "288 ziplock bags", bin: 2 },
      { item: "4× 60-gal + 4× 34-ct ziplocks", bin: "2 & 6" },
      { item: "4 ziplocks (open pack)", bin: 11 },
      { item: "Reynolds wrap", bin: 13 },
      { item: "2 packs Reynolds foil (150 sq ft)", bin: 15 },
      { item: "125 food scrap bags + 3-gal scrap bags", bin: 15 },
      { item: "2 boxes food scrap bags", bin: 13 },
      { item: "30-ct 55-gal trash bags", bin: 1 },
      { item: "Trash bags + scented gallon bags", bin: 13 },
      { item: "2 sheets", bin: 13 },
      { item: "1,120 napkins (4× 280-ct × 2 sets)", bin: 15 },
      { item: "2 packs Kirkland parchment non-stick paper", bin: 17 },
      { item: "4 boxes plastic food wrap (750 sq ft)", bin: 17 },
      { item: "10 packs heavy-duty Reynolds wrap", bin: 17 },
      { item: "Reynolds wrap ×2 more", bin: 15 },
      { item: "2 bags paper plates (150-ct)", bin: "18 & 19" },
      { item: "3× Glad sealing wrap", bin: 19 },
      { item: "Paper towel holder 🧻", bin: 19 },
      { item: "8 rolls Scotch tape", bin: 18 },
      { item: "20-ct 55-gal contractor bags", bin: 18 },
      { item: "255-ct paper plates", bin: 22 },
      { item: "135-ct bowls", bin: 22 },
      { item: "5 utensil boxes (900 forks/600 spoons/300 knives) 🍴", bin: 22 },
      { item: "3 bags bowls (405 total)", bin: 24 },
      { item: "2 bags plates (300 total)", bin: 24 },
      { item: "2 bags plastic cups (300) + Dixie 12-oz cups", bin: 25 },
      { item: "2 bags food storage containers (140 pcs)", bin: 25 }
    ]},
    { group: "⚡ Hydration & Fuel", rows: [
      { item: "150 electrolyte drink-mix sticks (5× 30-ct) ⚡", bin: 15 }
    ]},
    { group: "🔥 Fire, Safety & Power", rows: [
      { item: "8 long grill lighters", bin: 9 },
      { item: "2 fire blankets", bin: 9 },
      { item: "2 smoke detectors + hangers", bin: 9 },
      { item: "40 AA batteries", bin: 6 },
      { item: "2 packs AA (40-ct) + 2 packs AAA (40-ct)", bin: 10 },
      { item: "8-ct 9V batteries", bin: 10 },
      { item: "Water pump system ⚠️ (goes in bucket)", bin: 1 }
    ]}
  ],
  // Recent supply runs feeding the kitchen (from receipts)
  supply: [
    { date: "8/25", store: "Bonanza Produce Co.", total: 642.96, what: "Fresh produce: peppers, potatoes, tomatoes, tortillas, apples, bananas, strawberries, cabbage, carrots, cucumber, eggs, garlic, lemons, romaine, limes, onions, oranges" },
    { date: "8/25", store: "Walmart Reno", total: 139.32, what: "9× 5-gal propane cylinders 🔥" },
    { date: "8/24", store: "WinCo ×2 + Chef'Store + Lowe's + TA fuel", total: 4862.71, what: "Full build-week food, hydration, kitchen ops, tools, fire safety" },
    { date: "8/20", store: "Home Depot Boulder ×3", total: 2241.94, what: "Build materials, tarps, BRUTE cans, HDX totes (the bins themselves!), tools" }
  ],
  // Live updates from the kitchen crew on TG (Terri Kitchen Chat, chat -5581861596)
  // Chef Marcus 🍳 · sous chef Fernando (@dandus88) · Jeremy · Shaka → Terri hears it → boards update
  kitchenUpdates: [
    { date: "8/28", by: "Shaka", text: "Kitchen trailer arrived and is officially placed under the semi-truck shade structure — different from original plan, feels great under the shade." },
    { date: "8/28", by: "Chef Marcus", text: "Keep everything in the kitchen area — no walking around. Cooking oil, salt, garlic, seasonings to be picked up; he brings cutting boards, utensils, spatulas himself." },
    { date: "8/28", by: "Chef Marcus", text: "Cooking oil (corrected from 'cookie dough' — voice-to-text) + olive oil, sprays, seasonings secured." },
    { date: "8/28", by: "Fernando 🍳", text: "Sous chef Fernando (@dandus88) added to the kitchen chat — direct line to Terri for bin, food-location and kitchen-layout updates." }
  ]
};
