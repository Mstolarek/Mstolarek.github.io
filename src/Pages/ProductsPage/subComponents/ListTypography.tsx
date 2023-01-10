import CircleIcon from "@mui/icons-material/Circle";
import { Box, Typography } from "@mui/material";
import { palette } from "../../../Constants/theme";
export const ListTypography = ({ content }: { content: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <CircleIcon
        sx={{ color: palette.text.contrast, fontSize: "6px", mr: 2 }}
      />
      <Typography color={palette.text.contrast}>{content}</Typography>
    </Box>
  );
};
