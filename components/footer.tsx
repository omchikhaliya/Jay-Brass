import Link from "next/link"
import { Factory, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-amber-400 to-blue-400 rounded-xl">
                <Factory className="h-8 w-8 text-black" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">JAY BRASS</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Pioneering premium brass window bracket manufacturing since 1985. Precision engineering, uncompromising
              quality, and innovative solutions for modern architecture.
            </p>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>+91 98258 61693</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>jeelramoliya@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span>1234 Industrial Drive, Shankar Tekri, Jamnagar</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white">NAVIGATION</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors font-medium">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white">SERVICES</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="font-medium">Custom Manufacturing</li>
              <li className="font-medium">Precision Engineering</li>
              <li className="font-medium">Premium Finishing</li>
              <li className="font-medium">Quality Assurance</li>
              <li className="font-medium">Bulk Orders</li>
              <li className="font-medium">Technical Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-12 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Jay Brass Manufacturing. All rights reserved. | Engineered for Excellence.</p>
        </div>
      </div>
    </footer>
  )
}
