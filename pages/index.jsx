import { Inter } from "next/font/google";
import React, { useState, useEffect } from 'react';
import KanbanBoard from "@/components/Kanban/KanbanBoard";
import KanbanProvider from '@/components/Kanban/Context/KanbanProvider';

const inter = Inter({ subsets: ["latin"] });
// const prisma = new PrismaClient()

export default function Home() {

  

  return (
    <div className="App">
      <KanbanProvider>
        <KanbanBoard />
      </KanbanProvider>
     
    </div>
  );
}
