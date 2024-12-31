"use client";
import UpdateClient from "@/components/clients/UpdateClient";
import LoadingSpinner from "@/components/portal/LoadingSpinner";
import CreateSession from "@/components/therapysessions/CreateSession";
import TherapySessionTable from "@/components/therapysessions/TherapySessionTable";
import { useFetchClientDetail } from "@/hooks/clients/actions";
import extractDate from "@/hooks/useDateFormat";
import Link from "next/link";
import React, { use, useState } from "react";
import Modal from "react-bootstrap/Modal";

function ClientDetail({ params }) {
  const clientSlug = use(params);
  const slug = clientSlug?.clientSlug;

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseModal = () => setOpen(false);
  const handleOpenModal = () => setOpen(true);

  const {
    isLoading: isLoadingClientDetail,
    data: client,
    refetch: refetchClientDetail,
  } = useFetchClientDetail(slug);

  console.log(client);

  if (isLoadingClientDetail) return <LoadingSpinner />;

  return (
    <div className="container-fluid px-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <Link href="/founders/clients">All Clients</Link>
          </li>

          <li className="breadcrumb-item active" aria-current="page">
            {client?.name}
          </li>
        </ol>
      </nav>

      <section className="d-flex justify-content-between align-items-center">
        <h3 className="fw-semibold">{client?.name}</h3>

        <div className="d-flex gap-2">
          <button onClick={handleShow} className="btn btn-success btn-sm">
            New Session
          </button>
          <button
            onClick={handleOpenModal}
            className="btn btn-outline-success btn-sm"
          >
            Update
          </button>
        </div>
      </section>

      <section className="mb-3 mt-3">
        <div className="card">
          <div className="card-body">
            <p className="card-text mb-1">
              <strong>Contact:</strong> {client?.contact}
            </p>
            <p className="card-text mb-1">
              <strong>Email:</strong> {client?.email}
            </p>
            <p className="card-text mb-1">
              <strong>Gender:</strong> {client?.gender}
            </p>
            <p className="card-text mb-1">
              <strong>Emergency Contact:</strong> {client?.emergency_contact}
            </p>
            <p className="card-text mb-1">
              <strong>Client Since:</strong> {extractDate(client?.created_at)}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-3">
        <h6 className="fw-semibold">Client Sessions</h6>

        {client?.sessions?.length > 0 ? (
          <TherapySessionTable therapySessions={client?.sessions} />
        ):(
          <p className="text-muted">No sessions found for this client</p>
        )}
      </section>

      {/* Modals */}
      {/* update client */}
      <Modal
        show={open}
        onHide={handleCloseModal}
        dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
      >
        <div className="modal-header">
          <h5 className="modal-title">Update Client</h5>
          <button
            type="button"
            className="btn-close"
            onClick={handleCloseModal}
          ></button>
        </div>

        <div className="modal-body">
          <UpdateClient
            client={client}
            refetch={refetchClientDetail}
            slug={slug}
            closeModal={handleCloseModal}
          />
        </div>
      </Modal>

      {/* new session */}
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
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
          <CreateSession
            client={client}
            refetch={refetchClientDetail}
            closeModal={handleClose}
          />
        </div>
      </Modal>
    </div>
  );
}

export default ClientDetail;
