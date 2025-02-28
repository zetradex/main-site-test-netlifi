import { CSSObject } from "@emotion/react";
import { styled } from "@mui/system";
import Menu from "@mui/material/Menu";

export const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    border-radius: 10px;
    min-width: 220px;
  }
`;

export const popupItemStyle: CSSObject = {
  color: "#474D65",
  fontFamily: "__gilroy_d51f18, sans-serif",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "normal",
  display: "flex",
};
export const popupItemStyleDark: CSSObject = {
  color: "#9DA2B5",
  fontFamily: "__gilroy_d51f18, sans-serif",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "normal",
  display: "flex",
};
export const popupStyle: CSSObject = {
  borderRadius: "10px",
};
