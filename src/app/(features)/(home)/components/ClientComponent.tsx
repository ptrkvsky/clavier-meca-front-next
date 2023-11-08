'use client';

import useLegacyEffect from '@/app/hooks/useLegacyEffect/useLegacyEffect';
import { useEffect } from 'react';

export default function ClientComponent() {
  useLegacyEffect(() => {
    console.info('client component');
  }, []);

  return <div> client component</div>;
}
