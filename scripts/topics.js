let maxLength = 5000;
let length = 0;
var savedSel;

$('#editor').keyup(function () {
    length = maxLength - $(this).text().length;
    if (length != 1) {
        $('#chars').text(length + " characters remaining");
    } else {
        $('#chars').text(length + " characters remaining");
    }
});

$('#cancel').click(function (event) {
    event.preventDefault();
    if ($('#editor').text().length > 0 || $('#topic').text().length > 0) {
        if (confirm('Delete draft?')) {
            window.history.back();
        }
    } else {
        window.history.back();
    }
});

$(document).ready(function () {
    setInterval(function () {
        var divText = $('#editor').html();
        $('#hiddendetail').html(divText);
    }, 100);

    document.execCommand('styleWithCSS', false, null);

    $('#bold').click(function (e) {
        e.preventDefault();
        $('#editor').focus();
        document.execCommand("bold", false, null);
    });

    $('#underline').click(function (e) {
        e.preventDefault();
        $('#editor').focus();
        document.execCommand("underline", false, null);
    });

    $('#italic').click(function (e) {
        e.preventDefault();
        $('#editor').focus();
        document.execCommand("italic", false, null);
    });

    $('#fontsize').click(function (e) {
        e.preventDefault();
    });

    $('#link').click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('#url').focus();
        }, 100);
    });

    $('#linkBtn').click(function (e) {
        e.preventDefault();
        createLink();
    });

    $('#youtube').click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('#youtubeurl').focus();
        }, 100);
    });

    $('#youtubelinkBtn').click(function (e) {
        e.preventDefault();
        var urlPrompt = $('#youtubeurl').val();
        YouTubeGetID(urlPrompt);
        iVideo();
    });

    $('#list').click(function (e) {
        e.preventDefault();
        document.execCommand('insertUnorderedList', false, null);
    });

    $('#editor').focusout(function () {
        savedSel = saveSelection();
    });

    $('#editor').on('paste', function (e) {
        let pastedData;
        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();
        // Get pasted data via clipboard API
        pastedData = e.originalEvent.clipboardData || window.clipboardData;
        pastedData = pastedData.getData('Text');
        document.execCommand('insertText', false, pastedData);
    });

    $("#spectrum").spectrum({
        showInitial: true,
        showInput: true,
        allowEmpty: true,
        className: "full-spectrum",
        showPaletteOnly: true,
        hideAfterPaletteSelect: true,
        preferredFormat: "hex",
        change: function (color) {
            $('#editor').focus();
            document.execCommand('foreColor', false, color.toHexString());
            $('.sp-container').slideUp(200);
        },
        palette: [
            ["rgb(77, 77, 77)", "rgb(153, 153, 153)", "rgb(255, 255, 255)", "rgb(244, 78, 59)", "rgb(254, 146, 0)", "rgb(252, 220, 0)", "rgb(219, 223, 0)", "rgb(164, 221, 0)", "rgb(104, 204, 202)", "rgb(115, 216, 255)", "rgb(174, 161, 255)", "rgb(253, 161, 255)",
            "rgb(51, 51, 51)", "rgb(128, 128, 128)", "rgb(204, 204, 204)", "rgb(211, 49, 21)", "rgb(226, 115, 0)", "rgb(252, 196, 0)", "rgb(176, 188, 0)", "rgb(104, 188, 0)", "rgb(22, 165, 165)", "rgb(0, 156, 224)", "rgb(123, 100, 255)", "rgb(250, 40, 255)",
            "rgb(0, 0, 0)", "rgb(102, 102, 102)", "rgb(179, 179, 179)", "rgb(159, 5, 0)", "rgb(196, 81, 0)", "rgb(251, 158, 0)", "rgb(128, 137, 0)", "rgb(25, 77, 51)", "rgb(12, 121, 125)", "rgb(0, 98, 177)", "rgb(101, 50, 148)", "rgb(171, 20, 158)"]
        ]
    });

    $('#fontcolor').click(function (e) {
        e.preventDefault();
    });

    $('#imgUpload').click(function (e) {
        e.preventDefault();
        $("#img").click();
    });

    $('#videoUpload').click(function (e) {
        e.preventDefault();
        $("#video").click();
    });

    $('#emojis').click(function (e) {
        e.preventDefault();
    });

    $('body').click(function (e) {
        if (e.target.tagName == "SPAN") {
            var html = e.target.innerHTML;
            if (e2u(html).length > 0 && e2u(html).length < 6) {
                $('#editor').focus();
                restoreSelection(savedSel);
                if (e2u(html) == '2764') {
                    document.execCommand('insertHTML', false, '&#x' + e2u(html) + '&#xFE0F');
                } else {
                    document.execCommand('insertHTML', false, '&#x' + e2u(html));
                }
            }
            length = maxLength - $('#editor').text().length;
            if (length != 1) {
                $('#chars').text(length + " characters remaining");
            } else {
                $('#chars').text("5000 characters remaining");
            }
        }
    });

    $('.sp-replacer').hide();
    $('.sp-container').hide();
    $('.sp-container').removeClass('sp-hidden');
    $('#spectrum').after($('.sp-container'));
    $('.sp-container').css('position', 'absolute');
    $('.sp-container').css('top', '50px');
    $('.sp-container').css('left', '180px');
    $('.sp-palette').css('max-width', '240px');
});

function saveSelection() {
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            var ranges = [];
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                ranges.push(sel.getRangeAt(i));
            }
            return ranges;
        }
    } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
    }
    return null;
}

function restoreSelection(savedSel) {
    if (savedSel) {
        if (window.getSelection) {
            sel = window.getSelection();
            sel.removeAllRanges();
            for (var i = 0, len = savedSel.length; i < len; ++i) {
                sel.addRange(savedSel[i]);
            }
        } else if (document.selection && savedSel.select) {
            savedSel.select();
        }
    }
}

function createLink() {
    $('#editor').focus();
    var url = document.getElementById("url").value;
    restoreSelection(savedSel);
    document.execCommand("CreateLink", false, url);
}

var ID = '';

function YouTubeGetID(url) {
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
    } else {
        ID = url;
    }
    return ID;
}

function iVideo() {
    if (ID != '') {
        $('#editor').focus();
        var embed = '<iframe title="YouTube Player" src="https://www.youtube.com/embed/' + ID + '"width="560" height="315" frameborder="0" allowfullscreen>';
        restoreSelection(savedSel);
        document.execCommand("InsertHTML", false, embed);
    }
}

function e2u(str) {
    str = str.replace(/\ufe0f|\u200d/gm, ''); // strips unicode variation selector and zero-width joiner
    var i = 0,
        c = 0,
        p = 0,
        r = [];
    while (i < str.length) {
        c = str.charCodeAt(i++);
        if (p) {
            r.push((65536 + (p - 55296 << 10) + (c - 56320)).toString(16));
            p = 0;
        } else if (55296 <= c && c <= 56319) {
            p = c;
        } else {
            r.push(c.toString(16));
        }
    }
    return r.join('-');
}
