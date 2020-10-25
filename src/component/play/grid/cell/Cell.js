import React from "react";
import styles from "./Cell.module.css";
import { heatmap } from "../../../constant/Constant";

const Cell = (props) => {
  const { gradient, isHeatmap } = props;

  let color;
  if (isHeatmap) {
    color = heatmap[gradient >= heatmap.length ? heatmap.length - 1 : gradient];
  } else {
    color = gradient === 0 ? "white": "black";
  }

  return <div onClick={props.clicked} style={{backgroundColor: color}} className={styles.cell}></div>;
};

export default Cell;
