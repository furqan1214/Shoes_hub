'use client';


import { useState } from 'react';

import ProductGrid from '@/components/ProductGrid';


const allProducts = [

{ 

id: 1, 

name: 'Classic Leather Oxford', 

price: 129.99, 

category: 'men',

imageUrl: '/images/mens-oxford.jpg'

},

{ 

id: 2, 

name: 'Sports Running Shoes', 

price: 89.99, 

category: 'men',

imageUrl: '/images/mens-running.jpg'

},

{ 

id: 3, 

name: 'Casual Sneakers', 

price: 79.99, 

category: 'men',

imageUrl: '/images/mens-sneakers.jpg'

},

{ 

id: 4, 

name: 'Business Loafers', 

price: 149.99, 

category: 'men',

imageUrl: '/images/mens-loafers.jpg'

},


// Women's Collection

{ 

id: 5, 

name: 'Elegant High Heels', 

price: 119.99, 

category: 'women',

imageUrl: '/images/womens-heels.jpg'

},

{ 

id: 6, 

name: 'Comfort Walking Shoes', 

price: 89.99, 

category: 'women',

imageUrl: '/images/womens-walking.jpg'

},

{ 

id: 7, 

name: 'Fashion Sneakers', 

price: 79.99, 

category: 'women',

imageUrl: '/images/womens-sneakers.jpg'

},

{ 

id: 8, 

name: 'Ballet Flats', 

price: 69.99, 

category: 'women',

imageUrl: '/images/womens-flats.jpg'

},


// Sale Items

{ 

id: 9, 

name: 'Summer Collection Sneakers', 

price: 49.99, 

category: 'sale',

imageUrl: '/images/sale-sneakers.jpg'

},

{ 

id: 10, 

name: 'Classic Running Shoes', 

price: 59.99, 

category: 'sale',

imageUrl: '/images/sale-running.jpg'

},

{ 

id: 11, 

name: 'Casual Loafers', 

price: 39.99, 

category: 'sale',

imageUrl: '/images/sale-loafers.jpg'

},

{ 

id: 12, 

name: 'Sport Sandals', 

price: 29.99, 

category: 'sale',

imageUrl: '/images/sale-sandals.jpg'

},

];


export default function CollectionPage() {

const [selectedCategory, setSelectedCategory] = useState('all');

const [priceRange, setPriceRange] = useState('all');


const filterProducts = () => {

let filtered = [...allProducts];


// Filter by category

if (selectedCategory !== 'all') {

filtered = filtered.filter(product => product.category === selectedCategory);

}


// Filter by price range

switch (priceRange) {

case 'under50':

filtered = filtered.filter(product => product.price < 50);

break;

case '50to100':

filtered = filtered.filter(product => product.price >= 50 && product.price <= 100);

break;

case 'over100':

filtered = filtered.filter(product => product.price > 100);

break;

}


return filtered;

};


return (

<div className="min-h-screen">

{/* Collection Header */}

<div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-red-500 py-24 sm:py-50 overflow-hidden">

<div className="absolute inset-0 animate-ken-burns">

<div className="absolute inset-0 bg-[url('/images/usd.jpg')] bg-cover bg-center scale-110" />

</div>

<div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/70 z-10 animate-fade-in" />

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-20">

<h1 className="text-white text-4xl sm:text-5xl font-bold mb-10 animate-slide-up opacity-70">

Our Collection

</h1>

<p className="text-white text-lg sm:text-2xl max-w-2xl animate-slide-up opacity-0 [animation-delay:200ms]">

Explore our complete collection of premium footwear. From casual to formal,

find the perfect pair that matches your style.

</p>

</div>

</div>

{/* Filters */}

<div className="bg-white shadow-sm">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">

<label className="text-gray-700 text-sm sm:text-base">Category:</label>

<select

className="border rounded px-2 sm:px-3 py-1.5 sm:py-1 text-sm sm:text-base w-full sm:w-auto"

value={selectedCategory}

onChange={(e) => setSelectedCategory(e.target.value)}

>

<option value="all">All Categories</option>

<option value="men">Men</option>

<option value="women">Women</option>

<option value="sale">Sale</option>

</select>

</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">

<label className="text-gray-700 text-sm sm:text-base">Price Range:</label>

<select

className="border rounded px-2 sm:px-3 py-1.5 sm:py-1 text-sm sm:text-base w-full sm:w-auto"

value={priceRange}

onChange={(e) => setPriceRange(e.target.value)}

>

<option value="all">All Prices</option>

<option value="under50">Under $60</option>

<option value="50to100">$50 - $100</option>

<option value="over100">Over $100</option>

</select>

</div>

</div>

</div>

</div>


{/* Products */}

<ProductGrid

title={`${selectedCategory === 'all' ? 'All' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Shoes`}

products={filterProducts()}

/>

</div>

);

}


