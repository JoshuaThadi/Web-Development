function $(elid) {
    return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init() {
    cursor = $("cursor");
    cursor.style.left = "0px";
}

function n12br(txt) {
    return txt.replace(/\n/g, ''); // Replace new lines with <br>
}

function typeIt(from, e) {
    e = e || window.event;
    var w = $("typer"); // Fix reference
    var tw = from.value;

    if (!pw) {
        w.innerHTML = n12br(tw); // Ensure text updates properly
    }
}

function moveIt(count, e) {
    e = e || window.event;
    var keycode = e.keycode || e.which; // Corrected `keycode` to `keyCode`

    if(keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
        cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
}

function alert(txt) {
    console.log(txt); // Avoid overriding built-in alert function
}
