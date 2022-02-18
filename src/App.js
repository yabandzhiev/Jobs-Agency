import { Routes, Route } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage.js";
import { AuthContext } from "./contexts/AuthContext.js";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Jobs from "./components/Jobs/Jobs.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import CreateJob from "./components/CreateJob/CreateJob.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import Profile from "./components/Profile/Profile.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import JobDetails from "./components/JobDetails/JobDetails.js";
import EditJob from "./components/EditJob/EditJob.js";
import Footer from "./components/Footer/Footer.js";
import Logout from "./components/Logout/Logout.js";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";
import RoutesGuard from "./components/common/RoutesGuard/RoutesGuard.js";

import ScrollToTop from "./scrollToTop/scrollToTop.js";

const initialAuthState = {
  _id: "",
  email: "",
  accessToken: "",
};

function App() {
  const [user, setUser] = useLocalStorage("user", initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    setUser(initialAuthState);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: user.email }}>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route element={<RoutesGuard />}>
          <Route path="/jobs/create" element={<CreateJob />} />
          <Route path="/jobs/:jobId/edit" element={<EditJob />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
