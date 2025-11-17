import { Link } from "react-router-dom"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function Register() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg border rounded-lg p-6 shadow-sm bg-card">
        <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>

        <form className="space-y-4">

          {/* First Name */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" type="text" placeholder="John" />
          </div>

          {/* Last Name */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" type="text" placeholder="Doe" />
          </div>

          {/* Username */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="john_doe" />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="password" />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" placeholder="repeat password" />
          </div>

          {/* Register Button */}
          <Button type="submit" className="w-full mt-4" size="lg">
            Register
          </Button>

          {/* Already have an account? */}
          <p className="text-center text-sm text-muted-foreground mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
