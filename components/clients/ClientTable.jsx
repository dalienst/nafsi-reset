"use client";
import Link from "next/link";
import React from "react";

function ClientTable({ clients }) {
  return (
    <>
      {clients?.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Emergency Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients?.map((client, index) => (
                <tr key={client?.id}>
                  <td>{index + 1}</td>
                  <td>{client?.name}</td>
                  <td>{client?.contact}</td>
                  <td>{client?.email}</td>
                  <td>{client?.dob}</td>
                  <td>{client?.gender}</td>
                  <td>{client?.emergency_contact}</td>
                  <td>
                    <Link href={`/founders/clients/${client?.slug}`}>
                      <i className="bi bi-pencil-square text-success"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-info">
          <i className="bi bi-info-circle"></i> No Clients Found
        </div>
      )}
    </>
  );
}

export default ClientTable;
