
import { useState } from "react";
import { createPlaylist } from "../services/api";

function CreatePlaylistModal({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setErrors({});
    setMessage("");

    if (!name.trim()) {
      setErrors({ name: "Playlist name is required" });
      return;
    }

    if (name.trim().length > 50) {
      setErrors({ name: "Maximum 50 characters" });
      return;
    }

    if (description.length > 200) {
      setErrors({ description: "Maximum 200 characters" });
      return;
    }

    try {
      setStatus("submitting");

      const result = await createPlaylist({
        name,
        description,
      });

      setStatus("success");
      onSuccess(result.data);
    } catch (error) {
      if (error.status === 400) {
        setStatus("validationError");
        setErrors(error.errors || {});
        setMessage(error.message);
      } else if (error.status >= 500) {
        setStatus("serverError");
        setMessage("Server error. Please try again later.");
      } else {
        setStatus("networkError");
        setMessage(
          "Unable to connect to the server. Please check your connection."
        );
      }
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="playlist-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Create Playlist</h2>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <p className="modal-description">
          Give your new playlist a name and description.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="playlist-name">Playlist Name</label>
          <input
            id="playlist-name"
            type="text"
            placeholder="My favorite songs"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={60}
          />

          {errors.name && (
            <p className="field-error">{errors.name}</p>
          )}

          <label htmlFor="playlist-description">Description</label>
          <textarea
            id="playlist-description"
            placeholder="Add an optional description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            maxLength={200}
            rows={4}
          />

          {errors.description && (
            <p className="field-error">{errors.description}</p>
          )}

          {message && (
            <p className="form-error">{message}</p>
          )}

          <div className="modal-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit-button"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Creating..."
                : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePlaylistModal;
