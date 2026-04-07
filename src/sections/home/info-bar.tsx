'use client';

import { motion } from 'framer-motion';
import { Zap, BriefcaseBusiness, ShieldCheck } from 'lucide-react';
import { useLang } from '@/hooks/lang-context';
import React from 'react';

export default function InfoBar() {
  const { t } = useLang();

  const stats = React.useMemo(
    () => [
      { key: 'infoBar1', name: t('infoBar1'), icon: BriefcaseBusiness },
      { key: 'infoBar2', name: t('infoBar2'), icon: Zap },
      { key: 'infoBar3', name: t('infoBar3'), icon: ShieldCheck },
    ],
    [t],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
      className="relative z-10 w-11/12 max-w-4xl rounded-2xl bg-glass p-4"
    >
      <dl className="flex flex-col sm:flex-row flex-wrap justify-around gap-x-6 gap-y-3 text-primary">
        {stats.map((stat) => (
          <motion.div
            key={stat.key}
            className="flex items-center justify-center gap-2 group"
            whileHover={{ scale: 1.1, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <dt>
              <stat.icon
                className="h-5 w-5 text-primary transition-colors duration-300 
                           group-hover:text-fuchsia-500"
              />
            </dt>
            <dd
              className="text-sm font-medium text-primary transition-colors duration-300
                         group-hover:bg-gradient-to-r group-hover:from-fuchsia-500 
                         group-hover:to-cyan-500 group-hover:bg-clip-text 
                         group-hover:text-transparent"
            >
              {stat.name}
            </dd>
          </motion.div>
        ))}
      </dl>
    </motion.div>
  );
}