import React, { useState } from "react";
import Header from "@/components/Header";
import Search from "./Search";

export default function Layout({ children, fontClassName }) {
  return (
    <div className={fontClassName}>
      <Header>
        <Search />
      </Header>
      <main>{children}</main>
    </div>
  );
}
