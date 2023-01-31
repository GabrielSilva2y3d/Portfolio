$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
        if (this.scrollY > 20) {
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    })

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["Desenvolvedor de Software", "Programador"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: ["Desenvolvedor de Software", "Programador"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('menu-btn i').toggleClass('active');
    })
})

$('.read-more-link').click(function(e) {
    e.preventDefault();
    $(this).prev().toggleClass('hidden');
});