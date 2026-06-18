import { Store, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { OWNER_WHATSAPP } from "../../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-400 to-saffron-600 flex items-center justify-center">
                <Store className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-xl">Ganpati Kirana</p>
                <p className="text-[10px] text-saffron-400 tracking-widest uppercase">
                  Store
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted neighbourhood kirana store since 1985. Fresh produce,
              everyday essentials, delivered with love.
            </p>
          </div>

          <div>
            <p className="font-semibold text-base mb-4 text-saffron-400">
              Contact Us
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                <span>Near Temple Chowk, Mau, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                <span>Mon – Sun: 7:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-base mb-4 text-saffron-400">
              Order on WhatsApp
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Add items to your cart and send us your order directly on
              WhatsApp. Simple & fast!
            </p>
            <a
              href={`https://wa.me/${OWNER_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with us
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Ganpati Kirana Store. Est. 1985 · Made
          with ❤️ in Mau, UP
        </div>
      </div>
    </footer>
  );
}
