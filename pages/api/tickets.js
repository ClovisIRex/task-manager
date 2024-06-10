import { extractDate } from '@/components/Kanban/Utils';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getTickets(req, res);
  } else if (req.method === 'POST') {
    return addTicket(req, res);
  } else if (req.method === 'PUT') {
    return updateTicket(req, res);
  } else if (req.method === 'DELETE') {
    return deleteTicket(req, res);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

async function getTickets(req, res) {
  try {
    let tickets = await prisma.ticket.findMany();
    tickets = tickets.map(ticket => {
      let dateOnly = extractDate(ticket.dueDate)
      return {...ticket, dueDate: dateOnly}
    });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching tickets' });
  }
}

async function addTicket(req, res) {
  try {
    const { id, title,description, owner, dueDate, status, priority } = req.body;
    const newTicket = await prisma.ticket.create({
      data: {
        id,
        title,
        description,
        owner,
        dueDate,
        status,
        priority,
        tasks
      },
    });
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the ticket' });
  }
}

async function updateTicket(req, res) {
  try {
    const { id, title,description, owner, dueDate, status, priority } = req.body;
    const updatedTicket = await prisma.ticket.update({
      where: { id: id },
      data: {
        id,
        title,
        description,
        owner,
        dueDate,
        status,
        priority,
        tasks
      },
    });
    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the ticket' });
  }
}

async function deleteTicket(req, res) {
  try {
    const { id } = req.body;
    await prisma.ticket.delete({
      where: { id: id },
    });
    res.status(204).json(id); // No content
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the ticket' });
  }
}
