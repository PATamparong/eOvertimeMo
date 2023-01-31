import styled, { css } from "styled-components";
import { theme } from "../../themes";

const media = {
  desktop: (...args: any[]) => css``,
};
/* @media (min-width: 870px) { */
/* ${css(...args))}; */
/* } */
export const FooterStyle = styled.footer`
  font-family: nunito-sans, sans-serif;
  text-align: center;
  background-color: ${theme.color.lightGrey};
  padding-top: 3%;
  padding-bottom: 3%;
  ${media.desktop`
    text-align: left;
  `}
`;

export const TopBar = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 40px 0;
  ${media.desktop`
    padding: 45px 80px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  `}
`;

export const GetTheApp = styled.div`
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #2b2738;
  margin: 0 -15px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  ${media.desktop`
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
  `}
`;

export const GetTheAppTitle = styled.div`
  margin-bottom: 4px;
  width: 100%;
  ${media.desktop`
    width: unset;
    margin: 0 15px;
  `}
`;

export const AppStoreApp = styled.img`
  width: 189px;
  height: 63px;
  margin: 16px auto;
  padding: 0 20px;
  ${media.desktop`
    padding: 0;
    margin: 0 8px;
  `}
`;

export const GoogleApp = styled.img`
  width: 189px;
  height: 63px;
  margin: 16px auto;
  padding: 0 20px;
  ${media.desktop`
    padding: 0;
    margin: 0 8px;
  `}
`;

export const DesktopSocialList = styled.div`
  display: none;
  ${media.desktop`
    display: flex;
    align-items: center;
  `};
`;

export const MobileSocialList = styled.div`
  padding-bottom: 40px;
  width: 100%;
  ${media.desktop`
    display: none;
  `};
`;

export const Twitter = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

export const Facebook = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

export const Instagram = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

export const HR = styled.div`
  display: none;
  ${media.desktop`
    height: 0;
    padding: 0;
    margin: 0;
    display: block;
    border-bottom: 1px #cacada solid;
  `};
`;

export const BottomBar = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  ${media.desktop`
    flex-wrap: nowrap;
    padding: 40px 80px 60px;
    justify-content: space-between;
  `};
`;

export const Menu = styled.div`
  margin-bottom: 30px;
  min-width: 50%;
  flex-wrap: wrap;
  flex-direction: row;
  ${media.desktop`
    min-width: unset;
    margin-bottom: 0;
    margin-right: 40px;
  `}
`;

export const MenuHead = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #2b2738;
`;

export const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: #2f6cb3;
  width: 30%;
  transform: scale(0.7) translate(165%, -30%);
  justify-content: center;
  align-items: center;
  ${media.desktop`
    white-space: nowrap;
  `}
`;

export const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  font-size: 12px;
  line-height: 1.33;
  color: #2b2738;
  margin: 0 20px;
`;

export const PolicyRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;
