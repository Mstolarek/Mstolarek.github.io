import { Box } from "@mui/material";

import NavLink from "./NavLink";
import { navLinks } from "./navLinks";

export const Navigation = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        py: 4,
      }}
    >
      {navLinks.map(({ navLinkId, scrollToId }, i) => (
        <NavLink key={i} navLinkId={navLinkId} scrollToId={scrollToId} />
      ))}
    </Box>
  );
};
