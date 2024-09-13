import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Play Now',
      action: 'link', // Define the action as a link
      target: 'https://simon-game-liart-psi.vercel.app/', // URL of the Simon Game
    },
  ],
  image: `${NEXT_PUBLIC_URL}/ok.PNG`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Simon Game',
  description: 'HTML and Javascript Simon Memory game',
  openGraph: {
    title: 'Simon Game',
    description: 'HTML and Javascript Simon Memory game',
    images: [`${NEXT_PUBLIC_URL}/ok.PNG`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  const handlePlayNowClick = () => {
    // Opens the Simon game in a new tab
    window.open('https://simon-game-liart-psi.vercel.app/', '_blank');
  };

  return (
    <div>
      <h1>Farcaster Action Simon Memory Game</h1>
      <p>This page serves the initial frame metadata for the Farcaster Action Simon Memory.</p>
     
    </div>
  );
}
