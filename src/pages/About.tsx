import React from 'react';
import { Cloud, CloudLightning, CloudRain } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20">
      <div className="glass-card rounded-2xl shadow-2xl p-6 max-w-4xl w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">About Weather App</h1>
          <p className="text-white/80 italic">Yesterday's weather is history you can trust!</p>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">Our Story</h2>
            <p className="text-white/90">
              Weather App was born from a simple observation: weather forecasts are complicated and unreliable, but yesterday's weather? That's a fact! We provide the most accurate weather information possible - by only showing you what already happened. No more disappointing forecasts, just pure, historical weather facts!
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Features</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Cloud className="w-8 h-8 text-white" />
                <div>
                  <h3 className="font-bold text-white">100% Accuracy</h3>
                  <p className="text-white/80 text-sm">Because yesterday already happened!</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CloudRain className="w-8 h-8 text-white" />
                <div>
                  <h3 className="font-bold text-white">No Surprises</h3>
                  <p className="text-white/80 text-sm">Yesterday's weather, guaranteed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}