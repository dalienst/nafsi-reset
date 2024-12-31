"use client";
import LoadingSpinner from "@/components/portal/LoadingSpinner";
import { useFetchTherapySessionDetail } from "@/hooks/therapysessions/actions";
import Link from "next/link";
import React, { use } from "react";

function TherapySessionDetail({ params }) {
  const sessionSlug = use(params);
  const slug = sessionSlug?.sessionSlug;

  const {
    isLoading: isLoadingTherapySessionDetail,
    data: therapySession,
    refetch: refetchTherapySessionDetail,
  } = useFetchTherapySessionDetail(slug);


  if (isLoadingTherapySessionDetail) return <LoadingSpinner />;

  return (
    <>
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link href="/founders/therapy-sessions">
                All Therapy Sessions
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Therapy Session Detail
            </li>
          </ol>
        </nav>

        <div className="container py-5">
          <div className="card rounded-0 py-3">
            <div className="card-body">
              <section className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <div>
                  <h3 className="card-title">Therapy Session</h3>
                  <h5 className="card-title text-success">
                    {therapySession?.client_detail?.name}
                  </h5>
                  <p className="card-text mb-0">
                    {therapySession?.client_detail?.email}
                  </p>
                  <p className="card-text mb-3">
                    {therapySession?.client_detail?.contact}
                  </p>
                </div>

                <div>
                  <p className="card-text mb-0 text-muted fw-semibold">
                    #{therapySession?.reference}
                  </p>
                  <p className="card-text mb-0">
                    <strong>Session Type: </strong>
                    {therapySession?.session_type}
                  </p>
                  <p className="card-text mb-0">
                    <strong>Status: </strong>
                    {therapySession?.status}
                  </p>
                  <p className="card-text mb-0">
                    <strong>Date: </strong>
                    {therapySession?.date}
                  </p>
                </div>
              </section>

              <hr className="text-success" />

              <section className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <div>
                  <p className="card-text mb-1 text-decoration-underline">
                    Therapist Incharge:
                  </p>
                  <h5 className="card-title text-success">
                    {therapySession?.therapist?.name}
                  </h5>
                  <p className="card-text mb-0">
                    {therapySession?.therapist?.email}
                  </p>

                  <p className="card-text mb-3">
                    {therapySession?.start_time} - {therapySession?.end_time}
                  </p>
                </div>

                <div>
                  <p className="card-text mb-1 text-decoration-underline">
                    Payment Information
                  </p>
                  <p className="card-text mb-0">
                    <strong>Fees: </strong>
                    {therapySession?.fee}
                  </p>
                  <p className="card-text mb-0">
                    <strong>Payment Method: </strong>
                    {therapySession?.payment_method}
                  </p>
                  <p className="card-text mb-0">
                    <strong>Payment Status: </strong>
                    {therapySession?.payment_status}
                  </p>
                </div>
              </section>

              <hr className="text-success" />

              <section className="mb-3">
                <div className="mb-3">
                  <h6 className="card-title">Notes</h6>
                  <p className="card-text">{therapySession?.notes}</p>
                </div>

                <div className="mb-3">
                  <h6 className="card-title">Goals</h6>
                  <p className="card-text">{therapySession?.goals}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TherapySessionDetail;
