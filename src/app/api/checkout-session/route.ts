/* eslint-disable camelcase */
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST (request: Request) {
  const { products } = await request.json()
  const headers = new Headers()
  headers.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE')
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  const lineItems = []
  for (const item of products) {
    lineItems.push({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.title
        },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    })
  }

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${request.headers.get('origin')}/success`,
    cancel_url: `${request.headers.get('origin')}/cancel`
  })
  const redirectUrl = session.url || ''
  console.log(redirectUrl)
  return new Response(JSON.stringify({ url: redirectUrl }), { headers })
}