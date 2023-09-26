$(document).ready(function() {
    setInterval(function() {
        var divText = $('#editor').html();
        $('#hiddendetail').html(divText);
    }, 100);
});

$('#star-1').click(function() {
    $('#rating').val(1);
    $('#star-1').css('opacity', '1');
    $('#star-2').css('opacity', '.5');
    $('#star-3').css('opacity', '.5');
    $('#star-4').css('opacity', '.5');
    $('#star-5').css('opacity', '.5');
});

$('#star-2').click(function() {
    $('#rating').val(2);
    $('#star-1').css('opacity', '1');
    $('#star-2').css('opacity', '1');
    $('#star-3').css('opacity', '.5');
    $('#star-4').css('opacity', '.5');
    $('#star-5').css('opacity', '.5');
});

$('#star-3').click(function() {
    $('#rating').val(3);
    $('#star-1').css('opacity', '1');
    $('#star-2').css('opacity', '1');
    $('#star-3').css('opacity', '1');
    $('#star-4').css('opacity', '.5');
    $('#star-5').css('opacity', '.5');
});

$('#star-4').click(function() {
    $('#rating').val(4);
    $('#star-1').css('opacity', '1');
    $('#star-2').css('opacity', '1');
    $('#star-3').css('opacity', '1');
    $('#star-4').css('opacity', '1');
    $('#star-5').css('opacity', '.5');
});

$('#star-5').click(function() {
    $('#rating').val(5);
    $('#star-1').css('opacity', '1');
    $('#star-2').css('opacity', '1');
    $('#star-3').css('opacity', '1');
    $('#star-4').css('opacity', '1');
    $('#star-5').css('opacity', '1');
});