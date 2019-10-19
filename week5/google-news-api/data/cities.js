export const cities = [
  {
    name: "Saigon",
    latitude: 10.817141,
    longitude: 106.707954,
    imgUrl: [
      require('../assets/images/saigon1.jpg'),
      require('../assets/images/saigon2.jpg'),
      require('../assets/images/saigon3.jpg'),
      require('../assets/images/saigon4.jpg'),
      require('../assets/images/saigon5.jpg'),
    ]
  },
  {
    name: "Paris",
    latitude: 48.856613,
    longitude: 2.352222,
    imgUrl: [
      require('../assets/images/saigon1.jpg'),
      require('../assets/images/saigon2.jpg'),
      require('../assets/images/saigon3.jpg'),
      require('../assets/images/saigon4.jpg'),
      require('../assets/images/saigon5.jpg'),
    ]
  },
  {
    name: "New York",
    latitude: 40.712776,
    longitude: -74.005974,
    imgUrl: [
      require('../assets/images/saigon1.jpg'),
      require('../assets/images/saigon2.jpg'),
      require('../assets/images/saigon3.jpg'),
      require('../assets/images/saigon4.jpg'),
      require('../assets/images/saigon5.jpg'),
    ]
  },
  {
    name: "Miami",
    latitude: 25.761681,
    longitude: -80.191788,
    imgUrl: [
      require('../assets/images/saigon1.jpg'),
      require('../assets/images/saigon2.jpg'),
      require('../assets/images/saigon3.jpg'),
      require('../assets/images/saigon4.jpg'),
      require('../assets/images/saigon5.jpg'),
    ]
  },
  {
    name: "San Francisco",
    latitude: 37.774929,
    longitude: -122.419418,
    imgUrl: [
      require('../assets/images/saigon1.jpg'),
      require('../assets/images/saigon2.jpg'),
      require('../assets/images/saigon3.jpg'),
      require('../assets/images/saigon4.jpg'),
      require('../assets/images/saigon5.jpg'),
    ]
  },
  {
    name: "Moscow",
    latitude: 55.755825,
    longitude: 37.617298,
    imgUrl: [
      require('../assets/images/saigon1.jpg'),
      require('../assets/images/saigon2.jpg'),
      require('../assets/images/saigon3.jpg'),
      require('../assets/images/saigon4.jpg'),
      require('../assets/images/saigon5.jpg'),
    ]
  },
  {
    name: "Tokyo",
    latitude: 35.689487,
    longitude: 139.691711,
    imgUrl: [
      require('../assets/images/saigon1.jpg'),
      require('../assets/images/saigon2.jpg'),
      require('../assets/images/saigon3.jpg'),
      require('../assets/images/saigon4.jpg'),
      require('../assets/images/saigon5.jpg'),
    ]
  },
  {
    name: "Vancouver",
    latitude: 49.28273,
    longitude: -123.120735,
    imgUrl: [
      require('../assets/images/saigon1.jpg'),
      require('../assets/images/saigon2.jpg'),
      require('../assets/images/saigon3.jpg'),
      require('../assets/images/saigon4.jpg'),
      require('../assets/images/saigon5.jpg'),
    ]
  },
  {
    name: "Hanoi",
    latitude: 21.0278,
    longitude: 105.8342,
    imgUrl: [
      require('../assets/images/saigon1.jpg'),
      require('../assets/images/saigon2.jpg'),
      require('../assets/images/saigon3.jpg'),
      require('../assets/images/saigon4.jpg'),
      require('../assets/images/saigon5.jpg'),
    ]
  }
];

export const getWeatherBackgroundImage = description => {
  switch (description) {
    case "Thunderstorm":
      return "https://s4827.pcdn.co/wp-content/uploads/2014/06/Great-Thunderstorm-In-City.jpg";
    case "Drizzle":
      return "https://wallpapercave.com/wp/wp2967431.jpg";
    case "Rain":
      return "http://mybestphonewallpapers.com/download/blue-rain-6651.jpg";
    case "Snow":
      return "http://www.123mobilewallpapers.com/wp-content/uploads/2014/06/snow_way_wallpaper.jpg";
    case "Atmosphere":
      return "https://i.pinimg.com/originals/fe/a4/13/fea4139613ef14a56a13eef545284a58.jpg";
    case "Clouds":
      return "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
    case "Clear":
      return "http://www.hdiphone6pluswallpaper.com/wp-content/uploads/Sky/Sky%20iPhone%206%20Plus%20Wallpaper%2037.jpg";
    default:
      return "https://i.pinimg.com/736x/49/43/da/4943da7fd8edd6af16500b2d957dbc9a.jpg";
  }
};

export const getWeatherIcon = description => {
  switch (description) {
    case "Clear":
      return "weather-sunny";
    case "Clouds":
      return "weather-cloudy";
    case "Drizzle":
    case "shower drizzle":
      return "weather-rainy";
    case "Rain":
      return "weather-pouring";
    case "Thunderstorm":
      return "weather-lightning";
    case "Snow":
      return "weather-snowy";
    default:
      return "vanish";
  }
};

const location = {
  coord: { lon: 139.01, lat: 35.02 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
  base: "stations",
  main: {
    temp: 285.514,
    pressure: 1013.75,
    humidity: 100,
    temp_min: 285.514,
    temp_max: 285.514,
    sea_level: 1023.22,
    grnd_level: 1013.75
  },
  wind: { speed: 5.52, deg: 311 },
  clouds: { all: 0 },
  dt: 1485792967,
  sys: {
    message: 0.0025,
    country: "JP",
    sunrise: 1485726240,
    sunset: 1485763863
  },
  id: 1907296,
  name: "Tawarano",
  cod: 200
};
