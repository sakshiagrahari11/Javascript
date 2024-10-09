function attachEvenrListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
});
}
attachEvenrListeners();

// Deep about Event Listeners

// Closures Demo with Event Listeners

// Scope Demo with Event Listeners

// Garbage Collection & removeEventListeners