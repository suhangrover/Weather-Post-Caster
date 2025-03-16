import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, Loader2, MapPin, Calendar, Droplets, Wind, Flame } from 'lucide-react';
import { format, subDays } from 'date-fns';
import axios from 'axios';
import { WeatherAlert } from '../components/WeatherAlert';

interface WeatherData {
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

const API_KEY = '96c552d621464e0e90063018230107';
const DEFAULT_CITY = 'London';

function RageQuitButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://en.wikipedia.org/wiki/Climate_change"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button 
        className={`
          w-full glass-rage rounded-2xl p-8 flex items-center justify-center gap-4
          transform transition-all duration-300 hover:shadow-xl
          ${isHovered ? 'scale-105 bg-opacity-40' : 'scale-100 bg-opacity-30'}
        `}
      >
        <Flame className={`w-8 h-8 ${isHovered ? 'animate-shake text-red-400' : 'text-red-300'}`} />
        <span className={`text-2xl font-bold ${isHovered ? 'text-red-400' : 'text-red-300'}`}>
          Give Me Real Weather!
        </span>
        <Flame className={`w-8 h-8 ${isHovered ? 'animate-shake text-red-400' : 'text-red-300'}`} />
      </button>
    </a>
  );
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState(DEFAULT_CITY);

  useEffect(() => {
    const fetchYesterdayWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const yesterday = format(subDays(new Date(), 1), 'yyyy-MM-dd');
        
        const response = await axios.get(
          `https://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${city}&dt=${yesterday}`
        );

        const data = response.data;
        const dayData = data.forecast.forecastday[0].day;
        
        setWeather({
          temp: Math.round(dayData.avgtemp_c),
          description: data.forecast.forecastday[0].hour[12].condition.text.toLowerCase(),
          humidity: dayData.avghumidity,
          windSpeed: Math.round(dayData.maxwind_kph * 0.277778),
        });
      } catch (err) {
        setError('Failed to fetch yesterday\'s weather. Time machines are hard! 🤷‍♂️');
      } finally {
        setLoading(false);
      }
    };

    fetchYesterdayWeather();
  }, [city]);

  const getWeatherIcon = () => {
    if (!weather) return <Cloud className="w-20 h-20 text-white/80" />;
    if (weather.description.includes('rain')) return <CloudRain className="w-20 h-20 text-white/80" />;
    return <Sun className="w-20 h-20 text-white/80" />;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 pt-24">
      <div className="glass-card rounded-3xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Weather Post-Caster</h1>
          <p className="text-white/80 italic text-lg">Generic Forecaster, Time Travelled to a DAY ago......</p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="glass rounded-full px-6 py-3 flex items-center gap-2 w-fit">
            <MapPin className="text-white/80 w-5 h-5" />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              className="bg-transparent border-none outline-none text-white placeholder-white/50 text-center w-40"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-16 h-16 animate-spin text-white/80" />
            <p className="mt-6 text-white/80 text-lg">Time traveling to yesterday...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-300 py-12 glass rounded-2xl">
            <p className="text-lg">{error}</p>
          </div>
        ) : weather && (
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center md:justify-start">
                  {getWeatherIcon()}
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-5xl font-bold text-white mb-2">{weather.temp}°C</h2>
                  <p className="text-white/80 capitalize text-lg">{weather.description}</p>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <Droplets className="w-5 h-5" />
                    <span>Humidity: {weather.humidity}%</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Wind className="w-5 h-5" />
                    <span>Wind: {weather.windSpeed} m/s</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center text-white/80">
              <Calendar className="w-5 h-5 mr-2" />
              <p className="text-lg">{format(subDays(new Date(), 1), 'yyyy-MM-dd')}</p>
            </div>

            <RageQuitButton />
          </div>
        )}

        <div className="mt-10 text-center text-sm text-white/70">
          <p>* We proudly refuse to predict today's or tomorrow's weather</p>
        </div>
      </div>
      
      <WeatherAlert />
    </div>
  );
}