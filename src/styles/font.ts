export const Fonts = {
  iBlack: 'InterBlack',
  iBlackItalic: 'InterBlackItalic',
  iBold: 'InterBold',
  iBoldItalic: 'InterBoldItalic',
  iExtraBold: 'InterExtraBold',
  iExtraBoldItalic: 'InterExtraBoldItalic',
  iExtraLight: 'InterExtraLight',
  iExtraLightItalic: 'InterExtraLightItalic',
  iItalic: 'InterItalic',
  iLight: 'InterLight',
  iLightItalic: 'InterLightItalic',
  iMedium: 'InterMedium',
  iMediumItalic: 'InterMediumItalic',
  iRegular: 'InterRegular',
  iSemiBold: 'InterSemiBold',
  iSemiBoldItalic: 'InterSemiBoldItalic',
  iThin: 'InterThin',
  iThinItalic: 'InterThinItalic',
} as const;

export type FontName = keyof typeof Fonts;
