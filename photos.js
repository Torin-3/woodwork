// =====================================================================
//  YOUR GALLERY — this is the only file you need to touch to add work
// =====================================================================
//
//  PHOTOS ARE FILED BY COLLECTION, in folders sitting next to index.html:
//      Homeware/   Decorative/   Bowls/   Jewellery/
//      Each piece's photos live in the folder matching its "tag", and the site
//      works the folder out from the tag — so you only ever write the bare
//      filename below (e.g. "12.1.jpg"), never the folder.
//
//  HOW TO ADD A PHOTO to an existing piece:
//      put its -480.jpg and -960.jpg copies into the folder for that piece's
//      tag, then add the bare filename to that piece's "photos" list below.
//      (Need the -480/-960 copies made? Ask Claude, or any image resizer.)
//
//  HOW TO ADD A NEW PIECE:
//      copy any block between { ... }, paste it into the list,
//      and edit the title, note, tag, and photos.
//
//  IF YOU CHANGE A PIECE'S TAG, move its photo files into the matching
//      folder too, or those photos will 404.
//
//  The first photo in each list is used as the cover image.
//  Pieces appear on the site in the order they appear here.
//  The tag decides which category a piece lives in on the site,
//  and the first 8 pieces in this list appear in the hero deck.
// =====================================================================

// Prefix in front of every photo path. The collection folders sit right next to
// index.html, so this is empty. If you ever move them inside a parent folder,
// set this to e.g. "Photos/" — keep the trailing slash.
const PHOTO_DIR = "";

// Photos for the scrolling shelf under the hero — add, remove or reorder freely.
const STRIP_PHOTOS = ["3.2.jpg", "10.1.jpg", "5.3.jpg", "16.1.jpg", "20.1.jpg", "2.2.jpg", "13.1.jpg", "22.1.jpg", "30.1.jpg", "4.2.jpg"];

