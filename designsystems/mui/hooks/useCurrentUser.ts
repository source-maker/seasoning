import { useSwagger } from '@/hooks/useSwagger';
import useSWR from 'swr';

/**
 * Custom React Hook to fetch and return the current user data and status.
 * It uses the useSWR hook to fetch and return data,
 * catching results so can be used across multiple components.
 *
 * @returns {Object} The user data object containing the following properties:
 * - data {Object|null} The data for the current user.
 * - error {Error|null} Any error that occurred during fetching.
 * - isLoading {boolean} Whether the fetch request is still loading.
 * - isValidating {boolean} Whether the fetch request is validating.
 */
export function useCurrentUser() {
  const { swaggerClient } = useSwagger();
  const fetcher = async () => swaggerClient?.me.meRetrieve();
  const { data, error, isLoading, isValidating } = useSWR('/api/me', fetcher);
  return { data, error, isLoading, isValidating };
}
