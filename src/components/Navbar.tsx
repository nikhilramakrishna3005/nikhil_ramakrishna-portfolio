import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

export let smoother: {
  scrollTop: (value: number) => void;
  paused: (_value: boolean) => void;
  scrollTo: (
    target: string | null,
    _smooth?: boolean,
    _position?: string
  ) => void;
};

const Navbar = () => {
  useEffect(() => {
    smoother = {
      scrollTop: (value: number) => window.scrollTo({ top: value }),
      paused: (_value: boolean) => {},
      scrollTo: (target: string | null) => {
        if (!target) return;
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
    };

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const current = e.currentTarget as HTMLAnchorElement;
          const section = current.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });

    window.addEventListener("resize", () => {});
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          NR
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil-rama-krishna3005/"
          className="navbar-connect"
          data-cursor="disable"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/nikhil-rama-krishna3005
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;