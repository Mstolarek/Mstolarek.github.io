import { Typography, Box, Link } from "@mui/material";
import invoiceImage from "../../assets/Invoice-Investment-PNG.png";
import chargerImage from "../../assets/63641b4a650a2e04a08270a9_csms hero image.png";
import softwareImage from "../../assets/toppng.com-website-designing-and-software-development-company-675x717.png";
import AliceCarousel from "react-alice-carousel";
import managamentImage from "../../assets/energy-management-software-development.png";
import "react-alice-carousel/lib/alice-carousel.css";
import headImage from "../../assets/head.svg";
import calendarImage from "../../assets/calendar.svg";
import energyImage from "../../assets/renew.svg";

interface CarouselProps {
  slideRef: any;
  breadcrumbsRef: any;
}

export const Carousel = (props: CarouselProps) => {
  const { slideRef, breadcrumbsRef } = props;

  const items = [
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
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
            <Typography variant="h5" color="primary">
              EVSE firmware / software
            </Typography>
            <img height="auto" src={energyImage} />
          </Box>

          <Typography>Kiosk mode for Android/Linux based screens</Typography>
          <Typography>OCPP implementation</Typography>
          <Typography>MODBUS/CAN implementation</Typography>
          <Typography>IoT cloud integration</Typography>
          <Typography>UI/UX design and flow optimisation</Typography>
          <Typography>Remote updates & maintenance</Typography>
          <Typography>MDM (mobile device management) integration</Typography>
        </Box>
        <Link href="https://www.google.pl/" target="blank" underline="none">
          <Typography color="primary" align="right" sx={{ pt: 4 }}>
            Learn more...
          </Typography>
        </Link>
      </Box>
      <img width="400" height="auto" src={softwareImage} />
    </Box>,
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
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
            <Typography variant="h5" color="primary">
              CSMS Chargers Management Systems
            </Typography>
            <img height="auto" src={energyImage} />
          </Box>

          <Typography>Availability of the chargers</Typography>
          <Typography>Transactions / loading</Typography>
          <Typography>Monitoring and alerting</Typography>
          <Typography>Web dashboards</Typography>
          <Typography>Mobile client app</Typography>
          <Typography>Backoffice for admins and operators</Typography>
          <Typography>
            Multitenant solutions – SaaS or On-Premises installations
          </Typography>
          <Typography>
            External tools integrations with the use of webhooks
          </Typography>
          <Typography>OCPI implementation</Typography>
        </Box>
        <Link href="https://www.google.pl/" target="blank" underline="none">
          <Typography color="primary" align="right" sx={{ pt: 4 }}>
            Learn more...
          </Typography>
        </Link>
      </Box>
      <img width="400" height="auto" src={chargerImage} />
    </Box>,
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
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
            <Typography variant="h5" color="primary">
              Dynamic Load Management
            </Typography>
            <img height="auto" src={headImage} />
          </Box>
          <Typography>Dynamic Load Management</Typography>
          <Typography>
            Splitting the available energy from one circuit to multiple chargers
          </Typography>
          <Typography>
            Possibility to balance the speed of charging per client
          </Typography>
          <Typography>
            Setting the limits of charging speed remotely (via API)
          </Typography>
        </Box>
        <Link href="https://www.google.pl/" target="blank" underline="none">
          <Typography color="primary" align="right" sx={{ pt: 4 }}>
            Learn more...
          </Typography>
        </Link>
      </Box>
      <img width="400" height="auto" src={managamentImage} />
    </Box>,
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
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
            <Typography variant="h5" color="primary">
              Payments & Invoicing
            </Typography>
            <img height="auto" src={calendarImage} />
          </Box>

          <Typography>
            Payments module – calculations & innovative payments methods
            integrations
          </Typography>
          <Typography>Biling and invoicing</Typography>
          <Typography>Reports & Trends</Typography>
        </Box>
        <Link href="https://www.google.pl/" target="blank" underline="none">
          <Typography color="primary" align="right" sx={{ pt: 4 }}>
            Learn more...
          </Typography>
        </Link>
      </Box>
      <img width="400" height="auto" src={invoiceImage} />
    </Box>,
  ];

  return (
    <AliceCarousel
      ref={slideRef}
      onSlideChanged={(e) => breadcrumbsRef.current.setSlide(e.item)}
      animationType="slide"
      disableButtonsControls
      disableDotsControls
      animationDuration={800}
      items={items}
    />
  );
};
