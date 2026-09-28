const API_URL = "http://localhost:5001/api/tasks";

export type Task = {
  id: number;
  title: string;
  priority: string;
  status: string;
  projectId?: number | null;
};

export const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
};

export const createTask = async (
  title: string,
  priority: string,
  status: string,
  projectId?: number
): Promise<Task> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      priority,
      status,
      projectId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
};

export const updateTask = async (
  id: number,
  title: string,
  priority: string,
  status: string,
  projectId?: number
): Promise<Task> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      priority,
      status,
      projectId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  return response.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
};
