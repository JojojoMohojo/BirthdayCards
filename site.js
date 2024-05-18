document.getElementById("draw").addEventListener("click", function() {
    alert("Only Matt can draw cards");
});

document.getElementById("rules").addEventListener("click", function() {
    document.getElementById("Card").classList.add("hidden");
    document.getElementById("Rules").classList.remove("hidden");
});
