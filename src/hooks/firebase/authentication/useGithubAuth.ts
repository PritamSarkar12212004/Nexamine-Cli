import { authorize } from 'react-native-app-auth';
import auth from '@react-native-firebase/auth';

const config = {
  clientId: 'Ov23liineOgczEqJsek0',
  clientSecret: 'b635f99af0fa886ca9118f9bf6d9f144414ff70d',
  redirectUrl: 'com.nexamine://oauthredirect',
  scopes: ['identity', 'user:email'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
  },
};

const useGithubAuth = () => {
  const githubLogin = async () => {
    try {
      // Step 1: GitHub OAuth se token lo
      const authState = await authorize(config);
      console.log('GitHub Access Token:', authState.accessToken);

      // Step 2: Token ko Firebase ke liye credential banao
      const githubCredential = auth.GithubAuthProvider.credential(
        authState.accessToken,
      );

      // Step 3: Firebase Auth me login
      const result = await auth().signInWithCredential(githubCredential);

      console.log('✅ Firebase User:', result.user);
    } catch (error) {
      console.error('❌ GitHub Auth Error:', error);
    }
  };

  return { githubLogin };
};

export default useGithubAuth;
