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
            </Route>
          </Routes>
        </Auth>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App