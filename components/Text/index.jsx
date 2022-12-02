import styled from "@mui/material/styles/styled";
import { Typography } from "@mui/material";
import { textAnimate } from "../../styles/globalCSS";

const Content = styled(Typography)((props) => ({
  fontFamily: props.bold ? "AvertaBold" : "Averta",
  textAlign: props.textAlign,
  lineHeight: props.lineHeight,
  fontWeight:props.fontWeight,
  letterSpacing: props.letterSpacing,
  margin:props.margin,
  fontSize: `${props.fontSize}`,
  animation: `${textAnimate(props)} ${props.duration || "1s"} ease ${props.delay || "0s"}`,
}));

const Text = (props) => {
  const {
    content,
    startX,
    endX,
    startY,
    endY,
    duration,
    delay,
    fontSize,
    bold,
    letterSpacing,
    textAlign,
    lineHeight,
    fontWeight,
    margin
  } = props;

  return (
    <Content
      startX={startX}
      endX={endX}
      startY={startY}
      endY={endY}
      duration={duration}
      delay={delay}
      fontSize={fontSize || "13px"}
      textAlign={textAlign || "justify"}
      bold={bold}
      letterSpacing={letterSpacing || "0.1em"}
      lineHeight={lineHeight || "40px"}
      fontWeight={fontWeight}
      margin={margin}
    >
      {content}
    </Content>
  );
};

export default Text;
