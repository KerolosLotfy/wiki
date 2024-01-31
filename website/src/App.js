import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { MainSection } from "./components/main-section";
import { Home } from "./components/sub-components/home";
import { Soon } from "./components/soon";
import { Quizzes } from "./components/sub-components/quizzes";
import { SR } from "./components/sub-components/sr";
import { Error404 } from "./components/error";
import { NonTech } from "./components/sub-components/info";
import { Content } from "./components/main-tabs/content";


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
          <Route path="info" element={<NonTech />}>
            <Route path={p} element={<Content />}>
              <Route path={p} element={<Soon />} />
            </Route>
          </Route>
        </Route>

        {/* Quizzes */}
        <Route path="quizzes" element={<Quizzes />} />

        {/* SR */}
        <Route path="sr" element={<SR />} />

        {/* Tools */}

        {/* Error 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
