import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import api from "@/lib/axios";

interface User {
  firstName: string;
  lastName: string;
  username: string;
  emailAddress: string;
  password: string;
}

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: async function (user: User) {
      await api.post("/auth/register", user);
    },
    onSuccess: function () {
      navigate("/login");
    },
    onError: function (error) {
      toast.error("There was an error", { position: "top-center" });
      if (axios.isAxiosError(error)) {
        setRegistrationError(
          error.response?.data.message ||
            error.message ||
            "An unexpected error occurred",
        );
      } else {
        setRegistrationError(error.message);
      }
    },
  });

  function handleRegister(e: React.MouseEvent) {
    e.preventDefault();
    setRegistrationError("");
    if (password != cPassword) {
      toast.error("There was an error", { position: "top-center" });
      setRegistrationError("Password and confirm password must match");
      return;
    }
    const userInformation = {
      firstName,
      lastName,
      username,
      emailAddress,
      password,
    };
    mutate(userInformation);
  }
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg border rounded-lg p-6 shadow-sm bg-card">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h1>

        <form className="space-y-4">
          {registrationError && (
            <Alert className="bg-red-500">
              <AlertTitle className="text-white">
                {registrationError}
              </AlertTitle>
            </Alert>
          )}
          {/* First Name */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Username */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="john_doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="repeat password"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <Button
            type="submit"
            className="w-full mt-4"
            size="lg"
            onClick={handleRegister}
            disabled={isPending}
          >
            {isPending && <Spinner />}
            Register
          </Button>

          {/* Already have an account? */}
          <p className="text-center text-sm text-muted-foreground mt-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
