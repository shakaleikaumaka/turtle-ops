// 🐢🧰 TURTLE CHEF — MASTER TOOLS DATA
// Living list — updates flow from the bin narrations via sysadmin 🫡
// Last updated: 2026-08-26 06:45 PT · build week, night 1 on playa
const TOOLS = {
  updated: "2026-08-26 07:15 PT",
  groups: [
    {
      icon: "🔪", name: "Knives & Cutting", color: "#ff9d45",
      rows: [
        { item: "Kitchen knife set — 5 knives in the net", note: "+ turkey stick 🦃", bin: 11 },
        { item: "7\" Santoku knife", bin: 23 },
        { item: "2× 9\" offset bread knives", bin: 23 },
        { item: "6\" serrated utility knife", bin: 23 },
        { item: "8\" kitchen knife", bin: 23 },
        { item: "Small knife + 1 more knife", bin: 23 },
        { item: "7\" knife", bin: 23 },
        { item: "9\" offset knife", bin: 23 },
        { item: "8\" chef's knife", bin: 23 },
        { item: "2 tiny knives", bin: 23 },
        { item: "2 unfinished knives (9\" & 6\")", bin: 23 }
      ]
    },
    {
      icon: "🍳", name: "Cast Iron Kingdom", color: "#ffc93c",
      rows: [
        { item: "Multi-use griddle", note: "cast iron", bin: 16 },
        { item: "4 pans — small · medium · bigger · HUGE", note: "cast iron", bin: 16 },
        { item: "2 big skillets", note: "cast iron", bin: 16 },
        { item: "THE GIANT: 15×15\" pre-seasoned skillet 🍳", note: "38cm of glory", bin: 17 },
        { item: "Baking sheet", bin: 16 },
        { item: "Big batch pan with storage lid", bin: 16 }
      ]
    },
    {
      icon: "🥘", name: "Pots, Pans & Cookers", color: "#ff7a1a",
      rows: [
        { item: "Henckels pot set ✨", note: "“fancy — very smooth inside”", bin: 12 },
        { item: "Stainless / no-stick set (S·M·L pots + pans w/ tops)", bin: 12 },
        { item: "Gold-brand pots & pans", note: "hand-symbol logo 🤙", bin: 12 },
        { item: "Extra steel pots & pans", bin: 12 },
        { item: "Noodle cooker", bin: 12 },
        { item: "Ninja air fryer 🔥", note: "“an awesome thing for cooking”", bin: 11 },
        { item: "3 pots with tops / pans", bin: 11 },
        { item: "3 pressure cookers", bin: "under table" },
        { item: "3 regular pans", bin: "under table" },
        { item: "Microwave", bin: 8 },
        { item: "Cuisinart toaster", bin: 8 }
      ]
    },
    {
      icon: "🥄", name: "Utensils & Prep", color: "#ff9d45",
      rows: [
        { item: "3–4 spatulas + 1 long “dig” one", bin: 23 },
        { item: "2 big + 2 small spatulas", bin: 23 },
        { item: "2 stainless spatulas", bin: 4 },
        { item: "6 spatula-type scoopers + more spatulas", bin: 23 },
        { item: "2 whisks", bin: 23 },
        { item: "2 large tongs + tiny + small tongs", bin: 23 },
        { item: "Stainless steel sifter (12\" × 2¾\")", bin: 12 },
        { item: "Measuring cups (¼ → 3-cup)", bin: 4 },
        { item: "Measuring cups set #2", bin: 23 },
        { item: "2× cheese shredders", bin: "4 & 23" },
        { item: "Carrot peeler/shredder + 2 peelers", bin: "4 & 23" },
        { item: "Candy scooper", bin: 4 },
        { item: "Ice scooper", bin: 23 },
        { item: "Cake cutter", bin: 23 },
        { item: "2 mixers + 1 small mixer + mixing scraper", bin: 23 },
        { item: "2× scales ⚖️", note: "“weigh cooking items”", bin: "4 & 23" },
        { item: "4 lip brushes", bin: 5 },
        { item: "Water strainer/colander set + 1 big", note: "salad washing 🥗", bin: 23 },
        { item: "Dish utensil + spoon", bin: 23 }
      ]
    },
    {
      icon: "🥣", name: "Serving & Storage Vessels", color: "#ffc93c",
      rows: [
        { item: "8 steel serving bowls (nesting S→L)", bin: 23 },
        { item: "2 VERY large steel serving bowls", note: "live NEXT to the bin 😄", bin: 23 },
        { item: "360-pc Kirkland Tupperware set", bin: 10 },
        { item: "2 bags food storage containers (140 pcs)", bin: 25 },
        { item: "12 full-size deep steam table pans", note: "“fine dining for everybody” 🍽️", bin: 9 },
        { item: "2 sets half-size steam pans (30-ct)", bin: 15 }
      ]
    },
    {
      icon: "🧽", name: "Cleaning Crew", color: "#7bc96f",
      rows: [
        { item: "24 kitchen sponges + unopened 24-pack", bin: 4 },
        { item: "4 big yellow sponges", bin: 4 },
        { item: "12 + 8 smiley-face sponges 😊", bin: "4 & 19" },
        { item: "2 thick blue + 1 harder blue sponge", bin: 4 },
        { item: "6 stainless steel scrubbies", bin: 4 },
        { item: "2 pot scrubbers (long handle) + long brush", bin: 4 },
        { item: "Grill cleaner + 2 grease scrapers + stainless scraper", bin: "4 & 23" },
        { item: "Brush set (long · 3 short · wooden · green · orange)", bin: 4 },
        { item: "Steam cleaner", bin: 1 },
        { item: "3 jugs Dawn Platinum (94 oz each)", bin: 10 },
        { item: "2 Dawn Pro Plus (huge jugs)", bin: 9 }
      ]
    },
    {
      icon: "🔥", name: "Fire, Safety & Power", color: "#ff4d00",
      rows: [
        { item: "8 long grill lighters 🔥", bin: 9 },
        { item: "2 fire blankets (rapid-off)", bin: 9 },
        { item: "2 smoke detectors + hangers", bin: 9 },
        { item: "Water pump system ⚠️", note: "goes in a bucket — per Jeremy", bin: 1 },
        { item: "80× AA + 80× AAA batteries", bin: "6 & 10" },
        { item: "8× 9V batteries", bin: 10 }
      ]
    }
  ]
};
