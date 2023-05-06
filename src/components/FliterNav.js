import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/FliterNav.module.css";
import Image from "next/image";

function FliterNav() {
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const filterBoxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterBoxRef.current &&
        !filterBoxRef.current.contains(event.target)
      ) {
        setIsFilterBoxOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterBoxRef]);

  return (
    <div className={styles.fliterNav}>
      <div className={styles.fliterNavContainer}>
        <div
          className={styles.fliterNavContainerLeft}
          onClick={() => setIsFilterBoxOpen(!isFilterBoxOpen)}
        >
          <div className={styles.filterIcon}>
            <Image
              src={isFilterBoxOpen ? "/activeFliter.svg" : "/fliter.svg"}
              alt="logo"
              width={10}
              height={18}
            />
          </div>
          <span
            style={isFilterBoxOpen ? { color: "#FF0D87" } : { color: "#000" }}
          >
            Flitreler
          </span>
        </div>
        <div className={styles.fliterNavContainerRight}>
          <Image src="/calendar.svg" alt="logo" width={24} height={24} />
          <span>Takvimde Gör</span>
        </div>
      </div>
      {isFilterBoxOpen && (
        <div className={styles.filterBackdrop}>
          <div className={styles.filterBox} ref={filterBoxRef}>
            <div className={styles.checkboxItem}>
              <input type="checkbox" id="filter1" name="filter1" />
              <label htmlFor="filter1">Filter 1</label>
            </div>
            <div className={styles.checkboxItem}>
              <input type="checkbox" id="filter2" name="filter2" />
              <label htmlFor="filter2">Filter 2</label>
            </div>
            <div className={styles.checkboxItem}>
              <input type="checkbox" id="filter3" name="filter3" />
              <label htmlFor="filter3">Filter 3</label>
            </div>
            <div className={styles.checkboxItem}>
              <input type="checkbox" id="filter4" name="filter4" />
              <label htmlFor="filter4">Filter 4</label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FliterNav;
