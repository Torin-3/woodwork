// =====================================================================
//  YOUR GALLERY — this is the only file you need to touch to add work
// =====================================================================
//
//  HOW TO ADD A PHOTO to an existing piece:
//      drop the .jpg in the Photos folder, then add its filename
//      to that piece's "photos" list below.
//
//  HOW TO ADD A NEW PIECE:
//      copy any block between { ... }, paste it into the list,
//      and edit the title, note, tag, and photos.
//
//  The first photo in each list is used as the cover image.
//  Pieces appear on the site in the order they appear here.
// =====================================================================

// Folder where the photos live, relative to index.html.
// Keep the trailing slash. If photos ever sit next to index.html, set this to "".
const PHOTO_DIR = "Photos/";

// Photos for the scrolling shelf under the hero — add, remove or reorder freely.
const STRIP_PHOTOS = ["3.2.jpg", "5.3.jpg", "2.2.jpg", "4.2.jpg", "6.2.jpg", "5.5.jpg", "3.3.jpg", "5.2.jpg"];

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
    title: "Spalted Mushroom",
    note: "Turned from a spalted branch, keeping the natural bark edge on the cap.",
    tag: "Turned",
    photos: ["3.1.jpg", "3.2.jpg", "3.3.jpg"],
  },
  {
    title: "Candlestick Holder",
    note: "Contrasting wood grain in a simple design.",
    tag: "Homeware",
    photos: ["4.1.jpg", "4.2.jpg"],
  },
  {
    title: "Ring Stand",
    note: "A slender turned cone with scorched-line detail.",
    tag: "Turned",
    photos: ["5.1.jpg", "5.2.jpg", "5.3.jpg", "5.4.jpg", "5.5.jpg"],
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
];
