import { InputAdornment, OutlinedInput } from "@mui/material";
import { Iconify } from "../iconify/iconify";

export function SearchSubject() {
  return (
    <OutlinedInput
      placeholder="Tìm kiếm..."
      startAdornment={
        <InputAdornment position="start">
          <Iconify icon="solar:card-search-bold-duotone" />
        </InputAdornment>
      }
    />
  );
}
