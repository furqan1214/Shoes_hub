import ProductGrid from '@/components/ProductGrid';


const womenProducts = [

{ id: 1, name: 'Elegant High Heels', price: 119.99, imageUrl: '/images/womens-heels.jpg' },

{ id: 2, name: 'Comfort Walking Shoes', price: 89.99, imageUrl: '/images/womens-walking.jpg' },

{ id: 3, name: 'Fashion Sneakers', price: 79.99, imageUrl: '/images/womens-sneakers.jpg' },

{ id: 4, name: 'Ballet Flats', price: 69.99, imageUrl: '/images/womens-flats.jpg' },

{ id: 5, name: 'Ankle Boots', price: 149.99, imageUrl: '/images/ankels.jpg' },

{ id: 6, name: 'Summer Sandals', price: 59.99, imageUrl: '/images/sandels.jpg' },

{ id: 7, name: 'Running Shoes', price: 99.99, imageUrl: '/images/girls.jpg' },

{ id: 8, name: 'Platform Shoes', price: 129.99, imageUrl: '/images/forms.jpg' },

];


export default function WomenPage() {

return (

<div className="min-h-screen">

{ /* Category Header */}

<div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-red-500 py-24 sm:py-50 overflow-hidden">

<div className="absolute inset-0 animate-ken-burns">

<div className="absolute inset-0 bg-[url('/images/ant.jpg')] bg-cover bg-center scale-110" />

</div>

<div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/70 z-10 animate-fade-in" />

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

<h1 className="text-white text-4xl sm:text-5xl font-bold mb-10 animate-slide-up opacity-0">Women&apos;s Collection</h1>

<p className="text-gray-100 text-lg sm:text-2xl max-w-2xl animate-slide-up opacity-70 [animation-delay:200ms]">

Discover our handpicked selection of women&apos;s footwear, from casual to formal styles.

</p>

</div>

</div>


{/* Products */}

<ProductGrid title="All Women's Shoes" products={womenProducts} />

</div>

);

}


