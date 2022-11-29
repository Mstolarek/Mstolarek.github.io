import { AppBar, Box, Container } from "@mui/material";
import NavLink from "./Navigation/NavLink";
import { navLinks } from "./Navigation/navLinks";
import { backgroundColors } from "../Constants/theme";
export const HeaderBar = () => {
  return (
    <AppBar
      id="headerBar"
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: backgroundColors.primary }}
    >
      <Container
        sx={{
          height: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src="https://i4b.pl/wp-content/uploads/2021/07/logo.svg" />

          {navLinks.map(({ navLinkId, scrollToId }, i) => (
            <NavLink key={i} navLinkId={navLinkId} scrollToId={scrollToId} />
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};
