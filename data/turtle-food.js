// 🐢🥫 TURTLE FOOD — ALL FOOD SUPPLIES DATA
// Sourced from receipts (WinCo 8/24 ×2, Chef'Store 8/24, Bonanza Produce 8/25) + meal plan.
// Status key: ❄️ cooler-needed · 📦 shelf/dry · ⚠️ unassigned
// Last updated: 2026-08-26 07:15 PT · build week, night 1 on playa
const FOOD = {
  updated: "2026-08-26 07:15 PT",
  groups: [
    {
      icon: "🥩", name: "Proteins — Meat & Dairy", store: "WinCo 8/24",
      rows: [
        { item: "Ground beef 73% ×3 (D1 chili / D2 pasta / D4 tacos)", qty: "~7 lb", status: "❄️" },
        { item: "Sirloin patties ×9", qty: "9 packs", status: "❄️" },
        { item: "Bacon ×9 packs (J/Dean)", qty: "~12 lb", status: "❄️" },
        { item: "Bar S sausage ×3 + Silva linguica ×3 + Tillamook sausage ×2", qty: "8 packs", status: "❄️" },
        { item: "Boneless chicken + carne asada ×2", qty: "~5 lb", status: "❄️" },
        { item: "Rib eye steaks ×2 + NY top loin (crew treat)", qty: "3 cuts", status: "❄️" },
        { item: "Kraft American sliced cheese (2.16 lb)", qty: "1", status: "❄️" },
        { item: "Shredded cheese ×3", qty: "3 bags", status: "❄️" },
        { item: "Oikos yogurt cups ×6", qty: "6", status: "❄️" },
        { item: "Greek feta in brine (9 lb)", qty: "1 tub", status: "❄️", store: "Chef'Store" },
        { item: "Half & half ×2 (64 oz)", qty: "2", status: "❄️", store: "Chef'Store" }
      ]
    },
    {
      icon: "🥚", name: "Eggs & Breakfast", store: "Bonanza 8/25",
      rows: [
        { item: "Eggs — 15 dozen loose", qty: "15 doz", status: "❄️" },
        { item: "Coffee — Pacific Star whole bean espresso (2 lb)", qty: "1", status: "📦", store: "Chef'Store" },
        { item: "Medjool dates ×3 (24 oz)", qty: "3", status: "📦", store: "Chef'Store" }
      ]
    },
    {
      icon: "🥬", name: "Fresh Produce", store: "Bonanza Produce 8/25 ($642.96)",
      rows: [
        { item: "Bell peppers (green, 5#) ×2 bags", qty: "2", status: "❄️" },
        { item: "Red potatoes (5 lb broken lot) ×2", qty: "2", status: "📦" },
        { item: "Tomatoes (5# basket) ×3", qty: "3", status: "📦" },
        { item: "12\" flour tortillas (10/10 ct) ×2", qty: "2", status: "📦" },
        { item: "Granny Smith apples (5#)", qty: "1", status: "📦" },
        { item: "Bananas (#3 color) ×2", qty: "2", status: "📦" },
        { item: "Strawberries ×1 case", qty: "1", status: "❄️" },
        { item: "Green cabbage ×2", qty: "2", status: "📦" },
        { item: "Poly carrots jumbo (25 lb)", qty: "1", status: "📦" },
        { item: "Cucumbers (6 ct) ×2", qty: "2", status: "❄️" },
        { item: "Garlic (colossal 5#)", qty: "1", status: "📦" },
        { item: "Lemons ×2 bags", qty: "2", status: "📦" },
        { item: "Romaine lettuce ×4", qty: "4", status: "❄️" },
        { item: "Limes ×2 bags", qty: "2", status: "📦" },
        { item: "Yellow onions jumbo (50 lb)", qty: "1", status: "📦" },
        { item: "Red onions (5#) ×2", qty: "2", status: "📦" },
        { item: "Oranges ×4 bags", qty: "4", status: "📦" }
      ]
    },
    {
      icon: "🍉", name: "Fruit (WinCo 8/24)", store: "WinCo 8/24",
      rows: [
        { item: "Watermelons ×3 (~47 lb total)", qty: "3", status: "📦" },
        { item: "Strawberries (~15.7 lb)", qty: "2 flats", status: "❄️" },
        { item: "Gala apples ×3 bags", qty: "3", status: "📦" },
        { item: "Fuji apples ×3 bags", qty: "3", status: "📦" },
        { item: "Navel oranges ×4 bags (~35 lb)", qty: "4", status: "📦" },
        { item: "Green + organic cabbage ×5", qty: "5", status: "📦" },
        { item: "Iceberg lettuce", qty: "1", status: "❄️" },
        { item: "Bulk carrots (5.9 lb)", qty: "2", status: "📦" },
        { item: "Yellow onions 3# ×3", qty: "3", status: "📦" }
      ]
    },
    {
      icon: "🥫", name: "Canned, Jarred & Dry Goods", store: "WinCo 8/24",
      rows: [
        { item: "WinCo broth ×10 cases (BULK!)", qty: "10", status: "📦" },
        { item: "Ragu spaghetti sauce ×3", qty: "3", status: "📦" },
        { item: "Mt Olive pickles ×10 jars", qty: "10", status: "📦" },
        { item: "Pace picante salsa (3.86 lb)", qty: "1", status: "📦" },
        { item: "Hunts ketchup", qty: "1", status: "📦" },
        { item: "Smuckers jam ×10", qty: "10", status: "📦" },
        { item: "Jif peanut butter (17.87 lb)", qty: "1", status: "📦" },
        { item: "Amber butter pasta", qty: "1", status: "📦" },
        { item: "Tapatio hot sauce ×3", qty: "3", status: "📦" },
        { item: "Sazon + Juanantonio fiesta + McCormick seasonings", qty: "6", status: "📦" },
        { item: "WinCo vinegar ×3 + Heinz vinegar 1ga ×2", qty: "5", status: "📦" },
        { item: "Baking soda ×4 (1 lb)", qty: "4", status: "📦", store: "Chef'Store" },
        { item: "Winco buns ×4 packs + meal-prep kits ×8", qty: "12", status: "📦" },
        { item: "Blueberry fig bars + strawberry fig bars", qty: "2", status: "📦" },
        { item: "Wiley Wallaby licorice", qty: "1", status: "📦" },
        { item: "Kronos roasted garlic hummus (4 lb)", qty: "1", status: "❄️", store: "Chef'Store" },
        { item: "Kettle potato chips", qty: "1", status: "📦", store: "Chef'Store" },
        { item: "Strawberry + mango nectar juice", qty: "2", status: "📦", store: "Chef'Store" }
      ]
    },
    {
      icon: "💧", name: "Hydration & Electrolytes", store: "WinCo 8/24",
      rows: [
        { item: "Vita Coco 100% coconut water ×81 (bulk!)", qty: "81", status: "📦" },
        { item: "Electrolit ×24", qty: "24", status: "📦" },
        { item: "Powerade ×15", qty: "15", status: "📦" },
        { item: "Polar seltzer ×~16", qty: "16", status: "📦" },
        { item: "Coconut water w/ pulp ×2 (Chef'Store)", qty: "2", status: "📦" },
        { item: "Lemon + berry sparkling water", qty: "2", status: "📦" },
        { item: "ICE — 7 lb bags ×48 🧊", qty: "48", status: "❄️", note: "cooler chain!" },
        { item: "Modelo ×24 + Pacifico ×2 (D7 brat simmer)", qty: "26", status: "📦" }
      ]
    },
    {
      icon: "🍳", name: "Chef'Store Kitchen Ops (food-adjacent)", store: "Chef'Store 8/24",
      rows: [
        { item: "Aluminum foil 18\" × 500'", qty: "1 roll", status: "📦" },
        { item: "Paper towels 12-ct ×2", qty: "2", status: "📦" },
        { item: "Spray bottles ×4 + sprayers", qty: "4", status: "📦" },
        { item: "Sanitizing pails ×4 (red 6-qt)", qty: "4", status: "📦" },
        { item: "Terry towels ×4 packs", qty: "4", status: "📦" },
        { item: "Bandage dispensers ×2 (first aid)", qty: "2", status: "📦" }
      ]
    }
  ],
  notes: [
    "🧊 ICE: 48 bags bought 8/24 — cooler chain was live on arrival; remaining ice TBD",
    "⚠️ ORGANIZATION NEEDED: most food is not yet stored or in coolers — map items → coolers/bins as the kitchen gets organized",
    "🥩 All meat/dairy/produce marked ❄️ needs cooler space — priority for the ice chests + chest freezer (arrived 7/23)",
    "📋 Meal plan reference: /shared/ttc/build-week-meal-plan.md (D1–D7)"
  ]
};
