import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TaskCardProps {
  title: string;
  description: string;
  isCompleted: boolean;
  id: string;
}

function TaskCard({ title, description, isCompleted, id }: TaskCardProps) {
  return (
    <Card className="w-full max-w-md shadow-md rounded-2xl p-4 transition-all hover:shadow-lg hover:scale-[1.01]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center justify-between">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2 mt-4">
        <Button
          variant="outline"
          className="rounded-xl transition-all bg-primary text-white hover:bg-accent hover:text-accent-foreground"
        >
          Update
        </Button>

        <Button
          variant="secondary"
          className="rounded-xl transition-all bg-primary text-white hover:text-accent-foreground"
        >
          {isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
        </Button>

        <Button
          variant="destructive"
          className="rounded-xl transition-all hover:brightness-90 hover:scale-[1.02]"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
