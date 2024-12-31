"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createTherapySession } from "@/services/therapysessions";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CreateSession({ client, refetch }) {
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
        client_feedback: "",
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          await createTherapySession(values, axios);
          toast?.success("Session created successfully");
          refetch();
        } catch (error) {
          toast?.error("Error creating session");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ touched }) => (
        <Form>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3">
              <label htmlFor="client" className="form-label">
                Client
              </label>
              <Field
                value={client?.reference}
                type="text"
                className="form-control"
                id="client"
                name="client"
                placeholder={client?.name}
                disabled
              />
            </div>

            <div className="col-md-6 col-sm-12 mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <Field
                type="date"
                className="form-control"
                id="date"
                name="date"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3">
              <label htmlFor="start_time" className="form-label">
                Start Time
              </label>
              <Field
                type="time"
                className="form-control"
                id="start_time"
                name="start_time"
              />
            </div>

            <div className="col-md-6 col-sm-12 mb-3">
              <label htmlFor="end_time" className="form-label">
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
              <label htmlFor="session_type" className="form-label">
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
              <label htmlFor="status" className="form-label">
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
              <label htmlFor="fee" className="form-label">
                Session Fee
              </label>
              <Field
                type="number"
                className="form-control"
                id="fee"
                name="fee"
              />
            </div>

            <div className="col-md-4 col-sm-12 mb-3">
              <label htmlFor="payment_status" className="form-label">
                Payment Status
              </label>
              <Field as="select" name="payment_status" className="form-select">
                <option value="">Select Payment Status</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </Field>
            </div>

            <div className="col-md-4 col-sm-12 mb-3">
              <label htmlFor="payment_method" className="form-label">
                Payment Method
              </label>
              <Field
                type="text"
                className="form-control"
                id="payment_method"
                name="payment_method"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="notes" className="form-label">
              Notes
            </label>
            <Field
              as="textarea"
              className="form-control"
              id="notes"
              name="notes"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="goals" className="form-label">
              Session Goals
            </label>
            <Field
              as="textarea"
              className="form-control"
              id="goals"
              name="goals"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="client_feedback" className="form-label">
              Client Feedback
            </label>
            <Field
              as="textarea"
              className="form-control"
              id="client_feedback"
              name="client_feedback"
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
