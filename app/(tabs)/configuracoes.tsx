import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontSizes, FontWeights } from '@/src/constants/theme';

export default function ConfiguracoesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configurações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.semibold,
    color: Colors.textSecondary,
  },
});
