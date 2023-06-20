import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Hamburger from "../../images/hamburger.svg";
import Cart from "components/Cart";
import ExpandableSearchIcon from "components/ExpandableSearchIcon/ExpandableSearchIcon";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    document.body.style.overflow = "unset";
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <Logo className={styles.svg} />
          </NavLink>
        </div>
        <div className={styles.menuIcon} onClick={handleShowNavbar}>
          <img src={Hamburger} alt="hamburger menu" />
        </div>
        <div
          className={`${styles.navElements}  ${
            showNavbar && `${styles.active}`
          }`}
        >
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <li className={styles.icons}>
          <ExpandableSearchIcon />
          <div className={styles.icon} onClick={() => setIsOpen(!isOpen)}>
            <ShoppingCartOutlinedIcon />
            <span className={styles.amount}>{products.length}</span>
          </div>
        </li>
      </div>
      {isOpen && <Cart />}
    </header>
  );
}

export default Header;
