"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {

  return (
    <header className= {styles.header}>
      <Link href="/">
        <Image
          src="/logoTwo.png"
          alt="UGA Sailing Logo"
          width={200}
          height={5}
          priority
        />
      </Link>
        <nav className={styles.nav}>
          <Link className={styles.link} href="/">Home</Link> 
          <Link className={styles.link} href="/dashboard">Get Involved</Link>
          <Link className={styles.link} href="/about">Officers</Link>
          <Link className={styles.link} href="/about">Contact Us</Link>
          <Link className={styles.link} href="/about">Donate</Link>
        </nav>
    </header>
  );
} //Maybe add an FAQ section?