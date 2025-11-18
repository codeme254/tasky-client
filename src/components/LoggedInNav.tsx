import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu";
import useUser from "@/store/user";

function LoggedInNav() {
  const { user } = useUser();
  if (!user) return;
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-10">
        <Link to="/tasks" className="font-bold text-base">
          All tasks
        </Link>
        <Link to="/tasks" className="font-bold text-base">
          New task
        </Link>
        <Link to="/tasks" className="font-bold text-base">
          Trash
        </Link>
        <Link to="/tasks" className="font-bold text-base">
          Profile
        </Link>
        <p>Howdy {user.username}</p>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
export default LoggedInNav;
