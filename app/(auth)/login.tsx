import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Input from '@/src/components/Input';
import Button from '@/src/components/Button';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '@/src/constants/theme';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEntrar = () => {
    router.replace('/(tabs)');
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
          {/* Logo / Nome do App */}
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <Text style={styles.logoIcon}>📦</Text>
            </View>
            <Text style={styles.logoText}>
              Pro<Text style={styles.logoAccent}>Estoque</Text>
            </Text>
            <Text style={styles.subtitle}>Gerencie seu estoque com facilidade</Text>
          </View>

          {/* Formulário */}
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

            <Input
              label="Senha"
              placeholder="Digite sua senha"
              icon="lock-closed-outline"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              autoComplete="password"
            />

            <TouchableOpacity
              onPress={() => router.push('/(auth)/recuperar-senha')}
              style={styles.forgotLink}
            >
              <Text style={styles.forgotText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <Button title="Entrar" onPress={handleEntrar} fullWidth />

            <View style={styles.signupRow}>
              <Text style={styles.signupLabel}>Não tem conta? </Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/cadastro')}>
                <Text style={styles.signupLink}>Criar conta</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  logoBox: {
    width: 72,
    height: 72,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  logoIcon: {
    fontSize: 36,
  },
  logoText: {
    fontSize: FontSizes.xxxl,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
  },
  logoAccent: {
    color: Colors.accent,
  },
  subtitle: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  form: {
    width: '100%',
  },
  forgotLink: {
    alignSelf: 'flex-end',
    marginBottom: Spacing.lg,
    marginTop: -Spacing.sm,
  },
  forgotText: {
    fontSize: FontSizes.sm,
    color: Colors.primary,
    fontWeight: FontWeights.medium,
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.lg,
  },
  signupLabel: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
  },
  signupLink: {
    fontSize: FontSizes.sm,
    color: Colors.accent,
    fontWeight: FontWeights.semibold,
  },
});
