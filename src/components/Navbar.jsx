import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import resume from "../assets/LakshyaMutha.pdf";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Education", href: "/#education" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Achievements", href: "/#achievements" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) return; // Only run observer on home page

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    navigation.forEach((item) => {
      // safely query selector by removing the leading slash if present
      const selector = item.href.startsWith("/")
        ? item.href.substring(1)
        : item.href;
      // Only query if it looks like an ID selector
      if (selector.startsWith("#")) {
        try {
          const section = document.querySelector(selector);
          if (section) {
            observer.observe(section);
          }
        } catch (e) {
          // ignore invalid selectors
        }
      }
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "LakshyaMutha_CV.pdf";
    link.click();
  };

  return (
    <div className="fixed top-4 md:top-6 inset-x-0 z-[100] flex justify-center px-4">
      <Disclosure
        as="nav"
        className="w-full max-w-6xl bg-white/90 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl md:rounded-full transition-all duration-300"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 md:h-20 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button - Only show on Home Page or if we want a menu everywhere? 
                  User said "only show home button" on more-projects. 
                  So if !isHomePage, maybe hide hamburger? 
                  Or simpler: if !isHomePage, just show Home button. 
              */}
              {isHomePage ? (
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              ) : (
                <Link to="/" className="text-black font-bold p-2">
                  Home
                </Link>
              )}
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div className="flex shrink-0 items-center">
                {/* Logo Home Link */}
                <Link
                  to="/"
                  onClick={() =>
                    isHomePage &&
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <img
                    alt="Profile"
                    src={
                      "https://res.cloudinary.com/dbkecod0k/image/upload/v1770741855/Screenshot_2026-02-10_221212_py95t5.jpg"
                    }
                    className="h-10 w-auto rounded-full cursor-pointer hover:scale-110 transition-transform shadow-sm"
                  />
                </Link>
              </div>
              <div className="hidden md:ml-6 md:block">
                <div className="flex items-center space-x-1">
                  {isHomePage ? (
                    navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 ${
                          activeSection === item.href.replace("/#", "")
                            ? "bg-brand-yellow text-black scale-105 shadow-sm"
                            : "text-zinc-600 hover:bg-gray-100 hover:text-black"
                        }`}
                      >
                        {item.name}
                      </a>
                    ))
                  ) : (
                    <Link
                      to="/"
                      className="rounded-full px-4 py-2 text-sm font-bold text-zinc-600 hover:bg-gray-100 hover:text-black transition-all duration-200"
                    >
                      Home
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <button
                type="button"
                onClick={handleDownload}
                className="relative rounded-full bg-black px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-brand-yellow hover:text-black hover:-translate-y-0.5 transition-all duration-300"
              >
                Resume
              </button>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 rounded-b-2xl">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {isHomePage &&
              navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-base font-bold ${
                    activeSection === item.href.replace("/#", "")
                      ? "bg-brand-yellow text-black"
                      : "text-zinc-600 hover:bg-gray-100 hover:text-black"
                  }`}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            {!isHomePage && (
              <DisclosureButton
                as={Link}
                to="/"
                className="block rounded-lg px-3 py-2 text-base font-bold text-zinc-600 hover:bg-gray-100 hover:text-black"
              >
                Home
              </DisclosureButton>
            )}
            <button
              type="button"
              onClick={handleDownload}
              className="w-full mt-2 rounded-lg bg-black px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-brand-yellow hover:text-black transition-all duration-300"
            >
              Resume
            </button>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
