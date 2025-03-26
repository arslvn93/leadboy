import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Retro 90s theme colors
        'retro-dark': '#121212',
        'retro-dark-blue': '#0D1B2A',
        'retro-dark-purple': '#150A30', /* New dark purple background color */
        'retro-purple': {
          DEFAULT: '#8A2BE2',
          'dark': '#4A148C',
          'light': '#9370DB',
        },
        'retro-pink': {
          DEFAULT: '#FF1493',
          'dark': '#C71585',
          'light': '#FF69B4',
        },
        'retro-blue': {
          DEFAULT: '#00BFFF',
          'dark': '#0080FF',
          'light': '#87CEFA',
        },
        'retro-teal': {
          DEFAULT: '#00CED1',
          'dark': '#008B8B',
          'light': '#AFEEEE',
        },
        'retro-neon': {
          'green': '#39FF14',
          'pink': '#FF10F0',
          'blue': '#00FFFF',
          'yellow': '#FFFF00',
        },
        'retro-bright': '#3DFAFF',
        'retro-card': '#1E1E30',
        'retro-grid': '#8A2BE2',
      },
      fontFamily: {
        'retro': ['VT323', 'monospace'],
        'display': ['Space Grotesk', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "holographic-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-border": {
          "0%, 100%": { boxShadow: "0 0 0 rgba(0, 255, 255, 0.4)" },
          "50%": { boxShadow: "0 0 10px rgba(0, 255, 255, 0.7)" },
        },
        "screen-flicker": {
          "0%, 100%": { opacity: "1" },
          "98%": { opacity: "1" },
          "99%": { opacity: "0.8" },
        },
        "pulse-strong": {
          "0%, 100%": { opacity: "0.8", boxShadow: "0 0 15px currentColor" },
          "50%": { opacity: "0.4", boxShadow: "0 0 5px currentColor" },
        },
        "spotlight-glow": {
          "0%": { opacity: "0.7", transform: "scale(0.95)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { opacity: "0.7", transform: "scale(0.95)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blink": "blink 1s step-end infinite",
        "float": "float 3s ease-in-out infinite",
        "scan-line": "scan-line 2s linear infinite",
        "holographic-shift": "holographic-shift 10s ease infinite",
        "pulse-border": "pulse-border 2s ease-in-out infinite",
        "screen-flicker": "screen-flicker 6s linear infinite",
        "pulse-strong": "pulse-strong 2s infinite alternate",
        "spotlight-glow": "spotlight-glow 3s ease-in-out infinite",
      },
      backgroundImage: {
        'retro-grid': 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        'retro-gradient-purple': 'linear-gradient(135deg, #9933FF 0%, #3333FF 100%)',
        'retro-gradient-pink': 'linear-gradient(135deg, #FF33CC 0%, #FF3366 100%)',
        'retro-gradient-blue': 'linear-gradient(135deg, #00CCFF 0%, #0066FF 100%)',
        'retro-gradient-teal': 'linear-gradient(135deg, #00FFCC 0%, #00CCFF 100%)',
      },
      boxShadow: {
        'neon-purple': '0 0 5px rgba(255,255,255,0.5), 0 0 10px #8A2BE2, 0 0 20px #8A2BE2',
        'neon-blue': '0 0 5px rgba(255,255,255,0.5), 0 0 10px #00BFFF, 0 0 20px #00BFFF',
        'neon-pink': '0 0 5px rgba(255,255,255,0.5), 0 0 10px #FF1493, 0 0 20px #FF1493',
        'neon-teal': '0 0 5px rgba(255,255,255,0.5), 0 0 10px #00CED1, 0 0 20px #00CED1',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
