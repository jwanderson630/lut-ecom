import React, { useState } from "react"

const Product = props => {
  const { product, skus } = props
  const stripe = window.Stripe("pk_test_8CQvocxnsXlVHs8kDhiRMH8p00I4TjBcqJ")
  const [sku, setSku] = useState(skus[0].node.id)
  const placeOrder = sku => {
    stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }
  return (
    <article>
      <h1>Buy a {product.name}!!!</h1>
      <select
        name="sku"
        id="sku"
        value={sku}
        onChange={({ target: { value } }) => setSku(value)}
      >
        {skus.map(({ node: sku }) => {
          return (
            <option key={sku.id} value={sku.id}>
              {sku.attributes.name}
            </option>
          )
        })}
      </select>
      <button onClick={() => placeOrder(sku)}>Buy a {product.name}</button>
    </article>
  )
}

export default Product
