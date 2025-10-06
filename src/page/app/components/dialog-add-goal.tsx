import { useEffect } from "react";
import { useWatch, Controller, createFormControl } from "react-hook-form";

import {
  Button,
  Dialog,
  Collapse,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";

import { ListGoal } from "./list-goal";
import { db } from "../../../schema/database";
import { SelectSubject } from "./select-subject";
import { subjectList } from "../../../schema/_mock";
import { Iconify } from "../../../components/iconify/iconify";

export type addGoalForm = {
  _open: boolean;
  subject: Subject | null;
  goals: Goal[];
};
const { control, setValue, reset } = createFormControl<addGoalForm>({
  defaultValues: {
    goals: [],
  },
});

export const onOpen = (subject?: Subject) => {
  if (subject) setValue("subject", subject);
  setValue("_open", true);
};
export const onClose = () => {
  reset({});
};

export function DialogAddGoal() {
  const [subject, open] = useWatch({
    control,
    name: ["subject", "_open"],
  });

  useEffect(() => {
    if (subject?.id) {
      (async () => {
        let goals = await db.goals
          .where("subjectId")
          .equals(subject.id)
          .toArray();
        if (goals.length === 0) {
          goals = [
            {
              subjectId: subject.id,
              examId: 1,
              targetScore: 8,
            },
          ];
        }
        setValue("goals", goals);
      })();
    }
  }, [subject?.id]);

  return (
    <Dialog open={open}>
      <DialogTitle>Đặt mục tiêu</DialogTitle>
      <DialogContent>
        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <SelectSubject
              value={subject}
              onChange={field.onChange}
              options={subjectList}
            />
          )}
        />
        <Collapse in={!!subject}>
          <ListGoal control={control} />
        </Collapse>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={onClose}>
          Đóng
        </Button>
        <Button
          startIcon={<Iconify icon="solar:diskette-bold" />}
          variant="contained"
          onClick={onClose}
        >
          Lưu lại
        </Button>
      </DialogActions>
    </Dialog>
  );
}
