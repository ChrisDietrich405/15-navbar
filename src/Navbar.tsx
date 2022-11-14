import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
//https://linguinecode.com/post/how-to-use-react-useref-with-typescript
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const [divHeight, setDivHeight] = useState<number>(0);

  useEffect(() => {
    if (showLinks) {
      const linksHeight = linksRef?.current?.getBoundingClientRect().height || 0;
      setDivHeight(linksHeight);
    } else {
      setDivHeight(0);
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" style={{ height: `${divHeight}px` }}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li>
                  <a href="https://google.com">{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((icons) => {
            return (
              <li>
                <a href={icons.url}>{icons.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
