import React, { useState } from "react";
import { Box, Typography, Stack, Chip, Button } from "@mui/material";
import { Favorite, Visibility } from "@mui/icons-material";
import HotelIcon from "@mui/icons-material/Hotel";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import { url } from "inspector";

const PropertyCard = () => {
  const [origin, setOrigin] = useState("center");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setOrigin(`${x}% ${y}%`);
  };
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <Stack className="card-container">
      {cards.map((ele) => {
        return (
          <Box
            sx={{
              width: "295px",
              height: "413px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: 3,
              bgcolor: "#fff",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {/* Image Placeholder */}
            <Box
              sx={{
                height: "246px",
                width: "295px",
                position: "relative",
                backgroundColor: "#ddd",
                backgroundImage: 'url("img/property/bigImage.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.3s ease-in-out",
                transformOrigin: origin,
                "&:hover": {
                  transform: "scale(1.1)", // zoom out effect
                },
              }}
            >
              {/* TOP label */}
              <Chip
                label="TOP"
                // icon={<BoltIcon sx={{ color: "#fff" }} />}
                size="small"
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  bgcolor: "#EF5B25",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "6px",
                }}
              />

              {/* Price */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  bgcolor: "#fff",
                  borderRadius: "8px",
                  px: 1.5,
                  py: 0.5,
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                $14,000
              </Box>
            </Box>

            {/* Content */}
            <Box sx={{ p: 2 }}>
              <Typography fontWeight="bold" fontSize="16px">
                Kingstone Apartment
              </Typography>
              <Typography fontSize="13px" color="gray" mb={1}>
                Busan, City center, 200-5
              </Typography>

              {/* Info */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                {/* Bed */}
                <Stack alignItems="center" spacing={0.3}>
                  <HotelIcon fontSize="small" />
                  <Typography fontSize="12px">3</Typography>
                  <Typography fontSize="12px" color="gray">
                    bed
                  </Typography>
                </Stack>

                {/* Room */}
                <Stack alignItems="center" spacing={0.3}>
                  <MeetingRoomIcon fontSize="small" />
                  <Typography fontSize="12px">7</Typography>
                  <Typography fontSize="12px" color="gray">
                    room
                  </Typography>
                </Stack>

                {/* Area */}
                <Stack alignItems="center" spacing={0.3}>
                  <CropSquareIcon fontSize="small" />
                  <Typography fontSize="12px">170</Typography>
                  <Typography fontSize="12px" color="gray">
                    m2
                  </Typography>
                </Stack>
              </Stack>

              {/* Footer */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" spacing={1}>
                  <Typography fontWeight="bold" fontSize="14px">
                    Rent
                  </Typography>
                  <Typography fontSize="14px" color="gray">
                    Buy
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Visibility fontSize="small" sx={{ color: "gray" }} />
                  <Typography fontSize="14px">100</Typography>
                  <Favorite fontSize="small" sx={{ color: "#EF3E36" }} />
                  <Typography fontSize="14px">100</Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};
export default PropertyCard;
