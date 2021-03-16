import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchWeather } from "../services/api";

export default function Weather() {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});

	const search = async (e) => {
		if (e.key === "Enter") {
			const data = await fetchWeather(query);
			setWeather(data);
		}
	};
	useEffect(() => {
		const initalWeather = async () => {
			const data = await fetchWeather("São José do Egito");
			setWeather(data);
		};
		initalWeather();
	}, []);

	if (weather.main) {
		console.log(weather);
	}

	return (
		<>
			{weather.main && (
				<Widget>
					<WeatherIcon>
						<img
							className="city-icon"
							src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
							alt={weather.weather[0].description}
						/>
					</WeatherIcon>

					<WeatherData>
						<Temperature className="temperature">
							{Math.round(weather.main.temp)}&deg;
						</Temperature>
						<Description className="description">
							{weather.weather[0].main}
						</Description>
						<City className="city">
							{weather.name} - {weather.sys.country}
						</City>
					</WeatherData>
					<Date>
						<Month>January</Month>
						<Day>09</Day>
					</Date>
				</Widget>
			)}
		</>
	);
}

const Widget = styled.article`
	height: 300px;
	width: 450px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;
const WeatherIcon = styled.div`
	display: flex;
	justify-content: center;
	background-color: #f0f8fa;
	height: 70%;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;

	// &:before {
	// 	display: block;
	// 	content: "\f002";
	// 	color: #818b8d;
	// 	font-family: weathericons;
	// 	font-size: 110px;
	// 	position: absolute;
	// 	left: 50%;
	// 	top: 58%;
	// 	transform: translate(-50%, -50%);
	// }
`;
const ImageIcon = styled.img`
	display: block;
	color: #818b8d;
	font-family: weathericons;
	font-size: 110px;
	position: absolute;
	left: 50%;
	top: 58%;
	transform: translate(-50%, -50%);
`;

const WeatherData = styled.div`
	background-color: #2e3336;
	height: 30%;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;
const Temperature = styled.h1`
	color: #c5cdcf;
	font-family: "Open Sans";
	font-weight: 200;
	font-size: 2.9375em;
	line-height: 2.9375em;
	position: absolute;
	left: 6%;
	top: 50%;
	transform: translate(0, -50%);
`;

const Description = styled.h2`
	color: #8f9b9d;
	font-family: "Open Sans";
	font-weight: 200;
	font-size: 1.1875em;
	line-height: 1.1875em;
	position: absolute;
	top: 24%;
	left: 27%;
`;

const City = styled.h3`
	color: #c5cdcf;
	font-family: "Open Sans";
	font-weight: 400;
	font-size: 0.8125em;
	line-height: 0.8125em;
	position: absolute;
	bottom: 25%;
	left: 27%;
`;

const Date = styled.div`
	background-color: #4dbde2;
	height: 30%;
	width: 22%;
	position: absolute;
	right: 0;
	bottom: 0;
	border-bottom-right-radius: 10px;
`;

const Month = styled.h4`
	color: #fff;
	font-family: "Open Sans";
	font-weight: 700;
	text-transform: uppercase;
	font-size: 0.6875em;
	line-height: 0.6875em;
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, 0);
`;
const Day = styled.h5`
	color: #fff;
	font-family: "Open Sans";
	font-weight: 500;
	font-size: 1.8125em;
	line-height: 28px;
	position: absolute;
	bottom: 24%;
	left: 50%;
	transform: translate(-50%, 0);
`;
