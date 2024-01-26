declare module '*.svg?url' {
  import { ImageProps } from 'next/image';

  const content: ImageProps;
  export default content;
}

declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}
