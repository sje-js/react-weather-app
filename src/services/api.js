import axios from "axios";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHERR_CURRENT = "/data/2.5/weather?q={city name}&appid={API key}";
const WEATHER_KEY = "a15ceaefbdad62d3af6248363016d76b";

export const fetchWeather = async (query) => {
	const { data } = await axios.get(WEATHER_URL, {
		params: {
			q: query,
			units: "metric",
			appid: WEATHER_KEY,
		},
	});
	return data;
};
