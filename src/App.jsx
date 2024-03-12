import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";


function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Connection = lazy(() => import("./pages/Connection"));
  const Chat = lazy(() => import("./pages/Chat"));
  return (
    <Router>
      <Suspense fallback={<Loader/>} >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/connections" element={<Connection/>} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;