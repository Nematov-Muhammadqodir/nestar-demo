import * as React from "react";

import withLayotBasic from "@/libs/components/layout/LayoutBasic";
import Filter from "@/libs/components/property/Filter";
import PropertyCard from "@/libs/components/property/PropertyCard";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, Button, Container } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  return (
    <div
      id="property-list-page"
      style={{
        position: "relative",
        background: "whitesmoke",
        marginTop: "40px",
      }}
    >
      <Stack className="container">
        <Box className="right">
          <span>Sort by</span>
          <div>
            <Button endIcon={<KeyboardArrowDownRoundedIcon />}>New</Button>
          </div>
        </Box>
        <Stack className="main-config">
          <Stack
            className="sidebar-filter-main"
            sx={{ background: "white", borderRadius: "8px", boxShadow: 3 }}
          >
            <Filter />
          </Stack>
          <Stack className="card-container-main">
            <PropertyCard />
            <Stack spacing={2} className="pagination-container">
              <Pagination
                count={5}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
            <Stack className="property-count">
              <span>Total 0 property available</span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayotBasic(PropertyList);
