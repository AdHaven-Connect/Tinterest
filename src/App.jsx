import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";


function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Connection = lazy(() => import("./pages/Connection"));
  return (
    <Router>
      <Suspense fallback={<Loader/>} >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/connections" element={<Connection/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;