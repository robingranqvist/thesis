document.addEventListener("DOMContentLoaded", () => {
  // Hero onload
  var heroTimeline = new TimelineMax();
  heroTimeline.from(
    ".hero__content-outer-wrapper",
    0.5,
    { y: "1rem", ease: Quart.easeOut },
    0
  );
  heroTimeline.from(
    ".hero__content-outer-wrapper",
    0.5,
    { opacity: 0, ease: Quart.easeOut },
    0
  );
  heroTimeline.from(
    ".hero__ill-wrapper",
    1,
    { y: "5rem", ease: Quart.easeOut },
    0
  );
  heroTimeline.from(
    ".hero__ill-wrapper",
    1,
    { opacity: 0, ease: Quart.easeOut },
    0
  );

  // Hero Dashboard animation
  const dashboardOverlay = document.querySelector(
    ".dashboard__animation-cover"
  );
  const dashboardIll = document.querySelector(".ill__dashboard");

  ScrollTrigger.create({
    trigger: dashboardOverlay,
    start: () => "top 80%",
    animation: gsap.fromTo(
      dashboardOverlay,
      { x: "0%" },
      { duration: 2, x: "100%", ease: Quart.easeOut }
    ),
    toggleActions: "play none none none",
    once: true,
  });

  ScrollTrigger.create({
    trigger: dashboardOverlay,
    start: () => "top 80%",
    animation: gsap.fromTo(
      dashboardIll,
      { y: "5rem" },
      { duration: 1.5, y: "0rem", ease: Quart.easeOut }
    ),
    toggleActions: "play none none none",
    once: true,
  });

  // Menu
  const menuBtn = $(".icon__menu-mobile");
  const menu = $(".menu__inner-wrapper");

  let menuTween = TweenLite.to(menu, 1, {
    x: 0,
    paused: true,
    reversed: true,
    ease: Quart.easeOut,
  });

  function menuSlide() {
    if (menuTween.reversed()) {
      menuTween.play();
    } else {
      menuTween.reverse();
    }
  }

  menuBtn.on("click", menuSlide);

  // Video modal
  const playBtn = $(".btn__dashboard-play");
  const heroPlayBtn = $(".btn.is--secondary.video");
  const closeBtn = $(".modal__btn-close");
  const videoModal = $(".modal__outer-wrapper");

  playBtn.click(function () {
    videoModal.css("display", "flex");
  });

  heroPlayBtn.click(function () {
    videoModal.css("display", "flex");
  });

  closeBtn.click(function () {
    videoModal.css("display", "none");
  });

  // Scroll in animation
  const elems = document.querySelectorAll(".fade-in");
  // Set starting params for sections
  elems.forEach((elem) => {
    const anim = gsap.fromTo(
      elem,
      { autoAlpha: 0, y: 50 },
      { duration: 1, autoAlpha: 1, y: 0, ease: Quart.easeOut }
    );
    ScrollTrigger.create({
      trigger: elem,
      animation: anim,
      toggleActions: "play none none none",
      once: true,
    });
  });

  // Marquee
  const marqueeWrapper = document.querySelector(".marquee__wrapper");
  const marqueeTopRow = document.querySelector(
    ".marquee__row-wrapper.is--first"
  );
  const marqueeBottomRow = document.querySelector(
    ".marquee__row-wrapper.is--second"
  );

  const r1 = gsap
    .timeline({
      scrollTrigger: {
        trigger: marqueeWrapper,
        scrub: 1,
      },
    })
    .from(marqueeTopRow, {
      x: "0%",
    });

  const r2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: marqueeWrapper,
        scrub: 1,
      },
    })
    .from(marqueeBottomRow, {
      x: "-25%",
    });
});
