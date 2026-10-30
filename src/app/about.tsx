import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
    fontFamily: 'Poppins_400Regular',
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
  },
});

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.body}>Animal Management app demo in Expo Router</Text>
    </View>
  );
}
