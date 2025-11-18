import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function NewTask() {
  return (
    <div className="w-full min-h-screen flex items-start justify-center px-4 py-10">
      <div className="w-full max-w-lg border rounded-lg p-6 shadow-sm bg-card">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login to Your Account
        </h1>

        <form className="space-y-4">
          {/* Title */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="title">Task Title</Label>
            <Input id="title" type="text" placeholder="task title" />
          </div>

          {/* Description */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="description">Task Description</Label>
            <Textarea placeholder="task description" id="description" />
          </div>

          {/* Register Button */}
          <Button type="button" className="w-full mt-4" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default NewTask;
