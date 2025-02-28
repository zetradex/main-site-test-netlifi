import {
  createTheme,
  TextField,
  TextFieldProps,
  ThemeProvider,
} from "@mui/material";
import React from "react";


interface CustomTextFieldProps
  extends Partial<Omit<TextFieldProps, "sx" | "InputProps">> {
  width?: string;
  marginBottom?: string;
  inputComponent?: any;
  startAdornment?: any;
  textAlign?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {

  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TextField
        {...props}
        sx={{
          width: props.width ? props.width : "261px",
          height: "46px",
          marginBottom: props.marginBottom ? props.marginBottom : "",
          //padding: "7px 16px 7px 30px",
          "&>div": {
            borderRadius: "10px",
            height: "46px",

            //padding: "7px 16px 7px 16px",

            "&>div": {
              minHeight: "unset !important",
              /* fontFamily: "__gilroy_378775, sans-serif !important",
                  fontSize: "16px !important",
                  lineHeight: "20px !important",
                  fontWeight: "500 !important",*/
            },
            "&>input": {
              textAlign: props.textAlign ? props.textAlign : "",
              padding: "11.5px 14px",

              "&:disabled": {
                color: "#9AA1B2",
                fontFamily: "__gilroy_d51f18, sans-serif",
                fontSize: "16px",
                fontWeight: "500",
              },
            },
          },
        }}
        InputProps={{
          inputComponent: props.inputComponent ? props.inputComponent : "",
          style: {
            fontFamily: "__gilroy_d51f18, sans-serif",
            fontSize: "16px",
            fontWeight: "500",
            color: "#202121",
          },
          startAdornment: props.startAdornment ? props.startAdornment : "",
        }}
        variant="outlined"
      />
    </ThemeProvider>
  );
};

export default CustomTextField;
