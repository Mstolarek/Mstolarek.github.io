import { Box, Typography, Container, Link } from "@mui/material";
import { useNav } from "../../Hooks/useNav";
import { SlidingCard } from "./SlidingCard";
import { navLinks } from "../../Components/Navigation/navLinks";
import { useNavContext } from "../../Context/NavContext";
import housesImage from "../../assets/NEW_HOUSES_GETTY_MIN.jpg";

import homecarImage from "../../assets/shutterstock_1463745005.webp";
import parkingImage2 from "../../assets/Screen-Shot-2021-02-15-at-6.webp";
import ladowarkaImage from "../../assets/ladowarka.png";
export const SolutionsPage = () => {
  const navRef = useNav(navLinks[2].navLinkId);
  const { activeNavLinkId } = useNavContext();
  const isActive = activeNavLinkId === navLinks[2].navLinkId;

  const items = [
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ p: 2 }}>
        <img width="auto" height="300" src={ladowarkaImage} />
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
            Producent ładowarek bez softu
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Link href="https://www.google.pl/" target="blank" underline="none">
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
            Podmiot z powierzchnia parkingowa
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Link href="https://www.google.pl/" target="blank" underline="none">
          <Typography color="primary" align="right">
            Learn more...
          </Typography>
        </Link>
      </Box>
      <Box sx={{ p: 2 }}>
        <img width="auto" height="300" src={parkingImage2} />
      </Box>
    </Box>,
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ p: 2 }}>
        <img width="auto" height="300" src={housesImage} />
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
            Społdzielnia mieszkaniowa
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Link href="https://www.google.pl/" target="blank" underline="none">
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
            Prywatny odbiorca
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Link href="https://www.google.pl/" target="blank" underline="none">
          <Typography color="primary" align="right">
            Learn more...
          </Typography>
        </Link>
      </Box>
      <Box sx={{ p: 2 }}>
        <img width="auto" height="300" src={homecarImage} />
      </Box>
    </Box>,
  ];

  const isEven = (n: number) => n % 2 == 0;

  return (
    <Container
      ref={navRef}
      id="solutionsContainer"
      sx={{ py: 10, minHeight: "800px" }}
    >
      <Box sx={{ display: "flex", py: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ whiteSpace: "break-spaces" }}
        >
          We have{" "}
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
          for your business
        </Typography>
      </Box>
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
