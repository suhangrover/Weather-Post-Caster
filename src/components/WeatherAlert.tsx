import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface AlertProps {
  message: string;
  onClose: () => void;
}

const alerts = [
  "🌪️ ALERT: Time-traveling tornado spotted in your area yesterday!",
  "🌊 WARNING: Retroactive tsunami warning for yesterday afternoon",
  "⚡ CAUTION: Historical lightning strikes detected in your vicinity",
  "🌋 NOTICE: Yesterday's dormant volcano suddenly became active... yesterday",
  "🌪️ ALERT: Quantum weather anomaly detected in recent past",
  "❄️ WARNING: Temporal frost warning for 24 hours ago",
  "☄️ CAUTION: Retroactive meteor shower alert for your location",
  "🌡️ NOTICE: Past heat wave warning from alternate timeline",
  "🌪️ ALERT: Interdimensional storm detected in recent history"
];

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  const [showJustKidding, setShowJustKidding] = useState(false);

  const handleClose = () => {
    setShowJustKidding(true);
    setTimeout(() => {
      setShowJustKidding(false);
      onClose();
    }, 1500);
  };

  if (showJustKidding) {
    return (
      <div className="fixed bottom-8 right-8 max-w-md w-full animate-slide-in">
        <div className="glass rounded-lg p-4 shadow-lg">
          <p className="text-white font-medium text-center">Just Kidding 😜!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 max-w-md w-full animate-slide-in">
      <div className="glass-rage rounded-lg p-4 pr-12 shadow-lg relative">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" />
          <p className="text-red-300 font-medium">{message}</p>
        </div>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-red-300 hover:text-red-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export function WeatherAlert() {
  const [alert, setAlert] = useState<string | null>(null);

  useEffect(() => {
    const showRandomAlert = () => {
      const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
      setAlert(randomAlert);
    };

    // Show first alert after 5 seconds
    const initialTimeout = setTimeout(showRandomAlert, 5000);

    // Show new alerts every 45 seconds
    const interval = setInterval(showRandomAlert, 45000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!alert) return null;

  return <Alert message={alert} onClose={() => setAlert(null)} />;
}