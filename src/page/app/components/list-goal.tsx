import { useLiveQuery } from "dexie-react-hooks";
import { type Control, useFieldArray } from "react-hook-form";

import { Box, Stack, type StackProps } from "@mui/material";

import { db } from "../../../schema/database";
import { IconSubject } from "../../../components/iconify/icon-subject";

import type { addGoalForm } from "./dialog-add-goal";

export function ListGoal({
  control,
}: {
  control: Control<addGoalForm, any, addGoalForm>;
}) {
  const { mapExam } = useLiveQuery(async () => ({
    mapExam: Object.fromEntries(
      (await db.exams.toArray()).map((x) => [x.id, x])
    ),
  })) ?? { mapExam: {} as Record<number, Exam> };
  const { fields, append } = useFieldArray({
    control,
    name: "goals",
  });

  return (
    <Stack p={2} border={1} borderColor="divider" borderRadius={1} mt={2}>
      {fields.map((field) => (
        <ItemViewGoal mapExam={mapExam} goal={field} key={field.id} />
      ))}
    </Stack>
  );
}

function ItemViewGoal({
  goal: value,
  mapExam,
  ...p
}: StackProps & {
  goal: Goal;
  mapExam: Record<number, Exam>;
}) {
  const exam = mapExam[value.examId];
  return (
    exam && (
      <Stack direction="row" alignItems="center" {...p}>
        <IconSubject size={32} icon={exam.icon} color={exam.color} />
        <Box px={1}>{exam.name}</Box>
        <Box component="small" sx={{ opacity: 0.6 }}>
          x{exam.weight}
        </Box>
      </Stack>
    )
  );
}
