import withLayotBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const CS: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Container>MOBILE CS</Container>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">CS</Stack>
      </div>
    );
  }
};

export default withLayotBasic(CS);
