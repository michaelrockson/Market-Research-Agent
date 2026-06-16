import { NavLink } from "react-router-dom";
import { useSideBar } from "./hooks/useSideBar.tsx";

export default function SideBar() {
  const { sideBarNavs } = useSideBar();

  return (
    <aside className="li-section-sm li-h-full li-sidebar">
      <div className="li-flex-xl li-flex-col">
        <div className="li-sidebar-header">
          <img
            src="/public/favicon.png"
            alt="System logo"
            style={{ width: 35, height: 35 }}
          />
          <p className="li-sidebar-title">Reddit-Mine</p>
        </div>
      </div>

      <section className="li-sidebar-menu li-sidebar-group">
        <p className="li-sidebar-group-title">MAIN MENU</p>
        <ul className="li-flex-lg li-flex-col li-sidebar-item">
          {sideBarNavs.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.path}
                end={nav.path === "/dashboard"}
                className={({ isActive }) =>
                  isActive ? "li-nav-link active" : "li-nav-link"
                }
              >
                {nav.icon && <nav.icon />}
                {nav.navLabel}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>

      <footer className="li-sidebar-footer li-flex">
        <div className="li-sidebar-user">
          <div className="li-avatar li-sidear-user-avatar">MR</div>
          <div className="li-flex-no-gap li-flex-col">
            <p className="li-sidebar-user-name">Michael Rockson</p>
            <span className="li-sidebar-user-role">example@gmail.com</span>
          </div>
        </div>
      </footer>
    </aside>
  );
}
