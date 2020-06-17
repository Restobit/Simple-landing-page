let btnGetHelpAlready = $("#btn_get_help_already");
$(btnGetHelpAlready).on('click', function () {

    let formCard = $("#form-card");
    let card = $("#card");

    if (formCard.hasClass("hide")) {
        animateCSS('#card', 'fadeOutRightBig').then((message) => {
            $("#card").addClass("hide");
            if (message == "Animation ended") {
                animateCSS('#form-card', 'fadeInRightBig');
                $("#form-card").removeClass("hide");
            }
        });
    }
    else {
        animateCSS('#form-card', 'fadeOutRightBig').then((message) => {
            $("#form-card").addClass("hide");
            if (message == "Animation ended") {
                animateCSS('#card', 'fadeInRightBig');
                $("#card").removeClass("hide");
            }
        });
    }
});

$("#help").on('keyup', function () {
    const maxLenght = 50;
    $(this).prop("maxlength", maxLenght);
    let textLenght = $(this).val().length;
    let span = $(this).next();

    if (textLenght > 0) {
        $(span).empty();
        $(span).append(`${maxLenght} / ${maxLenght - textLenght}`);
    } else {
        $(span).empty();
    }
});

const animateCSS = (element, animation, prefix = 'animate__') =>
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);
        node.classList.add(`${prefix}animated`, animationName);

        function handleAnimationEnd() {
            node.classList.remove(`${prefix}animated`, animationName);
            node.removeEventListener('animationend', handleAnimationEnd);

            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd);
    });
