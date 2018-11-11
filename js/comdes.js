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
    $('#show-register-options').on("click", function () {
        $('#sub-list-ul').slideToggle();
    })
    $('#show-register-options').on("mouseover", function () {
        $('#sub-list-ul').slideDown();
    })
    $('#show-register-options').on("mouseleave", function () {
        $('#sub-list-ul').slideUp();
    })
    $('#show-committee-options').on("click", function () {
        $('#sub-list-ul-1').slideToggle();
    })
    $('#show-committee-options').on("mouseover", function () {
        $('#sub-list-ul-1').slideDown();
    })
    $('#show-committee-options').on("mouseleave", function () {
        $('#sub-list-ul-1').slideUp();
    })
})
