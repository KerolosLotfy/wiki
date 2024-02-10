import { navTabs } from "./nav.mjs";
import { questions } from "./questions.mjs";
import { sla } from "./sla.mjs";
import { subTabs } from "./subTabs.mjs";
import { tabs } from "./tabs.mjs";
export const routersHandler = (app) => {
  // Questions
  app.use("/api/q", questions);

  // Questions
  app.use("/api/sla", sla);

  // Info
  app.use("/api/nav", navTabs);
  app.use("/api/tabs", tabs);
  app.use("/api/sub", subTabs);
};
