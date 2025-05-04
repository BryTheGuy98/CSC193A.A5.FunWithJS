function testAlert() {
    alert("Hello, world!");
}

function bigger() {
    document.getElementById("text").style.fontSize = "2em";
}

function smaller() {
    document.getElementById("text").style.fontSize = "1em";
}

function fancy() {
    textStyle = document.getElementById("text").style;
    textStyle.fontWeight = "bold";
    textStyle.color = "blue";
    textStyle.textDecoration = "underline";
    // alert("Text is bold now!");
}

function boring() {
    textStyle = document.getElementById("text").style;
    textStyle.fontWeight = "normal";
    textStyle.color = "black";
    textStyle.textDecoration = "none";
}

function moo() {
    var str = document.getElementById("text").value.toUpperCase();
    var parts = str.split(" ");
    str = parts.join("-MOO ");
    str = str + "-MOO";
    document.getElementById("text").value = str;
}