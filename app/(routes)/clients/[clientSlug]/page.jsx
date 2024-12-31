"use client";
import LoadingSpinner from "@/components/portal/LoadingSpinner";
import CreateSession from "@/components/therapysessions/CreateSession";
import { useFetchClientDetail } from "@/hooks/clients/actions";
import Link from "next/link";
import React, { use, useState } from "react";
import Modal from "react-bootstrap/Modal";

function ClientDetail({ params }) {
  const clientSlug = use(params);
  const slug = clientSlug?.clientSlug;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    isLoading: isLoadingClientDetail,
    data: client,
    refetch: refetchClientDetail,
  } = useFetchClientDetail(slug);

  if (isLoadingClientDetail) return <LoadingSpinner />;

  return (
    <div className="container-fluid px-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <Link href="/clients">Client</Link>
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
          <button className="btn btn-outline-success btn-sm">Update</button>
        </div>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
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
