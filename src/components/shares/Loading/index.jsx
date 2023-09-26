import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors } from "@/styles/variables";

const { primaryColor, lightPrimaryColor, darkPrimaryColor } = colors;

const loadingTheme = createTheme({
    palette: {
        primaryColor: {
            main: `${primaryColor}`,
            light: `${lightPrimaryColor}`,
            dark: `${darkPrimaryColor}`,
            contrastText: "#fff",
        },
    },
});

const Loading = () => {
    return (
        <ThemeProvider theme={loadingTheme}>
            <CircularProgress color="primaryColor" />
        </ThemeProvider>
    );
};

export default Loading;
