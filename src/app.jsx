import ReactDom from 'react-dom';
import Foobar from './foobar/Foobar';

const App = () => <Foobar />;

ReactDom.render(<App />, document.getElementById('root'));
