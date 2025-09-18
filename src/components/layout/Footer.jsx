import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-12">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            Easy Serve
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Experience culinary excellence in an atmosphere of refined elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/orders" className="hover:underline text-yellow-300">
                Orders
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            Newsletter
          </h3>
          <p className="text-sm text-gray-200 mb-3">
            Subscribe to receive updates about special events and new menu
            items.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow p-2 rounded text-black focus:outline-none bg-white"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-800 mt-6">
        <p className="text-center text-sm text-gray-300 py-4">
          © {new Date().getFullYear()} Easy Serve Restaurant. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
