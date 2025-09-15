import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  status: "Active" | "Inactive";
  joinDate: string;
}

const initialTeamData: TeamMember[] = [
  {
    id: "1",
    name: "Marvin McKinney",
    role: "Distributor",
    email: "kenzi.lawson@example.com",
    status: "Active",
    joinDate: "15/08/2023",
  },
  {
    id: "2",
    name: "Darrell Steward",
    role: "Accountant",
    email: "tim.jennings@example.com",
    status: "Active",
    joinDate: "22/11/2023",
  },
  {
    id: "3",
    name: "Albert Flores",
    role: "Distributor",
    email: "jackson.graham@example.com",
    status: "Inactive",
    joinDate: "05/01/2024",
  },
  {
    id: "4",
    name: "Floyd Miles",
    role: "Accountant",
    email: "deanna.curtis@example.com",
    status: "Active",
    joinDate: "30/04/2023",
  },
  {
    id: "5",
    name: "Kristin Watson",
    role: "Manager",
    email: "kristin.watson@example.com",
    status: "Active",
    joinDate: "10/02/2022",
  },
  {
    id: "6",
    name: "Darlene Robertson",
    role: "Distributor",
    email: "darlene.robertson@example.com",
    status: "Inactive",
    joinDate: "18/07/2021",
  },
  {
    id: "7",
    name: "Ralph Edwards",
    role: "Accountant",
    email: "ralph.edwards@example.com",
    status: "Active",
    joinDate: "05/03/2023",
  },
  {
    id: "8",
    name: "Courtney Henry",
    role: "Manager",
    email: "courtney.henry@example.com",
    status: "Active",
    joinDate: "20/09/2022",
  },
  {
    id: "9",
    name: "Jenny Wilson",
    role: "Distributor",
    email: "jenny.wilson@example.com",
    status: "Active",
    joinDate: "12/01/2024",
  },
  {
    id: "10",
    name: "Cameron Williamson",
    role: "Accountant",
    email: "cameron.williamson@example.com",
    status: "Inactive",
    joinDate: "27/06/2023",
  },
  {
    id: "11",
    name: "Annette Black",
    role: "Distributor",
    email: "annette.black@example.com",
    status: "Active",
    joinDate: "08/05/2022",
  },
  {
    id: "12",
    name: "Jerome Bell",
    role: "Manager",
    email: "jerome.bell@example.com",
    status: "Inactive",
    joinDate: "14/11/2023",
  },
];

const roles = ["Distributor", "Accountant", "Manager", "Admin"];

