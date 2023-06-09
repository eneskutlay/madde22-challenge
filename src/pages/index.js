import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Event from "@/components/Event";
import FilterNav from "@/components/FilterNav";

export default function Home({ events }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    if (selectedFilters.length > 0) {
      const filtered = events.filter((event) =>
        selectedFilters.includes(event.eventLocation)
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  }, [selectedFilters, events]);
  return (
    <>
      <Head>
        <title>Etkinlikler</title>
        <meta name="description" content="Madde22 Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <FilterNav
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        {filteredEvents.map((event) => (
          <Event
            key={event.id}
            eventDate={event.eventDate}
            eventStyle={event.eventStyle}
            eventImageUrl={event.eventImageUrl}
            eventHeader={event.eventHeader}
            eventLocation={event.eventLocation}
            eventDetail={event.eventDetail}
          />
        ))}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}`);
  const events = await res.json();
  return {
    props: {
      events,
    },
  };
};