const PIECES = [
  {
    title: "Checkerboard Peg Rack",
    note: "Laminated plywood checkerboard set in a pine frame, with three turned shaker pegs.",
    tag: "Homeware",
    photos: ["1.1.jpg"],
  },
  {
    title: "Tealight & Match Block",
    note: "Two tealights on top, a hidden matchbox drawer below.",
    tag: "Homeware",
    photos: ["2.1.jpg", "2.2.jpg"],
  },
  {
    title: "Spalted Mushroom 1",
    note: "Turned from a spalted branch, keeping the natural bark edge on the cap.",
    tag: "Decorative",
    photos: ["3.1.jpg"],
  },
  {
    title: "Spalted Mushroom 2",
    note: "Turned from a spalted branch, keeping the natural bark edge on the cap.",
    tag: "Decorative",
    photos: ["3.2.jpg"],
  },
  {
    title: "Spalted Mushroom 3",
    note: "Turned from a spalted branch, keeping the natural bark edge on the cap.",
    tag: "Decorative",
    photos: ["3.3.jpg"],
  },
  {
    title: "Candlestick Holder",
    note: "Contrasting wood grain in a simple design.",
    tag: "Homeware",
    photos: ["4.1.jpg", "4.2.jpg"],
  },
  {
    title: "Ring Stand 1",
    note: "A slender turned cone with scorched-line detail.",
    tag: "Decorative",
    photos: ["5.1.jpg"],
  },
  {
    title: "Ring Stand 2",
    note: "A slender turned cone with scorched-line detail.",
    tag: "Decorative",
    photos: ["5.2.jpg"],
  },
  {
    title: "Ring Stand 3",
    note: "A slender turned cone with scorched-line detail.",
    tag: "Decorative",
    photos: ["5.3.jpg"],
  },
  {
    title: "Ring Stand 4",
    note: "A slender turned cone with scorched-line detail.",
    tag: "Decorative",
    photos: ["5.4.jpg"],
  },
  {
    title: "Ring Stand 5",
    note: "A slender turned cone with scorched-line detail.",
    tag: "Decorative",
    cover: true,
    photos: ["5.5.jpg"],
  },
  {
    title: "Knotty Bowl",
    note: "A small bowl turned from a knotty blank.",
    tag: "Bowls",
    photos: ["6.1.jpg", "6.2.jpg"],
  },
  {
    title: "Log Slice Coasters",
    note: "Live edge branch slices, hiding a steel bottle opener.",
    tag: "Homeware",
    photos: ["7.1.jpg"],
  },
  {
    title: "Stepped Bowl",
    note: "Wide bowl with a stepped rim in dark-toned hardwood.",
    tag: "Bowls",
    photos: ["8.1.jpg", "8.2.jpg"],
  },
  {
    title: "Pale Platter",
    note: "Shallow platter with a neat raised lip.",
    tag: "Bowls",
    photos: ["9.1.jpg", "9.2.jpg"],
  },
  {
    title: "Broad Bowl",
    note: "Open bowl with bold grain sweeping across the curve.",
    tag: "Bowls",
    photos: ["10.1.jpg", "10.2.jpg"],
  },
  {
    title: "Deep Bowl",
    note: "Straight-sided bowl in pale timber, plain and useful.",
    tag: "Bowls",
    photos: ["11.1.jpg", "11.2.jpg"],
  },
  {
    title: "Jewellery Stand",
    note: "Turned T-bar over a small rectangular tray for rings and chains.",
    tag: "Homeware",
    cover: true,
    photos: ["12.1.jpg", "12.2.jpg", "12.3.jpg"],
  },
  {
    title: "Nesting Bowls",
    note: "Three little bowls, each turned from a different blank.",
    tag: "Bowls",
    photos: ["13.1.jpg", "13.2.jpg"],
  },
  {
    title: "Footed Bowl",
    note: "Bowl with a clean taper down to a narrow foot.",
    tag: "Bowls",
    cover: true,
    photos: ["14.1.jpg", "14.2.jpg"],
  },
  {
    title: "Serving Tray",
    note: "Round tray with a shallow turned rim.",
    tag: "Bowls",
    photos: ["15.1.jpg", "15.2.jpg"],
  },
  {
    title: "Disc Pendant",
    note: "Pendant turned from a single disc, hung on a leather cord.",
    tag: "Jewellery",
    photos: ["16.1.jpg", "16.2.jpg", "16.3.jpg"],
  },
  {
    title: "Dark Bangle",
    note: "Rounded bangle in figured dark wood.",
    tag: "Jewellery",
    cover: true,
    photos: ["17.1.jpg", "17.2.jpg"],
  },
  {
    title: "Layered Bangle",
    note: "Laminated bangle showing its layers on edge.",
    tag: "Jewellery",
    photos: ["18.1.jpg", "18.2.jpg"],
  },
  {
    title: "Rail Rack",
    note: "Small rack built from turned rails and posts.",
    tag: "Homeware",
    photos: ["19.1.jpg", "19.2.jpg"],
  },
  {
    title: "Winged Dish",
    note: "Square dish with swept-up corners and plenty of figure.",
    tag: "Bowls",
    photos: ["20.1.jpg", "20.2.jpg"],
  },
  {
    title: "Side Table",
    note: "Simple square table with a lower shelf.",
    tag: "Homeware",
    photos: ["21.1.jpg", "21.2.jpg"],
  },
  {
    title: "Serving Board",
    note: "Board with a contrasting stripe and a turned hanging hole.",
    tag: "Homeware",
    photos: ["22.1.jpg"],
  },
  {
    title: "Coat Rack",
    note: "Wall rack with colourful turned pegs.",
    tag: "Homeware",
    photos: ["23.1.jpg", "23.2.jpg"],
  },
  {
    title: "Domed Bangle",
    note: "Chunky bangle with a soft domed profile.",
    tag: "Jewellery",
    photos: ["24.1.jpg"],
  },
  {
    title: "Wide Bangle",
    note: "Wide bangle with strong grain running around the ring.",
    tag: "Jewellery",
    photos: ["25.1.jpg"],
  },
  {
    title: "Pair of Rings",
    note: "Two rings in dark timber.",
    tag: "Jewellery",
    photos: ["26.1.jpg"],
  },
  {
    title: "Burr Ring",
    note: "Ring with a burr top on a lighter band.",
    tag: "Jewellery",
    photos: ["27.1.jpg"],
  },
  {
    title: "Grooved Ring",
    note: "Ring with a grooved band in streaked timber.",
    tag: "Jewellery",
    photos: ["28.1.jpg"],
  },
  {
    title: "Dark Ring",
    note: "Wide band ring in dark figured wood.",
    tag: "Jewellery",
    photos: ["29.1.jpg"],
  },
  {
    title: "Burr Book Stand",
    note: "Book stand in heavily figured burr.",
    tag: "Homeware",
    photos: ["30.1.jpg", "30.2.jpg", "30.3.jpg"],
  },
];
