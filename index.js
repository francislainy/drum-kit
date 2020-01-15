var buttonList = document.querySelectorAll(".drum")

buttonList.forEach(element => {

    element.addEventListener("click", function () {

        element.setAttribute("style", "color: white;")

        makeSound(element.innerHTML)

        buttonAnimation(element.innerHTML)

    })
});


document.addEventListener("keydown", function (event) {

    makeSound(event.key)

    buttonAnimation(event.key)

})


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove(".pressed")
    }, 100)
}

function makeSound(key) {

    if (key === 'w') {

        var audio = new Audio("sounds/tom-1.mp3")
    }
    else if (key === 'a') {

        var audio = new Audio("sounds/tom-2.mp3")
    } else if (key === 's') {

        var audio = new Audio("sounds/tom-3.mp3")
    } else if (key === 'd') {

        var audio = new Audio("sounds/tom-4.mp3")
    } else if (key === 'j') {

        var audio = new Audio("sounds/snare.mp3")
    } else if (key === 'k') {

        var audio = new Audio("sounds/crash.mp3")
    } else if (key === 'l') {

        var audio = new Audio("sounds/kick-bass.mp3")
    }

    audio.play()

}
