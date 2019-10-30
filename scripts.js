function updateBadges() {
    let badges = document.getElementsByClassName("badge-light");
    badges[0].innerHTML++;
    badges[1].innerHTML--;
}

function changeHeader() {
    let helloHeader = document.getElementById("hello_header");
    helloHeader.textContent += " * "
}

function addDrinkToList() {
    let drinks = [
        "Coffee",
        "Tea",
        "Cola",
        "Sprite",
        "Water",
        "Cocoa"
    ];

    let randomIndex = Math.floor(Math.random() * drinks.length);
    addToList(drinks[randomIndex]);
}

function addToList(element) {
    let node = document.createElement("li");
    let textNode = document.createTextNode(element);
    node.appendChild(textNode);
    document.getElementById("drinks_list").appendChild(node);
}

function copyFirstElement() {
    let firstElement = document.getElementById("drinks_list").firstElementChild;
    if (firstElement != null)
        addToList(firstElement.textContent);
}

function copyLastElement() {
    let lastElement = document.getElementById("drinks_list").lastElementChild;
    if (lastElement != null)
        addToList(lastElement.textContent);
}

function onMouseOverHeader() {
    let header = document.getElementById("hello_header");
    header.style.color = getRandomColor();
}

function onMouseOutHeader() {
    let header = document.getElementById("hello_header");
    header.style.color = "black";
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function changeSmallHeadersColors() {
    let headers = document.querySelectorAll(".small_header");
    
    headers.forEach(item => {
        item.style.color = getRandomColor();
    });
}


var marginValue = 0;

/**
 * @param {int} direction (1 - left, 2 - right)
 */
function moveButton(direction) {
    let button = document.getElementById("moving_button");
    
    switch(direction) {
        case 1: {
            marginValue -= 32;
            break;
        }

        case 2: {
            marginValue += 32;
            break;
        }

        default: {
        }
    }

    button.style.marginLeft = (marginValue) + "px";
}

var opacityValue = 1.0;

/**
 * @param {int} direction (1 - up, 2 - down)
 */
function changeButtonOpacity(direction) {
    let button = document.getElementById("opacity_button");

    switch(direction) {
        case 1: {
            opacityValue -= 0.1;
            break;
        }

        case 2: {
            opacityValue += 0.1;
            break;
        }

        default: {
        }
    }

    button.style.opacity = opacityValue.toString();
}

var buttonNumber = 0;

function createButton() {
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.textContent = "Button " + buttonNumber++;
    button.style.margin = "8px";
    let defaultBackgroundColor = button.style.backgroundColor;
    button.onmouseover = function() {
        button.style.backgroundColor = getRandomColor();
    }
    button.onmouseout = function() {
        button.style.backgroundColor = defaultBackgroundColor;
    }
    let section = document.getElementById("buttons_section");
    section.appendChild(button);
}

function showAlert() {
    alert("This is alert!");
}

function showCredentials() {
    let email = document.getElementById("email_input").value;
    let password = document.getElementById("password_input").value;

    alert("Twoje dane logowania:\n" + "Email: " + email + "\n" + "Password: " + password);
}

var angle = 0;

/**
 * @param {int} direction (1 - left, 2 - right)
 */
function rotateImage(direction) {
    let image = document.getElementById("puppy_image");

    switch(direction) {
        case 1: {
            angle += 8;
            break;
        }

        case 2: {
            angle -= 8;
            break;
        }

        default: {
            angle = 0;
        }
    }

    image.style = "transform: rotate(" + angle + "deg";
}

function changeEveryButtonColor() {
    let buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = getRandomColor();
    }
}

function showToast() {
    $(".toast").toast("show");
}

function toggleSpinner() {
    let spinner = document.getElementById("spinner");
    if (spinner != null)
        spinner.hidden = !spinner.hidden;
}

var index = 0;
function changeButtonClass() {
    let classes = [
        "btn btn-primary",
        "btn btn-secondary",
        "btn btn-success",
        "btn btn-danger",
        "btn btn-warning",
        "btn btn-info",
        "btn btn-light",
        "btn btn-dark"
    ]

    let buttons = document.getElementsByTagName("button");
    let newClass = classes[++index];
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].className = newClass;
        if (index == classes.length)
            index = 0;
    }
}