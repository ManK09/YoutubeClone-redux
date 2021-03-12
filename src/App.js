import './App.css';
import {Provider} from 'react-redux'
import Search from './Search'
import store from './store'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import HomePage from './HomePage'

function App() {
  return (
    <Provider store={store}>
    <div>
    <h1>YouTube</h1>
    <HomePage />
    {/* <Search />
    <VideoDetail />
    <VideoList /> */}
    </div>
    </Provider>
  );
}

export default App;
