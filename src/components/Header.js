import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

function Header({ children }) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="Logo" width={60} height={63} />
      </div>
      <div className={styles.head}>
        <h1>ETKİNLİKLER</h1>
      </div>
      <div className={styles.nav}>
        <nav>
          <ul>
            <li>
              <Link href="/">Tüm Etkinlikler</Link>
            </li>
            <li>
              <Link href="/about">Tiyatro</Link>
            </li>
            <li>
              <Link href="/about">Konser</Link>
            </li>
            <li>
              <Link href="/about">Stand Up</Link>
            </li>
            <li>
              <Link href="/about">Sinema</Link>
            </li>
            <li>
              <Link href="/about">Çocuk</Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </div>
  );
}

export default Header;
