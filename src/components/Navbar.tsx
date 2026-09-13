import logoText from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <button className="cursor-pointer text-2xl  md:hidden text-black">
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          <img src={logoText} alt="" />
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-pink-500"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className=" text-sm font-medium text-gray-700 md:block cursor-pointer">
            Sign In
          </button>

          <button
            className="rounded-full px-5 py-2 text-sm text-white border-0 cursor-pointer"
            style={{ background: "var(--gradient-brand)" }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
