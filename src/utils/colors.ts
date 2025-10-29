// Color palette configuration
export const colors = {
  primary: '#BF092F',    // Crimson red
  secondary: '#132440',  // Dark navy blue
  accent: '#16476A',     // Medium blue
  teal: '#3B9797',       // Teal/turquoise
} as const;

export type ColorKey = keyof typeof colors;
