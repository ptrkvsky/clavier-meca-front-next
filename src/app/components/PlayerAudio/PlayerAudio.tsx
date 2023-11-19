'use client';
import ReactAudioPlayer from 'react-audio-player';

export function PlayerAudio({ grosSon }: { grosSon: string }) {
  return <ReactAudioPlayer src={grosSon} controls />;
}
