import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import PieComponent from "../components/PieComponent";
import { Progress } from "antd";
import error from "../assets/error.png";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
        <div className="flex items-center justify-between">
          <h1 className="text-[#5a5c89] text-[28px] leading-[34px] font-normal cursor-pointer">
            Dashboard
          </h1>
          <button className="bg-blue-500 h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer dark:bg-blue-950">
            Generate Report
          </button>
        </div>
        {/* card earning */}
        <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
          {/* card item */}
          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out shadow-sm">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
                EARNING MONTHLY
              </h2>
              <h1 className="text-[20px] leading-[24px] text-[#5a5c69] mt-5px font-bold">
                $40,000
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="" />
          </div>
          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out shadow-sm">
            <div>
              <h2 className="text-[#1CC88A] text-[11px] leading-[17px] font-bold">
                EARNING ANNUAL
              </h2>
              <h1 className="text-[20px] leading-[24px] text-[#5a5c69] mt-5px font-bold">
                $40,000
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="" />
          </div>
          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out shadow-sm">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
                EARNING MONTHLY
              </h2>
              <h1 className="text-[20px] leading-[24px] text-[#5a5c69] mt-5px font-bold">
                $40,000
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="" />
          </div>
          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out shadow-sm">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
                EARNING MONTHLY
              </h2>
              <h1 className="text-[20px] leading-[24px] text-[#5a5c69] mt-5px font-bold">
                $40,000
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="" />
          </div>
          {/* end card item */}
        </div>
        {/* end carts */}
        <div className="flex  w-full gap-[30px] ">
          {/* simple line charts */}
          <div className="basis-[70%]  bg-white shadow-md cursor-pointer rounded-4-[px]">
            <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
              <h2>Earning Overwies</h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div>
              <LineChart
                width={1150}
                height={500}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
          {/* end simple line charts */}
          <div className="basis-[30%] bg-white shadow-md cursor-pointer rounded-[4px] ">
            <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
              <h2>Revenue Resources</h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="pl-[35px]">
              <PieComponent />
            </div>
          </div>
        </div>
        {/* project overviws*/}
        <div className="flex mt-[22px] gap-30px ">
          <div className="basis-[55%] bg-white shadow-md cursor-pointer rounded-[4px]">
            <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
              <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
                Projects Overviews
              </h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="px-[25px] space-y-[15px] py-[15px]">
              <div>
                <h2>Server Migration</h2>
                <Progress percent={30} strokeColor="#E74A3B" />
              </div>
              <div>
                <h2>Sales Tracking</h2>
                <Progress percent={50} status="active" strokeColor="#F6C23E" />
              </div>
              <div>
                <h2>Customer Database</h2>
                <Progress percent={70} status="active" strokeColor="#4E73DF" />
              </div>
              <div>
                <h2>Payout Details</h2>
                <Progress percent={100} strokeColor="#36B9CC" />
              </div>
              <div>
                <h2>Account Setup</h2>
                <Progress
                  percent={50}
                  status="exception"
                  strokeColor="#1CC88A"
                />
              </div>
            </div>
          </div>
          <div className="basis-[45%] bg-white shadow-md cursor-pointer rounded-[4px]">
            <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
              <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
                {" "}
                Resources
              </h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="pl-[35px] flex items-center justify-center h-[100%]">
              <div className="">
                <img src={error} alt="" className="transform scale-[135%]" />
                <p className="mt-[15px] text-semibold text-gray-500">
                  No data available
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </DashboardLayout>
  );
}
