"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logoTwo.png"
          alt="UGA Sailing Logo"
          width={200}
          height={5}
          priority
        />
      </Link>

      {/* Hamburger icon */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </button>

      {/* Nav container */}
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        <Link className={styles.link} href="/">Home</Link> 
        <Link className={styles.link} href="/involvement">Get Involved</Link>
        <Link className={styles.link} href="/team">Officers</Link>
        <Link className={styles.link} href="/contact">Contact Us</Link>
        <Link className={styles.link} href="/donate">Donate</Link>
      </nav>
    </header>
  );
}
