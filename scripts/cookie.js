function handleDocumentLoad() {
    var t = document.getElementById("cookies");
    var e = document.getElementById("cookie-button");

    function n() {
        localStorage.setItem("message", "clicked"), null !== t && (t.style.display = "none");
    }
    null === e || null !== e && e.addEventListener("click", n), "clicked" === localStorage.getItem("message") ? n() : null !== t && (t.style.display = "initial");
}
document.addEventListener("DOMContentLoaded", handleDocumentLoad);