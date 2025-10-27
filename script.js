
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

        document.addEventListener("DOMContentLoaded", function() {
            const skillCards = document.querySelectorAll('.skill-card, .project-card');

            const observer = new IntersectionObserver(entries => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Card enters view
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 100);
                    } else {
                        // Card leaves view
                        entry.target.classList.remove('visible');
                    }
                });
            }, {
                threshold: 0.2 // visible when 20% of the card is on screen
            });

            skillCards.forEach(card => observer.observe(card));
        });