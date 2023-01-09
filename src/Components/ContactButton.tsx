import { Button } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { useNavContext } from "../Context/NavContext";
interface ContactButtonProps {
  sx?: SxProps<Theme>;
}

export const ContactButton = (props: ContactButtonProps) => {
  const { sx } = props;
  const { setActiveNavLinkId } = useNavContext();

  const handleClick = () => {
    setActiveNavLinkId("Contact");

    const top =
      document.getElementById("contactContainer").offsetTop -
      document.getElementById("headerBar").offsetHeight;
    window.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      sx={{
        borderRadius: "100px",
        padding: "10px 44px",
        gap: "8px",
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "27px",
        ...sx,
      }}
      variant="contained"
      onClick={handleClick}
    >
      Contact Us
    </Button>
  );
};
