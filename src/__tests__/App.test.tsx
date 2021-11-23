import * as React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "../App";
import * as api from "../api";

jest.mock("../api", () => ({ fetchWeatherData: jest.fn() }));

const mockFetchWeatherData = jest.spyOn(api, "fetchWeatherData");

describe("App", () => {
  test("renders correctly when fetch data is successful", async () => {
    mockFetchWeatherData.mockResolvedValueOnce([
      {
        lat: 123,
        lon: 456,
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
        ],
      },
    ]);

    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByText("loading..."));

    expect(screen.getByText("Weather in Gothenburg")).toBeInTheDocument();
    expect(screen.getByText("Today's weather")).toBeInTheDocument();
    expect(screen.getByTestId("today-weather")).toBeInTheDocument();

    expect(screen.getByText("Latest 4 days")).toBeInTheDocument();
    expect(screen.getByLabelText("weather-list")).toBeInTheDocument();
  });

  test("renders error when fetch data fails", async () => {
    mockFetchWeatherData.mockRejectedValueOnce(new Error("oops"));

    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByText("loading..."));

    expect(screen.getByText("oops")).toBeInTheDocument();
  });
});
