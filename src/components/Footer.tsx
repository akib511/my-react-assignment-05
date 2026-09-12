import Logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="border-t border-gray-200  bg-white/95 text-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={Logo} alt="" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-700">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex gap-4 text-3xl">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-bold">PRODUCT</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-pink-400">
                 
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-400">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-400">
                  Product
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-bold">COMPANY</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-pink-400">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-400">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-400">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-bold">LEGAL</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-pink-400">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-300">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
