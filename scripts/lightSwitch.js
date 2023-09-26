$('#lightSwitch').on('click', function () {
    var text = $(this).text();
    if (text == 'Turn Lights Off') {
        darkmode();
    } else {
        lightmode();
    }
});

function darkmode() {
    //Main
    $('body').addClass('dark');
    $('nav').addClass('dark');
    $('.nav-sm').addClass('dark');
    $('a').addClass('dark');
    $('#cookies').addClass('dark');
    $('#mainContent').addClass('dark');
    $('.wrapper').addClass('dark');
    //Snowdon View
    $('#calendar').children().addClass('dark');
    //Forum
    $('#fontSizeList').addClass('dark');
    $('#linkContainer').addClass('dark');
    $('#youtubeContainer').addClass('dark');
    $('#emojiContainer').addClass('dark');
    $('.navIcon').addClass('dark');
    $('.question').addClass('dark');
    $('.answer').addClass('dark');
    $('button').addClass('dark');
    $('.dropDown').addClass('dark');
    $('#discordLight').hide();
    $('#discordDark').show();
    
    localStorage.setItem("lights", "dark");
    
    $('#lightSwitch').text("Turn Lights On");
}
    
function lightmode() {
    //Main
    $('body').removeClass('dark');
    $('nav').removeClass('dark');
    $('.nav-sm').removeClass('dark');
    $('a').removeClass('dark');
    $('#cookies').removeClass('dark');
    $('#mainContent').removeClass('dark');
    $('.wrapper').removeClass('dark');
    //Snowdon View
    $('#calendar').children().removeClass('dark');
    //Forum
    $('#fontSizeList').removeClass('dark');
    $('#linkContainer').removeClass('dark');
    $('#youtubeContainer').removeClass('dark');
    $('#emojiContainer').removeClass('dark');
    $('.navIcon').removeClass('dark');
    $('.question').removeClass('dark');
    $('.answer').removeClass('dark');
    $('button').removeClass('dark');
    $('.dropDown').removeClass('dark');
    $('#discordLight').show();
    $('#discordDark').hide();

    localStorage.setItem("lights", "light");
    
    $('#lightSwitch').text("Turn Lights Off");
}

if(localStorage.getItem("lights") == "dark") {
    darkmode();
} else {
    lightmode();
}