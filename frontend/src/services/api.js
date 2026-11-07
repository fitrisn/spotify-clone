
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function handleResponse(response) {
  const result = await response.json();

  if (!response.ok) {
    const error = new Error(
      result.message || "Something went wrong"
    );

    error.status = response.status;
    error.errors = result.errors || {};

    throw error;
  }

  return result;
}

export async function getTracks() {
  const response = await fetch(`${API_URL}/api/tracks`);
  return handleResponse(response);
}

export async function createPlaylist(playlistData) {
  const response = await fetch(`${API_URL}/api/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playlistData),
  });

  return handleResponse(response);
}
