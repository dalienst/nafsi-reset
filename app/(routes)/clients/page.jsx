"use client";

import ClientTable from "@/components/clients/ClientTable";
import LoadingSpinner from "@/components/portal/LoadingSpinner";
import { useFetchClients } from "@/hooks/clients/actions";
import Link from "next/link";
import React from "react";

function ClientList() {
  const {
    isLoading: isLoadingClients,
    data: clients,
    refetch: refetchClients,
  } = useFetchClients();

  if (isLoadingClients) return <LoadingSpinner />;

  return (
    <>
      <div className="container-fluid px-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link href="/dashboard">Dashboard</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Clients
            </li>
          </ol>
        </nav>

        <section className="mb-3 d-flex justify-content-between">
          <div>
            <h3>Clients</h3>
          </div>

          <button className="btn btn-outline-success btn-sm">
            <i className="bi bi-plus-lg"></i>
          </button>
        </section>

        <section className="mb-3">
          <ClientTable clients={clients} />
        </section>
      </div>
    </>
  );
}

export default ClientList;
