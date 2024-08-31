var quotes = [
    "Not Found",
    "If you see this then I can't find your page",
    "D: 404 Error again...",
    "FeelsBadMan this page does not exist!",
    "Magically this page disappeared!"
];

var q = quotes.length;

var whichquote = Math.round(Math.random() * (q - 1));
function showquote() {
    document.write(quotes[whichquote]);
}
showquote()