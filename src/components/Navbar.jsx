import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import resume from "../assets/Lakshya_Mutha_Resume.pdf";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const navigation = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
];

// Sticky navbar height plus breathing room; a section counts as "current"
// once its top passes this line.
const SPY_OFFSET = 140;

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isMorePage = location.pathname === "/more-projects";

  // Scroll-spy: the current section is the last one whose top has passed the
  // offset line. Works for very tall sections (unlike a viewport-center
  // observer) and highlights the last section at the bottom of the page.
  useEffect(() => {
    if (!isHomePage) return;

    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      let current = navigation[0].id;
      for (const item of navigation) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= SPY_OFFSET) {
          current = item.id;
        }
      }
      if (atBottom) current = navigation[navigation.length - 1].id;
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHomePage]);

  // After a route change, jump to the hash target (e.g. /#projects coming
  // from /more-projects) or reset to the top of the new page.
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = location.hash.slice(1);
    let tries = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (tries++ < 20) {
        requestAnimationFrame(tryScroll);
      }
    };
    requestAnimationFrame(tryScroll);
  }, [location.pathname, location.hash]);

  const goTo = (e, id) => {
    e.preventDefault();
    if (isHomePage) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", id === "home" ? "/" : `/#${id}`);
      }
    } else {
      navigate(id === "home" ? "/" : `/#${id}`);
    }
  };

  const linkClass = (active) =>
    `rounded-full px-3 lg:px-4 py-2 text-sm font-bold transition-all duration-200 whitespace-nowrap ${
      active
        ? "bg-brand-yellow text-black shadow-sm"
        : "text-zinc-600 hover:bg-gray-100 hover:text-black"
    }`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Lakshya_Mutha_Resume.pdf";
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
                  {navigation.map((item) => (
                    <a
                      key={item.id}
                      href={item.id === "home" ? "/" : `/#${item.id}`}
                      onClick={(e) => goTo(e, item.id)}
                      className={linkClass(
                        isHomePage && activeSection === item.id,
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Link to="/more-projects" className={linkClass(isMorePage)}>
                    More Projects
                  </Link>
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

        <DisclosurePanel className="md:hidden max-h-[75vh] overflow-y-auto bg-white/95 backdrop-blur-xl border-t border-gray-100 rounded-b-2xl">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.id}
                as="a"
                href={item.id === "home" ? "/" : `/#${item.id}`}
                onClick={(e) => goTo(e, item.id)}
                className={`block rounded-lg px-3 py-2 text-base font-bold ${
                  isHomePage && activeSection === item.id
                    ? "bg-brand-yellow text-black"
                    : "text-zinc-600 hover:bg-gray-100 hover:text-black"
                }`}
              >
                {item.name}
              </DisclosureButton>
            ))}
            <DisclosureButton
              as={Link}
              to="/more-projects"
              className={`block rounded-lg px-3 py-2 text-base font-bold ${
                isMorePage
                  ? "bg-brand-yellow text-black"
                  : "text-zinc-600 hover:bg-gray-100 hover:text-black"
              }`}
            >
              More Projects
            </DisclosureButton>
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
