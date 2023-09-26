function handleDocumentLoad() {
    var e = document.getElementById("pmessage"),
        n = document.getElementById("emessage"),
        t = document.getElementById("register");

    function d() {
        document.getElementById("password_one").value == document.getElementById("password_confirm").value ? (e.innerHTML = "", t.disabled = !1) : (e.style.color = "red", e.innerHTML = "Passwords Not Matching", t.disabled = !0)
    }

    function m() {
        document.getElementById("email").value == document.getElementById("email_confirm").value ? (n.innerHTML = "", t.disabled = !1) : (n.style.color = "red", n.innerHTML = "Emails Not Matching", t.disabled = !0)
    }
    document.getElementById("password_one").addEventListener("keyup", d), document.getElementById("password_confirm").addEventListener("keyup", d), null !== document.getElementById("email") && document.getElementById("email").addEventListener("keyup", m), null !== document.getElementById("email_confirm") && document.getElementById("email_confirm").addEventListener("keyup", m)
}
document.addEventListener("DOMContentLoaded", handleDocumentLoad);