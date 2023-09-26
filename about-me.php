<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Ryan Simms | About Me</title>

    <meta name="description" content="Personal website for Ryan Simms">
    <meta name="keywords" content="Ryan Simms, Stockport, Ryan, Simms, MMU, Manchester, Manchester Metropolitan University">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="ryan-simms.com">
    <meta name="twitter:title" content="Ryan Simms | About Me">
    <meta name="twitter:image" content="http://ryan-simms.com/images/logo.jpg">
    <meta name="twitter:description" content="About Me">

    <meta property="og:title" content="Ryan Simms | About Me">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://ryan-simms.com/">
    <meta property="og:site_name" content="ryan-simms.com">
    <meta property="og:image" content="http://ryan-simms.com/images/logo.jpg">
    <meta property="og:image:secure_url" content="https://ryan-simms.com/images/logo.jpg">
    <meta property="og:image:width" content="200">
    <meta property="og:image:height" content="200">
    <meta property="og:description" content="About Me">

    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

    <link id="pageStyle" rel="stylesheet" href='css/defaultStyle.css' type='text/css'>
    <script src="https://www.ryan-simms.com/scripts/jQuery.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-116160840-1" type="text/javascript"></script>
    <script type="text/javascript">
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-116160840-1');
    </script>
</head>

<body>
    <nav>
        <div class="nav-logo">
            <img src="https://ryan-simms.com/images/RSLogo(Transparent).png">
            <div class="nav-main">
                <a href="https://www.ryan-simms.com/">Home</a>
                <a href="https://www.ryan-simms.com/contact-me">Contact</a>
            </div>
        </div>
        <div class="nav-sm">
            <a href="https://www.instagram.com/simmsryan97/" target="_blank" rel="nofollow" title="Instagram"><div class="instagram"></div></a>
            <a href="https://www.linkedin.com/in/simmsryan97/" target="_blank" rel="nofollow" title="LinkedIn"><div class="linkedin"></div></a>
            <a><div id="lightSwitch"></div></a>
        </div>
    </nav>

    <div class="wrapper" style="min-height:85vh">
        <h1>Introduction</h1>
        <div id="introStart" class="imageLeft">
            <div class="image">
                <img alt="Profile Photo" title="Profile Photo" src="https://www.ryan-simms.com/images/ProfilePhoto.jpg" style="max-width:300px;">
            </div>
            <div class="content">
                <p>I graduated from <a href="https://www.mmu.ac.uk/" target="_blank" rel="nofollow">Manchester Metropolitan University (MMU)</a> in 2019 with a BSc.</p>
                <p>For several years I wanted to work in the IT sector, particularly programming. I studied ICT after finishing school and then went on to study Computer Games Technology while at university. The course involved designing video games using well-known engines such as Unity and Unreal as well as learning C++ and website design.</p>
            </div>
        </div>
        <div id="introMiddle">
            <div class="content">
                <p>During my time at university I took part in <a href="https://www.campamerica.co.uk/" target="_blank" rel="nofollow">Camp America</a>. I enjoyed being a camp counsellor, teaching programming to children and taking part in other fun activities. I lived with a host family just outside of Washington D.C. I worked at the same camp for two summers in 2017 and 2018. I received excellent feedback from parents and staff in both my summers there.</p>
            </div>
        </div>
        <div id="introEnd">
            <div class="content">
                <p>After enjoying this, I decided to pursue a career in teaching and got my first job as a supply practitioner within an early years setting. I have worked hard to acheive numerous qualifications including a Level 6 Early Years Teacher qualification.</p>
                <p>For a short period I had my own childcare business working from home, delivering high quality teaching, liaising with external agencies, social media promotion and talking to new parents as well as existing ones.</p>
                <p>Over the last few years, I've spent many hours of my personal time in the evenings and/or weekends working on projects. These projects have been tested and used by more than 100 individual users. These can be provided if requested.</p>
            </div>
        </div>
    </div>

    <div id="backToTop"></div>

    <?php
        require_once('counter/counter.php');
    
        updateCounter("About Me"); // Updates page hits
        updateInfo(); // Updates hit info
        ?>
</body>

<script src="scripts/lightSwitch.js"></script>
<script src="scripts/scrollToTop.js"></script>
<script src="scripts/dropDowns.js"></script>

</html>