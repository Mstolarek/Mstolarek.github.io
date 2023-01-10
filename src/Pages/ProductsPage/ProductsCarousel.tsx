import { Box, Theme, Typography, useMediaQuery } from "@mui/material";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import chargerImage from "../../assets/2-evse2.png";
import softwareImage from "../../assets/3-cms.png";
import managamentImage from "../../assets/4-dynamic-load2.png";
import calendarImage from "../../assets/calendar.svg";
import headImage from "../../assets/head.svg";
import invoiceImage from "../../assets/Invoice-Investment-PNG.png";
import energyImage from "../../assets/renew.svg";
import { palette } from "../../Constants/theme";
import { ListTypography } from "./subComponents/ListTypography";

export const ProductsCarousel = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const items = [
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {isMobile ? (
        <img width="300" height="auto" src={chargerImage} />
      ) : (
        <img width="500" height="auto" src={chargerImage} />
      )}
      <Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img height="auto" src={energyImage} />
            <Typography
              variant="h5"
              color={palette.text.contrast}
              sx={{ fontWeight: "600" }}
            >
              EVSE firmware / software
            </Typography>
          </Box>

          <ListTypography content="Kiosk mode for Android/Linux based screens" />
          <ListTypography content="OCPP implementation" />
          <ListTypography content="MODBUS/CAN implementation" />
          <ListTypography content="IoT cloud integration" />
          <ListTypography content="UI/UX design and flow optimisation" />
          <ListTypography content="Remote updates & maintenance" />
          <ListTypography content="MDM (mobile device management) integration" />
        </Box>
      </Box>
    </Box>,
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {isMobile ? (
        <img width="300" height="auto" src={softwareImage} />
      ) : (
        <img width="500" height="auto" src={softwareImage} />
      )}
      <Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img height="auto" src={energyImage} />
            <Typography
              variant="h5"
              color={palette.text.contrast}
              sx={{ fontWeight: "600" }}
            >
              CSMS Chargers Management Systems
            </Typography>
          </Box>
          <ListTypography content="Availability of the chargers" />
          <ListTypography content="Transactions / loading" />
          <ListTypography content="Monitoring and alerting" />
          <ListTypography content="Web dashboards" />
          <ListTypography content="Mobile client app" />
          <ListTypography content="Backoffice for admins and operators" />
          <ListTypography content="Multitenant solutions – SaaS or On-Premises installations" />
          <ListTypography content="External tools integrations with the use of webhooks" />
          <ListTypography content="OCPI implementation" />
        </Box>
      </Box>
    </Box>,
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {isMobile ? (
        <img width="300" height="auto" src={managamentImage} />
      ) : (
        <img width="350" height="auto" src={managamentImage} />
      )}
      <Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img height="auto" src={headImage} />
            <Typography
              variant="h5"
              color={palette.text.contrast}
              sx={{ fontWeight: "600" }}
            >
              Dynamic Load Management
            </Typography>
          </Box>
          <ListTypography content="Dynamic Load Management" />
          <ListTypography content="Splitting the available energy from one circuit to multiple chargers" />
          <ListTypography content="Possibility to balance the speed of charging per client" />
          <ListTypography content="Setting the limits of charging speed remotely (via API)" />
        </Box>
      </Box>
    </Box>,
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <img width="300" height="auto" src={invoiceImage} />
      <Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img height="auto" src={calendarImage} />
            <Typography
              variant="h5"
              color={palette.text.contrast}
              sx={{ fontWeight: "600" }}
            >
              Payments & Invoicing
            </Typography>
          </Box>
          <ListTypography
            content="Payments module – calculations & innovative payments methods
            integrations"
          />
          <ListTypography content="Biling and invoicing" />
          <ListTypography content="Reports & Trends" />
        </Box>
      </Box>
    </Box>,
  ];

  return (
    <Box>
      <AliceCarousel
        animationType="slide"
        autoPlay
        autoPlayInterval={3000}
        disableButtonsControls
        animationDuration={800}
        items={items}
      />
    </Box>
  );
};
