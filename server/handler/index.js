import { navTabs } from "./nav.js";
import { questions } from "./questions.js";
import { subTabs } from "./subTabs.js";
import { tabs } from "./tabs.js";
export const routersHandler = (app) => {
  // Questions
  app.use("/api/q", questions);

  // Info
  app.use("/api/nav", navTabs);
  app.use("/api/sub", subTabs);
};
