import { Inter } from "next/font/google";
import { PrismaClient } from '@prisma/client'
import React, { useState, useEffect } from 'react';
import KanbanBoard from "@/components/Kanban/KanbanBoard";
import KanbanProvider from '@/components/Kanban/Context/KanbanProvider';

const inter = Inter({ subsets: ["latin"] });
// const prisma = new PrismaClient()

export default function Home() {

  const [tickets, setTickets] = useState([]);

  // useEffect(() => {
  //   async function fetchTickets() {
  //     try {
  //       const response = await fetch('/api/tickets');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch tickets');
  //       }
  //       const ticketsData = await response.json();
  //       setTickets(ticketsData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchTickets();
  // }, []);

  return (
    <div className="App">
      <KanbanProvider>
        <KanbanBoard />
      </KanbanProvider>
     
    </div>
  );
}
