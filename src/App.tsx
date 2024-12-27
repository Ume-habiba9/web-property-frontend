import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import { AuthInit, AuthProvider, setupAxios } from 'auth';
import rqConfigs from 'configs/rq-configs';

import Router from 'routes/router';

setupAxios();
const queryClient = new QueryClient(rqConfigs);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthInit>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#f81e28',
              },
              components: {
                Input: {
                  paddingBlock: 10,
                  fontSize: 16,
                },
              },
            }}
          >
            <Router />
          </ConfigProvider>
        </AuthInit>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
