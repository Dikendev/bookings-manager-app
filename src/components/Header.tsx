import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header list">
          <li>
            <a href="/bookings" className="header button icon">
              <button className="header_button">
                <FaCalendarAlt />
                <span>bookings</span>
              </button>
            </a>
          </li>
          <li>
            <a href="/bookable" className="header button">
              <button className="header_button">
                <FaDoorOpen />
                <span>bookables</span>
              </button>
            </a>
          </li>
          <li>
            <a href="/user" className="header button">
              <button className="header_button">
                <FaUsers />
                <span>users</span>
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.displayName = "Header";
