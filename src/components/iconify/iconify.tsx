import { Icon } from "@iconify/react";

import { Box, type BoxProps } from "@mui/material";

import { mapIcon, type IconName } from "./register";

export function Iconify({
  icon,
  size = 20,
  sx,
  ...props
}: BoxProps & { icon: IconName; size?: number }) {
  if (!mapIcon.has(icon)) {
    console.warn("Chưa có icon này");
  }
  return (
    <Box
      component={Icon}
      sx={{ width: size, height: size, ...sx }}
      icon={mapIcon.get(icon) || icon}
      {...props}
    />
  );
}
