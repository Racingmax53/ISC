document.addEventListener("DOMContentLoaded", () => {
    fetch("/isc/partials/header.html?v=" + Date.now())
        .then((res) => res.text())
        .then((html) => {
            document.getElementById("header").innerHTML = html;
        });

    fetch("/isc/partials/footer.html?v=" + Date.now())
        .then((res) => res.text())
        .then((html) => {
            document.getElementById("footer").innerHTML = html;
        });
});
