"use client";

import LoadingSpinner from "@/components/portal/LoadingSpinner";
import TherapySessionTable from "@/components/therapysessions/TherapySessionTable";
import { useFetchProfile } from "@/hooks/accounts/actions";
import { useFetchClients } from "@/hooks/clients/actions";
import {
  useFetchTherapySessions,
  useFetchTherapySessionsByDate,
} from "@/hooks/therapysessions/actions";
import React from "react";

function Dashboard() {
  const {
    isLoading: isLoadingProfile,
    data: profile,
    refetch: refetchProfile,
  } = useFetchProfile();

  const {
    isLoading: isLoadingClients,
    data: clients,
    refetch: refetchClients,
  } = useFetchClients();

  const {
    isLoading: isLoadingTherapySessions,
    data: therapySessions,
    refetch: refetchTherapySessions,
  } = useFetchTherapySessions();

  const date = new Date()
    .toLocaleDateString("en-KE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  const {
    isLoading: isLoadingTherapySessionsByDate,
    data: therapySessionsByDate,
    refetch: refetchTherapySessionsByDate,
  } = useFetchTherapySessionsByDate(date);


  if (
    isLoadingProfile ||
    isLoadingClients ||
    isLoadingTherapySessions ||
    isLoadingTherapySessionsByDate
  )
    return <LoadingSpinner />;

  return (
    <div className="container-fluid px-4">
      {/* <nav aria-label="breadcrumb" >
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Dashboard
          </li>
        </ol>
      </nav> */}

      <section className="mb-3 mt-2">
        <h3>Welcome, {profile?.name}</h3>
      </section>

      <section className="mb-3 row">
        <div className="col-md-4 col-sm-12 mb-3">
          <div className="card bg-light h-100">
            <div className="card-body">
              <i className="bi bi-person-lines-fill fs-4 text-success"></i>
              <h5 className="card-title mt-2">{clients?.length}</h5>
              <p className="card-text">Clients</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 mb-3">
          <div className="card bg-light h-100">
            <div className="card-body">
              <i className="bi bi-clipboard2-data-fill fs-4 text-success"></i>
              <h5 className="card-title mt-2">
                {profile?.client_sessions?.length}
              </h5>
              <p className="card-text">My Therapy Sessions</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 mb-3">
          <div className="card bg-light h-100">
            <div className="card-body">
              <i className="bi bi-clipboard2-data-fill fs-4 text-success"></i>
              <h5 className="card-title mt-2">{therapySessions?.length}</h5>
              <p className="card-text">All Therapy Sessions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-3">
        <h6 className="mb-2">Upcoming Therapy Sessions - {date}</h6>

        {therapySessionsByDate?.length > 0 ? (
          <TherapySessionTable therapySessions={therapySessionsByDate} />
        ) : (
          <div className="alert alert-info">
            <i className="bi bi-info-circle"></i> No Therapy Sessions for {date}
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
