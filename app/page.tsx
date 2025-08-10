import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
<section className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-gray-100 overflow-hidden">
  <div className="absolute inset-0 animate-ken-burns">
    <Image
      src="/images/wert.jpg"
      alt="Hero background"
      layout="fill"
      objectFit="cover"
      quality={100}
      priority
      className="scale-110"
    />
  </div>
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10 animate-fade-in" />
  <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-style-initerial text-white mb-10 animate-slide-up opacity-0">
      Step into Style
    </h1>
    <p className="text-lg sm:text-2xl text-white mb-8 max-w-2xl mx-auto sm:mx-0 animate-slide-up opacity-0 [animation-delay:200ms]">
      Discover our latest collection of premium footwear, designed for comfort and crafted for style.
    </p>
    <div className="flex justify-center sm:justify-start">
      <a
        href="/collection"
        className="bg-white text-green-900 px-6 sm:px-8 py-3 rounded-full inline-block hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-sm sm:text-base animate-slide-up opacity-0 [animation-delay:400ms]"
      >
        Shop Now
      </a>
    </div>
  </div>
</section>

      {/* Featured Categories */}
<section className="py-8 sm:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left animate-slide-up opacity-0">Shop by Category</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
      <a href="/men" className="group animate-slide-up opacity-0 [animation-delay:200ms]">
        <div className="relative h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/images/mens-category.jpg"
            alt="Men's Collection"
            fill
            className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-lg sm:text-xl font-bold text-white transform group-hover:translate-x-2 transition-transform duration-500">Men&apos;s Collection</h3>
          </div>
        </div>
      </a>
      <a href="/women" className="group animate-slide-up opacity-0 [animation-delay:400ms]">
        <div className="relative h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/images/womens-category.jpg"
            alt="Women's Collection"
            fill
            className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-lg sm:text-xl font-bold text-white transform group-hover:translate-x-2 transition-transform duration-500">Women&apos;s Collection</h3>
          </div>
        </div>
      </a>
      <a href="/sale" className="group animate-slide-up opacity-0 [animation-delay:600ms]">
        <div className="relative h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/images/sale-category.jpg"
            alt="Sale Collection"
            fill
            className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-lg sm:text-xl font-bold text-white transform group-hover:translate-x-2 transition-transform duration-500">Sale</h3>
            <p className="text-white transform group-hover:translate-x-2 transition-transform duration-500">Up to 50% off</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 animate-slide-up opacity-0">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group animate-slide-up opacity-0 [animation-delay:200ms]">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/product1.jpg"
                  alt="Running Sneakers"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Running Sneakers</h3>
                <p className="text-gray-600 mb-2">$129.99</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group animate-slide-up opacity-0 [animation-delay:400ms]">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/product2.jpg"
                  alt="Casual Comfort"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Casual Comfort</h3>
                <p className="text-gray-600 mb-2">$89.99</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group animate-slide-up opacity-0 [animation-delay:600ms]">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/product3.jpg"
                  alt="Sports Elite"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Sports Elite</h3>
                <p className="text-gray-600 mb-2">$149.99</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group animate-slide-up opacity-0 [animation-delay:800ms]">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/product4.jpg"
                  alt="Urban Style"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Urban Style</h3>
                <p className="text-gray-600 mb-2">$109.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-8 sm:py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Join Our Newsletter</h2>
          <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Subscribe to receive updates about new collections, special offers, and style tips.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full text-white bg-gray-800 placeholder-gray-400 text-sm sm:text-base"
            />
            <button className="bg-white text-black px-6 sm:px-8 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer Information */}
      <section className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Our Store</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We are passionate about providing high-quality footwear that combines style, comfort, and durability. 
                Our curated collection features the latest trends and timeless classics for every occasion.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/collection" className="hover:text-white transition-colors">All Collections</a></li>
                <li><a href="/men" className="hover:text-white transition-colors">Men&apos;s Shoes</a></li>
                <li><a href="/women" className="hover:text-white transition-colors">Women&apos;s Shoes</a></li>
                <li><a href="/sale" className="hover:text-white transition-colors">Special Offers</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Free Shipping on Orders Over $100</li>
                <li>30-Day Return Policy</li>
                <li>Size Guide</li>
                <li>Shoe Care Tips</li>
              </ul>
            </div>

            {/* Store Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Customer Service: 1-800-SHOES</li>
                <li>Email: support@shoesstore.com</li>
                <li>Business Hours: Mon-Fri 9AM-6PM</li>
                <li>Location: Multiple Stores Nationwide</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Shoes Store. All rights reserved. The ultimate destination for premium footwear.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
