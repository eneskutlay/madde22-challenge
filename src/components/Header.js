import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import { useRouter } from "next/router";

function Header({ children }) {
  const router = useRouter();
  console.log(router.pathname == "/" ? "activeNavItem" : "ss");
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
              <Link
                style={
                  router.pathname == "/"
                    ? {
                        color: "#FF0D87",
                        fontWeight: "bold",
                        borderBottom: "4px solid #FF0D87",
                        paddingBottom: "22px",
                      }
                    : {}
                }
                href="/"
              >
                Tüm Etkinlikler
              </Link>
            </li>
            <li>
              <Link href="/#">Tiyatro</Link>
            </li>
            <li>
              <Link href="/#">Konser</Link>
            </li>
            <li>
              <Link href="/#">Stand Up</Link>
            </li>
            <li>
              <Link href="/#">Sinema</Link>
            </li>
            <li>
              <Link href="/#">Çocuk</Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </div>
  );
}

export default Header;
