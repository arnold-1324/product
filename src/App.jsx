import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import './App.css';

const color = '#111111';

const ProductImage = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt}
      className="w-2/5 h-1/6 object-cover mx-auto mt-4"
    />
  );
};

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Herbal Tea',
      description: 'A soothing blend of natural herbs to relax your mind and body.',
      price: '₹250',
      image: 'https://www.pravek.com/cdn/shop/articles/Herbal-Tea-benfits.jpg?v=1699680718',
    },
    {
      id: 2,
      name: 'Aloe Vera Gel',
      description: 'Pure aloe vera gel for skin care and hydration.',
      price: '₹300',
      image: 'https://rukminim3.flixcart.com/image/850/1000/xif0q/moisturizer-cream/u/b/7/60-best-aloe-vera-gel-for-skin-acne-scars-dark-spots-face-hair-original-imagzcgzcfmfbukn.jpeg?q=90&crop=false',
    },
    {
      id: 3,
      name: 'Herbal Shampoo',
      description: 'Gentle shampoo with herbal extracts for healthy hair.',
      price: '₹400',
      image: 'https://manaayurvedam.com/cdn/shop/files/D566F8BD-BFBC-42A0-BACF-B8A686ED8753_1800x1800.jpg?v=1710431558',
    },
    {
      id: 4,
      name: 'Herbal Face Pack',
      description: 'Natural face pack for glowing skin.',
      price: '₹350',
      image: 'https://www.ayurvedaforher.com/wp-content/uploads/2023/06/Himalaya-Herbal-Face-Pack.jpg',
    },
    {
      id: 5,
      name: 'Herbal Oil',
      description: 'A blend of essential oils for relaxation and rejuvenation.',
      price: '₹500',
      image: 'https://cdn.shopify.com/s/files/1/0576/6028/2342/products/1_1_600x.png?v=1676447939',
    },
    {
      id: 6,
      name: 'Herbal Soap',
      description: 'Natural soap with herbal ingredients for gentle cleansing.',
      price: '₹200',
      image: 'https://www.ayurvedaforher.com/wp-content/uploads/2023/06/Himalaya-Herbal-Soap.jpg',
    },
    {
      id: 7,
      name: 'Herbal Face Wash',
      description: 'Gentle face wash with herbal extracts for clear skin.',
      price: '₹300',
      image: 'https://www.ayurvedaforher.com/wp-content/uploads/2023/06/Himalaya-Herbal-Face-Wash.jpg',
    },
    {
      id: 8,
      name: 'Herbal Body Lotion',
      description: 'Moisturizing body lotion with herbal ingredients.',
      price: '₹350',
      image: 'https://www.ayurvedaforher.com/wp-content/uploads/2023/06/Himalaya-Herbal-Body-Lotion.jpg',
    },
    {
      id: 9,
      name: 'Herbal Foot Cream',
      description: 'Nourishing foot cream with herbal extracts.',
      price: '₹400',
      image: 'https://www.ayurvedaforher.com/wp-content/uploads/2023/06/Himalaya-Herbal-Foot-Cream.jpg',
    },
    {
      id: 10,
      name: 'Herbal Lip Balm',
      description: 'Natural lip balm with herbal ingredients for soft lips.',
      price: '₹150',
      image: 'https://www.ayurvedaforher.com/wp-content/uploads/2023/06/Himalaya-Herbal-Lip-Balm.jpg',
    },
    {
      id: 11,
      name: 'Herbal Hair Oil',
      description: 'Nourishing hair oil with herbal extracts for healthy hair.',
      price: '₹450',
      image: 'https://www.ayurvedaforher.com/wp-content/uploads/2023/06/Himalaya-Herbal-Hair-Oil.jpg',
    },
    {
      id: 12,
      name: 'Herbal Sunscreen',
      description: 'Natural sunscreen with herbal ingredients for sun protection.',
      price: '₹600',
      image: 'https://www.ayurvedaforher.com/wp-content/uploads/2023/06/Himalaya-Herbal-Sunscreen.jpg',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Query submitted! An email will be sent to the owner.');
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-center mb-8">Herbal Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className="card bg-white rounded-lg shadow-md overflow-hidden">
            <>
              <ProductImage image={product.image} alt={product.name} />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-green-600 font-bold">{product.price}</p>
              </div>
            </>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-12 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Have a Query?</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" id="name" className="w-full border border-gray-300 rounded-lg p-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" id="email" className="w-full border border-gray-300 rounded-lg p-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea id="message" className="w-full border border-gray-300 rounded-lg p-2" rows="4" required></textarea>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600">
          Submit
        </button>
      </form>

      <footer className="mt-12 bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Vino Herbal. All rights reserved.</p>
        <p>Contact us: info@vinoherbal.com | +91-9876543210</p>
      </footer>
    </div>
  );
};

export default App;
