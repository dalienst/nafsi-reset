"use client";
import React, { use } from "react";

function ClientDetail({ params }) {
  const clientSlug = use(params);
  const slug = clientSlug?.clientSlug;
  
  return <div>ClientDetail</div>;
}

export default ClientDetail;
