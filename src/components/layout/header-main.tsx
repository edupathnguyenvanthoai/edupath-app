import { Dialog, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import { useHeader } from "./config";
import { Iconify } from "../iconify/iconify";
import { useState } from "react";

export function HeaderMain() {
  const { title } = useHeader();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Stack direction="row">
        <Typography variant="h1" flex={1} textTransform="uppercase">
          {title}
        </Typography>
        <IconButton onClick={setOpen.bind(null, true)}>
          <Iconify icon="custom:menu-duotone" />
        </IconButton>
      </Stack>
      <Dialog open={open} onClose={setOpen.bind(null, false)}>
        <DialogTitle textAlign="center">Chức năng & cài đặt</DialogTitle>
      </Dialog>
    </>
  );
}
