import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Product from "./product"

const Products = () => {
  return (
    <StaticQuery
      query={PRODUCTS_QUERY}
      render={({ allStripeProduct, allStripeSku }) => {
        return allStripeProduct.edges.map(({ node: product }) => {
          const skus = allStripeSku.edges.filter(
            ({ node }) => node.product.id === product.id
          )
          return <Product skus={skus} key={product.id} product={product} />
        })
      }}
    />
  )
}

const PRODUCTS_QUERY = graphql`
  query AllProducts {
    allStripeSku {
      edges {
        node {
          attributes {
            name
          }
          product {
            name
            id
          }
          price
          id
        }
      }
    }
    allStripeProduct {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`

export default Products
