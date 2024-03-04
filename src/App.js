import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainComponent from './components/MainComponent';


const App = () => {
  const productsData = [
    {
      id: 1,
      url: '/images/product-1.png',
      name: 'Brown eggs',
      description: 'Raw organic brown eggs',
      category: 'dairy',
      price: 'Rs. 100',
      rating: 4.5
    },
    {
      id: 2,
      url: '/images/product-2.png',
      name: 'Sweet fresh stawberry',
      description: 'Sweet fresh stawberry',
      category: 'fruit',
      price: 'Rs. 150',
      rating: 4.8
    },
    {
      id: 4,
      url: "/images/orange.png",
      name: "Fresh orange",
      description: "Fresh orange juice",
      category: "fruit",
      price: "Rs.200",
      rating: 4.6
    },

    {
      id: 5,
      url: "/images/yogurt.png",
      name: "Strawberry yogurt",
      description: "Strawberry yogurt with berries",
      category: "dairy",
      price: "Rs. 300",
      rating: 4.4
    },

    {
      id: 6,
      url: "/images/product-veg1.png",
      name: "Organic tomato",
      description: "Fresh Organic tomato ",
      category: "vegetables",
      price: "Rs. 150",
      rating: 4.6
    },
    {
      id: 7,
      url: "/images/product-veg.png",
      name: "Basil",
      description: "Fresh basil leaves",
      category: "vegetables",
      price: "Rs. 100",
      rating: 4.5
    }

  ];

  return (
    <div className="App">
      <Navbar />
      <div className="App">
        <MainComponent products={productsData} />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
