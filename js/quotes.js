var quotes = [
    "Not Found",
    "If you see this then I can't find your page",
    "D: 404 Error again...",
    "FeelsBadMan Page no comprendo"
];

var q = quotes.length;

var whichquote = Math.round(Math.random()*(q-1));
function showquote(){
    document.write(quotes[whichquote]);
}
showquote()