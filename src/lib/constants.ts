/**
 * Application-wide constants
 * Centralizes magic numbers and repeated values for better maintainability
 */

// Skill Levels
export const SKILL_LEVELS = {
    EXPERT: 100,
    ADVANCED: 95,
    VERY_GOOD: 90,
    GOOD: 85,
    INTERMEDIATE: 80,
    BASIC: 70,
    BEGINNER: 65,
    LEARNING: 40,
} as const;

// Icon Sizes
export const ICON_SIZES = {
    SMALL: 18,
    MEDIUM: 20,
    LARGE: 22,
    EXTRA_LARGE: 24,
} as const;

// Scroll Thresholds
export const SCROLL_THRESHOLDS = {
    NAVBAR_BACKGROUND: 50,
} as const;

// Server Configuration
export const SERVER_CONFIG = {
    PORT: 8080,
} as const;

// Time-related Constants
export const DATE_CONSTANTS = {
    ESLINT_YEAR: 2020,
} as const;

// Animation Delays
export const ANIMATION_DELAYS = {
    STAGGER_BASE: 0.1,
    STAGGER_2X: 0.2,
} as const;

export default {
    SKILL_LEVELS,
    ICON_SIZES,
    SCROLL_THRESHOLDS,
    SERVER_CONFIG,
    DATE_CONSTANTS,
    ANIMATION_DELAYS,
};
