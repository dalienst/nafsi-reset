"use client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import React from "react";
import BootstrapClient from "@/providers/BootstrapClient";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nafsi Reset: Rebuilding Minds, Reclaiming Lives</title>
        <meta
          name="description"
          content="Nafsi Reset is dedicated to creating a safe and accessible space for individuals, particularly those from low-income communities in Kenya, to seek and receive therapy."
        />
      </head>
      <body>
        <Navbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
