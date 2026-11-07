
const express = require("express");
const { randomUUID } = require("crypto");
const { tracks, playlists } = require("../data/store");

const router = express.Router();

// GET /api/tracks
router.get("/tracks", (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: tracks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve tracks",
    });
  }
});

// POST /api/playlists
router.post("/playlists", (req, res) => {
  try {
    const { name, description } = req.body;
    const errors = {};

    // Validate playlist name
    if (typeof name !== "string" || !name.trim()) {
      errors.name = "Playlist name is required";
    } else if (name.trim().length > 50) {
      errors.name = "Playlist name must not exceed 50 characters";
    }

    // Validate playlist description
    if (
      description !== undefined &&
      typeof description !== "string"
    ) {
      errors.description = "Description must be a string";
    } else if (
      typeof description === "string" &&
      description.length > 200
    ) {
      errors.description =
        "Description must not exceed 200 characters";
    }

    // Return validation errors
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
    }

    const newPlaylist = {
      id: randomUUID(),
      name: name.trim(),
      description: description ? description.trim() : "",
    };

    playlists.push(newPlaylist);

    return res.status(201).json({
      success: true,
      message: "Playlist created successfully",
      data: newPlaylist,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create playlist",
    });
  }
});

module.exports = router;
