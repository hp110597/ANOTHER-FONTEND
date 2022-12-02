import { Box } from "@mui/material";
import styled from "@mui/material/styles/styled";
import NextImage from "next/image";
import { useCallback, useMemo, useState } from "react";
import { textAnimate } from "../../styles/globalCSS";
import styles from "./style.module.css";

const StyledBox = styled(Box)((props) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: props.width,
  height: props.height,
  cursor: "pointer",
  "&:hover": props.hoverEnabled
    ? {
      borderRadius: "50%",
      boxShadow: "0px 5px 30px rgba(81, 33, 98, 0.4)",
    }
    : undefined,
  animation: `${textAnimate(props)} ${props.duration || "1s"} ease ${props.delay || "0s"}`,
}));

const Image = (props) => {
  const {
    startX,
    endX,
    startY,
    endY,
    duration,
    delay,
    width,
    height,
    imagePath,
    hoverEnabled,
    isCircleAround,
  } = props;
  const [circle, setCircle] = useState("/images/Vector1.png");
  const handleEnterMouse = useCallback(() => {
    setCircle("/images/Vector2.png");
  }, []);
  const handleLeaveMouse = useCallback(() => {
    setCircle("/images/Vector1.png");
  }, []);
  const CIRCLEAROUND = useMemo(() => {
    if (isCircleAround) {
      return (
        <div
          className={styles.imageCircle}
          onMouseEnter={handleEnterMouse}
          onMouseLeave={handleLeaveMouse}
        >
          <NextImage src={circle} alt="#" width={props.width - 20} height={props.height - 40} />
        </div>
      );
    }
    return;
  }, [circle]);

  return (
    <StyledBox
      startX={startX}
      endX={endX}
      startY={startY}
      endY={endY}
      width={width}
      height={height}
      duration={duration}
      delay={delay}
      hoverEnabled={hoverEnabled}
    >
      <NextImage
        src={imagePath}
        alt="Picture"
        width={hoverEnabled ? props.width - 20 : props.width}
        height={hoverEnabled ? props.height - 20 : props.height}
      />
      {CIRCLEAROUND}
    </StyledBox>
  );
};

export default Image;
