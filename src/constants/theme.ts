export const Colors = {
  primary: '#1E3A5F',
  primaryLight: '#2A4F7F',
  primaryDark: '#142840',

  accent: '#00C2A8',
  accentLight: '#33D4BF',
  accentDark: '#009B86',

  background: '#F5F7FA',
  surface: '#FFFFFF',
  card: '#FFFFFF',

  text: '#1A1A2E',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  textOnPrimary: '#FFFFFF',
  textOnAccent: '#FFFFFF',

  error: '#EF4444',
  errorLight: '#FEE2E2',
  success: '#10B981',
  successLight: '#D1FAE5',
  warning: '#F59E0B',

  inputBorder: '#D1D5DB',
  inputBorderFocus: '#1E3A5F',
  inputBackground: '#FFFFFF',
  inputPlaceholder: '#9CA3AF',

  divider: '#E5E7EB',
  overlay: 'rgba(0, 0, 0, 0.5)',
};

export const FontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  xxl: 28,
  xxxl: 34,
};

export const FontWeights = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BorderRadius = {
  sm: 6,
  md: 10,
  lg: 16,
  full: 9999,
};
