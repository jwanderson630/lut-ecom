import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const stripe = window.Stripe("pk_test_8CQvocxnsXlVHs8kDhiRMH8p00I4TjBcqJ")
  const [color, setColor] = useState("sku_Fjs3wAMSR0LPIQ")
  const placeOrder = sku => {
    stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }
  return (
    <Layout>
      <SEO title="Home" />
      <article>
        <h1>Buy a shirt!!! 👕</h1>
        <select
          name="color"
          id="color"
          value={color}
          onChange={({ target: { value } }) => setColor(value)}
        >
          <option value="sku_Fjs3wAMSR0LPIQ">Red</option>
          <option value="sku_FjsWZJWvTYjr4S">Blue</option>
        </select>
        <button onClick={() => placeOrder(color)}>Buy a t-shirt</button>
      </article>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
