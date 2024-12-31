import Link from "next/link";
import React from "react";

function TherapySessionTable({ therapySessions }) {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Therapist</th>
              <th>Client</th>
              <th>Status</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {therapySessions?.map((therapySession, index) => (
              <tr key={therapySession.id}>
                <td>{index + 1}</td>
                <td>{therapySession?.therapist?.name}</td>
                <td>{therapySession?.client_detail?.name}</td>
                <td>{therapySession?.status}</td>
                <td>{therapySession?.start_time}</td>
                <td>{therapySession?.end_time}</td>
                <td>
                  <Link href={`/therapy-sessions/${therapySession?.slug}`}>
                    <i className="bi bi-pencil-square text-success"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TherapySessionTable;
