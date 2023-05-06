import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/FilterNav.module.css";
import Image from "next/image";

function FilterNav({ selectedFilters, setSelectedFilters }) {
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const filterBoxRef = useRef(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

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

  function handleFilters(event) {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, name]);
      setSelectedCheckboxes([...selectedCheckboxes, name]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== name));
      setSelectedCheckboxes(
        selectedCheckboxes.filter((filter) => filter !== name)
      );
    }
  }

  useEffect(() => {
    if (!isFilterBoxOpen) {
      setSelectedCheckboxes(selectedFilters);
    }
  }, [isFilterBoxOpen, selectedFilters]);

  return (
    <div className={styles.filterNav}>
      <div className={styles.filterNavContainer}>
        <div
          className={styles.filterNavContainerLeft}
          onClick={() => setIsFilterBoxOpen(!isFilterBoxOpen)}
        >
          <div className={styles.filterIcon}>
            <Image
              src={isFilterBoxOpen ? "/activeFilter.svg" : "/filter.svg"}
              alt="filter icon"
              width={10}
              height={18}
            />
          </div>
          <span
            style={isFilterBoxOpen ? { color: "#FF0D87" } : { color: "#000" }}
          >
            Filtreler
          </span>
        </div>
        <div className={styles.filterNavContainerRight}>
          <Image
            src="/calendar.svg"
            alt="calendar icon"
            width={24}
            height={24}
          />
          <span onClick={() => alert("Takvimi Şu Anda Görüntüleyemiyoruz")}>
            Takvimde Gör
          </span>
        </div>
      </div>
      {isFilterBoxOpen && (
        <div className={styles.filterBackdrop}>
          <div className={styles.filterBox} ref={filterBoxRef}>
            <h3>Etkinlik Mekanı</h3>
            <div className={styles.checkboxItem}>
              <input
                type="checkbox"
                id="filter1"
                name="Maximum UNIQ Hall"
                checked={selectedCheckboxes.includes("Maximum UNIQ Hall")}
                onChange={(event) => handleFilters(event)}
              />
              <label htmlFor="filter1">Maximum UNIQ Hall</label>
            </div>
            <div className={styles.checkboxItem}>
              <input
                type="checkbox"
                id="filter2"
                name="Maximum Uniq Box"
                checked={selectedCheckboxes.includes("Maximum Uniq Box")}
                onChange={(event) => handleFilters(event)}
              />
              <label htmlFor="filter2">Maximum Uniq Box</label>
            </div>
            <div className={styles.checkboxItem}>
              <input
                type="checkbox"
                id="filter3"
                name="Maximum Uniq Lounge"
                checked={selectedCheckboxes.includes("Maximum Uniq Lounge")}
                onChange={(event) => handleFilters(event)}
              />
              <label htmlFor="filter3">Maximum Uniq Lounge</label>
            </div>
            <div className={styles.checkboxItem}>
              <input
                type="checkbox"
                id="filter4"
                name="Maximum Uniq Açıkhava"
                checked={selectedCheckboxes.includes("Maximum Uniq Açıkhava")}
                onChange={(event) => handleFilters(event)}
              />
              <label htmlFor="filter4">Maximum Uniq Açıkhava</label>
            </div>
            <div className={styles.checkboxItem}>
              <input
                type="checkbox"
                id="filter5"
                name="Bahçe Fuaye"
                checked={selectedCheckboxes.includes("Bahçe Fuaye")}
                onChange={(event) => handleFilters(event)}
              />
              <label htmlFor="filter5">Bahçe Fuaye</label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterNav;
