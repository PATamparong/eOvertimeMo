import React, { useEffect, useMemo, useState } from "react";
import {
  Nav,
  MenuLink,
  MenuItem,
  MenuItemBtn,
  MenuLinkBtn,
  MenuRight,
  MenuLeft,
} from "./styles";
import Button from "../Button";

export default function Navigation(props?: any) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  // const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const { isOtForm } = props;

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const buttonDisplay = useMemo(
    () =>
      button ? (
        <MenuLinkBtn to="/order-now">
          <Button primary>Download</Button>
        </MenuLinkBtn>
      ) : (
        <MenuLinkBtn to="/order-now">
          <Button primary bigFont>
            Download
          </Button>
        </MenuLinkBtn>
      ),
    [button]
  );
  return (
    <React.Fragment>
      <Nav>
        <MenuLeft>
          <MenuItem>
            <MenuLink onClick={closeMenu} to="/">
              Dashboard
            </MenuLink>
            <MenuLink onClick={closeMenu} to="/otforms">
              OT Forms
            </MenuLink>
            <MenuLink onClick={closeMenu} to="/history">
              History
            </MenuLink>
          </MenuItem>
        </MenuLeft>
        <MenuRight>
          <MenuItemBtn>{isOtForm ? buttonDisplay : null}</MenuItemBtn>
        </MenuRight>
      </Nav>
    </React.Fragment>
  );
}
