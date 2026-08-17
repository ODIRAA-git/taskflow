const API_URL = "http://localhost:5001/api/projects";

export const getProjects = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
};

export const createProject = async (
  name: string,
  description: string
) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create project");
  }

  return response.json();
};