import { theme } from 'styles/theme';

export const boxLinkStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 3,
};
export const linkStyles = {
  fontSize: theme.fontSizes.md,
  fontWeight: theme.fontWeights.bold,
  color: '#EDF2F7',
};

export const activeLink = {
  color: 'red.200',
  fontSize: '26px',
};

export const textStyles = {
  mr: 'auto',
  fontSize: theme.fontSizes.lg,
  fontWeight: theme.fontWeights.bold,
  fontStyle: 'italic',
  color: '#EDF2F7',
};
