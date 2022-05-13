import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import HomePage from "./home";
import JobPage from "./job";
import MessagePage from "./message";
import NetworkPage from "./network";
import NotificationPage from "./notification";

const Pages = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/notification" element={<NotificationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);