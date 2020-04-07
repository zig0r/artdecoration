const requireImage = require.context('../img/galleries', true, /\.(jpe?g|png|svg)$/);
export default requireImage.keys().reduce((images, path) => {
  const type = path.slice(2, path.indexOf('/', 2));
  images[type] = images[type] || [];
  images[type].push(requireImage(path));
  return images;
}, {});