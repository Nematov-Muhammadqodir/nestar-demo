import withLayotBasic from "@/libs/components/layout/LayoutBasic";
import Filter from "@/libs/components/property/Filter";
import PropertyCard from "@/libs/components/property/PropertyCard";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, Button, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  return (
    <div id="property-list-page" style={{ position: "relative" }}>
      <Stack className="container">
        <Box className="right">
          <span>Sort by</span>
          <div>
            <Button endIcon={<KeyboardArrowDownRoundedIcon />}>New</Button>
          </div>
        </Box>
        <Stack className="main-config">
          <Stack className="sidebar-filter-main">
            <Filter />
          </Stack>
          <Stack className="card-container-main">
            <PropertyCard />
            <Stack>Pagination</Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayotBasic(PropertyList);
