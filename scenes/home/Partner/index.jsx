import Box from "@mui/material/Box";
import Text from "../../../components/Text";
import Image from "../../../components/image";
import { useMemo, memo } from "react";

const srcPartner = [
  "/images/apple.png",
  "/images/aws.png",
  "/images/lazada.png",
  "/images/marvel.png",
  "/images/meta.png",
  "/images/microsoft.png",
  "/images/samsung.png",
  "/images/shopee.png",
  "/images/sony.png",
  "/images/tesla.png",
  "/images/tiki.png",
  "/images/twitter.png",
];

const Partner = () => {
  const LIST_PARTNER = useMemo(() => {
    return srcPartner.map((item, index) => {
      return (
        <Box
          sx={{
            width: "25%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <Image key={index} imagePath={item} width={100} height={100} hoverEnabled={true} />
        </Box>
      );
    });
  }, [srcPartner]);
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "80%", paddingTop: "50px" }}>
        <Text content={"Partner"} fontSize={"40px"} />
        <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>{LIST_PARTNER}</Box>
      </Box>
    </Box>
  );
};

export default memo(Partner);
