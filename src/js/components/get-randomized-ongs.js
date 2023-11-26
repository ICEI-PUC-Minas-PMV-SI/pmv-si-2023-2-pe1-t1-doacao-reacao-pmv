const getRandomizedOngs = (ongs) => {
  const randomizedOngs = ongs.sort(() => Math.random() - 0.5);
  return randomizedOngs;
}