"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default PublicLayout;
