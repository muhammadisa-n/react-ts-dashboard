import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%] border">
        <Topbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
