import axios from 'axios';
const endpoint = 'https://api.weatherapi.com/v1';
const access_key = import.meta.env.VITE_WEATHERAPI_TOKEN as string;

const getCurrentWeather = async (city: string) => {
    try {
        const response = await axios.get(
            `${endpoint}/forecast.json?key=${access_key}&q=${city}&days=3`
        );
        return response.data;
    } catch (error: any) {
        console.log(error.message);
        return error;
    }
}

export const searchCities = async (query: string) => {
    const response = await fetch(`${endpoint}/search.json?key=${access_key}&q=${query}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

export default getCurrentWeather;
