import React from "react";
import { BreweryInterface } from "../BreweryList/BreweryList.types";
import { AddressContainer, BinIcon, BreweryName, CardsContainer, CardContainer, CompanyIcon, CompanyInfo, FullAddress, Pills, PillsContainer, StreetContainer, TopContainer } from "./CardsList.styles";

export const CardsList = ({ items, dataIsLoaded }: BreweryInterface) => {

    const pills = [
        (
            <Pills key={"type"}>
                <CompanyIcon src="../../public/type.png" />
                <CompanyInfo>micro</CompanyInfo>
            </Pills>
        ),
        (
            <Pills key={"postal"}>
                <CompanyIcon src="../../public/postal.png" />
                <CompanyInfo>46534</CompanyInfo>
            </Pills>
        ),
        (
            <Pills key={"phone"}>
                <CompanyIcon src="../../public/phone.png" />
                <CompanyInfo>6308165790</CompanyInfo>
            </Pills>
        ),
        (
            <Pills key={"more"}>
                <CompanyIcon src="../../public/addMore.png" />
                <CompanyInfo>add more</CompanyInfo>
            </Pills>
        ),
    ]

    return (
        <CardsContainer>
            {
                items.map((item, idx) =>
                (
                    <CardContainer key={idx}>
                        <TopContainer>
                            <BinIcon />
                            <BreweryName>{item.name}</BreweryName>
                        </TopContainer>
                        <AddressContainer>
                            <StreetContainer>400 Brown Cir</StreetContainer>
                            <FullAddress>Knox, Indiana - United States</FullAddress>
                        </AddressContainer>
                        <PillsContainer>
                            {
                                pills.map(pill => pill)
                            }
                        </PillsContainer>
                    </CardContainer>
                )
                )
            }
        </CardsContainer >

    )
}