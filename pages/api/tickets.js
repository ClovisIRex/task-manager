// pages/api/tickets.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getTickets(req, res);
  } else if (req.method === 'POST') {
    return addTicket(req, res);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

async function getTickets(req, res) {
  try {
    const tickets = await prisma.ticket.findMany();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching tickets' });
    
  }
}

async function addTicket(req, res) {
  // Implement addTicket logic here
}

// Implement other CRUD operations similarly
