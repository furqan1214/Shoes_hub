'use client';


import { useSearchParams } from 'next/navigation';

import Image from 'next/image';

import { useState, Suspense } from 'react';


function OrderForm() {

const searchParams = useSearchParams();

const [formData, setFormData] = useState({

name: '',

email: '',

phone: '',

address: '',

size: '',

quantity: 1

});


const productName = searchParams.get('name');

const productPrice = searchParams.get('price');

const productImage = searchParams.get('image');


const handleSubmit = (e: React.FormEvent) => {

e.preventDefault();

// Here you would typically handle the order submission

alert('Order placed successfully! This is a demo version.');

};


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

setFormData({

...formData,

[e.target.name]: e.target.value

});

};


return (

<div className="min-h-screen py-12 bg-gray-50">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="bg-white rounded-lg shadow-lg overflow-hidden">

<div className="md:flex">

{/* Product Image and Details */}

<div className="md:w-1/2 p-8 bg-gray-900">

<div className="relative h-64 md:h-96 rounded-lg overflow-hidden">

{productImage && (

<Image

src={productImage}

alt={productName || 'Product'}

fill

className="object-cover"

/>

)}

</div>

<div className="mt-6 text-white">

<h2 className="text-2xl font-bold">{productName}</h2>

<p className="text-xl mt-2">${productPrice}</p>

</div>

</div>


{/* Order Form */}

<div className="md:w-1/2 p-8">

<h3 className="text-2xl font-bold mb-6">Complete Your Order</h3>

<form onSubmit={handleSubmit} className="space-y-4">

<div>

<label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>

<input

type="text"

name="name"

value={formData.name}

onChange={handleChange}

required

className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"

/>

</div>


<div>

<label className="block text-sm font-medium text-gray-700 mb-1">Email</label>

<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

required

className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"

/>

</div>


<div>

<label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>

<input

type="tel"

name="phone"

value={formData.phone}

onChange={handleChange}

required

className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"

/>

</div>


<div>

<label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>

<textarea

name="address"

value={formData.address}

onChange={handleChange}

required

rows={3}

className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"

/>

</div>


<div className="grid grid-cols-2 gap-4">

<div>

<label className="block text-sm font-medium text-gray-700 mb-1">Size</label>

<select

name="size"

value={formData.size}

onChange={handleChange}

required

className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"

>

<option value="">Select Size</option>

<option value="6">US 6</option>

<option value="7">US 7</option>

<option value="8">US 8</option>

<option value="9">US 9</option>

<option value="10">US 10</option>

<option value="11">US 11</option>

<option value="12">US 12</option>

</select>

</div>


<div>

<label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>

<input

type="number"

name="quantity"

value={formData.quantity}

onChange={handleChange}

min="1"

max="10"

required

className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"

/>

</div>

</div>


<div className="mt-8">

<button

type="submit"

className="w-full bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transform hover:scale-105 transition-all duration-300"

>

Place Order - ${(Number(productPrice) * formData.quantity).toFixed(2)}

</button>

</div>

</form>

</div>

</div>

</div>

</div>

</div>

);

}


// Loading component

function OrderPageLoading() {

return (

<div className="min-h-screen py-12 bg-gray-50 flex items-center justify-center">

<div className="text-center">

<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>

<p className="mt-4 text-gray-600">Loading order details...</p>

</div>

</div>

);

}


export default function OrderPage() {

return (

<Suspense fallback={<OrderPageLoading />}>

<OrderForm />

</Suspense>

);

}


