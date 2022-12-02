import { Box } from "@mui/material";
import { memo, useEffect, useState } from "react";
import Image from "../../../components/image";
import Text from "../../../components/Text";

const Footer = (props) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [positionXLeft, setPositionXLeft] = useState(-100); //43
  const [positionYLeft, setPositionYLeft] = useState(-345); //35
  const [positionXRight, setPositionXRight] = useState(100); //52
  const [positionYRight, setPositionYRight] = useState(-100); //19
  const [opacityFrame,setOpacityFrame] = useState(0)

  useEffect(() => {
    setScreenWidth(screen.width);
    if (props.index >= 2.5) {
      setPositionXLeft( props.index * 10.6);
      setPositionYLeft(- 0.01*(props.index) * 0.05+35);
      setPositionXRight( 100 - props.index*12);
      setPositionYRight(-100 + props.index*30 );
      setOpacityFrame(0+0.25*props.index)
      console.log(opacityFrame);
      // console.log('Xright',positionXRight);
      // console.log('Yright',positionYRight);
    }
  }, [props.index]);
  return (
    <Box className="footer" sx={{ height: "100vh", padding: "10% 10%" }}>
      <Text
        margin={`0 0 30px 0`}
        fontWeight={"light"}
        content={"Contact"}
        fontSize={`${screenWidth * 0.02}px`}
      />
      <Text
        margin={"0 0 50px 0"}
        content={"Số điện thoại: 0123456789"}
        fontSize={"24px"}
      />
      <Text
        margin={"0 0 50px 0"}
        content={"Email: another@gmail.com"}
        fontSize={"24px"}
      />
      <Text
        margin={"0 0 180px 0"}
        content={"Địa chỉ: 285 cách mạng tháng 8, phường 12, quận 10, Tp.HCM"}
        fontSize={"24px"}
      />
      <Box className="footer-logo" sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            left: `${positionXLeft}%`,
            top: `${positionYLeft}%`,
          }}
        >
          <Image
            className={"logo_left"}
            imagePath={"/images/an-logo.png"}
            width={screenWidth * 0.06}
            height={screenWidth * 0.027}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: `${positionXRight}%`,
            top: `${positionYRight}%`,
          }}
        >
          <Image
            className={"logo_right"}
            imagePath="/images/other-logo.png"
            width={screenWidth * 0.04}
            height={screenWidth * 0.052}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity:opacityFrame
          }}
        >
          <Image
            className={"logo_frame "}
            imagePath="/images/frame-logo 1.png"
            width={screenWidth * 0.1}
            height={screenWidth * 0.1}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Footer);
