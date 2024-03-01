export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  GROUP: {
    CREATE: '/group/create',
    HOME: (groupName: string) => `/${groupName}/home`,
    MEMBER: (groupName: string) => `/${groupName}/member`,
    SETTING: (groupName: string) => `/${groupName}/setting`,
  },
  MY_CARD: '/my-card',
  SETTING: '/setting',
  PROFILE: {
    CREATE: '/profile/create',
  },
};
