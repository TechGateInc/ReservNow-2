"use client";

import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ReviewFilterSelector() {
  const [age, setAge] = React.useState("most recent");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, outline: "none" }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          style={{
            borderRadius: "20px",
            height: "30px",
            borderColor: "grey",
            fontSize: "12px",
            outline: "none",
          }}
        >
          <MenuItem value={"most recent"} style={{ fontSize: "14px" }}>
            Most Recent
          </MenuItem>
          <MenuItem value={20} style={{ fontSize: "14px" }}>Highest Rated</MenuItem>
          <MenuItem value={30} style={{ fontSize: "14px" }}>Lowest Rated</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ReviewFilterSelector;
