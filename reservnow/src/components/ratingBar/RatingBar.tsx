import React from "react";
import "./styles.css";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 3,
  borderRadius: 2,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "black" : "black",
  },
}));

interface RatingBarProps {
  starCount: number;
  percentage: number;
}

function RatingBar(props: RatingBarProps) {
  return (
    <div className="rankItem">
      <span style={{ paddingRight: "10px", fontSize: "12px" }}>
        {props.starCount}
      </span>
      <span style={{ width: "100%" }}>
        <BorderLinearProgress variant="determinate" value={props.percentage} />
      </span>
    </div>
  );
}

export default RatingBar;
