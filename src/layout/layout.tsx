import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";

const Layout = (props: any) => {
  return (
    <Fragment>
      <Helmet>
        <title>{props?.title}</title>
      </Helmet>
      <body className="bg-app-white font-mont">
        <Header />
        <main>
          {props.children}
        </main>
        <Footer />
      </body>
      <div className="bg-app-primary"></div>
    </Fragment>
  );
};

export default Layout;
