import Router from './shared/Router';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClinet = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClinet}>
      <Router />
    </QueryClientProvider>
  )
}

export default App;