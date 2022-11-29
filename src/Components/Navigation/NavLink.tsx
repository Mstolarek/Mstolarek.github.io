import { EvLogo } from "./EvLogo";
import { useNavContext } from "../../Context/NavContext";

import { Typography, Box } from "@mui/material";
import { theme } from "../../Constants/theme";
export interface NavLinkProps {
  navLinkId: string;
  scrollToId: string;
}

const NavLink = (props: NavLinkProps) => {
  const { navLinkId, scrollToId } = props;

  const { activeNavLinkId, setActiveNavLinkId } = useNavContext();

  const handleClick = () => {
    setActiveNavLinkId(navLinkId);

    const top =
      document.getElementById(scrollToId).offsetTop -
      document.getElementById("headerBar").offsetHeight;
    window.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  };

  if (navLinkId === "Home") {
    return <EvLogo id={navLinkId} onClick={handleClick} />;
  }
  return (
    <Box>
      <Typography
        id={navLinkId}
        onClick={handleClick}
        sx={{
          fontWeight: "bold",
          px: 1,

          "&:hover": {
            color: "#fff",
            cursor: "pointer",
          },
        }}
      >
        {navLinkId}
      </Typography>
      <Box
        sx={{
          height: "2px",
          transition: "all 0.3s ",
          transitionDelay: "0.25s",
          transform:
            activeNavLinkId === navLinkId
              ? "translateX(0)"
              : "translateX(-100%)",
          backgroundColor:
            activeNavLinkId === navLinkId
              ? theme.palette.primary.main
              : "transparent",
        }}
      />
    </Box>
  );
};

export default NavLink;
