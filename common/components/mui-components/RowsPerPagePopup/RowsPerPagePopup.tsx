import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import style from "./RowsPerPagePopup.module.scss";
import {StyledMenu } from "../styles";
import { createTheme, ThemeProvider } from "@mui/material";
import { menuItemStyles } from "../../sxStyles/sxStyles";

type PropsType = {
  pageSize: number;
  setPageSize: any;
  transactionsCount: number | null;
  disable?: boolean;
};

export default function RowsPerPagePopup(props: PropsType) {
  const availableValues = [10, 25, 50, 100].filter(
    (value) => value <= props.transactionsCount!
  );


  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <PopupState variant="popover" popupId="depositAccount-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            disabled={props.disable}
            className={style.button}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #C8CDDC",
              borderRadius: "10px",
              padding: "8px 15px",
              fontSize: "12px",
              fontWeight: "600",
              lineHeight: "normal",
              fontFamily: "__gilroy_d51f18, sans-serif",
              color: "#202121",
              //gap: "6px",
            }}
            endIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill={"#9AA1B2"}
              >
                <path d="M8.97171 11.7953L4.72038 7.8456C4.42654 7.5726 4.42654 7.13117 4.72038 6.86108L5.42685 6.20474C5.72069 5.93175 6.19584 5.93175 6.48656 6.20474L9.5 9.00436L12.5134 6.20474C12.8073 5.93175 13.2824 5.93175 13.5731 6.20474L14.2796 6.86108C14.5735 7.13408 14.5735 7.57551 14.2796 7.8456L10.0283 11.7953C9.7407 12.0682 9.26555 12.0682 8.97171 11.7953Z" />
              </svg>
            }
            {...bindTrigger(popupState)}
          >
            {props.pageSize}
          </Button>

          {props.transactionsCount !== null && (
            <ThemeProvider theme={theme}>
              <StyledMenu {...bindMenu(popupState)}>
                {availableValues.map((el) => (
                  <MenuItem
                    sx={menuItemStyles}
                    key={el}
                    onClick={() => {
                      props.setPageSize(el);
                      popupState.close();
                    }}
                  >
                    {/* {`${el.login} ${el.currency}`}*/}
                    <span className={style.rows}>{el}</span>
                  </MenuItem>
                ))}
              </StyledMenu>
            </ThemeProvider>
          )}
        </React.Fragment>
      )}
    </PopupState>
  );
}
