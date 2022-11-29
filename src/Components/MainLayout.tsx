import { Box, Container } from "@mui/system";
import { HeaderBar } from "./HeaderBar";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <Box>
      <HeaderBar />
      <Box>{children}</Box>
    </Box>
  );
};
