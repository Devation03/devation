import { Link } from "react-router-dom";
import { Logo } from "../components/logo";
import { Text } from "../components/ui/typography";
import { useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

type payloadType = {
  email: string;
  password: string;
};

const Signin = () => {
  const navigate = useNavigate();
  const [setAuthState] = useAuthStore((state) => [state.setAuthState]);

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const signin = async (payload: payloadType) => {
    const { data: response } = await axios.post(
      "http://localhost:4000/api/v1/sign-in",
      payload
    );
    setAuthState({ isLoggedIn: true, token: response.token });
    navigate("/documents");
  };

  return (
    <div className="w-full h-screen flex flex-col gpa-4 bg-stone-100">
      <Logo />
      <div className="w-full flex h-[90vh] items-center justify-center">
        <div className="w-fit shadow-md h-[50%] p-10 rounded-md flex flex-col gap-6 items-center border bg-white">
          <Text text="Signin to your account" size="2xl" />
          <input
            placeholder="Email..."
            className="w-96 h-10 focus:outline-double border shadow-inner rounded-md p-4 text-md"
            type="text"
            name="email"
            onChange={handleChange}
          />
          <input
            placeholder="Password..."
            className="w-96 h-10 focus:outline-double border shadow-inner rounded-md p-4 text-md"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <button
            onClick={() => signin(payload)}
            className="w-96 h-10 rounded-md p-4 flex shadow-sm items-center justify-center hover:bg-gray-700 bg-gray-900 "
          >
            <Text text="Sign in" size="sm" className="text-white" />
          </button>
          <div className="flex gap-1">
            <Text text="Don't have an account?" size="sm" />
            <Link to="/signup">
              <Text
                text="Sign up"
                size="sm"
                className="text-blue-500 hover:underline"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
