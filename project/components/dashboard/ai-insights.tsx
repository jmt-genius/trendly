'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const insights = {
  reels: [
    "Your Reels with tutorial content perform 2.5x better than other formats",
    "Optimal posting time: Weekdays between 6-8 PM",
    "Videos between 15-30 seconds have highest completion rates"
  ],
  carousels: [
    "Carousels with 5-7 slides get most saves",
    "Including a CTA in first slide increases engagement by 40%",
    "Educational content performs best in carousel format"
  ],
  static: [
    "Posts with faces get 38% more engagement",
    "Question-based captions drive 73% more comments",
    "Bright, high-contrast images perform better"
  ]
};

export function AIInsights({ contentType }: { contentType: string }) {
  const currentInsights = insights[contentType as keyof typeof insights] || [];

  return (
    <Card className="col-span-full backdrop-blur-sm bg-background/95">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-6 overflow-x-auto pb-4 px-2">
          {currentInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex-1 min-w-[300px] group"
            >
              <div className="relative p-6 rounded-xl border bg-gradient-to-br from-background to-secondary/20 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="relative z-10 text-base">{insight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}