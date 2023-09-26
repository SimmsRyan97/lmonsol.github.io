function handleDocumentLoad() {
    if (document.getElementById("backToTop") !== null) {
        var t = document.getElementById("backToTop");
        t.style.display = "none";
    }

    window.addEventListener("scroll", checkScroll);

    function checkScroll() {
        if (window.pageYOffset > 100) {
            t.style.display = "initial";
        } else {
            t.style.display = "none";
        }
    }

    t.addEventListener("click", scrollToTop);

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    t.addEventListener("mouseover", Opaque);

    function Opaque() {
        t.style.opacity = 1;
    }

    t.addEventListener("mouseout", Translucent);

    function Translucent() {
        t.style.opacity = 0.5;
    }
}

document.addEventListener("DOMContentLoaded", handleDocumentLoad);