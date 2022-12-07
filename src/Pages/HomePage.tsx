import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useNav } from "../Hooks/useNav";
import carImage from "../assets/pngfind.com-car-emoji-png-2864641.png";
import { theme } from "../Constants/theme";

export const HomePage = () => {
  const homeRef = useNav("Home");
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Box>
      <Container ref={homeRef} id="homeContainer">
        <Box
          sx={{
            minHeight: "700px",
            py: 10,
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ p: 4 }}>
            <img
              width={isMobile ? "300" : "500"}
              height="auto"
              src={carImage}
            />
          </Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ textAlign: "center" }}
          >
            Custom software development for eMobility companies
          </Typography>
          <Typography
            color={theme.palette.text.secondary}
            sx={{ textAlign: "center", my: 1 }}
          >
            We at EV Lab are dedicated to help eMobility companies thrive. We
            bring our world-class team of programmers, designers, analysts and
            business process experts together to develop robust eMobility
            solutions that meet your organization’s unique requirements.
          </Typography>
          <Box
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            <Typography
              color={theme.palette.text.secondary}
              fontWeight="bold"
              sx={{ whiteSpace: "break-spaces" }}
            >
              The{" "}
            </Typography>
            <Typography
              fontWeight="bold"
              sx={{ whiteSpace: "break-spaces" }}
              color="primary"
            >
              future of electric vehicles{" "}
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              fontWeight="bold"
              sx={{ whiteSpace: "break-spaces" }}
            >
              is happening now and we are the{" "}
            </Typography>
            <Typography
              fontWeight="bold"
              sx={{ whiteSpace: "break-spaces" }}
              color="primary"
            >
              software partner{" "}
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              fontWeight="bold"
              sx={{ whiteSpace: "break-spaces" }}
            >
              who creates it.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
