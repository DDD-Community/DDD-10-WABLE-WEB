import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    device: {
      largeDevice: string;
      xLargeDevice: string;
    };
  }
}
