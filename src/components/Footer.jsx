
const Footer = () => {
  return (
	<footer className="bg-dark-primary text-gray-300 px-8 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Column 1 */}
              <div>
                <h2 className="font-bold text-lg mb-4">Customer Service</h2>
                <ul>
                  <li className="mb-2">Get Help</li>
                  <li className="mb-2">Find a Warehouse</li>
                  <li className="mb-2">Order Status</li>
                  <li className="mb-2">Shipping</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h2 className="font-bold text-lg mb-4">About Us</h2>
                <ul>
                  <li className="mb-2">Charitable Contributions</li>
                  <li className="mb-2">Company Information</li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h2 className="font-bold text-lg mb-4">Membership</h2>
                <ul>
                  <li className="mb-2">Join Now</li>
                  <li className="mb-2">Member Privileges</li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h2 className="font-bold text-lg mb-4">Vendors & Suppliers</h2>
                <ul>
                  <li className="mb-2">Supply Chain Disclosure</li>
                  <li className="mb-2">Supplier Diversity</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center text-sm">
              <p>
                © 1998 — 2024 Costco Wholesale Corporation. All rights reserved.
              </p>
            </div>
          </footer>
  )
};

export default Footer;
