// index.html
if (location.href.split("/").slice(-1) == "index.html") {
    var typeWriterCount = 0;
    var typeWriterCount2 = 0;
    function typeWriter() {
        let text = "Quisque quis sapien,";
        if (typeWriterCount < text.length) {
            document.getElementById("introText").innerHTML += text[typeWriterCount];
            typeWriterCount++;
            setTimeout(typeWriter, 100);
        }
    }
    function typeWriter2() {
        let text = "Phasellus leo nulla.";
        if (typeWriterCount2 < text.length) {
            document.getElementById("introText2").innerHTML += text[typeWriterCount2];
            typeWriterCount2++;
            setTimeout(typeWriter2, 75);
        }
    }
    setTimeout(typeWriter, 1000);
    setTimeout(typeWriter2, 4000);
}

// about.html
if (location.href.split("/").slice(-1) == "about.html") {
    var op = 0;
    var op2 = 0;
    document.getElementById("aboutImgContainer").style.opacity = 0;
    function fadeInAboutImg() {
        if (op < 1) {
            document.getElementById("aboutImgContainer").style.opacity = op;
            op += 0.01;
            setTimeout(fadeInAboutImg, 10);
        }
    }
    document.getElementById("aboutTxtContainer").style.opacity = 0;
    function fadeInAboutTxt() {
        if (op2 < 1) {
            document.getElementById("aboutTxtContainer").style.opacity = op2;
            op2 += 0.01;
            setTimeout(fadeInAboutTxt, 10);
        }
    }
    setTimeout(fadeInAboutImg, 750);
    setTimeout(fadeInAboutTxt, 1500);
}

// experience.html
if (location.href.split("/").slice(-1) == "experience.html") {
    var op3 = 0.01;
    var pixels = 100;
    document.getElementById("expContainer1").style.opacity = 0;
    document.getElementById("expContainer1").style.top = "100px";
    document.getElementById("expDescription1").style.opacity = 0;
    document.getElementById("expDescription1").style.top = "100px";
    document.getElementById("expContainer2").style.opacity = 0;
    document.getElementById("expContainer2").style.top = "100px";
    document.getElementById("expDescription2").style.opacity = 0;
    document.getElementById("expDescription2").style.top = "100px";
    document.getElementById("expContainer3").style.opacity = 0;
    document.getElementById("expContainer3").style.top = "100px";
    document.getElementById("expDescription3").style.opacity = 0;
    document.getElementById("expDescription3").style.top = "100px";

    function fadeInBot() {
        if (op3 < 1) {
            document.getElementById("expContainer1").style.opacity = op3;
            document.getElementById("expContainer1").style.top = String(pixels) + "px";
            document.getElementById("expDescription1").style.opacity = op3;
            document.getElementById("expDescription1").style.top = String(pixels) + "px";
            document.getElementById("expContainer2").style.opacity = op3;
            document.getElementById("expContainer2").style.top = String(pixels) + "px";
            document.getElementById("expDescription2").style.opacity = op3;
            document.getElementById("expDescription2").style.top = String(pixels) + "px";
            document.getElementById("expContainer3").style.opacity = op3;
            document.getElementById("expContainer3").style.top = String(pixels) + "px";
            document.getElementById("expDescription3").style.opacity = op3;
            document.getElementById("expDescription3").style.top = String(pixels) + "px";
            op3 += 0.01;
            pixels -= 1;
            setTimeout(fadeInBot, 10);
        }
    }





    setTimeout(fadeInBot, 500);
}