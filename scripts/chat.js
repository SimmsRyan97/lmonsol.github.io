$(function () {
    $(document).on("submit", "#send-message-area", function () {
        var t = $.trim($("#text").val()),
            a = $.trim($("#name").val());
        "" !== t && "" !== a ? $.post("chatPost.php", {
            text: t,
            name: a
        }, function (t) {
            $("#chat-area").append(t);
            $('#text').val("");
        }) : alert("Data missing!")
    }), setInterval(function () {
        $.get("getMessages.php", function (t) {
            $("#chat-area").html(t)
        })
    }, 500)
});
