
let tl = gsap.timeline();

tl.from("body", {
  backgroundColor: 'black',
  duration: 0.9,
   delay: 0.5,
});

tl.from(".nav-1",{
  y: -20,
  opacity: 0,
  duration: 0.7,
})

tl.from(".nav-2", {
  y: -20,
  opacity: 0,
  duration: 0.5,
});


tl.from(".content .left", {
  x: -20,
  opacity: 0,
  duration: 0.8,
});

tl.from(".content .right", {
  x: 20,
  opacity: 0,
  duration: 0.8,
});
