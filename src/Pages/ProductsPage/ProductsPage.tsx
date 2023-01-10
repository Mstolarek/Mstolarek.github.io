import { Box, Container, Typography } from "@mui/material";
import { useNav } from "../../Hooks/useNav";

import { useMemo } from "react";
import { navLinks } from "../../Components/Navigation/navLinks";
import { palette, theme } from "../../Constants/theme";
import { useContentHeight } from "../../Hooks/useContentHeight";
import { ProductsCarousel } from "./ProductsCarousel";
export const ProductsPage = () => {
  const navRef = useNav(navLinks[1].navLinkId);
  const contentHeight = useContentHeight();
  return useMemo(() => {
    return (
      <Box
        sx={{
          backgroundColor: "white",
          borderTop: "1px solid",
          borderColor: theme.palette.primary.main,
          minHeight: contentHeight,
        }}
      >
        <Container
          ref={navRef}
          id="featuresContainer"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: contentHeight,
            py: 10,
          }}
        >
          <Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  whiteSpace: "break-spaces",
                  color: palette.text.contrast,
                }}
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
                sx={{
                  whiteSpace: "break-spaces",
                  color: palette.text.contrast,
                }}
              >
                pool
              </Typography>
            </Box>
            <Typography color={palette.text.contrast}>
              We can provide you all the tools you need.
            </Typography>
          </Box>
          <ProductsCarousel />
          <Box
            sx={{
              height: "1px",
              backgroundColor: palette.text.contrast,
            }}
          />
        </Container>
      </Box>
    );
  }, []);
};
