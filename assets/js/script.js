
/*//////////////////////////////////////////////
Initials Variables
*///////////////////////////////////////////////

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  ease: "slow(1.7, 1.7, false)",
  duration: 2
});


//Config for mobile to focus and scroll issue with the keyboard in the form
addEventListener("load", function () {
  var viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})
ScrollTrigger.config({ syncInterval: 999999999 });

// This allow me to use the vh vw in the script
const vw = (coef) => window.innerWidth * (coef / 100);
const vh = (coef) => window.innerHeight * (coef / 100);

//Colors
const darkRed = "#800E1F"
const red = "#F81E44"
const blue = "#020236"


/*//////////////////////////////////////////////
General Functions
*///////////////////////////////////////////////

//Function to verify the device screen, if is mobile the end is going to change the velocity of the scroll
function responsive() {
  const isMobile = window.matchMedia("(max-width: 720px)").matches;

  if (isMobile) {
    const endScreen = "bottom -750%"
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    return endScreen;
  } else {
    const endScreen = "bottom -3000%"
    return endScreen;
  }
}



// Appear with Opacity in Stagger ( one by one)
function staggerOpacity(animation, fatherClass, sonClass) {
  animation.set("." + fatherClass, { autoAlpha: 1 })
  animation.from("." + fatherClass + " " + sonClass, { autoAlpha: 0, duration: 4, stagger: 2 })
  animation.to("." + fatherClass + " " + sonClass, { autoAlpha: 1, duration: 4, stagger: 2 })
}

// Change color of the body
function changeColor(color) {
  gsap.to('body', {
    backgroundColor: color,
    duration: 2
  })
}


/*//////////////////////////////////////////////
Functions in Order
*///////////////////////////////////////////////

/*//////////////////////////////////////////////
Scrolling animations Logos
*///////////////////////////////////////////////

function initLogos() {

  var logos = gsap.timeline({ defaults: { duration: 2, delay: 1 } });

  logos
    .to(".img-logo", { autoAlpha: 1, y: 0 })
    .to(".name-logo", { autoAlpha: 1, x: 0 })
    .to(".title", { autoAlpha: 1 })
}


/*//////////////////////////////////////////////
Scrolling animations in Home section
*///////////////////////////////////////////////

function homeBackground() {

  var home = gsap.timeline({ defaults: { duration: 10 } });

  home
    .to("#particles-home , .home-section, .scroll-init", { autoAlpha: 1 })
    .to("#building-1", { autoAlpha: 1 })
    .to("#building-2", { autoAlpha: 1 })
  if (window.matchMedia("(min-width: 720px)").matches) {
    home
      .to("#building-3", { autoAlpha: 1 })
      .to("#building-4", { autoAlpha: 1 })
      .to("#building-5", { autoAlpha: 1 })
      .to("#building-6", { autoAlpha: 1 })
      .to("#building-7", { autoAlpha: 1 })
      .to("#background-buildings", { autoAlpha: 1 })
      .to("#middle-buildings", { autoAlpha: 1 })
      .to("#moon", { autoAlpha: 1 })
  }
  home
    .to(".home-section, .navbar, #particles-home, .scroll-init", { autoAlpha: 0 })

  var typed = new Typed("#text", {
    strings: ["technology", "design", "programming", "development", "education"],
    typeSpeed: 150,
    loop: true,
    loopCount: Infinity,
  });

  ScrollTrigger.create({
    animation: home,
    trigger: ".home-section",
    start: "center center",
    end: () => responsive(),
    scrub: 4,
    pin: ".home-section",
    onEnter: () => changeColor("black"),
    onLeave: () => changeColor("red"),
    onLeaveBack: () => changeColor("black"),
    onEnterBack: () => changeColor("black"),
  },
  )
}


/*//////////////////////////////////////////////
Scrolling animations in Hero section
*///////////////////////////////////////////////

