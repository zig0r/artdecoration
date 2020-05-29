const requireCategoryImage = require.context('../content/categories', true, /gallery\/[^/]+\.(jpe?g|png|svg)$/);

export const categoriesGallery = requireCategoryImage.keys().reduce((images, path) => {
  const type = path.slice(2, path.indexOf('/', 2));
  images[type] = images[type] || [];
  images[type].push(requireCategoryImage(path));
  return images;
}, {});
console.log(categoriesGallery)

const requireMainGallery = require.context('../img/mainGallery', true, /\.(jpe?g|png|svg)$/);

export const mainGallery = requireMainGallery.keys().reduce((images, path) => {
  images.push(requireMainGallery(path));
  return images;
}, []);
