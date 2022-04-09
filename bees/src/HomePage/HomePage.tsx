import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { AlphabeticalMessage, BeeIcon, EnterButton, FullNameMessage, InputAndButtonContainer, InputCheckbox, InputCheckboxText, InputNameContainer, LandingContentWrapper, WelcomeContent } from "./HomePage.styles"
export const HomePage = () => {
    const [disabledButton, setDisabledButton] = useState<boolean>(true);
    const [name, setName] = useState<string>();
    const [checkboxState, setCheckboxState] = useState<boolean>(false);

    useEffect(() => {
        if (name && checkboxState) setDisabledButton(false)
    }, [name, checkboxState])

    const handleSetName = (value: string) => {
        if (!value.length) setDisabledButton(true);
        setName(value);
    }

    const handleCheckboxState = () => {
        setCheckboxState(!checkboxState)
        setDisabledButton(true);
    }

    return (
        <LandingContentWrapper>
            <WelcomeContent>
                <FullNameMessage>Please, enter your full name below</FullNameMessage>
                <AlphabeticalMessage>Only alphabetical characters are accepted</AlphabeticalMessage>
                <InputAndButtonContainer>
                    <InputNameContainer placeholder="Full name" onChange={(e) => handleSetName(e.target.value)}></InputNameContainer>
                    <InputCheckboxText>
                        <InputCheckbox type="checkbox" onChange={() => handleCheckboxState()} />
                        Are you older than 18 years old?
                    </InputCheckboxText>
                    <Link to={"/brewery-list"}>
                        <EnterButton disabled={disabledButton}>Enter</EnterButton>
                    </Link>
                </InputAndButtonContainer>
            </WelcomeContent>
            <BeeIcon src="../../public/bee.png" />
        </LandingContentWrapper>
    )
}
