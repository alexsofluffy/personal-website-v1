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
