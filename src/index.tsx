// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css/normalize.css';
if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}
import './styles/styles.css';
import App from './components/App';

// OfflinePluginRuntime.install();

const rootEl = document.getElementById('root');

const renderApp = (Component: React.ComponentType<{}>) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl as HTMLDivElement,
  );
};

renderApp(App);
if (module.hot) module.hot.accept('./components/App', () => renderApp(App));
