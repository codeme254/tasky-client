import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import api from "@/lib/axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import useUser from "@/store/user";
import { Spinner } from "@/components/ui/spinner";

interface LoginDetails {
  identifier: string;
  password: string;
}

function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState("")
  const { setUser } = useUser();
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: async function(loginDetails: LoginDetails) {
      const response = await api.post("/auth/login", loginDetails);
      return response.data;
    },
    onError: function(error) {
      if (axios.isAxiosError(error)) {
        setLoginError(
          error.response?.data.message ||
            error.message ||
            "An unexpected error occurred",
        );
      } else {
        setLoginError(error.message);
      }
    },
    onSuccess: function(data) {
      setUser(data);
      navigate("/tasks")
    }
  })


  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const loginDetails = {
      identifier, password
    }
    mutate(loginDetails);
  }
  return (
    <div className="w-full min-h-screen flex items-start justify-center px-4 py-10">
      <div className="w-full max-w-lg border rounded-lg p-6 shadow-sm bg-card">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login to Your Account
        </h1>

        <form className="space-y-4" onSubmit={handleLogin}>
          { loginError && <Alert className="bg-red-500">
            <AlertTitle className="text-white">{loginError}</AlertTitle>
          </Alert> }
          {/* Username */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="username">Username or Email Address</Label>
            <Input id="username" type="text" placeholder="john_doe" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          {/* Register Button */}
          <Button
            type="submit"
            className="w-full mt-4"
            size="lg"
            disabled={isPending}
          >
            { isPending && <Spinner /> }
            Login
          </Button>

          {/* Already have an account? */}
          <p className="text-center text-sm text-muted-foreground mt-2">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
