import { useQuery } from "@tanstack/react-query";
import TaskCard from "@/components/TaskCard";
import axios from "axios";
import api from "@/lib/axios";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import Empty from "@/components/Empty";
import { Link } from "react-router-dom";

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

function AllTasks() {
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["get-tasks"],
    queryFn: async function (): Promise<Task[]> {
      const response = await api.get("/tasks");
      return response.data;
    },
  });

  if (isLoading) {
    return <Loader message="loading tasks, please wait..." />;
  }

  if (isError) {
    if (axios.isAxiosError(error)) {
      return (
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold text-4xl text-center mt-5">
            {error.response?.data.message || "An unexpected error occurred"}
          </h1>
          <Button size="lg" variant="default" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      );
    } else {
      return (
        <h1 className="font-bold text-4xl text-center mt-5">{error.message}</h1>
      );
    }
  }
  return (
    <div className="p-5 flex flex-wrap justify-center gap-5">
      {data && data.length <= 0 && (
        <Empty message="You don't have any tasks">
          <Button asChild variant="default" size="lg">
            <Link to="/tasks/new">Create task</Link>
          </Button>
        </Empty>
      )}
      {data &&
        data.map(function (task) {
          return (
            <TaskCard
              title={task.title}
              description={task.description}
              isCompleted={task.isCompleted}
              id={task.id}
              key={task.id}
            />
          );
        })}
    </div>
  );
}

export default AllTasks;
