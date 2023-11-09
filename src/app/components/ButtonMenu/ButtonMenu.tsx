'use client';

import { styleButtonMenu } from './ButtonMenu.css';
import useLegacyEffect from '@/app/hooks/useLegacyEffect/useLegacyEffect';

export function ButtonMenu() {
  useLegacyEffect(() => {
    const buttonMenu: HTMLButtonElement | null =
      document.querySelector('#button-menu');
    const backgroundMenu: HTMLButtonElement | null =
      document.querySelector('#background-menu');
    const navHeader: HTMLElement | null = document.querySelector('#nav-header');

    buttonMenu?.addEventListener('click', () => {
      backgroundMenu?.classList?.toggle('background-open');
      navHeader?.classList?.toggle('background-open');
    });
  }, []);

  return (
    <button id="button-menu" className={styleButtonMenu.button}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 0%, 100%)"
          strokeLinecap="round"
          d="M 2 2.5 L 20 2.5"
        ></path>
        <path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 0%, 100%)"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          opacity="1"
        ></path>
        <path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 0%, 100%)"
          strokeLinecap="round"
          d="M 2 16.346 L 20 16.346"
        ></path>
      </svg>
    </button>
  );
}
