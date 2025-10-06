import "./style.css";

import { createRoot } from "react-dom/client";

import { db } from "./schema/database";
import { AppPage } from "./page/app/page";
import { exams, subjectList } from "./schema/_mock";
import { LayoutMain } from "./components/layout/layout-main";

window.addEventListener("DOMContentLoaded", async () => {
  const count = await db.subjects.count();
  if (count === 0) {
    db.transaction("rw", db.subjects, db.exams, async () => {
      await db.subjects.bulkAdd(subjectList);
      await db.exams.bulkAdd(exams);
    });
  }
});

createRoot(document.getElementById("root")!).render(
  <LayoutMain>
    <AppPage />
  </LayoutMain>
);
