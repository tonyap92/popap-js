let modal = document.querySelector('.m-modal');
let content = document.querySelector('.m-modal__content');
let info = document.querySelector('.m-modal__info');

// Когда пользователь кликает кнопку, открываем модальное окно.
document.querySelector(".m-btn").onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь кликает 'x', закрываем первое модальное окно.
document.querySelectorAll(".m-close")[0].onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь кликает 'x', закрываем второе модальное окно.
document.querySelectorAll(".m-close")[1].onclick = function() {
    modal.style.display = "none";
    info.style.display = "none";
    content.style.display = "block";
}


// Когда пользователь щелкает 'Esc', закрываем модальное окно.
document.onkeyup = function(event) {
    if (event.keyCode === 27) {
        modal.style.display = "none";
    }
}

// Когда пользователь кликает по затемненному участку, закрываем модальное окно.
document.querySelector(".m-modal__bg").onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закрываем его.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Когда пользователь кликает кнопку m-rule, открываем второе модальное окно.
document.querySelector(".m-rule").onclick = function() {
    info.style.display = "block";
    content.style.display = "none";
}

// Когда пользователь кликает кнопку m-back, возвращаем к первому модальному окно.
document.querySelector(".m-back").onclick = function() {
    content.style.display = "block";
    info.style.display = "none";
}