import { Inter } from "next/font/google";
import React, { useState, useEffect } from 'react';
import KanbanBoard from "@/components/Kanban/KanbanBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className="App">
      <KanbanBoard />
    </div>
  );
}
