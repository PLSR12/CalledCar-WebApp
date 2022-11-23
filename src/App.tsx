import GlobalStyle from 'common/styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import Routes from 'routes'

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={2000} theme="colored" />
      <GlobalStyle />
    </>
  )
}

export default App
