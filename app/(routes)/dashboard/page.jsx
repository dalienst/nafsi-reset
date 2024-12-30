"use client";

import LoadingSpinner from "@/components/portal/LoadingSpinner";
import { useFetchProfile } from "@/hooks/accounts/actions";
import React from "react";

function Dashboard() {
  const {
    isLoading: isLoadingProfile,
    data: profile,
    refetch: refetchProfile,
  } = useFetchProfile();

  if (isLoadingProfile) return <LoadingSpinner />;

  return (
    <div className="container-fluid px-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Dashboard
          </li>
        </ol>
      </nav>

      <section className="mb-3 mt-3">
        <h1 className="h2">Welcome, {profile?.name}</h1>
      </section>
    </div>
  );
}

export default Dashboard;
