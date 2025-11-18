import ProfileInfo from "@/components/ProfileInfo";
import { Button } from "@/components/ui/button";
import UpdatePassword from "@/components/UpdatePassword";
import useUser from "@/store/user";

function Profile() {
  const { removeUser } = useUser();
  function handleLogout() {
    removeUser();
  }
  return (
    <div>
      <ProfileInfo />
      <UpdatePassword />
      <Button
        className="w-full max-w-lg mx-auto flex bg-red-500 hover:bg-red-400"
        size="lg"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}

export default Profile;
