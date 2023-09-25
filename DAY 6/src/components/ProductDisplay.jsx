import React from 'react';
import '../assests/css/ProductDisplay.css'; 

const productData = [
  {
    title: 'Artwork 1',
    description: 'Beautiful painting',
    price: 100,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Craft Item 1',
    description: 'Handmade craft',
    price: 50,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Artwork 1',
    description: 'Beautiful painting',
    price: 100,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Craft Item 1',
    description: 'Handmade craft',
    price: 50,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Artwork 1',
    description: 'Beautiful painting',
    price: 100,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Craft Item 1',
    description: 'Handmade craft',
    price: 50,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Artwork 1',
    description: 'Beautiful painting',
    price: 100,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Craft Item 1',
    description: 'Handmade craft',
    price: 50,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Artwork 1',
    description: 'Beautiful painting',
    price: 100,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Craft Item 1',
    description: 'Handmade craft',
    price: 50,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Artwork 1',
    description: 'Beautiful painting',
    price: 100,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Craft Item 1',
    description: 'Handmade craft',
    price: 50,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Artwork 1',
    description: 'Beautiful painting',
    price: 100,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Craft Item 1',
    description: 'Handmade craft',
    price: 50,
    imageUrl: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwYW5kJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  // Add more products here...
];

const ProductDisplay = () => {
  return (
    <div className="product-container">
      <h2>Products</h2>
      <div className="product-list">
        {productData.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
