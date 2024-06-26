anime({
  targets: "h1",
  translateX: [-80, 0],
  easing: "easeInOutQuad",
  opacity: [0, 1],
});

anime({
  targets: "h3",
  translateX: [-80, 0],
  delay: 400,
  easing: "easeInOutQuad",
  opacity: [0, 1],
});

anime({
  targets: "h5",
  translateX: [-80, 0],
  delay: 200,
  easing: "easeInOutQuad",
  opacity: [0, 1],
});


anime({
    targets: ".arrow",
    translateY: [-30, 0],
    duration: 1000,
    opacity: [0, 1]
})

anime({
  targets: ".line-right",
  rotate: "-28deg",
  duration: 10,
  delay: 800,
  endDelay: 800,
});

anime({
  targets: ".line-left",
  rotate: "28deg",
  duration: 10,
  delay: 800,
  endDelay: 800,
});
