import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useUser from "@/store/user";

function Login() {
  const { setUser } = useUser();
  function handleLogin() {
    setUser({
      firstName: "John",
      lastName: "doe",
      username: "john",
      emailAddress: "jd@gmail.com",
    });
  }
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg border rounded-lg p-6 shadow-sm bg-card">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login to Your Account
        </h1>

        <form className="space-y-4">
          {/* Username */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="username">Username or Email Address</Label>
            <Input id="username" type="text" placeholder="john_doe" />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="password" />
          </div>

          {/* Register Button */}
          <Button
            type="button"
            onClick={handleLogin}
            className="w-full mt-4"
            size="lg"
          >
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
