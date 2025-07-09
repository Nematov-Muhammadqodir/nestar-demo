import withLayotBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Container>MOBILE PROPERTY DETAIL</Container>;
  } else {
    return (
      <>
        <Container>PROPERTY DETAIL</Container>
      </>
    );
  }
};

export default withLayotBasic(PropertyList);
