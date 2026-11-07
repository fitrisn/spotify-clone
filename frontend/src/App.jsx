
import { useCallback, useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TrackList from "./components/TrackList";
import CreatePlaylistModal from "./components/CreatePlaylistModal";
import MusicPlayer from "./components/MusicPlayer";

import { getTracks } from "./services/api";

import "./styles/global.css";
import "./styles/App.css";

function App() {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState("");

  const fetchTracks = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const result = await getTracks();

      setTracks(result.data);

      setSelectedTrack((currentTrack) => {
        if (currentTrack) {
          return result.data.find(
            (track) => track.id === currentTrack.id
          ) || result.data[0] || null;
        }

        return result.data[0] || null;
      });
    } catch (err) {
      setError(
        "Unable to load tracks. Please check whether the API server is running."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTracks();
  }, [fetchTracks]);

  function handlePlaylistSuccess(playlist) {
    setIsModalOpen(false);
    setNotification(`"${playlist.name}" created successfully!`);

    window.setTimeout(() => {
      setNotification("");
    }, 3000);
  }

  return (
    <div className="app-layout">
      <Sidebar onCreatePlaylist={() => setIsModalOpen(true)} />

      <main className="main-content" id="home">
        <Header />

        <section className="welcome-section">
          <p className="welcome-eyebrow">YOUR MUSIC SPACE</p>
          <h1>Good evening.</h1>
          <p>
            Discover your favorite sounds and enjoy your music.
          </p>
        </section>

        <TrackList
          tracks={tracks}
          loading={loading}
          error={error}
          onRetry={fetchTracks}
          onSelectTrack={setSelectedTrack}
        />
      </main>

      <MusicPlayer track={selectedTrack} />

      {isModalOpen && (
        <CreatePlaylistModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={handlePlaylistSuccess}
        />
      )}

      {notification && (
        <div className="notification">
          <span>✓</span>
          {notification}
        </div>
      )}
    </div>
  );
}

export default App;
