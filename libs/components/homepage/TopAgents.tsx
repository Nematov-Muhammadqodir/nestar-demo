import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TopAgentsCard from "./TopAgentCard";

const TopAgents = ({ initialInput = [1, 2, 3, 4, 5, 6, 7], ...props }: any) => {
  const [topProperties, setTopProperties] = useState<number[]>(initialInput);

  return (
    <Stack className="top-agents">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Top Agents</span>
            <p>Our Top Agents always ready to serve you</p>
          </Box>
          <Box className="right">
            <div className="more-box">
              <span>See All Agents</span>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className="wrapper">
          <Box className="switch-btn swiper-agents-prev">
            <ArrowBackIosNewIcon />
          </Box>
          <Box className="card-wrapper">
            <Swiper
              className="top-agents-swiper"
              slidesPerView={"auto"}
              spaceBetween={29}
              navigation={{
                nextEl: ".swiper-agents-next",
                prevEl: ".swiper-agents-prev",
              }}
              pagination={{
                el: ".swiper-top-pagination",
              }}
            >
              {topProperties.map((property, index) => {
                return (
                  <SwiperSlide className="top-agents-slide" key={index}>
                    <TopAgentsCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Box className="switch-btn swiper-agents-next">
            <ArrowBackIosNewIcon />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

TopAgents.defaultProps = {
  initialInput: [1, 2, 3, 4, 5, 6, 7],
};

export default TopAgents;

// Our Top Agents always ready to serve you
