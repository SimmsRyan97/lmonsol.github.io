$(document).ready(function () {
    $('#fontSizeList').hide();
    $('#dropDownNotif').hide();
    $('#dropDownSettings').hide();
    $('#dropDownUser').hide();
    $('#extra').hide();
    $('#linkContainer').hide();
    $('#youtubeContainer').hide();
    $('#emojiContainer').hide();
    
    $("#settings").click(function(event){
        event.stopPropagation();
        $("#dropDownSettings").slideToggle("fast");
    });
    
    $("body:not(#settings)").click(function(){
        $("#dropDownSettings").slideUp("fast");
    });
    
    $("#user").click(function(){
        event.stopPropagation();
        $("#dropDownUser").slideToggle("fast");
    });
    
    $("body:not(#user)").click(function(){
        $("#dropDownUser").slideUp("fast");
    });
    
    $("#openExtra").click(function(){
        event.stopPropagation();
        $("#extra").slideToggle("fast");
    });
    
    $("body:not(#openExtra)").click(function(){
        $("#extra").slideUp("fast");
    });

    $('body').on('click touch', function (e) {
        
        if (e.target.id == "fontsize") {
            if ($('#fontSizeList').css('display') != 'block') {
                $('#fontSizeList').slideDown(200);
            } else {
                $('#fontSizeList').slideUp(200);
            }
        } else {
            $('#fontSizeList').slideUp(200);
        }
        
        if (e.target.id == "link" || e.target.id == "url") {
            $('#linkContainer').slideDown(200);
        } else {
            $('#linkContainer').slideUp(200);
        }
        
        if (e.target.id == "youtube" || e.target.id == "youtubeurl") {
            $('#youtubeContainer').slideDown(200);
        } else {
            $('#youtubeContainer').slideUp(200);
        }
        
        if (e.target.id == "fontcolor" || e.target.class == "sp-container") {
            if ($('.sp-container').css('display') != 'block') {
                $('.sp-container').slideDown(200);
            } else {
                $('.sp-container').slideUp(200);
            }
        } else {
            $('.sp-container').slideUp(200);
        }
        
        if (e.target.id == "emojis" || e.target.id == "emojiContainer" || e.target.parentNode.id == "emojiContainer") {
            if ($('#emojiContainer').css('display') != 'block') {
                $('#emojiContainer').slideDown(200);
            } else if (e.target.id == "emojis") {
                $('#emojiContainer').slideUp(200);
            }
        } else {
            $('#emojiContainer').slideUp(200);
        }
    });
});
