import { Box, Typography } from "@mui/material";

interface EvLogoProps {}

export const EvLogo = (props: EvLogoProps) => {
  const { ...others } = props;

  return (
    <Box
      {...others}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <svg width={32} height={24} viewBox="0 0 32 24" fill="none">
        <path
          strokeWidth="0.829117"
          stroke="#CDF265"
          d="M 12.2926 5.60897 L 12.2958 5.84679 L 12.5027 5.96409 L 21.6799 11.1668 L 10.7658 17.7705 L 10.7074 13.391 L 10.7042 13.1532 L 10.4973 13.0359 L 1.32005 7.83319 L 12.2342 1.22951 L 12.2926 5.60897 Z"
        />
      </svg>
      <Typography variant="h4" color="primary">
        EV Lab
      </Typography>
    </Box>
  );
};
