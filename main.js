const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'ri-sun-line';
    } else {
        themeIcon.className = 'ri-moon-line';
    }
}

updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    

    body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        body.style.transition = '';
    }, 300);
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navLinks.classList.remove("open");
            menuBtnIcon.setAttribute("class", "ri-menu-line");
        }
    });
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentTheme = body.getAttribute('data-theme');
    
    if (window.scrollY > 100) {
        if (currentTheme === 'dark') {
            nav.style.background = 'rgba(31, 41, 55, 0.98)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
        }
    } else {
        if (currentTheme === 'dark') {
            nav.style.background = 'rgba(31, 41, 55, 0.95)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature__card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', function() {

    const loginBtn = document.querySelector('.login__btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('Login functionality would be implemented here');
        });
    }

    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-get-started');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (btn.textContent.includes('Create Your Resume') || btn.textContent.includes('Get Started')) {
                alert('Resume builder would launch here');
            }
        });
    });
});

const animateStats = () => {
    const stats = document.querySelectorAll('.stat__number');
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        const isNumber = /^\d+/.test(finalValue);
        
        if (isNumber) {
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));
            const suffix = finalValue.replace(/[\d,]/g, '');
            let currentValue = 0;
            const increment = numericValue / 100;
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    stat.textContent = finalValue;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(currentValue).toLocaleString() + suffix;
                }
            }, 20);
        }
    });
};

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

const handleNavTheme = () => {
    const nav = document.querySelector('nav');
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        nav.style.background = 'rgba(31, 41, 55, 0.95)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
};

themeToggle.addEventListener('click', () => {
    setTimeout(handleNavTheme, 100);
});


document.querySelectorAll(".faq__question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach((item) => {
      if (item !== button.parentElement) {
        item.classList.remove("open");
      }
    });
    button.parentElement.classList.toggle("open");
  });
});

