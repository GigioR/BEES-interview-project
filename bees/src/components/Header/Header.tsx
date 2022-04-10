import React from "react";
import {
    BackButton,
    BackContainer,
    BackText,
    ButtonIcon,
    HeaderContainner,
    UserName
} from "./Header.styles";
import BackImg from "../../assets/images/back.svg"
import { Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";

export const Header = () => {
    const { user } = useUser();
    return (
        <HeaderContainner>
            <BackContainer>
                <Link data-testid="link-to-home" to="/">
                    <BackButton data-testid="back-button">
                        <ButtonIcon src={BackImg} />
                    </BackButton>
                </Link>
                <BackText>Go back</BackText>
            </BackContainer>
            <UserName data-testid="user-name">{user.userName}</UserName>
        </HeaderContainner>
    )
}