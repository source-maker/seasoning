import { SwaggerContext } from '@/providers/SwaggerProvider';
import { useContext } from 'react';

/**
 * `useSwagger` hook.
 *
 * This hook provides access to the Swagger API client within the context of the SwaggerProvider.
 * It allows to interact with the Swagger API using the client object which might be authenticated depending on the user session.
 *
 * @return {Object} The returned object contains the `swaggerClient` which is an instance of Swagger API client.
 * @throws {Error} Throws an error if the hook is being used outside the context of a SwaggerProvider.
 *
 * @example
 * const { swaggerClient } = useSwagger();
 * swaggerClient?.meRetrieve();
 *
 * @see {@link SwaggerProvider} for provider implementation details.
 */
export const useSwagger = () => {
  const context = useContext(SwaggerContext);
  if (context === undefined) {
    throw new Error('useSwagger must be used within SwaggerProvider');
  }
  return { swaggerClient: context.swaggerClient };
};
