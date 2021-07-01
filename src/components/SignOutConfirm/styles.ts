import { StyleSheet } from 'react-native';

import { theme } from './../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  message: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  primary: {
    color: theme.colors.primary,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 32,
    paddingBottom: 36,
  },
  button: {
    width: '40%',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary80,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
  },
  defaultButton: {
    backgroundColor: theme.colors.primary,
    borderWidth: 0,
  },
  buttonText: {
    fontFamily: theme.fonts.title500,
    fontSize: 18,
    color: theme.colors.highlight,
  },
});
