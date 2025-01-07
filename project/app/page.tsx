'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { ContentTypeSelector } from '@/components/content-type-selector';
import { PerformanceChart } from '@/components/dashboard/performance-chart';
import { ContentDistribution } from '@/components/dashboard/content-distribution';
import { AIInsights } from '@/components/dashboard/ai-insights';
import { EngagementByTime } from '@/components/dashboard/engagement-by-time';
import { BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [contentType, setContentType] = useState('reels');

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-primary/5">
              <BarChart className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Trendly
            </h1>
          </div>
          <ThemeToggle />
        </motion.div>

        {/* Content Type Selector */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 flex justify-center"
        >
          <ContentTypeSelector onValueChange={setContentType} />
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-3"
          >
            <PerformanceChart />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ContentDistribution />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-2"
          >
            <EngagementByTime />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="col-span-full"
          >
            <AIInsights contentType={contentType} />
          </motion.div>
        </div>
      </div>
    </main>
  );
}