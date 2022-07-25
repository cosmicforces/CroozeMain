import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import { Button } from '@/components';

type IMainProps = {
  meta: ReactNode;
  children?: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen text-gray-700 antialiased">
      {props.meta}
      <div
        className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(
            ${router.basePath}/assets/images/bg.png
          )`,
        }}
      >
        <div className="fixed top-0 right-0 mr-2 flex h-full flex-col items-center justify-center">
          <Button
            image={`${router.basePath}/assets/images/button_whitepaper.png`}
            link="https://cosmic-forces.gitbook.io/nft-crooze/"
          />
          <Button
            image={`${router.basePath}/assets/images/button_discord.png`}
            link="https://discord.gg/FBgmSNCDF7"
          />
          <Button
            image={`${router.basePath}/assets/images/button_instagram.png`}
            link="https://www.instagram.com/croozenft/"
          />
          <Button
            image={`${router.basePath}/assets/images/button_youtube.png`}
            link="https://www.youtube.com/channel/UCW2ai9HA0RRPXgc97xi-sXQ"
          />
          <Button
            image={`${router.basePath}/assets/images/button_twitter.png`}
            link="https://twitter.com/CroozeNFT"
          />
        </div>
        <div className="fixed right-0 mr-4 flex">
          <Button
            className="m-2 h-12 w-32"
            image={`${router.basePath}/assets/images/button_marketplace.png`}
            // link="https://marketplace.croozenft.com"
            link="https://devm.croozenft.com"
          />
          <Button
            className="m-2 h-12 w-32"
            image={`${router.basePath}/assets/images/button_play.png`}
            link="http://44.203.211.159/CroozeNFT"
          />
          <Button
            className="m-2 h-12 w-32"
            image={`${router.basePath}/assets/images/button_login.png`}
            link="http://3.83.230.174/crooze/"
          />
        </div>
        <div className="fixed bottom-0 right-0 mr-10 mb-4">
          <Button
            image={`${router.basePath}/assets/images/downward_arrow.png`}
          />
        </div>
      </div>
    </div>
  );
};

export { Main };
