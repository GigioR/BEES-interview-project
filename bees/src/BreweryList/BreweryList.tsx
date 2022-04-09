import React, { useEffect, useState } from "react";
import { CardsList } from "../Cards/CardsList";
import { BreweryInterface } from "./BreweryList.types";

export const BreweryList = () => {
    const [data, setBreweryData] = useState<BreweryInterface>();

    useEffect(() => {
        fetch(
            "https://api.openbrewerydb.org/breweries")
            .then((res) => res.json())
            .then((json) => {
                setBreweryData({
                    items: json,
                    dataIsLoaded: true
                });
            })
    }, []);


    console.log("data: ", data?.items[0]);
    return <CardsList items={data?.items || []} dataIsLoaded={data?.dataIsLoaded || false} />
}