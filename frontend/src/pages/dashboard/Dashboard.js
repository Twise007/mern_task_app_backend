import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../../components/product/productList/ProductList'
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser'
import { selectisLoggedIn } from '../../redux/features/auth/authSlice'
import { getProducts } from '../../redux/features/product/productSlice'


const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectisLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProducts());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);


  return (
    <div style={{background:"var(--color-off-white)", minHeight:"100vh"}}>
      <h1>Dash board</h1>

      <ProductList products={products} isLoading={isLoading} />
    </div>
  )
}

export default Dashboard;