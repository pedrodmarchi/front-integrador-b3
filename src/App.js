import './App.scss';
import RouteList from './routes';
import CartContextProvider from "./context/CartContext";



function App() {
  return (
    <>
    <CartContextProvider>
      <RouteList />
    </CartContextProvider>
    </>
  )
}

export default App;
