import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
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
      image: 'data:image/jpeg;base64,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',
    },
    {
      id: 5,
      name: 'Herbal Oil',
      description: 'A blend of essential oils for relaxation and rejuvenation.',
      price: '₹500',
      image: 'https://farmm2home.com/wp-content/uploads/2024/09/1000027222.jpg',
    },
    {
      id: 6,
      name: 'Herbal Soap',
      description: 'Natural soap with herbal ingredients for gentle cleansing.',
      price: '₹200',
      image: 'https://media.istockphoto.com/id/517495506/photo/bars-of-homemade-soaps-honey-or-oil-and-healing-herbs.jpg?s=612x612&w=0&k=20&c=bQPtsclGfpY5yIjyRDSSSRn4wAy94O1DFsQr2aoz0K4=',
    },
    {
      id: 7,
      name: 'Herbal Face Wash',
      description: 'Gentle face wash with herbal extracts for clear skin.',
      price: '₹300',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgLIqftCT8LTjHcATMnPpD2MMcLPN9vi38g&s',
    },
    {
      id: 8,
      name: 'Herbal Body Lotion',
      description: 'Moisturizing body lotion with herbal ingredients.',
      price: '₹350',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBganZoUv54tgCmPfbHvWOESAYRDxv3hO5pA&s',
    },
    {
      id: 9,
      name: 'Herbal Foot Cream',
      description: 'Nourishing foot cream with herbal extracts.',
      price: '₹400',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-B_LR1smm7ttbcQ0kYoV0RIMZad_wro5keg&s',
    },
    {
      id: 10,
      name: 'Herbal Lip Balm',
      description: 'Natural lip balm with herbal ingredients for soft lips.',
      price: '₹150',
      image: 'https://www.ayurvikalp.com/upload/product/zoomimage/Lip%20Balm%20-%20Strawberry%20&%20Honey%20(10%20gms).jpg',
    },
    {
      id: 11,
      name: 'Herbal Hair Oil',
      description: 'Nourishing hair oil with herbal extracts for healthy hair.',
      price: '₹450',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwap8aGlDSnhkXbMfKFGax9BwU1fF5sfyIdQ&s',
    },
    {
      id: 12,
      name: 'Herbal Sunscreen',
      description: 'Natural sunscreen with herbal ingredients for sun protection.',
      price: '₹600',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5mouAmnhdO-R6N65VqMTKwHqWeqGMGOMYQ&s',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Query submitted! An email will be sent to the owner.');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-center mb-8">Herbal Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="card bg-white rounded-lg shadow-md overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProductImage image={product.image} alt={product.name} />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-600 font-bold">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="mt-12 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.form>

      <footer className="mt-12 bg-gray-100 text-gray-800 py-6 text-center rounded-lg shadow-md">
        <p className="font-semibold">&copy; 2025 Vino Herbal. All rights reserved.</p>
        <p>Contact us: <a href="mailto:info@vinoherbal.com" className="text-green-600">info@vinoherbal.com</a> | +91-9876543210</p>
      </footer>
    </div>
  );
};

export default App;
