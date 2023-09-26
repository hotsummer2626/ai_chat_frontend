import styled from "styled-components";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from '@mui/material/FormHelperText';
import { colors } from "@/styles/variables";

const { primaryColor } = colors;

const StyledFormControl = styled(FormControl)`
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

const PasswordInput = ({ label, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <StyledFormControl variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor={label} size="small">
                {label}
            </InputLabel>
            <OutlinedInput
                id={label}
                type={showPassword ? "text" : "password"}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
                size="small"
                onChange={onChange}
                autoComplete="new-password"
                error={!!error}
            />
            {error && <FormHelperText error>{error.message}</FormHelperText>}
        </StyledFormControl>
    );
};

export default PasswordInput;
