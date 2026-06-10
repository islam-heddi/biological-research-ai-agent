import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { ToastContainer } from "react-toastify"
import Dashboard from "./pages/Dashboard"
import Auth from "./context/Auth"
import { Provider } from "react-redux"
import { store } from "./context/store"
import PrivateLayout from "./Components/PrivateLayout"
import Settings from "./pages/Settings"
import Researchs from "./pages/Researchs"
import Research from "./pages/Research"
import Channels from "./pages/Channels"
import Chat from "./pages/Chat"
function App() {
  return (<>
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    <Provider store={store}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/channels" element={<Channels />} />
              <Route path="/research/:id" element={<Research />} />
              <Route path="/researchs" element={<Researchs />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </Auth>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App