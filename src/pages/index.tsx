import React, { useContext } from "react"
import { ProductGrid } from "../components/product-grid"
import { Nav } from '../components/nav'
import { ProductContext } from "../context/product-provider"

const IndexPage = () => {
  const { setProduct } = useContext(ProductContext);
  return (
    <main>
      <Nav />
      <ProductGrid setProduct={setProduct}/>
    </main>
  )
}

export default IndexPage
