import faker from 'faker';

const users = {
  email: 'connect1@gmail.com',
  userName: 'HillyFills'
};

const loginWithEmail = {
  email: 'connect2@gmail.com',
  password: '@Conncet1!'
};

const loginWithUserName = {
  userName: 'nennyFills',
  password: '@Conncet1!'
};

const payload = {
  email: 'connect4@gmail.com',
  fullName: 'fills nenny',
  userName: 'nenlFills',
  password: '@Conncet1!!'
};
const payloadAuthorization = {
  userName: 'nenlFills',
  password: '@Conncet1!!'
};
const signUpPayloadExistingUserName = {
  email: 'connect5@gmail.com',
  fullName: 'fillsz nenny',
  userName: 'nennyFills',
  password: '@Conncet1!'
};
const signUpPayload = {
  email: 'connect2@gmail.com',
  fullName: 'fills nenny',
  userName: 'nennyFills',
  password: '@Conncet1!'
};
const payloadFakeEmail = {
  email: 'nennyfillsgmail.com',
  fullName: 'fills nenny',
  userName: 'nennyFills',
  password: '@Conncet1!'
};
const payloadFakeFullName = {
  email: 'nennyfills@gmail.com',
  fullName: 'f ny',
  userName: 'nennyFills',
  password: '@Conncet1!'
};
const payloadFakePassword = {
  email: 'nennyfills@gmail.com',
  fullName: 'fills nenny',
  userName: 'nennyFills',
  password: 'ncet5645641!'
};
const payloadFakeUserName = {
  email: 'nennyfills@gmail.com',
  fullName: 'fills nenny',
  userName: '',
  password: '@Conncet1!'
};
const socialSignup = {
  password: '',
  fullName: 'grace peter',
  userName: 'great02',
  email: 'grace@fill.co',
  isVerified: true,
  avatarUrl: faker.internet.avatar(),
};
const googleSuccessResponse = {
  displayName: 'world health',
  id: '8usuu-9j',
  iss: 'accounts.google.com',
  azp: '299133803056-7usd50plt3ta1ca0li6ukfa0cnrd570t.apps.googleusercontent.com',
  aud: '299133803056-7usd50plt3ta1ca0li6ukfa0cnrd570t.apps.googleusercontent.com',
  sub: '110543582300210237207',
  emails: [{ value: 'connect@gmail.com' }, { verified: true }],
  at_hash: '39l4dQwtYNkiANhV7qXzSg',
  name: 'Vali 1kbdeas',
  photos: [{
    value:
    'https://lh3.googleusercontent.com/--zZ-BKGCmcg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reUtl2M5uCnSswx3gFDQcY4tFBi-Q/s96-c/photo.jpg'
  }],
  givenName: 'Vali',
  familyName: '1kbdeas',
  locale: 'en',
  iat: 1564660802,
  exp: 1564664402,
  jti: '7cbbe1aae67f1ac22eb643575b7219ebd4ff1123'
};
const githubSuccessResponse = {
  displayName: 'world health',
  id: '8usuu-9j',
  iss: 'accounts.google.com',
  azp: '299133803056-7usd50plt3ta1ca0li6ukfa0cnrd570t.apps.googleusercontent.com',
  aud: '299133803056-7usd50plt3ta1ca0li6ukfa0cnrd570t.apps.googleusercontent.com',
  sub: '110543582300210237207',
  at_hash: '39l4dQwtYNkiANhV7qXzSg',
  name: 'Vali 1kbdeas',
  photos: [{
    value:
    'https://lh3.googleusercontent.com/--zZ-BKGCmcg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reUtl2M5uCnSswx3gFDQcY4tFBi-Q/s96-c/photo.jpg'
  }],
  username: 'connect',
  locale: 'en',
  iat: 1564660802,
  exp: 1564664402,
  jti: '7cbbe1aae67f1ac22eb643575b7219ebd4ff1123'
};
const expiredToken = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVkMTE4ZDc4LWFkOTItNGQyMi04MmEzLWRkZGQ2ZTRkNmQ0YSIsImlhdCI6MTU4NDAxNDM2MSwiZXhwIjoxNTg0MDU3NTYxfQ.2rkNGbXOb0QA-KdQvAtTCzVFuiCTmzLmOFHT7WpER7s'
};
const extractedUserDetails = {
  userName: 'username',
  fullName: 'first last',
  email: 'connect@connect.com',
  avatarUrl: 'urlstring',
  isVerified: true,
  googleId: 'dr98y66',
};
export default {
  users,
  loginWithEmail,
  loginWithUserName,
  payload,
  signUpPayload,
  payloadFakeEmail,
  payloadFakeFullName,
  payloadFakePassword,
  payloadFakeUserName,
  socialSignup,
  googleSuccessResponse,
  extractedUserDetails,
  githubSuccessResponse,
  expiredToken,
  signUpPayloadExistingUserName,
  payloadAuthorization
};
