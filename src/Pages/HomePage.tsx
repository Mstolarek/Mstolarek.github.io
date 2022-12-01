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
            minHeight: "800px",
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
          <Typography color={theme.palette.text.secondary}>
            The future of electric vehicles is happening now and we are the
            software partner who creates it.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
