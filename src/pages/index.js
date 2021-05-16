import * as React from "react"
import ProductGrid from "../components/product-grid"
import { Nav } from '../components/nav'

const IndexPage = () => {
  return (
    <main>
      <Nav />
      <ProductGrid/>
    </main>
  )
}

export default IndexPage
