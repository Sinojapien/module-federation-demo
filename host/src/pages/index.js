import React from "react";

import RemoteHeader from "../components/RemoteHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <RemoteHeader />
      <Header />
      <div>This is content</div>
      <Footer />
    </>
  );
}
