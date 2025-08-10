'use client';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold">ShoesHub</span>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.toggle('hidden');
                }
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden sm:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="/collection" className="text-gray-700 hover:text-gray-900">Collection</a>
            <a href="/men" className="text-gray-700 hover:text-gray-900">Men</a>
            <a href="/women" className="text-gray-700 hover:text-gray-900">Women</a>
            <a href="/sale" className="text-gray-700 hover:text-gray-900">Sale</a>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="hidden sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Home</a>
          <a href="/collection" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Collection</a>
          <a href="/men" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Men</a>
          <a href="/women" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Women</a>
          <a href="/sale" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Sale</a>
        </div>
      </div>
    </nav>
  );
}
