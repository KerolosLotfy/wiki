import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { MainSection } from "./components/main-section";
import { Home } from "./components/sub-components/home";
import { Soon } from "./components/soon";
import { Quizzes } from "./components/sub-components/questions";
import { Error404 } from "./components/error";
import { Info } from "./components/sub-components/info";
import { Content } from "./components/main-tabs/content";
import { Dashboard } from "./components/dashboard";
import { DashCont } from "./components/dashboard/content";
import { SLA } from "./components/sub-components/sla";

function App() {
  const { pathname } = useLocation();
  let p = pathname.split("/").slice(2).join("/");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />}>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Info */}
          <Route path="info" element={<Info />}>
            <Route path={p} element={<Content />}>
              <Route path={p} element={<Soon />} />
            </Route>
          </Route>
        </Route>

        {/* Quizzes */}
        <Route path="quizzes" element={<Quizzes />} />

        {/* SLA */}
        <Route path="sla" element={<SLA />} />

        {/* dashboard */}
        <Route path="dash" element={<Dashboard />}>
          <Route path="info" element={<DashCont />}>
            <Route path="add" element={<h1>Add</h1>} />
            <Route path="all" element={<h1>all</h1>} />
            <Route />
          </Route>
        </Route>

        {/* Error 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
