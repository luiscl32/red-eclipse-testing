// i18n configuration
import { es } from './locales/es';
import { en } from './locales/en';

export { es, en };
export type Translation = typeof es;
export type Locale = 'es' | 'en';
