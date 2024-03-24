window.addEventListener('DOMContentLoaded', event => {
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const isMenuOpen = navbarCollapsible.classList.contains('menu-open');
        const container = document.querySelector('.container');

        if (!navbarCollapsible || !container) {
            return;
        }

        if (window.scrollY === 0 && !isMenuOpen) { // Modificado para verificar si el menú está abierto
            navbarCollapsible.classList.remove('navbar-shrink');
            container.classList.remove('menu-open-bg');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            if (isMenuOpen) {
                container.classList.add('menu-open-bg');
            } else {
                container.classList.remove('menu-open-bg');
            }
        }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link')); // Using Array.from()

    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    var checkes = document.querySelector(".checkes");
    checkes.addEventListener('click', idioma);
    function idioma() {
        let id = checkes.checked; // Declared id variable
        if (id == true) {
            location.href = "es/index.html";
        } else {
            location.href = "../index.html";
        }
    }

    // Function to toggle menu-open class on menu toggle button click
    function toggleMenu() {
        const navbarResponsive = document.getElementById('navbarResponsive');
        navbarResponsive.classList.toggle('menu-open');
        navbarShrink(); // Agregado para llamar a la función para ajustar el fondo al abrir/cerrar el menú
    }

    // Add click event listener to navbar-toggler button to toggle menu-open class
    const navbarTogglerButton = document.querySelector('.navbar-toggler');
    if (navbarTogglerButton) {
        navbarTogglerButton.addEventListener('click', toggleMenu);
    }
});