const TeamTable = () => {
  const [teamData, setTeamData] = useState<TeamMember[]>(initialTeamData);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const handleRoleChange = (id: string, newRole: string) => {
    setTeamData((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, role: newRole } : member
      )
    );
    setOpenDropdownId(null); // close dropdown
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  const handleSuspend = (id: string) => console.log("Suspend:", id);
  const handleDelete = (id: string) => console.log("Delete:", id);

  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-[1000px] text-white">
        <TableHeader>
          <TableRow className="text-gray-400 text-sm md:text-base">
            <TableHead className="px-4 py-2 text-left">Name</TableHead>
            <TableHead className="px-4 py-2 text-left">Role</TableHead>
            <TableHead className="px-4 py-2 text-left">Email</TableHead>
            <TableHead className="px-4 py-2 text-left">Status</TableHead>
            <TableHead className="px-4 py-2 text-left">Join Date</TableHead>
            <TableHead className="px-4 py-2 text-left">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {teamData.map((member) => (
            <TableRow key={member.id} className="border-b border-gray-800">
              <TableCell className="px-4 py-3">{member.name}</TableCell>
              <TableCell className="px-4 py-3">{member.role}</TableCell>
              <TableCell className="px-4 py-3 text-gray-400">
                {member.email}
              </TableCell>
              <TableCell className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                    member.status === "Active"
                      ? "bg-[#0E261F] text-[#01D449]"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {member.status}
                </span>
              </TableCell>
              <TableCell className="px-4 py-3">{member.joinDate}</TableCell>
              <TableCell className="px-4 py-3 flex flex-col gap-1">
                {/* Role Dropdown Filter */}
                <div className="flex gap-2 mt-1">
                  <div className="relative w-40">
                    <button
                      onClick={() => toggleDropdown(member.id)}
                      className="w-full flex justify-between items-center px-4 py-2 rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-[#262C31] text-white text-sm md:text-base hover:border-[#1C1D28]"
                    >
                      {member.role}
                      {openDropdownId === member.id ? (
                        <FaChevronUp className="ml-2" />
                      ) : (
                        <FaChevronDown className="ml-2" />
                      )}
                    </button>

                    {openDropdownId === member.id && (
                      <div className="absolute mt-1 w-full bg-[#17171A] text-white rounded-lg shadow-lg z-10">
                        {roles.map((role) => (
                          <div
                            key={role}
                            onClick={() => handleRoleChange(member.id, role)}
                            className="px-4 py-2 hover:bg-[#131320] cursor-pointer border-b border-[#2C2C3A] text-sm"
                          >
                            {role}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Suspend & Delete Buttons */}

                  <button
                    onClick={() => handleSuspend(member.id)}
                    className="bg-yellow-500 px-3 py-1 rounded-[15px] text-sm hover:bg-yellow-400"
                  >
                    Suspend
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="bg-red-600 px-3 py-1 rounded-[15px] text-sm hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeamTable;

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// // import { FaChevronRight } from "react-icons/fa";

// interface TeamMember {
//   id: string;
//   name: string;
//   role: string;
//   email: string;
//   status: "Active" | "Inactive";
//   joinDate: string;
// }

// const teamData: TeamMember[] = [
//   {
//     id: "1",
//     name: "Marvin McKinney",
//     role: "Distributor",
//     email: "kenzi.lawson@example.com",
//     status: "Active",
//     joinDate: "15/08/2023",
//   },
//   {
//     id: "2",
//     name: "Darrell Steward",
//     role: "Accountant",
//     email: "tim.jennings@example.com",
//     status: "Active",
//     joinDate: "22/11/2023",
//   },
//   {
//     id: "3",
//     name: "Albert Flores",
//     role: "Distributor",
//     email: "jackson.graham@example.com",
//     status: "Inactive",
//     joinDate: "05/01/2024",
//   },
//   {
//     id: "4",
//     name: "Floyd Miles",
//     role: "Accountant",
//     email: "deanna.curtis@example.com",
//     status: "Active",
//     joinDate: "30/04/2023",
//   },
// ];

// const TeamTable = () => {
//   const handleChangeRole = (id: string) => {
//     console.log("Change role for:", id);
//   };

//   const handleSuspend = (id: string) => {
//     console.log("Suspend:", id);
//   };

//   const handleDelete = (id: string) => {
//     console.log("Delete:", id);
//   };

//   return (
//     <div className="overflow-x-auto">
//       <Table className="w-full min-w-[1000px] text-white">
//         {/* Table Header */}
//         <TableHeader>
//           <TableRow className="text-gray-400 text-sm md:text-base">
//             <TableHead className="px-4 py-2 text-left">Name</TableHead>
//             <TableHead className="px-4 py-2 text-left">Role</TableHead>
//             <TableHead className="px-4 py-2 text-left">Email</TableHead>
//             <TableHead className="px-4 py-2 text-left">Status</TableHead>
//             <TableHead className="px-4 py-2 text-left">Join Date</TableHead>
//             <TableHead className="px-4 py-2 text-left">Action</TableHead>
//           </TableRow>
//         </TableHeader>

//         {/* Table Body */}
//         <TableBody>
//           {teamData.map((member) => (
//             <TableRow key={member.id} className="border-b border-gray-800">
//               <TableCell className="px-4 py-3">{member.name}</TableCell>
//               <TableCell className="px-4 py-3">{member.role}</TableCell>
//               <TableCell className="px-4 py-3 text-gray-400">
//                 {member.email}
//               </TableCell>
//               <TableCell className="px-4 py-3">
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
//                     member.status === "Active"
//                       ? "bg-[#0E261F] text-[#01D449]"
//                       : "bg-gray-700 text-gray-300"
//                   }`}
//                 >
//                   {member.status}
//                 </span>
//               </TableCell>
//               <TableCell className="px-4 py-3">{member.joinDate}</TableCell>
//               <TableCell className="px-4 py-3 flex gap-2">
//                 <button
//                   onClick={() => handleChangeRole(member.id)}
//                   className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
//                 >
//                   Change Role
//                 </button>
//                 <button
//                   onClick={() => handleSuspend(member.id)}
//                   className="bg-yellow-500 px-3 py-1 rounded text-sm hover:bg-yellow-400"
//                 >
//                   Suspend
//                 </button>
//                 <button
//                   onClick={() => handleDelete(member.id)}
//                   className="bg-red-600 px-3 py-1 rounded text-sm hover:bg-red-500"
//                 >
//                   Delete
//                 </button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default TeamTable;
