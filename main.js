alert("welcome Mr.Ahmed")


function changeBold() {
    $("#text").css("font-weight", "bold")
};

function changItalic() {
    $("#text").css("font-style", "italic")
};

function changeUnderlined() {
    $("#text").css("text-decoration", "underline")
};

function changeSize(event) {
    $("#text").css("font-size", event.value)
};


function changeFont(event) {
    $("#text").css("font-family",event.value)
};



