import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";


function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Connection = lazy(() => import("./pages/Connection"));
  const Chat = lazy(() => import("./pages/Chat"));
  const Profile = lazy(() => import("./pages/Profile"));
  const Account = lazy(() => import("./pages/Account"));
  const People = lazy(() => import("./pages/People"));
  const Topics = lazy(() => import("./pages/Topics"));

  const Post = lazy(() => import("./pages/Post"));
  return (
    <Router>
      <Suspense fallback={<Loader/>} >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/connections" element={<Connection/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/Account" element={<Account/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/topics" element={<Topics/>} />
          <Route path="/post/:post_id" element={<Post/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;