import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CartProvider } from "use-shopping-cart";
import CartModal from "./components/CartModal";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Result from "./pages/Result";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <CartProvider>
          <Toaster position="bottom-center" />
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/result" component={Result} />
              <Route exact path="/:productId" component={Product} />
            </Switch>
            <CartModal />
          </Router>
        </CartProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
