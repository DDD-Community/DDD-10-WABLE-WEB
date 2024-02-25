export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  GROUP: {
    CREATE: '/group/create',
    SETTING: (groupName: string) => `/group/${groupName}/setting`,
  },
};
