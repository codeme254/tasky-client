import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import api from "@/lib/axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

interface Task {
  title: string;
  description: string;
}

function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskCreationError, setTaskCreationError] = useState("");

  const { isPending, mutate } = useMutation({
    mutationKey: ["create-task"],
    mutationFn: async function (task: Task) {
      await api.post("/tasks", task);
      // no need for response.data
    },
    onError: function (error) {
      if (axios.isAxiosError(error)) {
        setTaskCreationError(
          error.response?.data.message ||
            error.message ||
            "An unexpected error occurred",
        );
      } else {
        setTaskCreationError(error.message);
      }
    },
    onSuccess: function () {
      toast.success("Task created successfully", { position: "top-center" });
    },
  });

  function handleAddTask(e: React.FormEvent) {
    e.preventDefault();
    setTaskCreationError("");
    mutate({ title, description });
    setTitle("");
    setDescription("");
  }
  return (
    <div className="w-full min-h-screen flex items-start justify-center px-4 py-10">
      <div className="w-full max-w-lg border rounded-lg p-6 shadow-sm bg-card">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create a new task
        </h1>

        <form className="space-y-4" onSubmit={handleAddTask}>
          {taskCreationError && (
            <Alert variant="destructive">
              <AlertTitle>{taskCreationError}</AlertTitle>
            </Alert>
          )}
          {/* Title */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="title">Task Title</Label>
            <Input
              id="title"
              type="text"
              placeholder="task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="description">Task Description</Label>
            <Textarea
              placeholder="task description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <Button
            type="submit"
            className="w-full mt-4"
            size="lg"
            disabled={isPending}
          >
            {isPending && <Spinner />}
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default NewTask;
