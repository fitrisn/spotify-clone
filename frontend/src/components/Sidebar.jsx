
function Sidebar({ onCreatePlaylist }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">♫</span>
        <span>Spotify Clone</span>
      </div>

      <nav className="sidebar-nav">
        <a href="#home" className="nav-item active">
          <span>⌂</span>
          Home
        </a>

        <a href="#library" className="nav-item">
          <span>▤</span>
          Your Library
        </a>
      </nav>

      <div className="sidebar-divider" />

      <button
        className="create-playlist-button"
        onClick={onCreatePlaylist}
      >
        <span>＋</span>
        Create Playlist
      </button>

      <div className="sidebar-footer">
        <p>Made with ♡</p>
        <p>Spotify Clone Project</p>
      </div>
    </aside>
  );
}

export default Sidebar;
