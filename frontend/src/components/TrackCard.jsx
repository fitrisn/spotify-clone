
function TrackCard({ track, onSelect }) {
  return (
    <article className="track-card">
      <div className="track-cover-wrapper">
        <img
          src={track.cover}
          alt={`${track.album} cover`}
          className="track-cover"
        />

        <button
          className="track-play-button"
          aria-label={`Play ${track.title}`}
          onClick={() => onSelect(track)}
        >
          ▶
        </button>
      </div>

      <h3>{track.title}</h3>
      <p>{track.artist}</p>
    </article>
  );
}

export default TrackCard;
