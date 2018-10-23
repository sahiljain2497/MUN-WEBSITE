var incSize;
var decSize;

function random_rgb() {
    colors = ['8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    r = colors[Math.floor(Math.random() * 8)];
    g = colors[Math.floor(Math.random() * 8)];
    b = colors[Math.floor(Math.random() * 8)];
    return '#' + r + g + b;
};

function changeColor() {
    let color = random_rgb();
    $('.color-text').css('color', color);
}

function decreaseSize() {
    let el = document.getElementsByClassName('color-text')[0];
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    el.style.fontSize = (fontSize - 5) + 'px';
    console.log(fontSize);
    if (fontSize < 90) {
        clearInterval(decSize);
        incSize = setInterval(increaseSize, 400);
    }
}

function increaseSize() {
    let el = document.getElementsByClassName('color-text')[0];
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    el.style.fontSize = (fontSize + 5) + 'px';
    console.log(fontSize);
    if (fontSize > 110) {
        clearInterval(incSize);
        decSize = setInterval(decreaseSize, 400);
    }
}

$(document).ready(function () {
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('.tlt').textillate({ in : {
            effect: "fadeInRight",
        }
        //         ,delay: 3, loop: true
    });
    //setInterval(changeColor, 4000);
    //incSize = setInterval(increaseSize, 400);
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "WELCOME";
        }
    }, 1000);
})
