import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Checkbox from "@mui/joy/Checkbox";
import { useState } from "react";

const Filter = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const options = [0, 50, 100, 200, 300, 400, 500];
  return (
    <Stack className="sidebar-filter-container">
      <Stack className="find-home-container">
        <span>Find your home</span>
        <Stack className="input-container">
          <input type="text" placeholder="What are you looking for" />
          <RefreshIcon />
        </Stack>
      </Stack>
      <Stack className="location-container">
        <span>Location</span>
        <Stack className="checkbox-container-main">
          <Stack className="checkbox-container">
            <input type="checkbox" />
            <span>SEOUL</span>
          </Stack>
          <Stack className="checkbox-container">
            <input type="checkbox" />
            <span>BUSAN</span>
          </Stack>
          <Stack className="checkbox-container">
            <input type="checkbox" />
            <span>INCHEON</span>
          </Stack>
          <Stack className="checkbox-container">
            <input type="checkbox" />
            <span>DAEGU</span>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="location-container">
        <span>Property Type</span>
        <Stack className="checkbox-container-main">
          <Stack className="checkbox-container">
            <input type="checkbox" />
            <span>APARTMENT</span>
          </Stack>
          <Stack className="checkbox-container">
            <input type="checkbox" />
            <span>VILLA</span>
          </Stack>
          <Stack className="checkbox-container">
            <input type="checkbox" />
            <span>HOUSE</span>
          </Stack>
        </Stack>
      </Stack>

      <Stack className="room-selector-container">
        <span>Rooms</span>
        <Stack className="toggle-button-container">
          <div className="first-child">Any</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>5+</div>
          <div className="last-child">1</div>
        </Stack>
      </Stack>
      <Stack className="room-selector-container" sx={{ mt: "30px" }}>
        <span>Bedrooms</span>
        <Stack className="toggle-button-container">
          <div className="first-child">Any</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>5+</div>
          <div className="last-child">1</div>
        </Stack>
      </Stack>

      <Stack className="location-container" sx={{ mt: "30px" }}>
        <span>Options</span>
        <Stack className="checkbox-container-main">
          <Stack className="checkbox-container">
            <input type="checkbox" />
            <span>Buy</span>
          </Stack>
          <Stack className="checkbox-container">
            <input type="checkbox" />
            <span>Rent</span>
          </Stack>
        </Stack>
      </Stack>

      <Box sx={{ width: "100%" }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Square Meter
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel>Min</InputLabel>
            <Select
              value={min}
              label="Min"
              onChange={(e) => setMin(e.target.value)}
              sx={{
                backgroundColor: "#fff",
                minWidth: "100px",
                borderRadius: "8px",
                border: "1px solid black",
              }}
            >
              {options.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography>-</Typography>

          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel>Max</InputLabel>
            <Select
              value={max}
              label="Max"
              onChange={(e) => setMax(e.target.value)}
              sx={{
                backgroundColor: "#fff",
                minWidth: "100px",
                borderRadius: "8px",
                border: "1px solid black",
              }}
            >
              {options.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box sx={{ width: "100%", mt: "30px" }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Price Range
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel>Min</InputLabel>
            <Select
              value={min}
              label="Min"
              onChange={(e) => setMin(e.target.value)}
              sx={{
                backgroundColor: "#fff",
                minWidth: "100px",
                borderRadius: "8px",
                border: "1px solid black",
              }}
            >
              {options.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography>-</Typography>

          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel>Max</InputLabel>
            <Select
              value={max}
              label="Max"
              onChange={(e) => setMax(e.target.value)}
              sx={{
                backgroundColor: "#fff",
                minWidth: "100px",
                borderRadius: "8px",
                border: "1px solid black",
              }}
            >
              {options.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Stack>
  );
};
export default Filter;
