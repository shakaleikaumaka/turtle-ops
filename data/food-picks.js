// 🐢🍕 TERRI'S TOP FOOD PICKS — BM 2026
// Same living engine as the party page (const stays PARTY on purpose).
// picks[] = timed food events {day,time,artist:What,camp,where,by,curator} · tell Terri to add finds.
// camp.address: our placement (e.g. '7:30 & E') — all distances measured from here.
// When the official BM API key lands (/shared/ttc/bm-api/KEY), food events auto-feed here.
const PARTY = {
 "updated": "2026-09-01 15:36 PT",
 "title": "Terri's Top Food Picks",
 "credit": "🍕 Feeding this board: the What Where When guide (photograph pages → Drive folder) + camp finds via Terri 🐢 + official BM API once the key lands",
 "intro": "Where the best food on playa is — live now, up later. Anyone can add a find: tell Terri in any camp chat.",
 "curators": [
  {
   "key": "camp",
   "name": "Turtle Kitchen 🐢",
   "title": "Our own kitchen",
   "tagline": "Chef Marcus & Fernando feeding the shell — campmates first",
   "kind": "timed"
  }
 ],
 "missionPicks": [],
 "days": [
  "Monday · Aug 31",
  "Tuesday · Sep 1",
  "Wednesday · Sep 2",
  "Thursday · Sep 3",
  "Friday · Sep 4",
  "Saturday · Sep 5",
  "Sunday · Sep 6",
  "Monday · Sep 7"
 ],
 "picks": [],
 "ideas": [
  {
   "title": "📖 THE MISSION: photograph the What Where When guide",
   "dream": "Everyone got the little WWW booklet at Greeters. Photograph the FOOD pages (or the whole thing) and drop the photos in the Turtle Build week Drive folder — the machine parses every page into this board: every pancake breakfast, grilled cheese, ramen night on playa, sorted by distance from 6:15 & E.",
   "needs": [
    "ONE copy of the What Where When guide from anyone in camp",
    "Phone photos of the pages → Turtle Build week Drive folder",
    "(machine does the rest — OCR, parse, distances, live board)"
   ],
   "by": "Shaka",
   "status": "HUNT IS ON"
  },
  {
   "title": "🧀 Find the legendary midnight grilled cheese",
   "dream": "Every burn has one camp flipping grilled cheese for the 2am wanderers. Scout it, pin it, share it.",
   "needs": [
    "First scout report — tell Terri where you found hot food"
   ],
   "by": "Shaka",
   "status": "scouting"
  }
 ],
 "camp": {
  "label": "Terrible Turtle Camp 🐢",
  "address": "6:15 & E"
 }
};
