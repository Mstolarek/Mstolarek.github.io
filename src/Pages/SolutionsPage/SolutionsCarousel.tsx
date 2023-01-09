import { Box, Theme, Typography, useMediaQuery } from "@mui/material";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ladowarkaImage2 from "../../assets/2-evse1.png";
import housesImage from "../../assets/NEW_HOUSES_GETTY_MIN.jpg";
import parkingImage2 from "../../assets/Screen-Shot-2021-02-15-at-6.webp";
import homecarImage from "../../assets/shutterstock_1463745005.webp";
import { palette } from "../../Constants/theme";
interface CarouselProps {
  slideRef: any;
  breadcrumbsRef: any;
}

export const SolutionsCarousel = (props: CarouselProps) => {
  const { slideRef, breadcrumbsRef } = props;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const items = [
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: isMobile ? "wrap" : "nowrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          minHeight: "160px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            Comprehensive and tailored package of software development services
            that can help them successfully compete in the electromobility
            market and achieve their business objectives. For example, we could
            :
          </Typography>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Develop custom software solutions for charging station management
            and control, including reservation systems, payment processing, and
            energy management.
          </Typography>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Design and implement user-friendly mobile apps that allow EV
            owners to easily locate, reserve, and pay for charging services at
            their stations.
          </Typography>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Integrate charging station infrastructure with existing systems,
            such as energy grids and renewable energy sources, to optimize
            performance and efficiency. Provide ongoing maintenance and support
            services to ensure the smooth operation of charging station software
            and systems.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <img
          width={isMobile ? "300" : "auto"}
          height={isMobile ? "auto" : "300"}
          src={ladowarkaImage2}
        />
      </Box>
    </Box>,
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: isMobile ? "wrap" : "nowrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          minHeight: "160px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            Range of electromobility, EVSE, and CSMS services to support the
            deployment and operation of electric vehicle charging
            infrastructure. These services could include:
          </Typography>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Design and engineering services for EV charging stations and
            related infrastructure, such as power supplies, communication
            systems, and signage.
          </Typography>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Charging station management and control services, including
            reservation systems, payment processing, and energy management.
          </Typography>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Customer support and technical assistance, such as providing user
            manuals, training materials, and assistance with charging station
            operation.
          </Typography>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Subjects that operate electric vehicle fleets for shared use among
            residents may be interested in using fleet management software to
            track and manage their vehicles. This type of software could help
            cooperatives to monitor vehicle usage, track maintenance and repair
            needs, and manage access to vehicles.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <img
          width={isMobile ? "300" : "auto"}
          height={isMobile ? "auto" : "300"}
          src={parkingImage2}
        />
      </Box>
    </Box>,
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: isMobile ? "wrap" : "nowrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          minHeight: "160px",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <Box>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Subjects that have installed electric vehicle charging stations
            may be interested in using a charging station management software to
            manage and monitor their charging infrastructure. This type of
            software could allow cooperatives to track usage, monitor charging
            status, and manage access to charging stations.
          </Typography>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Mobility services platform: Housing cooperatives may be interested
            in offering mobility services, such as car-sharing or bike-sharing,
            to their residents. A mobility services platform could provide the
            technology and infrastructure needed to manage and operate these
            services.
          </Typography>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Energy management software: Housing cooperatives may be interested
            in using energy management software to monitor and manage their
            energy usage. This type of software could allow cooperatives to
            track energy consumption and identify opportunities for energy
            savings.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <img
          width={isMobile ? "300" : "auto"}
          height={isMobile ? "auto" : "300"}
          src={housesImage}
        />
      </Box>
    </Box>,
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: isMobile ? "wrap" : "nowrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          minHeight: "160px",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <Box>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            Range of software development services that could support their
            personal or business needs, such as :
          </Typography>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Develop custom software solutions for home automation and control,
            such as smart home systems, security systems, and energy management.
          </Typography>
          <Typography sx={{ pt: 1, color: palette.text.contrast }}>
            - Design and implement mobile apps that allow homeowners to easily
            manage and monitor their home systems and appliances from their
            mobile devices.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <img
          width={isMobile ? "300" : "auto"}
          height={isMobile ? "auto" : "300"}
          src={homecarImage}
        />
      </Box>
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
