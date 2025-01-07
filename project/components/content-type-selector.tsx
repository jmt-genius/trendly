'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { motion } from 'framer-motion';

export function ContentTypeSelector({ onValueChange }: { onValueChange: (value: string) => void }) {
  return (
    <div className="relative">
      <motion.div
        className="absolute -inset-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 0.3, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <Select onValueChange={onValueChange} defaultValue="reels">
        <SelectTrigger className="w-[280px] relative bg-background/95 backdrop-blur-sm">
          <SelectValue placeholder="Select content type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="reels">Reels</SelectItem>
          <SelectItem value="carousels">Carousels</SelectItem>
          <SelectItem value="static">Static Posts</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}