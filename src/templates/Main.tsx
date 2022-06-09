import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import { Button } from '@/components';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
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
        <div className="mr-4 flex flex-row-reverse">
          <Button
            className="m-2 h-12 w-32"
            image={`${router.basePath}/assets/images/button_login.png`}
            link="http://3.83.230.174/crooze/"
          />
          <Button
            className="m-2 h-12 w-32"
            image={`${router.basePath}/assets/images/button_play.png`}
            link="http://3.83.230.174/crooze/"
          />
          <Button
            className="m-2 h-12 w-32"
            image={`${router.basePath}/assets/images/button_marketplace.png`}
            link="https://marketplace.croozenft.com"
          />
        </div>
        <div className="fixed top-0 right-0 mr-2 flex h-full flex-col items-center justify-center">
          <Button
            image={`${router.basePath}/assets/images/button_whitepaper.png`}
          />
          <Button
            image={`${router.basePath}/assets/images/button_discord.png`}
          />
          <Button
            image={`${router.basePath}/assets/images/button_instagram.png`}
          />
          <Button
            image={`${router.basePath}/assets/images/button_youtube.png`}
          />
          <Button
            image={`${router.basePath}/assets/images/button_twitter.png`}
          />
          <Button image={`${router.basePath}/assets/images/button_arrow.png`} />
        </div>
      </div>
    </div>
  );
};

export { Main };
