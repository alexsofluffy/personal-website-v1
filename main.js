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

// projects.html
if (location.href.split("/").slice(-1) == "projects.html") {
    var op4 = 0.01;
    var pixels2 = 100;
    document.getElementById("projContainer1").style.opacity = 0;
    document.getElementById("projContainer1").style.left = "100px";
    document.getElementById("projDescription1").style.opacity = 0;
    document.getElementById("projDescription1").style.left = "100px";
    document.getElementById("projContainer2").style.opacity = 0;
    document.getElementById("projContainer2").style.left = "100px";
    document.getElementById("projDescription2").style.opacity = 0;
    document.getElementById("projDescription2").style.left = "100px";
    document.getElementById("projContainer3").style.opacity = 0;
    document.getElementById("projContainer3").style.left = "100px";
    document.getElementById("projDescription3").style.opacity = 0;
    document.getElementById("projDescription3").style.left = "100px";

    function fadeInRight() {
        if (op4 < 1) {
            document.getElementById("projContainer1").style.opacity = op4;
            document.getElementById("projContainer1").style.left = String(pixels2) + "px";
            document.getElementById("projDescription1").style.opacity = op4;
            document.getElementById("projDescription1").style.left = String(pixels2) + "px";
            document.getElementById("projContainer2").style.opacity = op4;
            document.getElementById("projContainer2").style.left = String(pixels2) + "px";
            document.getElementById("projDescription2").style.opacity = op4;
            document.getElementById("projDescription2").style.left = String(pixels2) + "px";
            document.getElementById("projContainer3").style.opacity = op4;
            document.getElementById("projContainer3").style.left = String(pixels2) + "px";
            document.getElementById("projDescription3").style.opacity = op4;
            document.getElementById("projDescription3").style.left = String(pixels2) + "px";
            op4 += 0.01;
            pixels2 -= 1;
            setTimeout(fadeInRight, 10);
        }
    }
    setTimeout(fadeInRight, 500);
}

// contact.html
if (location.href.split("/").slice(-1) == "contact.html") {
    document.getElementById("emailContainer").style.width = "0px";
    document.getElementById("emailContainer").style.minWidth = "0px";
    var boxWidth = 0.4;
    var boxMinWidth = 4.5;

    function slideOut() {
        if (boxWidth < 40) {
            document.getElementById("emailContainer").style.width = String(boxWidth) + "%";
            document.getElementById("emailContainer").style.minWidth = String(boxMinWidth) + "px";
            boxWidth += 0.8;
            boxMinWidth += 9;
            setTimeout(slideOut, 10);
        }
    }
    setTimeout(slideOut, 50);

    document.getElementById("contactSubmit").addEventListener("click", submitContact);
    var req = new XMLHttpRequest();

    function submitContact() {
        var email = document.getElementById("emailInput").value;
        var message = document.getElementById("textInput").value;
        req.open("GET", "http://httpbin.org/get?" + "email=" + email + "&" + "message=" + message);
        req.addEventListener("load", function() {
            if (req.status >= 200 && req.status < 400) {
                var data = JSON.parse(req.responseText);
                document.getElementById("receivedInfo").textContent = "Message was sent successfully!";
                console.log(data.args);
            } else {
                console.log("Sorry, something went wrong. Please try again.");
            }
        })
        req.send(null);
        event.preventDefault();
    }
}