document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.getElementById('nav-bar');
    const navLinks = document.querySelectorAll('.nav-link a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { 
            navBar.style.backgroundColor = '#36454F';
            navLinks.forEach(link => link.style.color = 'white');
        } else {
            navBar.style.backgroundColor = 'transparent';
            navLinks.forEach(link => link.style.color = 'black');
        }
    });
});
