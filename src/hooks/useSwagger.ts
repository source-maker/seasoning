import { SwaggerContext } from '@/providers/SwaggerProvider';
import { useContext } from 'react';

/**
 * Hook that provides access to the latest Swagger API client, which is potentially authenticated.
 * @returns {swaggerClient} A potentially authenticated Swagger API client.
 * @throws {Error} Will throw an error if used outside of a SwaggerProvider.
 */
export const useSwagger = () => {
  const context = useContext(SwaggerContext);
  if (context === undefined) {
    throw new Error('useSwagger must be used within SwaggerProvider');
  }
  return { swaggerClient: context.swaggerClient };
};
