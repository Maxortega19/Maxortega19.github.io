
/*//////////////////////////////////////////////
INITIAL VARIABLES & FUNCTIONS
*///////////////////////////////////////////////

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  ease: "slow(1.7, 1.7, false)",
  duration: 4
});

// This allow me to use the vh vw in the script
const vw = (coef) => window.innerWidth * (coef / 100);
const vh = (coef) => window.innerHeight * (coef / 100);


// APPEAR with opacity FUNCTION
function staggerOpacity(animation, fatherClass, sonClass) {
  animation.set("." + fatherClass, { autoAlpha: 1 })
  animation.from("." + fatherClass + " " + sonClass, { autoAlpha: 0, duration: 4, stagger: 2 })
  animation.to("." + fatherClass + " " + sonClass, { autoAlpha: 1, duration: 4, stagger: 2 })
}


function changeColor(color) {
  gsap.to('body', {
    backgroundColor: color,
    duration: 2
  })
}


// INITAL SOCIAL ICONS FOR BACKGROUND IN A STAGGER MODE
function initSocialIcons() {
  staggerOpacity(gsap, "social-icons", "a")
}



// INITAL MAXI LOGOS FOR BACKGROUND
function initLogos() {
  var logos = gsap.timeline();
  logos
    .to(".img-logo", { duration: 2, autoAlpha: 1, y: 0 })
    .to(".footer-down", { duration: 2, autoAlpha: 1 })
    .to(".name-logo", { duration: 2, autoAlpha: 1, x: 0 })
    .to(".title", { duration: 2, autoAlpha: 1 })
}







/*//////////////////////////////////////////////
END
*///////////////////////////////////////////////


/*//////////////////////////////////////////////
PARALLAX BACKGROUND SECTION
*///////////////////////////////////////////////

function parallaxBackground() {
  var parallax = gsap.timeline();
  parallax
    .to("#building-1", { autoAlpha: 1 })
    .to("#building-2", { autoAlpha: 1 })
    .to("#building-3", { autoAlpha: 1 })
    .to("#building-4", { autoAlpha: 1 })
    .to("#building-5", { autoAlpha: 1 })
    .to("#building-6", { autoAlpha: 1 })
    .to("#building-7", { autoAlpha: 1 })
    .to("#background-buildings", { autoAlpha: 1 })
    .to("#middle-buildings", { autoAlpha: 1 })
    .to("#moon", { autoAlpha: 1 })
    .to(".parallax-section, .navbar, #particles-parallax", { autoAlpha: 0 })


  // TYPED TEXT IN BACKGROUND SECTION
  var typed = new Typed("#text", {
    strings: ["technology", "design", "programming", "development", "education"],
    typeSpeed: 150,
    loop: true,
    loopCount: Infinity,
  });



  ScrollTrigger.create({
    animation: parallax,
    trigger: ".parallax-section",
    start: "center center",
    end: "bottom -3000%",
    scrub: 4,
    pin: "main",
    onEnter: () => changeColor("black"),
    onLeave: () => changeColor("black"),
    onLeaveBack: () => changeColor("black"),
    onEnterBack: () => changeColor("black"),
  }
  )

}



/*//////////////////////////////////////////////
END
*///////////////////////////////////////////////




/*//////////////////////////////////////////////
HERO SECTION
*///////////////////////////////////////////////

function appearHero() {

  var hero = gsap.timeline();

  ScrollTrigger.create({
    animation: hero,
    trigger: ".hero-section",
    start: "center center",
    end: "bottom -3000%",
    scrub: 4,
    pin: ".hero-section",
    onEnter: () => changeColor("#F81E44"),
    onLeave: () => changeColor("#F81E44"),
    onLeaveBack: () => changeColor("#F81E44"),
    onEnterBack: () => changeColor("#F81E44"),
  },
  )

  hero
    .to(".hero-section", { autoAlpha: 1 })
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
END
*///////////////////////////////////////////////


/*//////////////////////////////////////////////
SKILLS SECTION
*///////////////////////////////////////////////

function appearSkills() {
  var skillsAnim = gsap.timeline();

  ScrollTrigger.create({
    animation: skillsAnim,
    trigger: ".skills-section",
    start: "center center",
    end: "bottom -3000%",
    scrub: 4,
    pin: ".skills-section",
    onEnter: () => changeColor("#020236"),
    onLeave: () => changeColor("#020236"),
    onLeaveBack: () => changeColor("#020236"),
    onEnterBack: () => changeColor("#020236"),
  },
  )


  var skillstext = new Typed("#skills-text", {
    strings: ["My special technical skills...", "You can download my CV for more"],
    typeSpeed: 3,
    loop: true,
  });


  skillsAnim
    .to(".skills-section", { autoAlpha: 1 })
    .to("#particles-skills", { autoAlpha: 1 })
    .to(".spaceship", { autoAlpha: 1, duration: 2, ease: "slow(0.7, 0.7, false)" })
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
  skillsAnim.to(".skills-section, #particles-skills", { autoAlpha: 0 })


}

/*//////////////////////////////////////////////
END
*///////////////////////////////////////////////


/*//////////////////////////////////////////////
WORK SECTION
*///////////////////////////////////////////////
function appearWork() {

  var work = gsap.timeline();

  ScrollTrigger.create({
    animation: work,
    trigger: '.work-section',
    start: "center center",
    scrub: 4,
    pin: true,
    end: "bottom -3000%",
    onEnter: () => changeColor("#F81E44"),
    onLeave: () => changeColor("#F81E44"),
    onLeaveBack: () => changeColor("#F81E44"),
    onEnterBack: () => changeColor("#F81E44"),
  },
  )

  var worktext = new Typed("#work-text", {
    strings: ["Here are some of my works...", "They are developed with a lot of effort!"],
    typeSpeed: 3,
    loop: true,
  });



  work
    .to(".work-section", { autoAlpha: 1, })
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


  // '<' symbole means start at the same time as the previous tween, no matter if you change the duration.

}

/*//////////////////////////////////////////////
END
*///////////////////////////////////////////////


/*//////////////////////////////////////////////
CONTACT
*///////////////////////////////////////////////

function appearContact() {
  var contact = gsap.timeline();

  ScrollTrigger.create({
    animation: contact,
    trigger: ".contact-section",
    start: "center center",
    end: "bottom -3000%",
    scrub: 4,
    pin: ".contact-section",
    onEnter: () => changeColor("#020236"),
    onLeave: () => changeColor("#020236"),
    onLeaveBack: () => changeColor("#020236"),
    onEnterBack: () => changeColor("#020236"),
  },
  )

  // TYPED TEXT IN BACKGROUND SECTION
  var contactText = new Typed("#form-text", {
    strings: ["Get in touch", "We can create great projects", "Do you have any question?"],
    typeSpeed: 150,
    backSpeed: 0,
    fadeOut: true,
    loop: true,
    cursorChar: '_',
  });


  contact
    .to(".contact-section", { autoAlpha: 1, })
    .to("#particles-contact", { autoAlpha: 1 })
    .to(".contact-form, .contact-map", { autoAlpha: 1, })
  staggerOpacity(contact, "form", "input");
  contact
    .to(".footer-down", { display: "none" })
    .to(".footer-up", { autoAlpha: 1, })
    .to(".send-btn", { autoAlpha: 1, })


}




/*//////////////////////////////////////////////
END
*///////////////////////////////////////////////


/*//////////////////////////////////////////////
MASTER FUNCTIONALITY
*///////////////////////////////////////////////

initLogos()
initSocialIcons()
parallaxBackground()
appearHero()
appearSkills()
appearWork()
appearContact()








