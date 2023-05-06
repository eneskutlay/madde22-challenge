import React, { useState } from "react";
import styles from "../styles/Event.module.css";
import Image from "next/image";

function Event(props) {
  const [isClickedCalendar, setIsClickedCalendar] = useState(false);
  const [isClickedBuy, setIsClickedBuy] = useState(false);

  function handleCalendarClick() {
    setIsClickedCalendar(true);
    if (isClickedCalendar) {
      setIsClickedCalendar(false);
    }
  }

  function handleBuyClick() {
    setIsClickedBuy(true);
    if (isClickedBuy) {
      setIsClickedBuy(false);
    }
  }
  return (
    <div className={styles.event}>
      <div className={styles.eventItem}>
        <div className={styles.eventItemLeft}>
          <div className={styles.eventItemDate}>
            <span>{props.eventDate}</span>
          </div>
        </div>
        <div className={styles.eventItemPoster}>
          <span className={styles.eventItemPosterFlag}>{props.eventStyle}</span>
          <Image
            src={props.eventImageUrl}
            alt="event image"
            width={308}
            height={172}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.eventItemCenter}>
          <h3>{props.eventHeader}</h3>
          <div className={styles.eventItemLocation}>
            <Image
              src="/location.svg"
              alt="location icon"
              width={10}
              height={14}
            />
            <span>{props.eventLocation}</span>
          </div>
          <p>{props.eventDetail}</p>
        </div>
        <div className={styles.eventItemRight}>
          <div onClick={handleBuyClick} className={styles.buyBox}>
            {isClickedBuy ? (
              <button className={styles.eventItemBuyTicket}>
                <Image
                  src="/ticketBag.svg"
                  alt="add icon"
                  width={22}
                  height={22}
                  color="#fff"
                  style={{ marginTop: "5px" }}
                />
              </button>
            ) : (
              <button className={styles.eventItemBuyTicket}>Bilet Al</button>
            )}
          </div>

          <div className={styles.celenderBox} onClick={handleCalendarClick}>
            {isClickedCalendar ? (
              <>
                <button>
                  <Image
                    src="/clickedIcon.svg"
                    alt="add icon"
                    width={22}
                    height={22}
                  />
                </button>
                <span>Takvime Eklendi</span>
              </>
            ) : (
              <>
                <button>
                  <Image
                    src="/addIcon.svg"
                    alt="add icon"
                    width={22}
                    height={22}
                  />
                </button>
                <span>Takvime Ekle</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
