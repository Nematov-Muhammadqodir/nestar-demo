import withLayotBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Container>MOBILE COMMUNITY</Container>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">COMMUNITY</Stack>
      </div>
    );
  }
};

export default withLayotBasic(Community);
