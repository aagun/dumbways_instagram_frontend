import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DetailFeedModal, PrivateRoute } from "./components/molecules";
import { LandingPage, Home, Explore, Message, CreatePost } from "./pages";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route exac path="/" element={<LandingPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="home/feed" element={<Home />} />
          <Route path="home/explore" element={<Explore />} />
          <Route path="home/feed/:username" element={<Home />} />
          <Route path="home/message" element={<Message />} />
          <Route path="home/create-post" element={<CreatePost />} />
          <Route path="home/edit-profile" element={<EditProfile />} />
        </Route>
        <Route
          exac
          path="*"
          element={<h1 style={{ color: "white" }}>oops you lost</h1>}
        />
        <Route exac path="test" element={<DetailFeedModal />} />
      </Routes>
    </Router>
  );
}

export default App;
