// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD8yfpU4baYjVHkMiRwGktdrlsjkliLoFQ',
    authDomain: 'tuanngo-firebase-test-env.firebaseapp.com',
    databaseURL: 'https://tuanngo-firebase-test-env.firebaseio.com',
    projectId: 'tuanngo-firebase-test-env',
    storageBucket: 'tuanngo-firebase-test-env.appspot.com',
    messagingSenderId: '753379250938'
  }
};
