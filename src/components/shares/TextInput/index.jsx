import styled from "styled-components";
import { TextField } from "@mui/material";
import { colors } from "@/styles/variables";

const { primaryColor } = colors;

const StyledTextField = styled(TextField)`
    label.Mui-focused {
        color: ${primaryColor};
    }
    .MuiOutlinedInput-root {
        &.Mui-focused {
            fieldset {
                border-color: ${primaryColor};
            }
        }
    }
`;

const TextInput = ({ label, autoComplete, onChange, error }) => {
    return (
        <StyledTextField
            label={label}
            size="small"
            fullWidth
            margin="normal"
            onChange={onChange}
            autoComplete={autoComplete}
            error={!!error}
            helperText={error?.message}
        />
    );
};

export default TextInput;
