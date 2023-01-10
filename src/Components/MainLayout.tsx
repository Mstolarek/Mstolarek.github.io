import { Box, Theme, useMediaQuery } from "@mui/material";
import { HeaderBar } from "./HeaderBar";
import { MobileHeadBar } from "./MobileHeadBar";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box>
      {isMobile ? <MobileHeadBar /> : <HeaderBar />}
      <Box>{children}</Box>
    </Box>
  );
};
