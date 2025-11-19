import { Spinner } from "./ui/spinner";

function Loader({ message }: { message: string }) {
  return (
    <div className=" flex gap-3 items-center justify-center mt-10">
      <Spinner className="size-25" />
      <h2 className="text-4xl font-bold">{message}</h2>
    </div>
  );
}

export default Loader;
