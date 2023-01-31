import React from "react";
import {
  TopBar,
  GetTheApp,
  GetTheAppTitle,
  AppStoreApp,
  GoogleApp,
  BottomBar,
  //   DesktopSocialList,
  HR,
  Menu,
  MenuHead,
  MenuLink,
  //   MobileSocialList,
  Policy,
  PolicyRow,
  FooterStyle,
} from "./styles";
import Line from "../Line";
import Space from "../Space";
import { strings } from "../../constants";

export default function Footer() {
  const menu = [
    {
      name: "Program Guides",
      links: [
        { title: "Rough Around The Edges", url: "www.openfit.com" },
        { title: "Xtend Barre", url: "www.openfit.com" },
        { title: "600 Seconds", url: "www.openfit.com" },
        { title: "Yoga52", url: "www.openfit.com" },
      ],
    },
    {
      name: "About Us",
      links: [
        { title: "About Openfit", url: "www.openfit.com" },
        { title: "Help and Feedback", url: "www.openfit.com" },
        { title: "Terms and Condition", url: "www.openfit.com" },
        { title: "Privacy Policy", url: "www.openfit.com" },
        { title: "FAQ", url: "www.openfit.com" },
      ],
    },
  ];
  return (
    <React.Fragment>
      <Line />
      <FooterStyle>
        {/* <TopBar>
          <GetTheApp> */}
        {/* <GetTheAppTitle> Get The App</GetTheAppTitle> */}
        {/* <AppStoreApp />
            <GoogleApp />
          </GetTheApp> */}
        {/* <DesktopSocialList>
            <SocialList />
          </DesktopSocialList> */}
        {/* </TopBar> */}
        <HR />
        <BottomBar>
          {menu.map(({ name, links }, index1) => (
            <Menu key={index1}>
              <MenuHead>{name}</MenuHead>
              {links.map(({ title, url }, index2) => (
                <MenuLink key={index2} target="target_blank" href={url}>
                  {title}
                </MenuLink>
              ))}
            </Menu>
          ))}
          {/* <MobileSocialList>
            <SocialList />
          </MobileSocialList> */}
          <Space height={5} />
          {strings.POLICY.map(
            (
              { firstString, secondString, thirdString, fourthString },
              index3
            ) => (
              <Policy key={index3}>
                <PolicyRow>{firstString}</PolicyRow>
                <PolicyRow>{secondString}</PolicyRow>
                <PolicyRow>{thirdString}</PolicyRow>
                <PolicyRow>{fourthString}</PolicyRow>
              </Policy>
            )
          )}
        </BottomBar>
      </FooterStyle>
    </React.Fragment>
  );
}
