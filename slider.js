var slider1 = document.getElementById("myRange1");

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
    root.style.setProperty('--box1', this.value);
    updateFromSliders();
}

var slider2 = document.getElementById("myRange2");

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
    root.style.setProperty('--box2', this.value);
    updateFromSliders();
}

var slider3 = document.getElementById("myRange3");

// Update the current slider value (each time you drag the slider handle)
slider3.oninput = function() {
    root.style.setProperty('--box3', this.value);
    updateFromSliders();
}

var slider4 = document.getElementById("myRange4");

// Update the current slider value (each time you drag the slider handle)
slider4.oninput = function() {
    root.style.setProperty('--box4', this.value);
    updateFromSliders();
}

var slider5 = document.getElementById("myRange5");

// Update the current slider value (each time you drag the slider handle)
slider5.oninput = function() {
    root.style.setProperty('--box5', this.value);
    updateFromSliders();
}