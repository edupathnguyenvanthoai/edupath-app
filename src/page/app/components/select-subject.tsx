import { useMemo, useState } from "react";

import {
  Box,
  List,
  Stack,
  Button,
  Dialog,
  Typography,
  DialogTitle,
  ListSubheader,
  ListItemButton,
  type StackProps,
} from "@mui/material";

import { IconSubject } from "../../../components/iconify/icon-subject";

type SelectSubjectProps = {
  value: Subject | null;
  onChange: (value: Subject | null) => void;
  options: Subject[];
};

export function SelectSubject({
  value,
  onChange,
  options,
}: SelectSubjectProps) {
  const [open, setOpen] = useState(false);
  const { opts } = useMemo(
    () => ({
      opts: options.reduce((p, c) => {
        p[c.category] = [...(p[c.category] || []), c];
        return p;
      }, {} as Record<string, Subject[]>),
    }),
    [options]
  );
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          border: 1,
          p: 1.5,
          borderRadius: 1,
          borderColor: "divider",
        }}
      >
        {(value && <ItemViewSubject flex={1} subject={value} />) || (
          <Typography fontStyle="italic" variant="body2" flex={1}>
            Hãy chọn môn học
          </Typography>
        )}
        <Button
          onClick={() => setOpen(true)}
          color="inherit"
          variant="outlined"
        >
          Chọn
        </Button>
      </Stack>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Chọn môn học</DialogTitle>
        <List
          sx={{
            width: 1,
            position: "relative",
            overflow: "auto",
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          {Object.entries(opts).map(([category, subjects]) => (
            <li key={category}>
              <ul>
                <ListSubheader>{category}</ListSubheader>
                {subjects
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((s) => (
                    <ListItemButton
                      key={s.id}
                      onClick={() => {
                        onChange(s);
                        setOpen(false);
                      }}
                      selected={s.id === value?.id}
                    >
                      <ItemViewSubject subject={s} />
                    </ListItemButton>
                  ))}
              </ul>
            </li>
          ))}
        </List>
      </Dialog>
    </>
  );
}

function ItemViewSubject({
  subject: value,
  ...p
}: StackProps & {
  subject: Subject;
}) {
  return (
    <Stack direction="row" alignItems="center" {...p}>
      <IconSubject size={32} icon={value.icon} color={value.color} />
      <Box px={1}>{value.name}</Box>
      <Box component="small" sx={{ opacity: 0.6 }}>
        x{value.weight}
      </Box>
    </Stack>
  );
}
