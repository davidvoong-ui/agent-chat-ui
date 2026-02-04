// src/features/auth/authToken.ts
let accessToken: string | null = null;

export const authToken = {
  set(token: string) {
    accessToken = token;
  },

  get() {
    return accessToken;
  },

  clear() {
    accessToken = null;
  },

  isSet() {
    return accessToken !== null;
  },
};
