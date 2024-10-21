const sampleProducts = Array.from({ length: 100000 }, (_, index) => {
  const categories = ['smartphones', 'laptops', 'headphones', 'tablets', 'watches'];
  const brands = ['Apple', 'Samsung', 'Sony', 'Dell', 'HP', 'Lenovo', 'Xiaomi', 'Huawei', 'Google', 'Microsoft'];

  return {
      id: index + 1,
      name: `${brands[Math.floor(Math.random() * brands.length)]} Product ${index + 1}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      price: Math.floor(Math.random() * (2000 - 100 + 1)) + 100, // Random price between $100 and $2000
      brand: brands[Math.floor(Math.random() * brands.length)],
  };
});

export default sampleProducts;
