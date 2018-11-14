function payRedirect() {
    var val = $('#reference-code').val();
    window.location = 'https://paym.chitkara.edu.in/mun.php?id=b%27a3JpdGkgc2hhcm1hfHNoYXJtYWtyaXRpMDE3QGdtYWlsLmNvbXwx%27'
        //window.location = 'https://paym.chitkara.edu.in/mun.php?id=' + val
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
    $('#show-register-options').on("click", function () {
        $('#sub-list-ul').toggle();
    })
    $('#show-register-options').hover(function () {
            console.log("adfad");
            $('#sub-list-ul').show();
        },
        function () {
            $('#sub-list-ul').hide();
        })

    $('#show-committee-options').on("click", function () {
        $('#sub-list-ul-1').slideToggle();
    })
    $('#show-committee-options').hover(
        function () {
            $('#sub-list-ul-1').show()
        },
        function () {
            $('#sub-list-ul-1').hide();
        }
    )
    $('#sub-list-2-opener').click(function () {
        $('#sub-list-2').slideToggle();
    })
    $('#sub-list-3-opener').click(function () {
        $('#sub-list-3').slideToggle();
    })
})
