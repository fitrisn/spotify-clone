
function Header() {
  return (
    <header className="header">
      <div className="header-navigation">
        <button aria-label="Go back">‹</button>
        <button aria-label="Go forward">›</button>
      </div>

      <div className="header-profile">
        <span className="profile-avatar">U</span>
        <span>Guest User</span>
      </div>
    </header>
  );
}

export default Header;
