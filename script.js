
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(
            anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute
                        ('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

        // Navbar scroll effect
        window.addEventListener('scroll', () =>  {
            const navbar = document.querySelector('.navbar');
            window.scrollY > 50 ?
                navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' :
                navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        });

        document.addEventListener("DOMContentLoaded", function() {
            const toggle = document.querySelector('.nav-toggle');
            const links = document.querySelector('.nav-links');
            const linkItems = document.querySelectorAll('.nav-links a');

            toggle.addEventListener('click', () => {
                links.classList.toggle('active');
            });

            linkItems.forEach(link => {
                link.addEventListener('click', () => {
                    links.classList.remove('active');
                });
            });
        });