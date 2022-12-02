import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import { useCallback, useState, memo } from "react";
import Image from "../../../components/image";
import Text from "../../../components/Text";
import colors from "../../../theme/color";

const StyledBoxParent = styled(Box)(() => ({
  width: "72vw",
  height: "100vh",
  color: "#000000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8%",
}));

const StyledBoxChild = styled(Box)(() => ({
  width: "100%",
  height: "31%",
  borderRadius: "20px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  padding: "30px",
  border: "2px solid #000000",
  transition: "all linear 0.5s",
  "&:hover": {
    color: `${colors.secondaryText}`,
    backgroundColor: `${colors.secondaryBackground}`,
  },
}));

const AboutBrand = () => {
  const [srcFirstItem, setSrcFirstItem] = useState("/images/Rectangle1.png");
  const [srcSecondItem, setSrcSecondItem] = useState("/images/Rectangle2.png");
  const handleHover = useCallback((index) => {
    if (index == 0) {
      setSrcFirstItem("/images/AnimatedImage.png");
    } else {
      setSrcSecondItem("/images/AnimatedImage2.png");
    }
  }, []);

  const handleMouseLeave = useCallback((index) => {
    if (index == 0) {
      setSrcFirstItem("/images/Rectangle1.png");
    } else {
      setSrcSecondItem("/images/Rectangle2.png");
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledBoxParent>
        <StyledBoxChild
          onMouseEnter={handleHover.bind(AboutBrand, 0)}
          onMouseLeave={handleMouseLeave.bind(AboutBrand, 0)}
        >
          <Box mt={1} sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <Text
              fontSize={"40px"}
              fontWeightBold={true}
              letterSpacing={"0.1em"}
              content={"Who we are"}
            />
            <Text
              fontSize={"24px"}
              letterSpacing={"0.1em"}
              content={"Another là hệ thống quản lý KOLs theo cách riêng"}
            />
          </Box>
          <Image
            imagePath={srcFirstItem}
            width={300}
            height={300}
            hoverEnabled={false}
            isCircleAround={false}
          ></Image>
        </StyledBoxChild>
        <StyledBoxChild
          onMouseEnter={handleHover.bind(AboutBrand, 1)}
          onMouseLeave={handleMouseLeave.bind(AboutBrand, 1)}
        >
          <Image
            imagePath={srcSecondItem}
            width={285}
            height={285}
            hoverEnabled={false}
            isCircleAround={false}
          ></Image>
          <Box mt={1} sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <Text
              fontSize={"40px"}
              fontWeightBold={true}
              letterSpacing={"0.1em"}
              content={"Values"}
              textAlign={"right"}
            />
            <Text
              fontSize={"24px"}
              letterSpacing={"0.1em"}
              content={"Giá trị - vững bền - thương hiệu cá nhân"}
              textAlign={"right"}
            />
          </Box>
        </StyledBoxChild>
      </StyledBoxParent>
    </Box>
  );
};

export default memo(AboutBrand);
