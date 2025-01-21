"use client";

import AddClient from "@/components/clients/AddClient";
import ClientTable from "@/components/clients/ClientTable";
import LoadingSpinner from "@/components/portal/LoadingSpinner";
import { useFetchClients } from "@/hooks/clients/actions";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ClientList() {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    isLoading: isLoadingClients,
    data: clients,
    refetch: refetchClients,
  } = useFetchClients();

  const filteredClients = clients?.filter((client) =>
    client?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoadingClients) return <LoadingSpinner />;

  return (
    <>
      <div className="container-fluid px-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link href="/founders/dashboard">Dashboard</Link>
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

          <button className="btn btn-success btn-sm" onClick={handleShow}>
            Add Client
          </button>
          <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="modal-dialog modal-dialog-centered"
          >
            <div className="modal-header">
              <h5 className="modal-title">Add New Client</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <AddClient refetch={refetchClients} closeModal={handleClose} />
            </div>
          </Modal>
        </section>

        <section className="mb-3 col-md-3">
          <input
            type="search"
            name="search"
            id="search"
            className="form-control"
            placeholder="Search Clients"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </section>

        <section className="mb-3">
          <ClientTable clients={filteredClients} />
        </section>
      </div>
    </>
  );
}

export default ClientList;
