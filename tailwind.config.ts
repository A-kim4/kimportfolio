module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        glitch: 'glitch 0.8s infinite',
        'glitch-overlay': 'glitchOverlay 1s infinite',
        'glitch-rgb': 'glitchRGB 1.2s infinite',
        'text-glow': 'textGlow 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'gradient-x': 'gradientX 3s ease infinite',
        'glitch-logo': 'glitchLogo 1s infinite',
        'pulse-slow': 'pulseSlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
          '100%': { transform: 'translate(0)' },
        },
        glitchOverlay: {
          '0%': { opacity: 0.2, backgroundColor: '#3b82f6' },
          '50%': { opacity: 0.4, backgroundColor: '#9333ea' },
          '100%': { opacity: 0.2, backgroundColor: '#3b82f6' },
        },
        glitchRGB: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(2px, -2px)' },
          '66%': { transform: 'translate(-2px, 2px)' },
        },
        textGlow: {
          '0%, 100%': { textShadow: '0 0 10px #3b82f6, 0 0 20px #9333ea' },
          '50%': { textShadow: '0 0 20px #3b82f6, 0 0 30px #9333ea' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glitchLogo: {
          '0%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-1px, 1px)' },
          '50%': { transform: 'translate(1px, -1px)' },
          '75%': { transform: 'translate(-1px, 0)' },
          '100%': { transform: 'translate(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
};
