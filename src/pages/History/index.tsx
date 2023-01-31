import React, { Children } from "react";
import { Navigation, Footer } from "../../components";

export default function History() {
  return (
    <React.Fragment>
      <Navigation />
      <div>children</div>
      <Footer />
    </React.Fragment>
  );
}
