import {
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as AuthSession from 'expo-auth-session';
import { GameController } from 'phosphor-react-native';

import logoImg from '../../assets/logo-nlw-esports.png';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

import { styles } from './styles';
import { THEME } from '../../theme';

export function SignIn() {

  async function handleDiscordSignIn() {
    const response = await AuthSession.startAsync({
      authUrl: "https://discord.com/api/oauth2/authorize?client_id=1024103620578398369&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40deywersonp%2Fmobile-esports&response_type=token&scope=identify"
    });

    //@ts-ignore
    const token = response?.params?.access_token;

    if (!token) {
      return;
    }

    fetch('https://discord.com/api/users/@me', {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title="Entrar"
          subtitle="Encontre seu duo e bora jogar!"
        />


        <TouchableOpacity
          style={styles.button}
          onPress={handleDiscordSignIn}
        >
          <GameController
            color={THEME.COLORS.TEXT}
            size={20}
          />

          <Text style={styles.buttonTitle}>
            Entrar com Discord
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}