function appearHero() {

  var hero = gsap.timeline({ defaults: { duration: 10 } });

  ScrollTrigger.create({
    animation: hero,
    trigger: ".hero-section",
    start: "center center",
    end: () => responsive(),
    scrub: 4,
    pin: ".hero-section",
    onEnter: () => changeColor(red),
    onLeave: () => changeColor(red),
    onLeaveBack: () => changeColor(red),
    onEnterBack: () => changeColor(red),
  },
  )

  hero
    .to(".hero-section, .scroll", { autoAlpha: 1 }, "<")
    .to("#particles-hero", { autoAlpha: 1 })
    .to(".profile", { filter: "blur(100px)", autoAlpha: 0, })
    .to(".profile", { filter: "blur(0px)", autoAlpha: 1, })
  staggerOpacity(hero, "subtitle", "p");
  hero
    .to(".profile", { filter: "blur(0px)", autoAlpha: 0.5 })
    .to(".profile", { filter: "blur(100px)", autoAlpha: 0 })
    .to(".subtitle", { autoAlpha: 0 })
    .to(".hero-section, #particles-hero", { autoAlpha: 0 })

}



/*//////////////////////////////////////////////
Scrolling animations in Skills section
*///////////////////////////////////////////////

function appearSkills() {

  var skillsAnim = gsap.timeline({ defaults: { duration: 10 } });

  ScrollTrigger.create({
    animation: skillsAnim,
    trigger: ".skills-section",
    start: "center center",
    end: () => responsive(),
    scrub: 4,
    pin: ".skills-section",
    onEnter: () => changeColor(blue),
    onLeave: () => changeColor(red),
    onLeaveBack: () => changeColor(red),
    onEnterBack: () => changeColor(blue),
  },
  )

  var skillstext = new Typed("#skills-text", {
    strings: ["A showcase of my technical skills...", "Strong proficiency in web development using technologies such as HTML5, CSS3, and JavaScript to create appealing and functional websites", "Experience in programming with multiple languages like Python and Java with the ability to develop innovative and efficient solutions", "Extensive experience in designing and managing databases, including MySQL", "Skills in using popular frameworks and libraries such as React and Bootstrap, for building modern and responsive user interfaces", "Familiarity with agile development methodologies, such as Scrum and Kanban, for efficient and collaborative web development project management", "You can download my CV for more"],
    typeSpeed: 100,
    loop: true,
  });

  skillsAnim
    .to(".skills-section", { autoAlpha: 1 }, "<")
    .to("#particles-skills", { autoAlpha: 1 })
    .to(".skills-section", { background: "linear-gradient(90deg, rgba(96, 23, 103, 1) 0%, rgba(2, 2, 54, 1) 50%)" })
    .to(".spaceship", { autoAlpha: 1 })
    .to(".spaceship", {
      keyframes: {
        scale: [3, 6, 9, 12],
      },
      duration: 20
    })
    .to(".spaceship", { rotation: 360 * 5 })
    .to(".spaceship", {
      keyframes: {
        x: [vw(25), vw(50), vw(75), vw(100)],
      },
      duration: 20
    })

  skillsAnim
    .to(".skills-title", { autoAlpha: 1, })
    .to(".skills-title", { autoAlpha: 1, }, "+=10")
    .to(".skills-title", { autoAlpha: 1, }, "+=10")
    .to(".spaceship", { x: vw(0), y: vh(-25) })
    .to(".spaceship", { rotation: 360 * 3 })
    .to(".spaceship", { scale: 9 })
    .to(".spaceship", { scale: 6 })
    .to(".spaceship", { scale: 3 })
    .to(".spaceship", { scale: 0 })
    .to(".skills-title", { autoAlpha: 0, }, "+=10")
  staggerOpacity(skillsAnim, "cards", "div");
  skillsAnim
    .to(".skills-section, #particles-skills", { autoAlpha: 0 })

}


/*//////////////////////////////////////////////
Scrolling animations in Work section
*///////////////////////////////////////////////

