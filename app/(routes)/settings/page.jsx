"use client";
import { Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";

function Settings() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="container py-3">

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Account Settings
          </li>
        </ol>
      </nav>

      <h1 className="h2">Account Settings</h1>

      <section className="mt-3 mb-3">
        <Formik initialValues={{}}></Formik>
      </section>
    </div>
  );
}

export default Settings;
