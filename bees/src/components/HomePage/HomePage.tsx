import React, { useState, useEffect } from "react"
import BeeImg from '../../assets/images/bee.svg';
import { Link } from "react-router-dom";
import { AlphabeticalMessage, BeeIcon, EnterButton, FullNameMessage, InputAndButtonContainer, InputCheckbox, InputCheckboxText, InputNameContainer, LandingContentWrapper, WelcomeContent } from "./HomePage.styles"
import { useUser } from "../Context/UserContext";
export const HomePage = () => {
    const { setUser } = useUser();
    const [disabledButton, setDisabledButton] = useState<boolean>(true);
    const [checkboxState, setCheckboxState] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [invalidUserName, setInvalidUserName] = useState<boolean>(false);

    useEffect(() => {
        if (name && checkboxState && !invalidUserName) setDisabledButton(false)
    }, [name, checkboxState])

    const handleSetName = (value: string) => {
        if (value && checkboxState && value.match(/^[a-zA-Z]+$/g)) {
            setDisabledButton(false);
            setInvalidUserName(false);
        }
        else {
            setDisabledButton(true);
            setInvalidUserName(true);
        }
        console.log({ invalidUserName });
        setName(value);
    }

    const handleCheckboxState = () => {
        setCheckboxState(!checkboxState)
        if (name && name.match(/^[a-zA-Z]+$/g)) setDisabledButton(false);
        else setDisabledButton(true);
    }

    return (
        <LandingContentWrapper>
            <WelcomeContent>
                <FullNameMessage>Please, enter your full name below</FullNameMessage>
                <AlphabeticalMessage>Only alphabetical characters are accepted</AlphabeticalMessage>
                <InputAndButtonContainer>
                    <InputNameContainer placeholder="Full name" onChange={(e) => handleSetName(e.target.value)} invalid={invalidUserName}></InputNameContainer>
                    <InputCheckboxText>
                        <InputCheckbox type="checkbox" onChange={() => handleCheckboxState()} />
                        Are you older than 18 years old?
                    </InputCheckboxText>
                    <Link to={"/brewery-list"}>
                        <EnterButton disabled={disabledButton} onClick={() => setUser({ userName: name })}>Enter</EnterButton>
                    </Link>
                </InputAndButtonContainer>
            </WelcomeContent>
            <BeeIcon src={BeeImg} />
        </LandingContentWrapper>
    )
}
