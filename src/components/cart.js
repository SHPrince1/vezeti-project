import React, { useState } from 'react';

const ItemList = () => {
  // Use the state hook to store the items in the cart
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Render the shopping cart
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <p key={item.id}>
            {item.name}
            {item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </p>
        ))}
      </ul>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

const ProductList = ({ addToCart }) => {
  // Use the state hook to store the list of products
  const [products] = useState([
    {
      id: 0,
      name: "Watch",
      categories: "phones",
  
      price: "N200,0000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINFzBtzD0vhxXIJieQ3-jMBgsofcBj1hqVQ&usqp=CAU",
    },
    {
      id: 1,
      name: "Bag",
      categories: "computer",
  
      price: "N10,0000",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRvRYzFF9v-9q0J98jor0bdjAlhOtZjuBfy1O2S4IzVORCWJFT-eNg98kYNL9yKeA&usqp=CAc",
    },
  
    {
      id: 2,
      name: "Acer Laptop",
      categories: "computers",
  
      price: "N50,0000",
      img: "data:image/jpeg;base64,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",
    },
  
   
  ]);

  // Render the list of products
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <p key={product.id}>
            {product.name}
            {product.price}
            {product.id}
            <br/>
            <br />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
