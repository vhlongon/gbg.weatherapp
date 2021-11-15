import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherCard, { Props } from "../WeatherCard";

beforeAll(() => {
  jest
    .spyOn(Date.prototype, "toLocaleDateString")
    .mockReturnValue("mocked date");
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("WeatherCard", () => {
  test("renders correctly", () => {
    const baseProps: Props = {
      title: "title",
      current: {
        dt: 1636925233,
        sunrise: 1636872900,
        sunset: 1636901898,
        temp: 5.33,
        feels_like: 2.5,
        pressure: 1034,
        humidity: 85,
        dew_point: 3.02,
        uvi: 0,
        clouds: 90,
        visibility: 10000,
        wind_speed: 3.6,
        wind_deg: 150,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
      },
      hourly: [
        {
          dt: 1636848000,
          temp: 6.81,
          feels_like: 3.77,
          pressure: 1023,
          humidity: 92,
          dew_point: 5.6,
          uvi: 0,
          clouds: 90,
          visibility: 10000,
          wind_speed: 4.63,
          wind_deg: 30,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
        },
        {
          dt: 1636851600,
          temp: 6.71,
          feels_like: 3.2,
          pressure: 1024,
          humidity: 93,
          dew_point: 5.66,
          uvi: 0,
          clouds: 90,
          visibility: 10000,
          wind_speed: 5.66,
          wind_deg: 30,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
        },
        {
          dt: 1636858800,
          temp: 6.75,
          feels_like: 3.95,
          pressure: 1025,
          humidity: 92,
          dew_point: 5.54,
          uvi: 0,
          clouds: 90,
          visibility: 10000,
          wind_speed: 4.12,
          wind_deg: 30,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
        },
      ],
    };
    render(<WeatherCard {...baseProps} />);


    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("mocked date")).toBeInTheDocument();

    expect(screen.getByText("overcast clouds")).toBeInTheDocument();
    expect(screen.getByAltText("Clouds")).toHaveAttribute(
      "src",
      "http://openweathermap.org/img/w/04n.png"
    );

    expect(screen.getByLabelText("avg-temp")).toHaveTextContent("Avg: 6.76°");
    expect(screen.getByLabelText("median-temp")).toHaveTextContent(
      "Median: 6.75°"
    );
    expect(screen.getByLabelText("min-temp")).toHaveTextContent("Min: 6.71°");
    expect(screen.getByLabelText("max-temp")).toHaveTextContent("Max: 6.81°");

    expect(screen.getByLabelText("humidity")).toHaveTextContent("Humidity85%");
    expect(screen.getByLabelText("wind-speed")).toHaveTextContent("Wind speed3.6 m/s");
    expect(screen.getByLabelText("visibility")).toHaveTextContent("Visibility10000 m");
  });
});
