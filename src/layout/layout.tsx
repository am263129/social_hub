import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const Layout = (props:any) => {
  return (
    <Fragment>
      <Helmet>
        <title>{props?.title}</title>
      </Helmet>
      <div className="bg-app-primary"></div>
    </Fragment>
  );
};

export default Layout;
