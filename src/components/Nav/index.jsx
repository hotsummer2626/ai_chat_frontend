import styled from "styled-components";
import defaultAvatar from "@/assets/images/default-avatar.jpg";
import { colors } from "@/styles/variables";
import { Avatar } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useDispatch } from "react-redux";
import { logout } from "@/store/slices/user";
import { setDefaultMessages } from "@/store/slices/message";

const { primaryColor } = colors;

const Container = styled.div`
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${primaryColor};
    gap: 20px;
    opacity: ${({ isShow }) => (isShow ? "1" : "0")};
    transition: 1s ease;
`;

const LinksWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

const Link = styled.div`
    color: #fff;
    cursor: pointer;
`;

const links = [
    { name: "chat", icon: <ChatIcon fontSize="large" /> },
    // {
    //     name: "settings",
    //     icon: <SettingsIcon fontSize="large" />,
    // },
];

const Nav = () => {
    const isShow = useFadeIn();
    const dispatch = useDispatch();

    return (
        <Container isShow={isShow}>
            <Avatar src={defaultAvatar} alt="avatar" />
            <LinksWrapper>
                {links.map((link) => (
                    <Link key={link.name}>{link.icon}</Link>
                ))}
                <Link
                    onClick={() => {
                        dispatch(logout());
                        dispatch(setDefaultMessages());
                    }}
                >
                    <PowerSettingsNewIcon fontSize="large" />
                </Link>
            </LinksWrapper>
        </Container>
    );
};

export default Nav;
