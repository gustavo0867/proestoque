import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Input from '@/src/components/Input';
import Button from '@/src/components/Button';
import { Colors, FontSizes, FontWeights, Spacing } from '@/src/constants/theme';

export default function CadastroScreen() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [senhaError, setSenhaError] = useState('');

  const handleCriarConta = () => {
    // Limpa erro anterior
    setSenhaError('');

    // Validação de senhas
    if (senha !== confirmarSenha) {
      setSenhaError('As senhas não coincidem');
      return;
    }

    // Simula loading de 2 segundos
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)');
    }, 2000);
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
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Criar Conta</Text>
            <Text style={styles.subtitle}>
              Preencha os dados abaixo para começar
            </Text>
          </View>

          {/* Formulário */}
          <View style={styles.form}>
            <Input
              label="Nome"
              placeholder="Seu nome completo"
              icon="person-outline"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
              autoComplete="name"
            />

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
              placeholder="Crie uma senha"
              icon="lock-closed-outline"
              value={senha}
              onChangeText={(text) => {
                setSenha(text);
                if (senhaError) setSenhaError('');
              }}
              secureTextEntry
            />

            <Input
              label="Confirmar Senha"
              placeholder="Repita a senha"
              icon="lock-closed-outline"
              value={confirmarSenha}
              onChangeText={(text) => {
                setConfirmarSenha(text);
                if (senhaError) setSenhaError('');
              }}
              secureTextEntry
              error={senhaError}
            />

            <View style={styles.buttonSpacing}>
              <Button
                title="Criar Conta"
                onPress={handleCriarConta}
                fullWidth
                loading={loading}
              />
            </View>

            <View style={styles.loginRow}>
              <Text style={styles.loginLabel}>Já tem uma conta? </Text>
              <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.loginLink}>Fazer login</Text>
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
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
  },
  header: {
    marginBottom: Spacing.xl,
    marginTop: Spacing.lg,
  },
  title: {
    fontSize: FontSizes.xxl,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
  },
  subtitle: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  form: {
    width: '100%',
  },
  buttonSpacing: {
    marginTop: Spacing.sm,
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.lg,
  },
  loginLabel: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
  },
  loginLink: {
    fontSize: FontSizes.sm,
    color: Colors.accent,
    fontWeight: FontWeights.semibold,
  },
});
