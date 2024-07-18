$(document).ready(function(){
    // Check if dark mode preference is saved
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        $('body').addClass('dark-mode');
        $('#darkModeToggle').prop('checked', true); // Update toggle switch state
    }

    // Handle scroll events
    $(window).scroll(function(){
        // Sticky navbar on scroll
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        
        // Show/hide scroll-up button
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // Scroll-up button click event
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        // Removing smooth scroll behavior on slide-up button click
        $('html').css('scrollBehavior', 'auto');
    });

    // Smooth scroll behavior on menu items click
    $('.navbar .menu li a').click(function(){
        $('html').css('scrollBehavior', 'smooth');
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Frontend Developer", "Student", "Footballer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Frontend Developer", "Student", "Footballer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Dark mode toggle switch
    $('#darkModeToggle').change(function() {
        $('body').toggleClass('dark-mode');
        
        // Save user preference using localStorage
        localStorage.setItem('darkMode', $(this).prop('checked'));
    });

    // Tab switching script
    $('.tab-links').click(function() {
        $('.tab-links').removeClass('active-link');
        $(this).addClass('active-link');
        var tabname = $(this).attr('onclick').split("'")[1];
        $('.tab-contents').removeClass('active-tab');
        $('#' + tabname).addClass('active-tab');
    });
});
