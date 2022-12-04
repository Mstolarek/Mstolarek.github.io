import { Container, Box, Typography, Breadcrumbs } from "@mui/material";
import { useNav } from "../../Hooks/useNav";

import { navLinks } from "../../Components/Navigation/navLinks";

import { useRef, useState, useMemo } from "react";
import { theme } from "../../Constants/theme";
import { Carousel } from "./Carousel";
import { forwardRef, useImperativeHandle } from "react";
export const ProductsPage = () => {
  const navRef = useNav(navLinks[1].navLinkId);

  const carouselRef = useRef();
  const breadcrumbsRef = useRef();

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
      <Breadcrumbs sx={{ mb: 4 }}>
        <Typography
          sx={{
            cursor: "pointer",
            transition: "all 0.3s ",

            color: activeSlide === 0 && theme.palette.primary.main,
          }}
          onClick={() => sliderHandler(0)}
        >
          EVSE firmware / software
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            transition: "all 0.3s ",

            color: activeSlide === 1 && theme.palette.primary.main,
          }}
          onClick={() => sliderHandler(1)}
        >
          CSMS Chargers Management Systems
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            transition: "all 0.3s ",

            color: activeSlide === 2 && theme.palette.primary.main,
          }}
          onClick={() => sliderHandler(2)}
        >
          Dynamic Load Management
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            transition: "all 0.3s ",

            color: activeSlide === 3 && theme.palette.primary.main,
          }}
          onClick={() => sliderHandler(3)}
        >
          Payments & Invoicing
        </Typography>
      </Breadcrumbs>
    );
  });

  return useMemo(() => {
    return (
      <Container ref={navRef} id="featuresContainer">
        <Box
          sx={{
            minHeight: "800px",
            py: 20,
          }}
        >
          <Box sx={{ display: "flex", py: 2, flexWrap: "wrap" }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ whiteSpace: "break-spaces" }}
            >
              Evergrowing{" "}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              sx={{ whiteSpace: "break-spaces" }}
            >
              Features{" "}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ whiteSpace: "break-spaces" }}
            >
              pool
            </Typography>
          </Box>
          <BreadcrumbNavigation ref={breadcrumbsRef} />
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Carousel slideRef={carouselRef} breadcrumbsRef={breadcrumbsRef} />
          </Box>
        </Box>
      </Container>
    );
  }, []);
};
