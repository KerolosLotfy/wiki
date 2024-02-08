import { navTabs } from "./nav.mjs";
import { questions } from "./questions.mjs";
import { subTabs } from "./subTabs.mjs";
import { tabs } from "./tabs.mjs";
export const routersHandler = (app) => {
  // Questions
  app.use("/api/q", questions);

  // Info
  app.use("/api/nav", navTabs);
  app.use("/api/tabs", tabs);
  app.use("/api/sub", subTabs);
};
