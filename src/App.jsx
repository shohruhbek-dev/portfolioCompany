import './App.css'
import Layout from './layout'
import Home from './pages/home'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <Layout>
      <Home />
      <ToastContainer
        position='top-center'
        autoClose={3000}
      />
    </Layout>
  )
}

export default App
