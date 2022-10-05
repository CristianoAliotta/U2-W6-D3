let corals = [
  "https://thumbs.dreamstime.com/b/euphyllia-hammer-lps-coral-ancora-%C3%A8-una-specie-di-corallo-duro-della-famiglia-euphylliidae-nota-con-diversi-nomi-comuni-tra-cui-178495810.jpg",
  "https://reefbuilders.com/wp-content/blogs.dir/1/files/2020/09/lps-coral-mystery-single.jpg",
  "https://cdn.shopify.com/s/files/1/0109/8963/3636/products/dragon-soul-torch-torch-reef-lounge-usa-590335_600x.jpg",
  "https://img.myloview.com/posters/purple-euphyllia-octospawn-lps-coral-euphyllia-divisa-700-184455359.jpg",
  "https://shop.coralbaysrl.it/wp-content/uploads/2018/03/204560.jpg",
];
function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function dCorals() {
  let randomIndex = getRandomInteger(0, corals.length - 1);
  let Link = corals[randomIndex];
  document.getElementById("random-coral").href = Link;
}
