"use client";
import LoadingSpinner from "@/components/portal/LoadingSpinner";
import TherapySessionTable from "@/components/therapysessions/TherapySessionTable";
import { useFetchTherapySessions } from "@/hooks/therapysessions/actions";
import Link from "next/link";
import React, { useState } from "react";

function TherapySessions() {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    isLoading: isLoadingTherapySessions,
    data: therapySessions,
    refetch: refetchTherapySessions,
  } = useFetchTherapySessions();

  const filteredSessions = therapySessions?.filter(
    (session) =>
      session?.therapist?.name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      session?.client_detail?.name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  if (isLoadingTherapySessions) return <LoadingSpinner />;

  return (
    <>
      <div className="container-fluid px-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link href="/founders/dashboard">Dashboard</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Therapy Sessions
            </li>
          </ol>
        </nav>

        <section className="mb-3">
          <h3>Therapy Sessions</h3>
        </section>

        <section className="mb-3 col-md-3">
          <input
            type="search"
            name="search"
            id="search"
            className="form-control"
            placeholder="Search Sessions"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </section>

        <section className="mb-3">
          {therapySessions?.length > 0 ? (
            <TherapySessionTable therapySessions={filteredSessions} />
          ) : (
            <div className="alert alert-info">
              <i className="bi bi-info-circle"></i> No Therapy Sessions
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default TherapySessions;
