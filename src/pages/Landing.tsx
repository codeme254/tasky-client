import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "../assets/landing-img.png";

function Landing() {
  return (
    <section className="w-full min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Manage your tasks effortlessly with{" "}
            <span className="text-primary">Tasky</span>
          </h1>

          <p className="text-lg text-muted-foreground mt-4">
            Your productivity command center. Organize everything, stay on
            track, and finally tame your to-do list.
          </p>

          <div className="flex gap-4 mt-8">
            <Button asChild size="lg" className="bg-blue-600">
              <Link to="/register">Get Started</Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={heroImg}
            alt="Tasky hero"
            className="w-full max-w-md md:max-w-sm rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
