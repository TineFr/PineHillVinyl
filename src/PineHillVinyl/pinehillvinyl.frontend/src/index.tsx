import { GlobalStyle } from './styles/global-style';
import ReactDOM from 'react-dom';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

ReactDOM.render(
<>
<GlobalStyle />
<Provider store={store}>
    <App />
</Provider>
</>, document.getElementById('root'));
reportWebVitals();
