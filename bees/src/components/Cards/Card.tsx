import React, { useState } from "react";
import { BreweryList } from "../BreweryList/BreweryList.types";
import {
    CompanyIcon,
    CompanyInfo,
    Container,
    TopContainer,
    BinIcon,
    BreweryName,
    AddressContainer,
    StreetContainer,
    FullAddress,
    PillsContainer,
    Pills,
    BinButton,
    EditingButton,
    InputAddMoreInfo
} from "./CardsList.styles";
import TypeImg from '../../assets/images/type.svg';
import PostalImg from '../../assets/images/postal.svg';
import PhoneImg from '../../assets/images/phone.svg';
import MoreImg from '../../assets/images/addMore.svg';
import BinImg from '../../assets/images/bin.svg';
import CheckImg from '../../assets/images/check.svg';
import { useUser } from "../Context/UserContext";

interface CardInterface {
    item: BreweryList,
}

export const Card = ({ item }: CardInterface) => {
    const { handleDeleteCard, handleAddMoreInfo } = useUser();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newInfo, setNewInfo] = useState<string>();

    const handleAddNewInfo = () => {
        handleAddMoreInfo(item.id, newInfo);
        setIsEditing(false);
    }

    const getMoreInfoPill = () => {
        const icon = !isEditing
            ? <EditingButton onClick={() => setIsEditing(true)}><CompanyIcon src={MoreImg} /></EditingButton>
            : <EditingButton onClick={() => handleAddNewInfo()}><CompanyIcon src={CheckImg} /></EditingButton>

        const info = isEditing
            ? <InputAddMoreInfo type="text" onChange={(e) => setNewInfo(e.target.value)} />
            : (item.moreInfo ? <CompanyInfo>{item.moreInfo}</CompanyInfo> : <CompanyInfo>add more</CompanyInfo>)

        return (
            <>
                {!item.moreInfo ? icon : <></>}
                {info}
            </>
        );

    }

    const pills = [
        (
            item.brewery_type && <Pills data-testid="pill-type" key={"type"}>
                <CompanyIcon src={TypeImg} />
                <CompanyInfo>{item.brewery_type}</CompanyInfo>
            </Pills>
        ),
        (
            item.postal_code && <Pills data-testid="pill-postal" key={"postal"}>
                <CompanyIcon src={PostalImg} />
                <CompanyInfo>{item.postal_code}</CompanyInfo>
            </Pills>
        ),
        (
            item.phone && <Pills data-testid="pill-phone" key={"phone"}>
                <CompanyIcon src={PhoneImg} />
                <CompanyInfo>{item.phone}</CompanyInfo>
            </Pills>
        ),
        (
            <Pills data-testid="pill-more-info" key={"more"}>
                {getMoreInfoPill()}
            </Pills>
        ),
    ]

    return (
        <Container data-testid="card-box">
            <TopContainer>
                <BreweryName data-testid="brewery-name">{item.name}</BreweryName>
                <BinButton data-testid="delete-button" onClick={() => handleDeleteCard(item.id)}><BinIcon src={BinImg} /></BinButton>
            </TopContainer>
            <AddressContainer data-testid="brewery-address">
                <StreetContainer>{item.street}</StreetContainer>
                <FullAddress>{`${item.city}, ${item.state} - ${item.country}`}</FullAddress>
            </AddressContainer>
            <PillsContainer data-testid="brewery-pill-container">
                {
                    pills.map(pill => pill)
                }
            </PillsContainer>
        </Container>
    )
}