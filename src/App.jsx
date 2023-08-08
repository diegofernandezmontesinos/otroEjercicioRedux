
import Navbar from './components/Navbar.jsx'
import UserList from './components/UserList.jsx';
// redux
import { Provider } from 'react-redux';
import  store  from './store';


function App() {
 

  return (
    <Provider store={store}>
      <Navbar />
      <UserList />
    </Provider>
 
  )
}

export default App;
