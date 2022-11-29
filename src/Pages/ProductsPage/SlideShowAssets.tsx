import { Typography, Card, Box } from "@mui/material";
import invoiceImage from "../../assets/Invoice-Investment-PNG.png";
import chargerImage from "../../assets/63641b4a650a2e04a08270a9_csms hero image.png";
import softwareImage from "../../assets/toppng.com-website-designing-and-software-development-company-675x717.png";
import AliceCarousel from "react-alice-carousel";
import managamentImage from "../../assets/energy-management-software-development.png";
import "react-alice-carousel/lib/alice-carousel.css";
export interface SlideShowAssetsProps {
  slideRef: any;
}

export const SlideShowAssets = (props: SlideShowAssetsProps) => {
  const { slideRef } = props;

  const items = [
    <img width="400" height="auto" src={softwareImage} />,
    <img width="400" height="auto" src={chargerImage} />,
    <img width="400" height="auto" src={managamentImage} />,
    <img width="400" height="auto" src={invoiceImage} />,
  ];

  return (
    <Box
      sx={{ display: "flex", flex: 1, maxWidth: "400px", maxHeight: "600px" }}
    >
      <AliceCarousel
        ref={slideRef}
        animationType="slide"
        disableButtonsControls
        disableDotsControls
        animationDuration={800}
        items={items}
      />
    </Box>
  );
};
