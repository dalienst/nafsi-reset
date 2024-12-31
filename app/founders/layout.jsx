"use client";
import Navbar from "@/components/portal/Navbar";
import React from "react";

function AuthLayout({ children }) {
  return <div>
    <Navbar />
    {children}</div>;
}

export default AuthLayout;
