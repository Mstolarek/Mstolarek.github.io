import {
  Slide,
  Card,
  Typography,
  Container,
  TextField,
  Button,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
export const FormCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(255,255,255,0.25)",
        flex: 1,
        minHeight: "400px",
        minWidth: "200px",
        maxWidth: "600px",
        p: 2,
      }}
    >
      <Typography>Fill out this form and we'll get back to you soon</Typography>
      <TextField fullWidth label="Email" sx={{ my: 1 }} />

      <TextField
        fullWidth
        multiline
        rows={6}
        label="How can we help?"
        sx={{ my: 1, height: "200px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="outlined" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
    </Card>
  );
};
