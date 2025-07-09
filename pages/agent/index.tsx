import withLayotBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const AgentList: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Container>MOBILE AGENT LIST</Container>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">AGENT LIST</Stack>
      </div>
    );
  }
};

export default withLayotBasic(AgentList);
