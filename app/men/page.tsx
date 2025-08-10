import ProductGrid from '@/components/ProductGrid';


const menProducts = [

{ id: 1, name: 'Classic Leather Oxford', price: 129.99, imageUrl: '/images/mens-oxford.jpg' },

{ id: 2, name: 'Sports Running Shoes', price: 89.99, imageUrl: '/images/mens-running.jpg' },

{ id: 3, name: 'Casual Sneakers', price: 79.99, imageUrl: '/images/mens-sneakers.jpg' },

{ id: 4, name: 'Business Loafers', price: 149.99, imageUrl: '/images/mens-loafers.jpg' },

{ id: 5, name: 'Canvas Slip-ons', price: 59.99, imageUrl: '/images/canvas.jpg' },

{ id: 6, name: 'Hiking Boots', price: 169.99, imageUrl: '/images/hiking.jpg' },

{ id: 7, name: 'Dress Shoes', price: 199.99, imageUrl: '/images/dress.jpg' },

{ id: 8, name: 'Athletic Training Shoes', price: 109.99, imageUrl: '/images/training.jpg' },

];


export default function MenPage() {

return (

<div className="min-h-screen">

{/* Category Header */}

<div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-red-500 py-24 sm:py-50 overflow-hidden">

<div className="absolute inset-0 animate-ken-burns">

<div className="absolute inset-0 bg-[url('/images/uncle.jpg')] bg-cover bg-center scale-110" />

</div>

<div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/70 z-10 animate-fade-in" />

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

<h1 className="text-white text-4xl sm:text-5xl font-bold mb-10 animate-slide-up opacity-70">

Men&apos;s Collection

</h1>

<p className="text-gray-100 text-lg sm:text-2xl max-w-2xl animate-slide-up opacity-0 [animation-delay:200ms]">

Discover our handpicked selection of men&apos;s footwear, from casual to formal styles.

</p>

</div>

</div>

{/* Products */}

<ProductGrid title="All Men's Shoes" products={menProducts} />

</div>

);

}


