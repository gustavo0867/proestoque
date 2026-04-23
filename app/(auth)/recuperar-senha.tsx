import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Input from '@/src/components/Input';
import Button from '@/src/components/Button';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '@/src/constants/theme';

export default function RecuperarSenhaScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = () => {
    setEnviado(true);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {enviado ? (
            /* Mensagem de sucesso */
            <View style={styles.successContainer}>
              <View style={styles.successIcon}>
                <Ionicons name="checkmark-circle" size={64} color={Colors.success} />
              </View>
              <Text style={styles.successTitle}>E-mail enviado!</Text>
              <Text style={styles.successMessage}>
                Enviamos um link de recuperação para{'\n'}
                <Text style={styles.emailHighlight}>{email}</Text>
              </Text>
              <Text style={styles.successHint}>
                Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
              </Text>
              <View style={styles.buttonSpacing}>
                <Button
                  title="Voltar ao Login"
                  onPress={() => router.back()}
                  fullWidth
                />
              </View>
            </View>
          ) : (
            /* Formulário */
            <>
              <View style={styles.header}>
                <Text style={styles.title}>Recuperar Senha</Text>
                <Text style={styles.description}>
                  Informe seu e-mail e enviaremos um link de recuperação para redefinir sua senha.
                </Text>
              </View>

              <View style={styles.form}>
                <Input
                  label="E-mail"
                  placeholder="seu@email.com"
                  icon="mail-outline"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                />

                <View style={styles.buttonSpacing}>
                  <Button title="Enviar" onPress={handleEnviar} fullWidth />
                </View>

                <View style={styles.buttonSpacing}>
                  <Button
                    title="Voltar ao Login"
                    onPress={() => router.back()}
                    variant="outline"
                    fullWidth
                  />
                </View>
              </View>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
    justifyContent: 'center',
  },
  header: {
    marginBottom: Spacing.xl,
  },
  title: {
    fontSize: FontSizes.xxl,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
  },
  description: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    marginTop: Spacing.sm,
    lineHeight: 24,
  },
  form: {
    width: '100%',
  },
  buttonSpacing: {
    marginTop: Spacing.md,
  },

  // Estado de sucesso
  successContainer: {
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
  },
  successIcon: {
    marginBottom: Spacing.lg,
  },
  successTitle: {
    fontSize: FontSizes.xxl,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
    marginBottom: Spacing.sm,
  },
  successMessage: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  emailHighlight: {
    fontWeight: FontWeights.semibold,
    color: Colors.text,
  },
  successHint: {
    fontSize: FontSizes.sm,
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: Spacing.md,
    lineHeight: 20,
  },
});
