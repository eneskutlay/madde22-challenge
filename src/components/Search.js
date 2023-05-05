import React from "react";
import style from "../styles/Search.module.css";
import Image from "next/image";

function Search() {
  return (
    <div className={style.search}>
        <Image src="/searchIcon.svg" alt="Search" width={20} height={20} />
        <input type="text" placeholder="Etkinlik Ara" />
    </div>
  );
}

export default Search;
