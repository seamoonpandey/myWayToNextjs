import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouriteMeetupPage from "./pages/FavouriteMeetup";
import Layout from "./components/layouts/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />} />
        <Route exact path="/new-meet" element={<NewMeetupsPage />} />
        <Route exact path="/favourite" element={<FavouriteMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
