import { Box, Container, Typography } from "@mui/material";

import { theme } from "../../Constants/theme";
import { useContentHeight } from "../../Hooks/useContentHeight";
import { useNav } from "../../Hooks/useNav";
import { FormCard } from "./subComponents/FormCard";
export const ContactsPage = () => {
  const contactsRef = useNav("Contact");

  const contentHeight = useContentHeight();

  return (
    <Box
      sx={{
        backgroundColor: "black",
        borderTop: "1px solid",
        borderColor: theme.palette.primary.main,
        minHeight: contentHeight,
      }}
    >
      <Container
        ref={contactsRef}
        id="contactContainer"
        sx={{
          py: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", pb: 4 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              sx={{ whiteSpace: "break-spaces" }}
            >
              Contact{" "}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ whiteSpace: "break-spaces" }}
            >
              us
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold">i4B Sp.z o.o</Typography>
            <Typography>Biskupa Czesława Domina 12</Typography>
            <Typography>75-065 Koszalin</Typography>
            <Typography sx={{ my: 2 }}>Email: contact@i4b.pl</Typography>
          </Box>
        </Box>
        <FormCard />
      </Container>
    </Box>
  );
};
