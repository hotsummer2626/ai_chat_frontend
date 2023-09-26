import { LoadingButton } from "@mui/lab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors } from "@/styles/variables";

const { primaryColor, lightPrimaryColor, darkPrimaryColor } = colors;

const buttonTheme = createTheme({
    palette: {
        primaryColor: {
            main: `${primaryColor}`,
            light: `${lightPrimaryColor}`,
            dark: `${darkPrimaryColor}`,
            contrastText: "#fff",
        },
    },
});

const Button = ({ children, type, loading }) => {
    return (
        <ThemeProvider theme={buttonTheme}>
            <LoadingButton
                variant="contained"
                fullWidth
                color="primaryColor"
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                type={type || "submit"}
                loading={loading}
            >
                {children}
            </LoadingButton>
        </ThemeProvider>
    );
};

export default Button;
