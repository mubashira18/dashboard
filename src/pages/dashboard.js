import React from "react";
import Sidebar from "../components/sidebar";
import Graph from "../components/graph";
import Container from "../components/container";
export const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Container/>
        <Graph />
      </div>
    </>
  );
};
