function play(str) {
    let displayField = document.getElementById('display');

if (str === "q" || str ==="Q") {
    displayField.innerHTML = "Bass-Drum";
} else if (str  === "w" || str  ==="W") {
    displayField.innerHTML = "Wacky-Snare";
} else if (str  === "e" || str  ==="E") {
    displayField.innerHTML = "Clap-2";
} else if (str  === "a" || str  ==="A") {
    displayField.innerHTML = "Cymbal-1";
} else if (str  === "s" || str  ==="S") {
    displayField.innerHTML = "Hi-Hat-2";
} else if (str  === "d" || str  ==="D") {
    displayField.innerHTML = "Hip-Hop-Snare-2";
} else if (str  === "z" || str  ==="Z") {
    displayField.innerHTML = "Electro-Tom";
} else if (str  === "x" || str  ==="X") {
    displayField.innerHTML = "Cross-Sticks";
} else if (str  === "c" || str  ==="C") {
    displayField.innerHTML = "Clap-3";
}

    let audio = document.getElementById(str);
    audio.play();
}

window.document.onkeyup = function(event) {
let keyPressed = event.key
if (keyPressed  === "q" || keyPressed ==="Q") {
    play("Q");
} else if (keyPressed  === "w" || keyPressed  ==="W") {
    play("W");
} else if (keyPressed  === "e" || keyPressed  ==="E") {
    play("E");
} else if (keyPressed  === "a" || keyPressed  ==="A") {
    play("A");
} else if (keyPressed  === "s" || keyPressed  ==="S") {
    play("S");
} else if (keyPressed  === "d" || keyPressed  ==="D") {
    play("D");
} else if (keyPressed  === "z" || keyPressed  ==="Z") {
    play("Z");
} else if (keyPressed  === "x" || keyPressed  ==="X") {
    play("X");
} else if (keyPressed  === "c" || keyPressed  ==="C") {
    play("C");
}

}
