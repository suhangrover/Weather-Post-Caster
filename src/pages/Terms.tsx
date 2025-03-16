import React from 'react';
import { Scale, Shield, Eye, FileText, AlertTriangle, Zap, Cloud, Sun, Moon, Wind, Umbrella, ThermometerSun, CloudRain } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20">
      <div className="glass-card rounded-2xl shadow-2xl p-6 max-w-4xl w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Terms and Conditions</h1>
          <p className="text-white/80 italic">Last updated: 2025</p>
          <p className="text-white/60 text-sm mt-2">Estimated reading time: 3 hours, 42 minutes</p>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">1. Legal Stuff We Hope You Don't Read</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              By accessing Weather App, you acknowledge that yesterday's weather is, in fact, yesterday's weather, and we cannot be held responsible for any temporal paradoxes that may occur while viewing historical weather data. You also agree that time travel is theoretically possible, but we're not quite there yet.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">2. Privacy Policy (The Long Version)</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              We collect your location data, but only in the present timeline. We cannot collect your location data from yesterday, although we're working on it. Your data is stored in a quantum-encrypted database that may or may not exist in multiple dimensions simultaneously.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">3. The Really Important Disclaimer</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              Weather App makes no guarantees about the accuracy of yesterday's weather, especially if you're experiencing a Groundhog Day situation. If you find yourself in a time loop, please consult your local temporal mechanics expert.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">4. Warranty Disclaimers</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              Our weather data comes with absolutely no warranty. If you're planning a wedding based on yesterday's weather, that's on you. We're not responsible for any rain dances, sun ceremonies, or weather-related rituals you perform using our historical data.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">5. Intellectual Property Rights</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              All weather puns, dad jokes, and meteorological wordplay contained within this app are protected by international copyright laws and the Universal Weather Joke Registry of 2025.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">6. Cloud Storage Policy</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              Our data is stored in actual clouds. Results may vary depending on cloud formation, atmospheric pressure, and whether or not the clouds are having a bad day.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">7. Sunny Day Guarantee</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              We guarantee that every sunny day reported was, in fact, sunny... unless it was cloudy, in which case it wasn't sunny at all. This guarantee is non-transferable and void where prohibited by the laws of physics.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Moon className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">8. Lunar Phase Disclaimer</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              Any werewolf-related incidents that occur during full moons reported in our historical weather data are not our responsibility. Please consult your local cryptozoologist for werewolf-related weather concerns.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Wind className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">9. Wind Speed Measurements</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              Wind speeds are measured using state-of-the-art technology, or sometimes by watching how far someone's hat flies off their head. Both methods are equally scientific and equally unreliable.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Umbrella className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">10. Precipitation Agreements</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              By using our app, you agree that rain is wet, snow is cold, and hail is generally unpleasant. No refunds will be issued for umbrella purchases made based on yesterday's rainfall data.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <ThermometerSun className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">11. Temperature Accuracy</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              All temperatures are measured in Celsius, Fahrenheit, or Kelvin, depending on our mood. If you're using this app in a parallel universe where temperature is measured in "vibes," please update your dimensional settings.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CloudRain className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">12. Final Weather-Related Clauses</h2>
            </div>
            <p className="text-white/90 text-sm mb-4">
              By continuing to use Weather App, you acknowledge that weather happens, has happened, and will continue to happen, regardless of whether you check our app or not. You also agree that complaining about the weather is a fundamental human right that we fully support.
            </p>
          </div>

          <div className="glass rounded-xl p-6 text-center">
            <p className="text-white/60 text-xs">
              By scrolling this far, you've earned a weather prediction: 
              Tomorrow's weather will definitely be weather-like.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}