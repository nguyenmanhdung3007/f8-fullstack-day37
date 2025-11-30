import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import routes from "./routes";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Comp = route.component;
            return <Route key={index} path={route.path} element={<Comp />} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
