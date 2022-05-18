// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
// Msal Configurations
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/common',
    clientId: 'f4e1d50d-4313-4307-a6d4-431d95804628',
    redirectUri: 'https://storeofmanybooks.com/'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
// Authentication Parameters
const authenticationParameters = {
    scopes: ["https://graph.microsoft.com/.default"],
};
 
// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: 'https://storeofmanybooks.com/'
}
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)
