import { Button } from "@mui/material";

import { Iconify } from "../../components/iconify/iconify";
import { onOpen, DialogAddGoal } from "./components/dialog-add-goal";

export function AppPage() {
  return (
    <>
      <Button
        onClick={() => onOpen()}
        sx={{ alignSelf: "center" }}
        variant="contained"
        startIcon={<Iconify icon="solar:target-bold-duotone" />}
      >
        Đặt mục tiêu
      </Button>
      <DialogAddGoal />
    </>
  );
}
