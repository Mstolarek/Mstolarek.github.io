import { Card, Slide } from "@mui/material";
import { useEffect, useState } from "react";

export interface SlidingCardProps {
  setOpen: boolean;
  content: React.ReactNode;
  direction: "right" | "left";
}

export const SlidingCard = (props: SlidingCardProps) => {
  const { content, setOpen, direction } = props;
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    setOpen && setVisible(true);
  }, [setOpen]);

  return (
    <Slide in={visible} direction={direction} timeout={2000}>
      <Card
        sx={{
          backgroundColor: "rgba(255,255,255,0.25)",
          minHeight: "160px",
          maxWidth: "900px",
          my: 4,
          p: 2,
          marginRight: direction === "left" ? 0 : "auto",
          marginLeft: direction === "right" ? 0 : "auto",
        }}
      >
        {content}
      </Card>
    </Slide>
  );
};
