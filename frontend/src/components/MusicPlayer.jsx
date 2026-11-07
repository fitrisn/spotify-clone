
import { useState } from "react";

function MusicPlayer({ track }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!track) {
    return (
      <footer className="music-player">
        <p className="player-empty">Select a track to get started</p>
      </footer>
    );
  }

  return (
    <footer className="music-player">
      <div className="player-track">
        <img src={track.cover} alt={track.album} />

        <div>
          <h4>{track.title}</h4>
          <p>{track.artist}</p>
        </div>
      </div>

      <div className="player-controls">
        <button
          className="player-main-button"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? "Ⅱ" : "▶"}
        </button>

        <div className="player-progress">
          <span>0:00</span>
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
          <span>{track.duration}</span>
        </div>
      </div>

      <div className="player-extra">
        <span>♫</span>
        <span>Volume</span>
      </div>
    </footer>
  );
}

export default MusicPlayer;