function appearWork() {

  var work = gsap.timeline({ defaults: { duration: 10 } });

  ScrollTrigger.create({
    animation: work,
    trigger: '.work-section',
    start: "center center",
    end: () => responsive(),
    scrub: 4,
    pin: '.work-section',
    onEnter: () => changeColor(red),
    onLeave: () => changeColor(blue),
    onLeaveBack: () => changeColor(blue),
    onEnterBack: () => changeColor(red),
  },
  )

  var worktext = new Typed("#work-text", {
    strings: ["Explore my online portfolio...", "Here you'll find a selection of my web development projects", "From dynamic web applications to responsive websites"],
    typeSpeed: 50,
    loop: true,
  });

  work
    .to(".work-section", { autoAlpha: 1, }, "<")
    .to("#particles-work", { autoAlpha: 1 })
    .to(".work-title", { autoAlpha: 1, }, "+=10")
    .to(".work-title", { autoAlpha: 1, }, "+=10")
    .to(".work-title", { autoAlpha: 0, }, "+=10")
    .to(".work-img-block, .work-text-block", { autoAlpha: 1 })
    .to("#work-block1", { y: 0 })
    .to("#work-block1", { y: 0, display: 'none' }, "+=1")
    .to("#work-block2", { y: 0, display: 'flex' })
    .from("#work-img2", { x: 200, autoAlpha: 0 }, "<")
    .to("#work-block2", { y: 0, display: 'none' }, "+=1")
    .to("#work-block3", { y: 0, display: 'flex' })
    .from("#work-img3", { x: 200, autoAlpha: 0 }, "<")
    .to(".work-section, #particles-work", { autoAlpha: 0 })

}


/*//////////////////////////////////////////////
Scrolling animations in contact section
*///////////////////////////////////////////////

function appearContact() {

  var contact = gsap.timeline({ defaults: { duration: 10 } });

  ScrollTrigger.create({
    animation: contact,
    trigger: ".contact-section",
    start: "center center",
    end: () => responsive(),
    scrub: 4,
    pin: true,
    onEnter: () => changeColor(blue),
    onLeave: () => changeColor(red),
    onLeaveBack: () => changeColor(red),
    onEnterBack: () => changeColor(blue),
  },
  )

  if (window.matchMedia("(min-width: 720px)").matches) {
    var contactText = new Typed("#form-text", {
      strings: ["Get in touch", "We can create great projects", "Do you have any question?"],
      typeSpeed: 150,
      backSpeed: 0,
      fadeOut: true,
      loop: true,
      cursorChar: '_',
    });
  }
  else {
    var contactText = new Typed("#form-text", {
      strings: ["Get in touch"],
      typeSpeed: 150,
      backSpeed: 0,
      loop: false,
      cursorChar: '_',
    });
  }

  contact
    .to(".contact-section", { autoAlpha: 1, }, "<")
    .to("#particles-contact", { autoAlpha: 1 })
    .to(".contact-form, .contact-map", { autoAlpha: 1, })
  if (window.matchMedia("(min-width: 720px)").matches) {
    contact
      .to(".contact-section", { background: "linear-gradient(90deg, rgba(96, 23, 103, 1) 0%, rgba(2, 2, 54, 1) 50%)" })
    staggerOpacity(contact, "form", ".label-box");
  }
  contact
    .to(".send-btn", { autoAlpha: 1 })
    .to(".footer-icons > p , .footer-logo", { autoAlpha: 1 })
  staggerOpacity(contact, "footer-icons", "a");
  contact
    .to(".scroll", { autoAlpha: 0 })

}


/*//////////////////////////////////////////////
Master Functionality
*///////////////////////////////////////////////

gsap.to(".preloader-container", { autoAlpha: 0 }, "+=12");
gsap.delayedCall(10, main); //Main Function will start after 10 seconds


function main() {
  initLogos()
  homeBackground()
  appearHero()
  appearSkills()
  appearWork()
  appearContact()
}

/*//////////////////////////////////////////////
Cursor Functionality
*///////////////////////////////////////////////

const cursor = document.querySelector(".cursor");
document.body.addEventListener("mousemove", ({ clientX, clientY }) => {
  cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
});
document.querySelector('.send-btn').addEventListener("mouseenter", ({ clientX, clientY }) => {
  cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
  cursor.style.backgroundColor = blue;
});
document.querySelector('.send-btn').addEventListener("mouseleave", ({ clientX, clientY }) => {
  cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
  cursor.style.backgroundColor = "rgba(255, 255, 255, .65)";
});



