import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

type Props = {
  siteTitle: string;
  headerDark: false;
};

const Link = ({ children, ...rest }) => <span {...rest}>{children}</span>;

const NavigationBar = ({ siteTitle, headerDark = false }: Props) => {
  const [menuClass, setMenuClass] = useState("");

  const [variant, setVariant] = useState<"light" | "dark" | undefined>(
    headerDark ? "dark" : "light"
  );

  return (
    <Navbar
      bg={menuClass}
      expand="lg"
      fixed="top"
      variant={variant}
      style={{ transition: "all 0.3s" }}
    >
      <div className="container-lg">
        <Link className="navbar-brand" to="/" aria-label={siteTitle}>
          {siteTitle}
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="Menu button"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link
              to="/work/"
              activeStyle={{ fontWeight: "bold" }}
              className="nav-link"
              id="landingsDropdown"
              href="#"
              role="button"
              aria-label="Services"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Work
            </Link>
            <Link
              to="/services/"
              activeStyle={{ fontWeight: "bold" }}
              className="nav-link"
              id="landingsDropdown"
              href="#"
              role="button"
              aria-label="Services"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </Link>
            <Link
              to="/who-you/"
              aria-label="About you"
              activeStyle={{ fontWeight: "bold" }}
              className="nav-link"
              id="pagesDropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About you
            </Link>
            <Link
              to="/insights/"
              aria-label="Insights"
              activeStyle={{ fontWeight: "bold" }}
              className="nav-link"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Insights
            </Link>
            <Link
              to="/contact-us/"
              aria-label="Contact"
              activeStyle={{ fontWeight: "bold" }}
              className="nav-link"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Contact
            </Link>
            <Link
              className="nav-link "
              role="button"
              aria-label="Phone number"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <a href="tel:+6145163335" aria-label="Phone number">
                (07) 4516 3335
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
