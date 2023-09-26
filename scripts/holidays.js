var date = new Date();

if (date.getDate() >= 1 && date.getDate() <= 4 && date.getMonth() + 1 == 1) {
    function titleChange() {
        newH = document.createElement("h1");
        $(newH).addClass('holiday');
        $('#sideNavHolder').prepend(newH);
        null !== document.getElementsByTagName("h1")[0] && (document.getElementsByTagName("h1")[0].innerHTML = "Happy New Year!");
    }
    document.addEventListener("DOMContentLoaded", titleChange);
} else if (31 == date.getDate() && date.getMonth() + 1 == 10) {
    function titleChange() {
        newH = document.createElement("h1");
        $(newH).addClass('holiday');
        $('#sideNavHolder').prepend(newH);
        null !== document.getElementsByTagName("h1")[0] && (document.getElementsByTagName("h1")[0].innerHTML = "Happy Halloween!");
    }
    document.addEventListener("DOMContentLoaded", titleChange);
} else if (date.getMonth() + 1 == 12) {
    function titleChange() {
        newH = document.createElement("h1");
        $(newH).addClass('holiday');
        $('#sideNavHolder').prepend(newH);
        null !== document.getElementsByTagName("h1")[0] && (document.getElementsByTagName("h1")[0].innerHTML = "Merry Christmas!");
    }
    newdiv = document.createElement("div");
    newdiv.id = "snowflakeContainer";
    newP = document.createElement("p");
    newP.className = "snowflake";
    $('body').prepend(newdiv);
    $('#snowflakeContainer').prepend(newP);
    $("#snowflakeContainer").css({
        "position": "absolute",
        "top": "0",
        "left": "0"
    });
    $(".snowflake").css({
        "font-size": "10px",
        "line-height": "24px",
        "position": "fixed",
        "color": "#FFF",
        "user-select": "none",
        "z-index": "1000"
    });
    $(".snowflake").html("•");

    // The star of every good animation
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    var transforms = ["transform",
                      "msTransform",
                      "webkitTransform",
                      "mozTransform",
                      "oTransform"];
                      
    var transformProperty = getSupportedPropertyName(transforms);
    
    var snowflakes = [];
    
    var browserWidth;
    var browserHeight;
    
    var numberOfSnowflakes = 50;
    var resetPosition = false;
    
    function setup() {
        window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
        window.addEventListener("resize", setResetFlag, false);
    }
    setup();
    
    function getSupportedPropertyName(properties) {
        for (var i = 0; i < properties.length; i++) {
            if (typeof document.body.style[properties[i]] != "undefined") {
                return properties[i];
            }
        }
        return null;
    }

    function Snowflake(element, speed, xPos, yPos) {

        // set initial snowflake properties
        this.element = element;
        this.speed = speed;
        this.xPos = xPos;
        this.yPos = yPos;

        // declare variables used for snowflake's motion
        this.counter = 0;
        this.sign = Math.random() < 0.5 ? 1 : -1;

        // setting an initial opacity and size for our snowflake
        this.element.style.opacity = .1 + Math.random();
        this.element.style.fontSize = 12 + Math.random() * 50 + "px";
    }

    Snowflake.prototype.update = function () {

        // using some trigonometry to determine our x and y position
        this.counter += this.speed / 5000;
        this.xPos += this.sign * this.speed * Math.cos(this.counter) / 40;
        this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;

        // setting our snowflake's position
        setTranslate3DTransform(this.element, Math.round(this.xPos), Math.round(this.yPos));

        // if snowflake goes below the browser window, move it back to the top
        if (this.yPos > browserHeight) {
            this.yPos = -50;
        }
    }

    function setTranslate3DTransform(element, xPosition, yPosition) {
        var val = "translate3d(" + xPosition + "px, " + yPosition + "px" + ", 0)";
        element.style[transformProperty] = val;
    }

    function generateSnowflakes() {

        // get our snowflake element from the DOM and store it
        var originalSnowflake = document.querySelector(".snowflake");

        // access our snowflake element's parent container
        var snowflakeContainer = originalSnowflake.parentNode;

        // get our browser's size
        browserWidth = document.documentElement.clientWidth;
        browserHeight = document.documentElement.clientHeight;

        // create each individual snowflake
        for (var i = 0; i < numberOfSnowflakes; i++) {

            // clone our original snowflake and add it to snowflakeContainer
            var snowflakeClone = originalSnowflake.cloneNode(true);
            snowflakeContainer.appendChild(snowflakeClone);

            // set our snowflake's initial position and related properties
            var initialXPos = getPosition(50, browserWidth);
            var initialYPos = getPosition(50, browserHeight);
            var speed = 5 + Math.random() * 40;

            // create our Snowflake object
            var snowflakeObject = new Snowflake(snowflakeClone,
                speed,
                initialXPos,
                initialYPos);
            snowflakes.push(snowflakeObject);
        }

        // remove the original snowflake because we no longer need it visible
        snowflakeContainer.removeChild(originalSnowflake);

        // call the moveSnowflakes function every 30 milliseconds
        moveSnowflakes();
    }

    function moveSnowflakes() {
        for (var i = 0; i < snowflakes.length; i++) {
            var snowflake = snowflakes[i];
            snowflake.update();
        }

        // Reset the position of all the snowflakes to a new value
        if (resetPosition) {
            browserWidth = document.documentElement.clientWidth;
            browserHeight = document.documentElement.clientHeight;

            for (var i = 0; i < snowflakes.length; i++) {
                var snowflake = snowflakes[i];

                snowflake.xPos = getPosition(50, browserWidth);
                snowflake.yPos = getPosition(50, browserHeight);
            }

            resetPosition = false;
        }

        requestAnimationFrame(moveSnowflakes);
    }

    function getPosition(offset, size) {
        return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
    }

    function setResetFlag(e) {
        resetPosition = true;
    }

    document.addEventListener("DOMContentLoaded", titleChange);
} else {
    function titleChange() {
        null != document.getElementsByTagName("h1")[0];
    }
    document.addEventListener("DOMContentLoaded", titleChange);
}
