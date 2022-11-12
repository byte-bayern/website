import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "../../assets/img/components/brand/logo-color.svg";
import { Close, Menu } from "../../assets/img/icons";

let menuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Wer wir sind",
    link: "/team",
  },
  {
    name: "Byte Karriere",
    link: "/career",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState();

  const navbarClass = open === true ? "open" : "closed";
  const activeStyle = {
    borderBottom: "2px solid black",
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, [isVisible]);

  const listenToScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    winScroll <= 50
      ? setIsVisible(null)
      : setIsVisible("navbar-initiative-hide");
  };

  return (
    <nav id="nav">
      <div className="content xs:p-grid-standard md:px-grid-standard">
        <div
          className={`navbar-${navbarClass} grid  grid-gap-20 md:grid-gap-50 lg:grid-gap-50`}
        >
          <div className="navbar-brand nav-item col-8 lg:col-2 lg:m-a pl-0">
            <Link to="/">
              <img
                alt="Link zu Startseite"
                className="img-h-80"
                src={logo}
              />
            </Link>
          </div>
          <div className="navbar-toggle col-4 t-right">
            <button
              className="navbar-img lg:hidden border-none background-none"
              onClick={() => setOpen(!open)}
              role="presentation"
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
          <div className="navbar-nav fs-link col-12 lg:col-10
           lg:m-a">
            <div className="grid grid-gap-0">
              {menuItems.map((item, index) => (
                <div
                  className="lg:col-2 xs:col-12 xs:pb-50 lg:pb-0 nav-item"
                  key={index}
                >
                  <div className={`${item.style?.className}`}>
                    <Link
                      to={item.link}
                      className={`${item.style?.color}`}
                      activeStyle={activeStyle}
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
