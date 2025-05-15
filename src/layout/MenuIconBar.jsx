import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const MenuIconBar = ({ activeMenu, setActiveMenu, menuDetails }) => {
  return (
    <>
      {Object.entries(menuDetails).map(([menuKey, menuValue]) => {
        const Icon = menuValue.icon;
        return (
          <OverlayTrigger
            key={menuKey}
            placement="right"
            overlay={<Tooltip>{menuValue.text}</Tooltip>}
          >
            <Button
              variant={activeMenu === menuKey ? "primary" : "light"}
              className={`mb-2 p-2 rounded-circle ${
                activeMenu === menuKey ? "active" : "text-muted"
              }`}
              onClick={() => setActiveMenu(menuKey)}
            >
              <Icon size={25} />
            </Button>
          </OverlayTrigger>
        );
      })}
    </>
  );
};

export default MenuIconBar;
