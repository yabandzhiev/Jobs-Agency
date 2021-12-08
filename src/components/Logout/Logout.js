import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useContext, useEffect } from "react";

import * as authService from "../../services/authService.js";

const Logout = () => {
  let navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    authService.logout(user.accessToken).then(
      () => {
        logout();
        navigate("/");
      },
      (err) => {
        alert(err.message);
      }
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default Logout;
