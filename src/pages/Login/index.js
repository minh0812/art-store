import React from "react";
import Login from "../../modules/login";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context";
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(AppContext);

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [isLogin, navigate]);

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
