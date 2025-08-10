import ProductGrid from '@/components/ProductGrid';


const saleProducts = [

{ id: 1, name: 'Summer Collection Sneakers', price: 49.99, imageUrl: '/images/sale-sneakers.jpg' },

{ id: 2, name: 'Classic Running Shoes', price: 59.99, imageUrl: '/images/sale-running.jpg' },

{ id: 3, name: 'Casual Loafers', price: 39.99, imageUrl: '/images/sale-loafers.jpg' },

{ id: 4, name: 'Sport Sandals', price: 29.99, imageUrl: '/images/sale-sandals.jpg' },

{ id: 5, name: 'Canvas Shoes', price: 34.99, imageUrl: '/images/canvas.jpg' },

{ id: 6, name: 'Walking Shoes', price: 44.99, imageUrl: '/images/walkingshoes.jpg' },

{ id: 7, name: 'Slip-on Sneakers', price: 54.99, imageUrl: '/images/product.jpg' },

{ id: 8, name: 'Athletic Shoes', price: 64.99, imageUrl: '/images/athelicshoes.jpg' },

];


export default function SalePage() {

return (

<div className="min-h-screen">

{/* Category Header */}

<div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-red-500 py-24 sm:py-50 overflow-hidden">

<div className="absolute inset-0 animate-ken-burns">

<div className="absolute inset-0 bg-[url('/images/web.jpg')] bg-cover bg-center scale-110" />

</div>

<div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/70 z-10 animate-fade-in" />

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

<h1 className="text-white text-4xl sm:text-5xl font-bold mb-10 animate-slide-up opacity-0">sale&apos;s Collection</h1>

<p className="text-white text-lg sm:text-2xl max-w-2xl animate-slide-up opacity-0 [animation-delay:200ms]">

Discover our handpicked selection of sale&apos;s footwear, from casual to formal styles.

</p>

</div>

</div>


{/* Products */}

<ProductGrid title="Sale Items" products={saleProducts} />

</div>

);

}


