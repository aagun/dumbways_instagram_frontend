import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DetailFeedModal, PrivateRoute } from "./components/molecules";
import { LandingPage, Home, Explore, Inbox, CreatePost, User } from "./pages";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route exac path="/" element={<LandingPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="feed" element={<Home />} />
          <Route path="feed/:username" element={<User />} />
          <Route path="explore" element={<Explore />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="edit-profile" element={<EditProfile />} />
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
