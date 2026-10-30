import { type ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'expo-example-fall-2026-eu',
  slug: 'expo-example-fall-2026-eu',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'expoexamplefall2026eu',
  userInterfaceStyle: 'automatic',
  ios: {
    icon: './assets/expo.icon',
  },
  android: {
    adaptiveIcon: {
      backgroundColor: '#E6F4FE',
      foregroundImage: './assets/images/android-icon-foreground.png',
      backgroundImage: './assets/images/android-icon-background.png',
      monochromeImage: './assets/images/android-icon-monochrome.png',
    },
    package: 'io.upleveled.expo_example_winter_2026_eu',
    predictiveBackGestureEnabled: false,
  },
  web: {
    output: 'server',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-font',
    [
      'expo-router',
      {
        origin: 'https://expo-example-fall-2026-eu.vercel.app',
      },
    ],
    [
      'expo-splash-screen',
      {
        backgroundColor: '#208AEF',
        image: './assets/images/splash-icon.png',
        imageWidth: 76,
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    router: {
      asyncRoutes: {
        web: true,
      },
    },
    eas: {
      projectId: 'a60f5562-4114-4a68-b46b-2ba02b6ba9e7',
    },
  },
};

export default config;
