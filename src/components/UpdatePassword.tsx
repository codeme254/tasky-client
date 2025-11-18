import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function UpdatePassword() {
 
  return (
    <div className="w-full mb-10 flex items-start justify-center px-4 py-2">
      <div className="w-full max-w-lg border rounded-lg p-6 shadow-sm bg-card">
        <h1 className="text-3xl font-bold text-center mb-6">
          Update Password
        </h1>

        <form className="space-y-4">
          {/* Username */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" placeholder="john_doe" />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" placeholder="new password" />
          </div>

          {/* Register Button */}
          <Button
            type="button"
            className="w-full mt-4"
            size="lg"
          >
            Update Password
          </Button>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
