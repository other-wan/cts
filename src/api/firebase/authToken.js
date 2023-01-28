import cookie from 'js-cookie';

export const getTokenCookie = () => cookie.get('TOKEN');

export const setTokenCookie = (token) => {
  cookie.set('TOKEN', token, {
    expires: 1 / 24,
  });
};

export const removeTokenCookie = () => cookie.remove('TOKEN');
