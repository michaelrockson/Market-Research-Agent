export default function SideBar() {
  return (
    <aside className="li-section-sm li-h-90 li-sidebar">
      <div className="li-flex-xl li-flex-col li-border-b">
        <div className="li-sidebar-header">
          <div className="li-sidebar-logo">RP</div>
          <p className="li-sidebar-title">Painpoint Agent</p>
        </div>
      </div>

      <section className="li-sidebar-menu li-sidebar-group">
        <p className="li-sidebar-group-title">MAIN MENU</p>
        <ul className="li-flex-lg li-flex-col li-container li-sidebar-item">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Active Subreddits</a>
          </li>
          <li>
            <a>Painpoint Pipelines</a>
          </li>
          <li>
            <a>Reports & Analysis</a>
          </li>
          <li>
            <a>Agent Settings</a>
          </li>
        </ul>
      </section>

      <footer className="li-sidebar-footer li-flex">
        <div className="li-sidebar-user">
          <div className=" li-avatar li-sidear-user-avatar">MR</div>
          <div className="li-flex-no-gap li-flex-col">
            <p className="li-sidebar-user-name">Michael Rockson</p>
            <span className="li-sidebar-user-role">example@gmail.com</span>
          </div>
        </div>
      </footer>
    </aside>
  );
}
