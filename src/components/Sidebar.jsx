import React, { useEffect, useRef, useState } from "react";
import { FaHistory, FaUsers } from "react-icons/fa";
import { AiFillHome, AiFillFileText } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import "../styles/sidebar.scss";
import "../styles/stylesGlobal.css"
import { Button } from "react-bootstrap";
import { logout } from "../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { FaSignOutAlt } from "react-icons/fa";
import LogoDashboard from "./LogoDashboard";

let sidebarNavItems = [
  {
    display: "Principal",
    icon: <AiFillHome />,
    to: "/",
    section: "principal",
  },

  {
    display: "Historial",
    icon: <FaHistory />,
    to: "/dashboard/historial",
    section: "historial",
  },

  {
    display: "Extractos",
    icon: <AiFillFileText />,
    to: "/dashboard/extractos",
    section: "extractos",
  },
  {
    display: "Pago",
    icon: <BsFillCreditCard2BackFill />,
    to: "/dashboard/pago",
    section: "user",
  },
  {
    display: "Usuarios",
    icon: <FaUsers />,
    to: "/dashboard/users",
    section: "user",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();
  const user = useSelector((state) => state.auth);
  const [role, setRole] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem =
        sidebarRef.current.querySelector(".sidebar_menu_item");
      indicatorRef.current.style.height = `${sidebarItem?.clientHeight}px`;
      setStepHeight(sidebarItem?.clientHeight);
    }, 50);
    const curPath = window.location.pathname.split("/")[1];

    if (user) {
      setRole(user.rol);
    }
    

    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location, user, role]);

  if (role && role !== "admin") {
    sidebarNavItems = sidebarNavItems.filter((item)=>item.display !=="Usuarios")
  }
  return (
    <div className="sidebar bg-primary">
      <div className="sidebar_logo m-5">
        <LogoDashboard imageUrl="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1655577350/PrestaGo/Dise%C3%B1o_sin_t%C3%ADtulo_wzosra.png" />
      </div>
      <div ref={sidebarRef} className="sidebar_menu">
        <div
          ref={indicatorRef}
          className="sidebar_menu_indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) =>(
          <Link to={item.to} key={index}>
          <div
            className={`sidebar_menu_item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div className="sidebar_menu_item_icon">{item.icon}</div>
            <div className="sidebar_menu_item_text">{item.display}</div>
          </div>
        </Link>
        ))}
        <div style={{ padding: "50px 0px 0px 150px" }}>
          <Button variant="danger" size="s" onClick={() => dispatch(logout())}>
            <FaSignOutAlt />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
