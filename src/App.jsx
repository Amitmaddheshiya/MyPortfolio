import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  GitHubSection,
  Hero,
  Impact,
  Navbar,
  ProjectDetail,
  SystemDesign,
  WorkExperience,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 min-h-screen overflow-hidden bg-primary text-white">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.14),transparent_30%),linear-gradient(180deg,#020617_0%,#050816_50%,#020617_100%)]" />
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <WorkExperience />
                <SystemDesign />
                <Works />
                <Impact />
                <GitHubSection />
                <Contact />
              </>
            }
          />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
