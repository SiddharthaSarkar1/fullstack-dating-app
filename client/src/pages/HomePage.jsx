import Sidebar from "../components/Sidebar";
import { useAuthStore } from "../store/useAuthStore";

const HomePage = () => {
  const { logout } = useAuthStore();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
      <Sidebar />
    </div>
  );
};

export default HomePage;
