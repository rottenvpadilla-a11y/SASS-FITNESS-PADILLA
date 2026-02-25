var slider = tns({
  container: ".homeClass__slider",
  items: 3,
  slideBy: "page",
  autoplay: true,
  speed: 200,
  controls: false,
  navPosition: "bottom",
  responsive: {
    1250: {
      items: 3,
    },
    200: {
      items: 3,
    },
  },
});
