const setCookie = (name: string, value: string, minutes: number) => {
  const exdate = new Date();
  exdate.setMinutes(exdate.getMinutes() + minutes);

  const isDevelopment = process.env.NODE_ENV == 'development';
  const secureOptions = isDevelopment
    ? ''
    : '; Secure; SameSite=None; domain=waggle-dev.vercel.app';

  document.cookie =
    name +
    '=' +
    (value || '') +
    ('; expires=' + exdate.toUTCString()) +
    '; path=/' +
    secureOptions;
};

const deleteCookie = (name: string) => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

const getCookie = (name: string) => {
  let nameEQ = name + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export { setCookie, deleteCookie, getCookie };
