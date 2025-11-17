import { create, type StateCreator } from "zustand";

interface User {
  firstName: string;
  lastName: string;
  username: string;
  emailAddress: string;
}

interface UserStoreType {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

const userStore: StateCreator<UserStoreType> = (set) => {
  return {
    user: null,
    setUser: (user: User) => {
      set({ user });
    },
    removeUser: () => {
      set({ user: null });
    },
  };
};

const useUser = create(userStore);
export default useUser;
