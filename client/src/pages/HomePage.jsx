import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useAuthStore } from "../store/useAuthStore";
import { useMatchStore } from "../store/useMatchStore";

const HomePage = () => {
  const { isLoadingUserProfiles, getUserProfiles, userProfiles } =
    useMatchStore();

  const { authUser } = useAuthStore();

  useEffect(() => {
    getUserProfiles();
  }, [getUserProfiles]);

  console.log("User profiles:", userProfiles);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
      <Sidebar />
    </div>
  );
};

export default HomePage;
