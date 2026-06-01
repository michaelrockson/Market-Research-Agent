export default function SideBar() {
  return (
    <div className="li-flex-xl li-flex-col li-section-sm li-justify-between li-h-90">
      <div className="li-flex-xl li-flex-col">
        <div>
          <p>Logo and stuff...</p>
        </div>

        <div>
          <ul className="li-flex-lg li-flex-col li-container li-sidebar-item">
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Reports</a>
            </li>
            <li>
              <a>Pipelines</a>
            </li>
            <li>
              <a>Agent Settings</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p>User Account</p>
      </div>
    </div>
  );
}
