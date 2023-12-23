import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import ShopCategoriePage from "./Pages/ShopCategoryPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "men", element: <ShopCategoriePage category={"men"} /> },
        { path: "women", element: <ShopCategoriePage category={"women"} /> },
        { path: "kids", element: <ShopCategoriePage category={"kids"} /> },
        {
          path: "product",
          element: <ProductPage />,
          children: [{ path: ":productId", element: <ProductPage/> }], 
        },
        { path: "cart", element: <CartPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "signup", element: <SignupPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
