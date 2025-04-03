"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaUser, FaEnvelope, FaPhone, FaFileAlt, FaCalendarAlt, FaDollarSign } from "react-icons/fa";

// Static Reservations Data
const initialReservations = [
  {
    name: "John Doe",
    status: "Pending",
    email: "john.doe@example.com",
    phone: "+1 234-567-890",
    checkIn: "01/01/2024",
    checkOut: "01/05/2024",
    guests: "2 Adults, 1 Child",
    total: "$500",
    due: "$200",
    docStatus: "Received",
    resNumber: "#12345",
  },
  {
    name: "Jane Smith",
    status: "Cancelled",
    email: "jane.smith@example.com",
    phone: "+1 987-654-321",
    checkIn: "02/01/2024",
    checkOut: "02/03/2024",
    guests: "1 Adult",
    total: "$300",
    due: "$100",
    docStatus: "Pending",
    resNumber: "#12346",
  },
  {
    name: "Robert Chen",
    status: "Confirmed",
    email: "robert.chen@example.com",
    phone: "+1 555-123-4567",
    checkIn: "01/10/2024",
    checkOut: "01/15/2024",
    guests: "2 Adults",
    total: "$750",
    due: "$0",
    docStatus: "Received",
    resNumber: "#12347",
  },
  {
    name: "Sarah Johnson",
    status: "Pending",
    email: "sarah.j@example.com",
    phone: "+1 555-987-6543",
    checkIn: "02/05/2024",
    checkOut: "02/07/2024",
    guests: "2 Adults",
    total: "$400",
    due: "$400",
    docStatus: "Pending",
    resNumber: "#12348",
  }
];

// Function to get badge color based on status
const getStatusColor = (status: string) => {
  const statusColors: Record<string, string> = {
    Pending: "bg-yellow-500 text-white",
    Cancelled: "bg-red-500 text-white",
    Confirmed: "bg-green-500 text-white",
  };
  return statusColors[status] || "bg-gray-500 text-white";
};

export default function Home() {
  const [reservations] = useState(initialReservations); // ✅ No `useEffect`, directly setting state

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-6 container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Reservations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reservations.map((res) => (
          <Card key={res.resNumber} className="p-4 shadow-lg border border-gray-700 rounded-lg bg-gray-800">
            <CardContent>
              {/* Header with Name and Status Badge */}
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">{res.name}</h2>
                <Badge className={`px-3 py-1 rounded-lg ${getStatusColor(res.status)}`}>{res.status}</Badge>
              </div>

              <p className="text-sm text-gray-400">Res. No: {res.resNumber}</p>

              {/* Reservation Details */}
              <div className="space-y-2 text-sm text-gray-300 mt-2">
                <p className="flex items-center"><FaCalendarAlt className="mr-2 text-gray-500" /> {res.checkIn} - {res.checkOut}</p>
                <p className="flex items-center"><FaEnvelope className="mr-2 text-gray-500" /> {res.email}</p>
                <p className="flex items-center"><FaPhone className="mr-2 text-gray-500" /> {res.phone}</p>
                <p className="flex items-center"><FaUser className="mr-2 text-gray-500" /> {res.guests}</p>
                <p className="flex items-center"><FaFileAlt className="mr-2 text-gray-500" /> Doc(s): {res.docStatus}</p>
                <p className="flex items-center font-bold"><FaDollarSign className="mr-2 text-green-400" /> Total: {res.total}</p>
                <p className="flex items-center text-red-400 font-semibold">Due: {res.due}</p>
              </div>

              {/* View Room Button */}
              <div className="mt-4">
                <Button variant="outline" className="w-full bg-gray-700 text-white border-gray-600 hover:bg-gray-600">
                  View Room
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
