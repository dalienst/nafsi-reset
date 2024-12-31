"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createTherapySession } from "@/services/therapysessions";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CreateSession({ client, refetch, closeModal }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <Formik
      initialValues={{
        client: client?.reference,
        date: "",
        start_time: "",
        end_time: "",
        session_type: "",
        status: "",
        fee: "",
        payment_status: "",
        payment_method: "",
        notes: "",
        goals: "",
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          await createTherapySession(values, axios);
          toast?.success("Session created successfully");
          refetch();
          closeModal();
        } catch (error) {
          if (error?.response?.data?.non_field_errors[0]) {
            toast?.error(error?.response?.data?.non_field_errors[0]);
          } else {
            toast?.error("Error creating session");
          }
        } finally {
          setLoading(false);
          // closeModal();
        }
      }}
    >
      {({ touched }) => (
        <Form>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3">
              <label htmlFor="client" className="form-label fw-bold">
                Client
              </label>
              <Field
                value={client?.name}
                type="text"
                className="form-control"
                id="client"
                name="client"
                placeholder={client?.name}
                disabled
              />
            </div>

            <div className="col-md-6 col-sm-12 mb-3">
              <label htmlFor="date" className="form-label fw-bold">
                Date
              </label>
              <Field
                type="date"
                className="form-control"
                id="date"
                name="date"
                placeholder="Select Date"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3">
              <label htmlFor="start_time" className="form-label fw-bold">
                Start Time
              </label>
              <Field
                type="time"
                className="form-control"
                id="start_time"
                name="start_time"
                placeholder="Select Start Time"
              />
            </div>

            <div className="col-md-6 col-sm-12 mb-3">
              <label htmlFor="end_time" className="form-label fw-bold">
                End Time
              </label>
              <Field
                type="time"
                className="form-control"
                id="end_time"
                name="end_time"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3">
              <label htmlFor="session_type" className="form-label fw-bold">
                Session Type
              </label>
              <Field as="select" name="session_type" className="form-select">
                <option value="">Select Session Type</option>
                <option value="Online">Individual - Online</option>
                <option value="Physical">Individual - Physical</option>
                <option value="Group">Group</option>
                <option value="Couples">Couples</option>
              </Field>
            </div>

            <div className="col-md-6 col-sm-12 mb-3">
              <label htmlFor="status" className="form-label fw-bold">
                Status
              </label>
              <Field as="select" name="status" className="form-select">
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Rescheduled">Rescheduled</option>
                <option value="No Show">No Show</option>
              </Field>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-sm-12 mb-3">
              <label htmlFor="fee" className="form-label fw-bold">
                Session Fee
              </label>
              <Field
                type="number"
                className="form-control"
                id="fee"
                name="fee"
                placeholder="Enter Session Fee"
              />
            </div>

            <div className="col-md-4 col-sm-12 mb-3">
              <label htmlFor="payment_status" className="form-label fw-bold">
                Payment Status
              </label>
              <Field as="select" name="payment_status" className="form-select">
                <option value="">Select Payment Status</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </Field>
            </div>

            <div className="col-md-4 col-sm-12 mb-3">
              <label htmlFor="payment_method" className="form-label fw-bold">
                Payment Method
              </label>
              <Field as="select" name="payment_method" className="form-select">
                <option value="">Select Payment Method</option>
                <option value="Cash">Cash</option>
                <option value="Mobile Transfer">Mobile Transfer</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </Field>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="notes" className="form-label fw-bold">
              Notes
            </label>
            <Field
              as="textarea"
              className="form-control"
              id="notes"
              name="notes"
              placeholder="Enter Notes"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="goals" className="form-label fw-bold">
              Session Goals
            </label>
            <Field
              as="textarea"
              className="form-control"
              id="goals"
              name="goals"
              placeholder="Enter Session Goals"
            />
          </div>

          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? "Creating Session..." : "Create Session"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CreateSession;
