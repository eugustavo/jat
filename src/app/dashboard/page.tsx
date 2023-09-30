"use client"

import { useEffect, useState } from "react";
import { z } from "zod"

import { DataTable } from "@/components/ui/data-table";
import { UserNav } from "@/components/ui/user-nav";
import { columns } from "@/components/ui/columns"

import { taskSchema } from "@/data/schema"
import allJobs from "@/data/tasks.json"

interface TasksProps {
  id: string;
  enterprise: string;
  title: string;
  status: string;
  priority: string;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  async function getTasks() {
    return z.array(taskSchema).parse(allJobs)
  }

  useEffect(() => {
    async function loadTasks() {
      const allTasks = await getTasks();

      console.log(allTasks)

      setTasks(allTasks);
    }

    loadTasks()
  }, [])

  return (
    <div className="hidden min-h-screen flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here is your list of job applications
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UserNav />
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}