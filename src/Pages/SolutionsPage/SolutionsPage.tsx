import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ladowarkaImage from "../../assets/ladowarka.png";

import { navLinks } from "../../Components/Navigation/navLinks";
import { palette } from "../../Constants/theme";
import { useNav } from "../../Hooks/useNav";

import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { theme } from "../../Constants/theme";
import { SolutionsCarousel } from "./SolutionsCarousel";
export const SolutionsPage = () => {
  const navRef = useNav(navLinks[2].navLinkId);

  const carouselRef = useRef();
  const breadcrumbsRef = useRef();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const BreadcrumbNavigation = forwardRef((props, ref) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const publicRef = {
      setSlide: (n: number) => setActiveSlide(n),
    };

    useImperativeHandle(ref, () => publicRef);

    const sliderHandler = (slide: number) => {
      carouselRef.current.slideTo(slide);
    };

    return (
      <Breadcrumbs sx={{ mb: 2, mt: 2 }}>
        <Box>
          <Typography
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ",
              fontWeight: "600",
              color: palette.text.contrast,
            }}
            onClick={() => sliderHandler(0)}
          >
            Charging station manufacturer
          </Typography>
          <Box
            sx={{
              height: "3px",
              transition: "all 0.3s ",

              transform:
                activeSlide === 0 ? "translateX(0)" : "translateX(-100%)",
              backgroundColor:
                activeSlide === 0 ? theme.palette.primary.main : "transparent",
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ",
              fontWeight: "600",
              color: palette.text.contrast,
            }}
            onClick={() => sliderHandler(1)}
          >
            Car parks
          </Typography>
          <Box
            sx={{
              height: "3px",
              transition: "all 0.3s ",

              transform:
                activeSlide === 1 ? "translateX(0)" : "translateX(-100%)",
              backgroundColor:
                activeSlide === 1 ? theme.palette.primary.main : "transparent",
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ",
              fontWeight: "600",
              color: palette.text.contrast,
            }}
            onClick={() => sliderHandler(2)}
          >
            Housing cooperatives
          </Typography>
          <Box
            sx={{
              height: "3px",
              transition: "all 0.3s ",

              transform:
                activeSlide === 2 ? "translateX(0)" : "translateX(-100%)",
              backgroundColor:
                activeSlide === 2 ? theme.palette.primary.main : "transparent",
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ",
              fontWeight: "600",
              color: palette.text.contrast,
            }}
            onClick={() => sliderHandler(3)}
          >
            Payments & Invoicing
          </Typography>
          <Box
            sx={{
              height: "3px",
              transition: "all 0.3s ",

              transform:
                activeSlide === 3 ? "translateX(0)" : "translateX(-100%)",
              backgroundColor:
                activeSlide === 3 ? theme.palette.primary.main : "transparent",
            }}
          />
        </Box>
      </Breadcrumbs>
    );
  });

  return useMemo(() => {
    return (
      <Box sx={{ backgroundColor: "white" }}>
        <Container ref={navRef} id="solutionsContainer" sx={{ py: 10 }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                      whiteSpace: "break-spaces",
                      color: palette.text.contrast,
                    }}
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
                    sx={{
                      whiteSpace: "break-spaces",
                      color: palette.text.contrast,
                    }}
                  >
                    for limitless growth
                  </Typography>
                </Box>
                <Typography color={palette.text.contrast} sx={{ py: 4 }}>
                  We at EV Lab are dedicated to help eMobility companies thrive.
                  We bring our world-class team of programmers, designers,
                  analysts and business process experts together to develop
                  robust eMobility solutions that meet your organization’s
                  unique requirements.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: "600",
                    maxWidth: "240px",
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Learn more
                </Button>
              </Box>
              <img
                width={isMobile ? "300" : "auto"}
                height={isMobile ? "auto" : "500"}
                src={ladowarkaImage}
              />
            </Box>
            <Box
              sx={{
                height: "1px",
                backgroundColor: palette.text.contrast,
              }}
            />
          </Box>
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                color: palette.text.contrast,
              }}
            >
              Solutions
            </Typography>
            <Box>
              <BreadcrumbNavigation ref={breadcrumbsRef} />

              <SolutionsCarousel
                slideRef={carouselRef}
                breadcrumbsRef={breadcrumbsRef}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }, []);
};
