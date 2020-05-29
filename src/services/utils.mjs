export function indexTree(items, field = 'id', parent = null) {
  const index = {};

  items.forEach((item) => {
    index[item[field]] = item;
    item.parent = parent;

    if (item.children) {
      const children = indexTree(item.children, field, item);
      Object.assign(index, children);
    }
  });

  return index;
}
