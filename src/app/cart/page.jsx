'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: 25.99,
      quantity: 2,
      image: "/medicine1.jpg"
    },
    {
      id: 2, 
      name: "Vitamin C 1000mg",
      price: 149.99,
      quantity: 1,
      image: "/medicine2.jpg"
    }
  ])

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center border-b py-4">
              <div className="w-24 h-24 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              
              <div className="flex-1 ml-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
                
                <div className="flex items-center mt-2">
                  <button 
                    className="px-2 py-1 border rounded"
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  >
                    -
                  </button>
                  <span className="mx-4">{item.quantity}</span>
                  <button 
                    className="px-2 py-1 border rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button 
                    className="ml-6 text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>₹40.00</span>
              </div>
              <div className="border-t pt-3 font-semibold">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>₹{(calculateTotal() + 40).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg mt-6 hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
