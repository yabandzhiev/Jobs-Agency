import { Routes, Route } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage.js";
import { AuthContext } from "./contexts/AuthContext.js";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Jobs from "./components/Jobs/Jobs.js";
import CreateJob from "./components/CreateJob/CreateJob.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import JobDetails from "./components/JobDetails/JobDetails.js";
import EditJob from "./components/EditJob/EditJob.js";
import Footer from "./components/Footer/Footer.js";
import Logout from "./components/Logout/Logout.js";

import ScrollToTop from "./hoc/scrollToTop.js";

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
    <AuthContext.Provider value={{ user, login, logout }}>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/create" element={<CreateJob />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
        <Route path="/jobs/:jobId/edit" element={<EditJob />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
