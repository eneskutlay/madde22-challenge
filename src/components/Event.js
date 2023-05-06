import React from "react";
import styles from "../styles/Event.module.css";
import Image from "next/image";

function Event() {
  let testImageUrl =
    "https://s3-alpha-sig.figma.com/img/53a7/bebc/2548a9b67eef50835a48976e01363a25?Expires=1684108800&Signature=FbKGyBxUinSxdUi8dA-Vs6V6EVFxUPm2jKJqlkVDq-q~vjJYKtbegEsFIeI7dgXIyRxEYrR3514pzL26s8tNiQqMbNY5~L6lhSOCUZrrGe6RJE8~n-ULgQc5Vb1qfdCCc0L7mLeXIEStI1WLGxk6NrUVbK-1eQO6OkvyI4yU6z8~i8APcP8B1HNSDOJp5us~VQm5H1UmOTeMpoREfZ5PqQJfXAMsW9NjQO7kUBdAluYtiWWC5OlGoIXQqRGgN5MnOm5KWdZBxsb1zDypsKh5gWsfMhoZYBcL7pK33O0z3s73cIqTUP3uInxiW4U4Wy~RU0iSpO-cV49w1wKyA2GVyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  return (
    <div className={styles.event}>
      <div className={styles.eventItem}>
        <div className={styles.eventItemLeft}>
          <div className={styles.eventItemDate}>
            <span>7 Eylül Salı 21:15</span>
          </div>
        </div>
        <div className={styles.eventItemPoster}>
          <span className={styles.eventItemPosterFlag}>KONSER</span>
          <Image src={testImageUrl} alt="logo" width={308} height={172} />
        </div>
        <div className={styles.eventItemCenter}>
          <h3>BKM Yaz Etkinlikleri: Zengin Mutfağı</h3>
          <div className={styles.eventItemLocation}>
            <Image src="/location.svg" alt="logo" width={10} height={14} />
            <span>Maximum UNIQ Hall</span>
          </div>
          <p>
            1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı
            Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde
            ve genç bir.... Detaylı Bilgi
          </p>
        </div>
        <div className={styles.eventItemRight}>
          <button className={styles.eventItemBuyTicket}>Bilet Al</button>
          <div className={styles.celenderBox}>
            <button clas>
              <Image src="/addIcon.svg" alt="logo" width={22} height={22} />
            </button>
            <span>Takvime Ekle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
