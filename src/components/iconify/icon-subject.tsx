import { forwardRef } from "react";
import { Iconify } from "./iconify";
import { Box, type BoxProps } from "@mui/material";

type IconSubjectProps = BoxProps & {
  icon: string;
  color: string;
  size?: number;
};

export const IconSubject = forwardRef<HTMLDivElement, IconSubjectProps>(
  ({ icon, color, size = 40, sx, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          height: size,
          width: size,
          borderRadius: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: color,
          color: (t) => t.palette.getContrastText(color),
          ...sx,
        }}
        {...props}
      >
        <Iconify size={0.6} icon={icon as any} />
      </Box>
    );
  }
);
