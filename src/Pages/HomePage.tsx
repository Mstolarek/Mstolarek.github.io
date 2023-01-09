import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import {
  Box,
  Container,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import carImage from "../assets/1-ev-lab.png";
import backgroundimage from "../assets/i4bHalfLogo.svg";
import { ContactButton } from "../Components/ContactButton";
import { theme } from "../Constants/theme";
import { useContentHeight } from "../Hooks/useContentHeight";
import { useNav } from "../Hooks/useNav";
export const HomePage = () => {
  const homeRef = useNav("Home");
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const contentHeight = useContentHeight();

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: contentHeight,
      }}
    >
      <Container
        ref={homeRef}
        id="homeContainer"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: contentHeight,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold" sx={{ pb: 4 }}>
                Custom software development for eMobility companies
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  color={theme.palette.text.secondary}
                  fontWeight="bold"
                  variant="h6"
                  sx={{ whiteSpace: "break-spaces" }}
                >
                  The{" "}
                </Typography>
                <Typography
                  fontWeight="bold"
                  sx={{ whiteSpace: "break-spaces" }}
                  variant="h6"
                  color="primary"
                >
                  future of electric vehicles{" "}
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant="h6"
                  fontWeight="bold"
                  sx={{ whiteSpace: "break-spaces" }}
                >
                  is happening now and we are the{" "}
                </Typography>
                <Typography
                  fontWeight="bold"
                  sx={{ whiteSpace: "break-spaces" }}
                  variant="h6"
                  color="primary"
                >
                  software partner{" "}
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant="h6"
                  fontWeight="bold"
                  sx={{ whiteSpace: "break-spaces" }}
                >
                  who creates it.
                </Typography>
              </Box>
              <ContactButton sx={{ mt: 10 }} />
            </Box>
            <Box sx={{ p: 4 }}>
              <img
                width={isMobile ? "300" : "600"}
                height="auto"
                src={carImage}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "27.24px",
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            Discover more
          </Typography>
          <MouseOutlinedIcon sx={{ fontSize: 32, mx: 2 }} />
        </Box>
      </Container>
    </Box>
  );
};
