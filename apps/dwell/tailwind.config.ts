import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#E25B72',
          500: '#E25B72',
          400: '#EB788C',
          600: '#D84B64',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          700: '#374151',
          900: '#0B0B0C',
        },
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        card: '16px',
        button: '14px',
        input: '14px',
      },
    },
  },
  plugins: [],
};

export default config;
