import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Nav.module.css";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <header className={styles.nav}>
      <div onClick={() => setNav(false)}>
        <Link href="/">
          <Image
            src="/images/c-a.png"
            alt="Logo of Conni-avoi on Home"
            width="60 rem"
            height="60 rem"
            className={styles.pont}
          />
        </Link>
      </div>

      <div
        onClick={handleClick}
        className={nav ? styles.block : styles.menuListHid}
      >
        <ul className={styles.collapse}>
          <Link href="/slippers">
            <li className={styles.navyCollapse}>Slides</li>
          </Link>
          <Link href="/sandal">
            <li className={styles.navyCollapse}>Sandals</li>
          </Link>
          <Link href=" /bag">
            <li className={styles.navyCollapse}>Bags</li>
          </Link>
        </ul>
      </div>
      <ul className={styles.list}>
        <div className="hidden md:block">
          <li className={styles.navy}>Log In</li>
        </div>
        <div className="hidden md:block">
          <li className={styles.navy}>Create Account</li>
        </div>
        <div onClick={handleClick} className={styles.menuIcon}>
          <li className={styles.navy1}>Menu</li>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;
