import React from "react";
import { BackButton, BackContainer, BackText, ButtonIcon, HeaderContainner, UserName } from "./Header.styles";
import BackImg from "../../assets/images/back.svg"
import { Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";

export const Header = () => {
    const { user } = useUser();
    return (
        <HeaderContainner>
            <BackContainer>
                <Link to="/">
                    <BackButton>
                        <ButtonIcon src={BackImg} />
                    </BackButton>
                </Link>
                <BackText>Go back</BackText>
            </BackContainer>
            <UserName>{user.userName}</UserName>
        </HeaderContainner>
    )
}