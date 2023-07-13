import createCache from '@emotion/cache';

/**
 * Create an Emotion cache instance for MUI integration
 * @see https://emotion.sh/docs/@emotion/cache
 */
export function createEmotionCache(): ReturnType<typeof createCache> {
  /**
   * @function createCache
   * @param {object} options
   * @param {string} options.key - The key used to prefix the cache's keys.
   * @param {string} options.prepend - moves MUI styles to the top of the <head> so they're loaded first.
   * It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
   */
  return createCache({ key: 'css', prepend: true });
}
