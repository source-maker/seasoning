import React, { createContext, useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { SwaggerClient } from '@/init/swagger';
import { swaggerClient } from '@/init/swaggerClient';
import { SwaggerClientType } from '@/types/types';

// Initialize with default unauth swaggerClient
export const SwaggerContext = createContext<{
  swaggerClient: SwaggerClientType | null;
}>({ swaggerClient: swaggerClient });

// Create a provider component
export const SwaggerProvider = ({ children }) => {
  const { data: session } = useSession();
  const [swaggerClient, setSwaggerClient] = useState<SwaggerClientType | null>(
    null
  );

  useEffect(() => {
    // pass token to swagger client to authenticate future requests
    if (session && session.user && session?.user?.accessToken) {
      const client = new SwaggerClient({
        BASE: process.env.NEXT_PUBLIC_BACKEND_DOMAIN?.slice(0, -1),
        TOKEN: session.user.accessToken,
      });

      // validate session with server before setting client, else signout
      client.auth
        .authJwtVerifyCreate({
          token: session.user.accessToken,
        })
        .then(() => {
          console.log('swagger client is authenticated.');
        })
        .catch((err) => {
          if (err) {
            signOut();
          }
        });

      setSwaggerClient(client);
      console.log('authenticated swagger client set');
    }
  }, [session]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SwaggerContext.Provider value={{ swaggerClient }}>
      {children}
    </SwaggerContext.Provider>
  );
};
