/* eslint-disable camelcase */
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST (request: Request) {
  const { products, email } = await request.json()
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
        unit_amount: (item.discountPrice ? (item.discountPrice * 100).toFixed(0) : (item.price * 100).toFixed(0)) as unknown as number
      },
      quantity: item.quantity
    })
  }

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    customer_email: email,
    mode: 'payment',
    success_url: `${request.headers.get('origin')}/success`,
    cancel_url: `${request.headers.get('origin')}/cancel`
  })
  const redirectUrl = session.url || ''
  console.log(redirectUrl)
  return new Response(JSON.stringify({ url: redirectUrl }), { headers })
}
