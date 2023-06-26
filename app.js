//Header toggle

let menubtn = document.getElementById('menubtn')

menubtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// typing effect
let typed = new Typed('.auto-input', {
    strings: ['College Student !', 'Aspiring Full Stack Developer !'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
  });
  
let navlinks = document.querySelectorAll('nav ul li a');

let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function () {
  const scrollPos = this.window.scrollY;
   let activeSection = this.document.querySelectorAll('home');

  sections.forEach(section => {
    if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
      activeSection = section;
    }
  });

  navlinks.forEach(link => {
    link.classList.remove('active');
    if (activeSection && activeSection.getAttribute('id') === link.getAttribute('href').substring(1)) {
      link.classList.add('active');
    }
  });
});



  