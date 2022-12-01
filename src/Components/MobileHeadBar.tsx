import {
  AppBar,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { backgroundColors } from "../Constants/theme";
import NavLink from "./Navigation/NavLink";
import { navLinks } from "./Navigation/navLinks";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { theme } from "../Constants/theme";
import ClickAwayListener from "@mui/material/ClickAwayListener";
export const MobileHeadBar = () => {
  const [drawer, setDrawer] = useState<boolean>(false);
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

          <IconButton
            onClick={() => setDrawer(true)}
            sx={{ color: theme.palette.text.primary }}
          >
            <MenuIcon />
          </IconButton>
          {/* {navLinks.map(({ navLinkId, scrollToId }, i) => (
            <NavLink key={i} navLinkId={navLinkId} scrollToId={scrollToId} />
          ))} */}

          <Drawer
            onClose={() => setDrawer(false)}
            open={drawer}
            anchor="top"
            hideBackdrop
            PaperProps={{
              sx: {
                display: "flex",
                justifyContent: "space-between",
                p: 2,
                backgroundColor: backgroundColors.primary,
                minHeight: "200px",
                overflow: "auto",
              },
            }}
            ModalProps={{ disableScrollLock: true }}
          >
            {navLinks.map(({ navLinkId, scrollToId }, i) => (
              <ClickAwayListener onClickAway={() => setDrawer(false)}>
                <Box onClick={() => setDrawer(false)}>
                  <NavLink
                    key={i}
                    navLinkId={navLinkId}
                    scrollToId={scrollToId}
                  />
                </Box>
              </ClickAwayListener>
            ))}
          </Drawer>
        </Box>
      </Container>
    </AppBar>
  );
};
