"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  labels: {
    label: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export default function LiveCounter({ labels }: CounterProps) {
  // 19 March 2025 07:00 AM Istanbul = UTC+3 -> 2025-03-19T04:00:00.000Z
  const startTime = new Date("2025-03-19T04:00:00.000Z").getTime();
  
  const [mounted, setMounted] = useState(false);
  const [timeState, setTimeState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startTime;
      
      if (distance > 0) {
        setTimeState({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startTime]);

  if (!mounted) {
    return <div className="h-[120px] w-full animate-pulse border border-white/10 rounded-xl bg-white/5"></div>;
  }

  const TimeBlock = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center justify-center border border-zinc-800 bg-[#050608] p-4 min-w-[80px] sm:min-w-[100px] shadow-xl">
      <span className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-widest tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs sm:text-sm text-zinc-500 uppercase tracking-widest mt-2">{label}</span>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-3xl border border-white/10 bg-black/50 backdrop-blur-md p-6 sm:p-10 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent opacity-80"></div>
      
      <div className="flex items-center gap-4 mb-6">
         <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
         <h3 className="uppercase tracking-[0.2em] text-zinc-300 text-xs font-bold">{labels.label}</h3>
      </div>
      
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <TimeBlock value={timeState.days} label={labels.days} />
        <span className="text-zinc-800 text-3xl font-serif hidden sm:block">:</span>
        <TimeBlock value={timeState.hours} label={labels.hours} />
        <span className="text-zinc-800 text-3xl font-serif hidden sm:block">:</span>
        <TimeBlock value={timeState.minutes} label={labels.minutes} />
        <span className="text-zinc-800 text-3xl font-serif hidden sm:block">:</span>
        <TimeBlock value={timeState.seconds} label={labels.seconds} />
      </div>
    </motion.div>
  );
}
