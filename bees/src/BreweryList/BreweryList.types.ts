export interface BreweryList {
    address_2: string | null;
    address_3: string | null;
    brewery_type: string | null;
    city: string | null;
    country: string | null;
    county_province: string | null;
    created_at: string | null;
    id: string | null;
    latitude: string | null;
    longitude: string | null;
    name: string | null;
    phone: string | null;
    postal_code: string | null;
    state: string | null;
    street: string | null;
    updated_at: string | null;
    website_url: string | null;
}

export interface BreweryInterface {
    items: BreweryList[];
    dataIsLoaded: boolean;
}

