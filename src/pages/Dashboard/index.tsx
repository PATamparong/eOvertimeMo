import React from "react";
import { Navigation, Footer } from "../../components";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Navigation />
      <div>children</div>
      <Footer />
    </React.Fragment>
  );
}
