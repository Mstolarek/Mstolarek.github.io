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

          <Typography color={palette.text.contrast}>
            Kiosk mode for Android/Linux based screens
          </Typography>
          <Typography color={palette.text.contrast}>
            OCPP implementation
          </Typography>
          <Typography color={palette.text.contrast}>
            MODBUS/CAN implementation
          </Typography>
          <Typography color={palette.text.contrast}>
            IoT cloud integration
          </Typography>
          <Typography color={palette.text.contrast}>
            UI/UX design and flow optimisation
          </Typography>
          <Typography color={palette.text.contrast}>
            Remote updates & maintenance
          </Typography>
          <Typography color={palette.text.contrast}>
            MDM (mobile device management) integration
          </Typography>
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

          <Typography color={palette.text.contrast}>
            Availability of the chargers
          </Typography>
          <Typography color={palette.text.contrast}>
            Transactions / loading
          </Typography>
          <Typography color={palette.text.contrast}>
            Monitoring and alerting
          </Typography>
          <Typography color={palette.text.contrast}>Web dashboards</Typography>
          <Typography color={palette.text.contrast}>
            Mobile client app
          </Typography>
          <Typography color={palette.text.contrast}>
            Backoffice for admins and operators
          </Typography>
          <Typography color={palette.text.contrast}>
            Multitenant solutions – SaaS or On-Premises installations
          </Typography>
          <Typography color={palette.text.contrast}>
            External tools integrations with the use of webhooks
          </Typography>
          <Typography color={palette.text.contrast}>
            OCPI implementation
          </Typography>
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
              justifyContent: "space-between",
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
          <Typography color={palette.text.contrast}>
            Dynamic Load Management
          </Typography>
          <Typography color={palette.text.contrast}>
            Splitting the available energy from one circuit to multiple chargers
          </Typography>
          <Typography color={palette.text.contrast}>
            Possibility to balance the speed of charging per client
          </Typography>
          <Typography color={palette.text.contrast}>
            Setting the limits of charging speed remotely (via API)
          </Typography>
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
              justifyContent: "space-between",
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

          <Typography color={palette.text.contrast}>
            Payments module – calculations & innovative payments methods
            integrations
          </Typography>
          <Typography color={palette.text.contrast}>
            Biling and invoicing
          </Typography>
          <Typography color={palette.text.contrast}>
            Reports & Trends
          </Typography>
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
