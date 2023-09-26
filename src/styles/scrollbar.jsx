import { css } from "styled-components";
import { colors } from "./variables";

const { primaryColor } = colors;

const scrollbar = () => css`
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${primaryColor};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

export default scrollbar;
