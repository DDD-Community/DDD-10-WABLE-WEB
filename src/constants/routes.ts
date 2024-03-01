export const ROUTES = {
  HOME: (groupName: string) => `/${groupName}/home`,
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  GROUP: {
    CREATE: '/group/create',
    SETTING: (groupName: string) => `/group/${groupName}/setting`,
  },
  MY_CARD: '/my-card',
};
