import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

interface TeamMember {
  id: string;
  name: string;

  email: string;

  joinDate: string;
  totalEarning: number;
  pendingPayment: number;
}

const initialTeamData: TeamMember[] = [
  {
    id: "1",
    name: "Marvin McKinney",
    email: "kenzi.lawson@example.com",
    joinDate: "15/08/2023",
    totalEarning: 12000,
    pendingPayment: 2000,
  },
  {
    id: "2",
    name: "Darrell Steward",
    email: "tim.jennings@example.com",
    joinDate: "22/11/2023",
    totalEarning: 15000,
    pendingPayment: 0,
  },
  {
    id: "3",
    name: "Albert Flores",
    email: "jackson.graham@example.com",
    joinDate: "05/01/2024",
    totalEarning: 8000,
    pendingPayment: 1000,
  },
  {
    id: "4",
    name: "Floyd Miles",
    email: "deanna.curtis@example.com",
    joinDate: "30/04/2023",
    totalEarning: 11000,
    pendingPayment: 500,
  },
  {
    id: "5",
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    joinDate: "10/02/2022",
    totalEarning: 25000,
    pendingPayment: 3000,
  },
  {
    id: "6",
    name: "Darlene Robertson",
    email: "darlene.robertson@example.com",
    joinDate: "18/07/2021",
    totalEarning: 7000,
    pendingPayment: 2000,
  },
  {
    id: "7",
    name: "Ralph Edwards",
    email: "ralph.edwards@example.com",
    joinDate: "05/03/2023",
    totalEarning: 14000,
    pendingPayment: 0,
  },
  {
    id: "8",
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    joinDate: "20/09/2022",
    totalEarning: 22000,
    pendingPayment: 1500,
  },
  {
    id: "9",
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    joinDate: "12/01/2024",
    totalEarning: 9000,
    pendingPayment: 1200,
  },
  {
    id: "10",
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    joinDate: "27/06/2023",
    totalEarning: 10000,
    pendingPayment: 2500,
  },
  {
    id: "11",
    name: "Annette Black",
    email: "annette.black@example.com",
    joinDate: "08/05/2022",
    totalEarning: 13000,
    pendingPayment: 800,
  },
  {
    id: "12",
    name: "Jerome Bell",
    email: "jerome.bell@example.com",
    joinDate: "14/11/2023",
    totalEarning: 17000,
    pendingPayment: 1000,
  },
  {
    id: "13",
    name: "Eleanor Pena",
    email: "eleanor.pena@example.com",
    joinDate: "02/03/2021",
    totalEarning: 27000,
    pendingPayment: 3500,
  },
  {
    id: "14",
    name: "Devon Lane",
    email: "devon.lane@example.com",
    joinDate: "19/09/2020",
    totalEarning: 32000,
    pendingPayment: 5000,
  },
  {
    id: "15",
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    joinDate: "07/07/2023",
    totalEarning: 12000,
    pendingPayment: 700,
  },
  {
    id: "16",
    name: "Guy Hawkins",
    email: "guy.hawkins@example.com",
    joinDate: "25/01/2024",
    totalEarning: 9500,
    pendingPayment: 1200,
  },
  {
    id: "17",
    name: "Arlene McCoy",
    email: "arlene.mccoy@example.com",
    joinDate: "18/05/2022",
    totalEarning: 16000,
    pendingPayment: 0,
  },
  {
    id: "18",
    name: "Jacob Jones",
    email: "jacob.jones@example.com",
    joinDate: "09/08/2021",
    totalEarning: 21000,
    pendingPayment: 1800,
  },
  {
    id: "19",
    name: "Theresa Webb",
    email: "theresa.webb@example.com",
    joinDate: "11/11/2020",
    totalEarning: 30000,
    pendingPayment: 2500,
  },
  {
    id: "20",
    name: "Wade Warren",
    email: "wade.warren@example.com",
    joinDate: "22/02/2022",
    totalEarning: 19500,
    pendingPayment: 900,
  },
];

const ClientManagement = () => {
  const [teamData] = useState<TeamMember[]>(initialTeamData);
  const navigate = useNavigate();

  // const handleProfile = (id: string) => {
  //   console.log("View Profile:", id);
  //   // you can navigate to a profile page like:
  //   // router.push(`/profile/${id}`)
  // };

  const goToDetails = (_id: string) => {
    navigate(`:id`); // Navigate to details page
  };

  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-[1000px] text-white">
        <TableHeader>
          <TableRow className="text-gray-400 text-sm md:text-base">
            <TableHead className="px-4 py-4 text-left">Client Name</TableHead>

            <TableHead className="px-4 py-4 text-left">Email</TableHead>
            <TableHead className="px-4 py-4 text-left">Total Earning</TableHead>
            <TableHead className="px-4 py-4 text-left">
              Pending Payment
            </TableHead>
            <TableHead className="px-4 py-4 text-left">
              Last Payment Date
            </TableHead>

            <TableHead className="px-4 py-4 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {teamData.map((member) => (
            <TableRow key={member.id} className="border-b border-gray-800">
              <TableCell className="px-4 py-6">{member.name}</TableCell>

              <TableCell className="px-4 py-6 text-gray-400">
                {member.email}
              </TableCell>
              <TableCell className="px-4 py-6">{member.totalEarning}</TableCell>

              <TableCell className="px-4 py-6">
                {member.pendingPayment}
              </TableCell>
              <TableCell className="px-4 py-6">{member.joinDate}</TableCell>
              <TableCell
                className="text-right px-4 py-6 text-sm md:text-base flex items-center justify-end gap-2 cursor-pointer text-blue-600 hover:text-blue-800"
                onClick={() => goToDetails(member.id)}
              >
                User Profile
                <FaChevronRight className="w-4 h-4" />
              </TableCell>

              {/* <TableCell className="px-4 py-6">
                <button
                  onClick={() => handleProfile(member.id)}
                  className="  text-base text-[#3A5CFF] cursor-pointer"
                >
                  User Profile
                </button>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ClientManagement;
