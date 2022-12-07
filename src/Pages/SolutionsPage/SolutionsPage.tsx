import {
  Box,
  Typography,
  Container,
  Link,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useNav } from "../../Hooks/useNav";
import { SlidingCard } from "./SlidingCard";
import { navLinks } from "../../Components/Navigation/navLinks";
import { useNavContext } from "../../Context/NavContext";
import housesImage from "../../assets/NEW_HOUSES_GETTY_MIN.jpg";
import { theme } from "../../Constants/theme";
import homecarImage from "../../assets/shutterstock_1463745005.webp";
import parkingImage2 from "../../assets/Screen-Shot-2021-02-15-at-6.webp";
import ladowarkaImage from "../../assets/ladowarka.png";
export const SolutionsPage = () => {
  const navRef = useNav(navLinks[2].navLinkId);
  const { activeNavLinkId } = useNavContext();
  const isActive = activeNavLinkId === navLinks[2].navLinkId;

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
      <Box sx={{ p: 2 }}>
        <img
          width={isMobile ? "300" : "auto"}
          height={isMobile ? "auto" : "300"}
          src={ladowarkaImage}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          minHeight: "160px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h5" color="primary">
            Charging station manufacturer
          </Typography>
          <Box>
            <Typography sx={{ pt: 1 }}>
              Comprehensive and tailored package of software development
              services that can help them successfully compete in the
              electromobility market and achieve their business objectives. For
              example, we could :
            </Typography>
            <Typography sx={{ pt: 1 }}>
              - Develop custom software solutions for charging station
              management and control, including reservation systems, payment
              processing, and energy management.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              - Design and implement user-friendly mobile apps that allow EV
              owners to easily locate, reserve, and pay for charging services at
              their stations.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              - Integrate charging station infrastructure with existing systems,
              such as energy grids and renewable energy sources, to optimize
              performance and efficiency. Provide ongoing maintenance and
              support services to ensure the smooth operation of charging
              station software and systems.
            </Typography>
          </Box>
        </Box>
        <Link href="https://i4b.pl/services/" target="blank" underline="none">
          <Typography color="primary" align="right">
            Learn more...
          </Typography>
        </Link>
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
          <Typography variant="h5" color="primary">
            Car parks
          </Typography>
          <Box>
            <Typography>
              Range of electromobility, EVSE, and CSMS services to support the
              deployment and operation of electric vehicle charging
              infrastructure. These services could include:
            </Typography>
            <Typography sx={{ pt: 1 }}>
              - Design and engineering services for EV charging stations and
              related infrastructure, such as power supplies, communication
              systems, and signage.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              - Charging station management and control services, including
              reservation systems, payment processing, and energy management.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              - Customer support and technical assistance, such as providing
              user manuals, training materials, and assistance with charging
              station operation.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              - Subjects that operate electric vehicle fleets for shared use
              among residents may be interested in using fleet management
              software to track and manage their vehicles. This type of software
              could help cooperatives to monitor vehicle usage, track
              maintenance and repair needs, and manage access to vehicles.
            </Typography>
          </Box>
        </Box>
        <Link href="https://i4b.pl/services/" target="blank" underline="none">
          <Typography color="primary" align="right">
            Learn more...
          </Typography>
        </Link>
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
      <Box sx={{ p: 2 }}>
        <img
          width={isMobile ? "300" : "auto"}
          height={isMobile ? "auto" : "300"}
          src={housesImage}
        />
      </Box>
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
          <Typography variant="h5" color="primary">
            Housing cooperatives
          </Typography>
          <Box>
            <Typography sx={{ pt: 1 }}>
              - Subjects that have installed electric vehicle charging stations
              may be interested in using a charging station management software
              to manage and monitor their charging infrastructure. This type of
              software could allow cooperatives to track usage, monitor charging
              status, and manage access to charging stations.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              - Mobility services platform: Housing cooperatives may be
              interested in offering mobility services, such as car-sharing or
              bike-sharing, to their residents. A mobility services platform
              could provide the technology and infrastructure needed to manage
              and operate these services.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              - Energy management software: Housing cooperatives may be
              interested in using energy management software to monitor and
              manage their energy usage. This type of software could allow
              cooperatives to track energy consumption and identify
              opportunities for energy savings.
            </Typography>
          </Box>
        </Box>
        <Link href="https://i4b.pl/services/" target="blank" underline="none">
          <Typography color="primary" align="right">
            Learn more...
          </Typography>
        </Link>
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
          <Typography variant="h5" color="primary">
            Private households
          </Typography>
          <Box>
            <Typography sx={{ pt: 1 }}>
              Range of software development services that could support their
              personal or business needs, such as :
            </Typography>
            <Typography sx={{ pt: 1 }}>
              - Develop custom software solutions for home automation and
              control, such as smart home systems, security systems, and energy
              management.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              - Design and implement mobile apps that allow homeowners to easily
              manage and monitor their home systems and appliances from their
              mobile devices.
            </Typography>
          </Box>
        </Box>
        <Link href="https://i4b.pl/services/" target="blank" underline="none">
          <Typography color="primary" align="right">
            Learn more...
          </Typography>
        </Link>
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

  const isEven = (n: number) => n % 2 == 0;

  return (
    <Container
      ref={navRef}
      id="solutionsContainer"
      sx={{ py: 5, minHeight: "700px" }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ whiteSpace: "break-spaces" }}
        >
          Scalable{" "}
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          sx={{ whiteSpace: "break-spaces" }}
        >
          Solutions{" "}
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ whiteSpace: "break-spaces" }}
        >
          for limitless growth.
        </Typography>
      </Box>
      <Typography color={theme.palette.text.secondary}>
        We meet EV charging business with ready made remedies
      </Typography>
      {items.map((element, index) => (
        <SlidingCard
          setOpen={isActive}
          content={element}
          direction={isEven(index) ? "right" : "left"}
        />
      ))}
    </Container>
  );
};
