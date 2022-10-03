import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Home from '../components/layouts/Home';

function MyApp({ Component, pageProps, ...AppProps }: AppProps) {
  const getContent = () => {
    if (['/'].includes(AppProps.router.pathname))
      return <Component {...pageProps} />;
    return (
      <Provider store={store}>
        <Home>
          <Component {...pageProps} />
        </Home>
      </Provider>
    );
  };
  return <>{getContent()}</>;
}

export default MyApp;
