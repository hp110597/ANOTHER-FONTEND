import { keyframes } from "@mui/material";
const textAnimate = (props) => keyframes`
    0% {
        transform: translateX(${props.startX || 0}) translateY(${props.startY || 0});
        opacity:0;
    }
    100%{
        transform: translateX(${props.endX || 0}) translateY(${props.endY || 0});
        opacity: 1;
    }
`;

export { textAnimate };
