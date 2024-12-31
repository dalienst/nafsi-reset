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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

          <button
            className="btn btn-success btn-sm"
            onClick={handleShow}
          >
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

        <section className="mb-3">
          <ClientTable clients={clients} />
        </section>
      </div>
    </>
  );
}

export default ClientList;
