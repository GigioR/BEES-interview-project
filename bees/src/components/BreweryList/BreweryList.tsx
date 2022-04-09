import React, { useEffect } from "react";
import { CardsList } from "../Cards/CardsList";
import { useUser } from "../Context/UserContext";
import { Header } from "../Header/Header";

export const BreweryList = () => {
    const { data, setData } = useUser();

    useEffect(() => {
        try {
            fetch(
                "https://api.openbrewerydb.org/breweries")
                .then((res) => res.json())
                .then((json) => {
                    setData({
                        items: json,
                        dataIsLoaded: true
                    });
                });
        } catch (error) {
            console.log(error);
        }
    }, []);


    return (
        <>
            <Header />
            <CardsList items={data?.items || []} dataIsLoaded={data?.dataIsLoaded || false} />
        </>

    )

}