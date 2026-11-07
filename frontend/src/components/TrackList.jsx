
import TrackCard from "./TrackCard";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";

function TrackList({
  tracks,
  loading,
  error,
  onRetry,
  onSelectTrack,
}) {
  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={onRetry} />;
  }

  if (tracks.length === 0) {
    return (
      <div className="state-message">
        <p>No tracks available.</p>
      </div>
    );
  }

  return (
    <section className="track-section">
      <div className="section-heading">
        <div>
          <p className="section-eyebrow">LISTEN NOW</p>
          <h2>Discover Music</h2>
        </div>
        <span className="track-count">{tracks.length} tracks</span>
      </div>

      <div className="track-grid">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            onSelect={onSelectTrack}
          />
        ))}
      </div>
    </section>
  );
}

export default TrackList;
