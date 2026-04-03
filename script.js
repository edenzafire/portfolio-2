$(document).ready(function(){
    $(window).scroll(function(){
        // Navbar sticky logic
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Show/hide scroll-up button
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation
    var typed = new Typed(".typing", {
        strings: ["Pentester", "OSINT Analyst", "Security Researcher", "Linux Enthusiast", "C++ Learner"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Zafire Daniel", "Nikolay", "Student", "Blue Team Hacker"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });

    // Owl carousel (Laboratórios)
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 3000,
        autoplayHoverPause: true,
        responsive: {
            0:{ items: 1, nav: false },
            600:{ items: 2, nav: false },
            1000:{ items: 3, nav: false }
        }
    });
});