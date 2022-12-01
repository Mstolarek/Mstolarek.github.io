import { AppBar, Box, Container } from "@mui/material";
import { backgroundColors } from "../Constants/theme";
import NavLink from "./Navigation/NavLink";
import { navLinks } from "./Navigation/navLinks";
export const MobileHeadBar = () => {
  return (
    <AppBar
      id="headerBar"
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: backgroundColors.primary }}
    >
      <Container
        disableGutters
        sx={{
          height: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "80px",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {navLinks.map(({ navLinkId, scrollToId }, i) => (
            <NavLink key={i} navLinkId={navLinkId} scrollToId={scrollToId} />
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};
