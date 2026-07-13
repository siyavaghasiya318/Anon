import Stripe from 'stripe'


const stripe = new Stripe(process.env.STRIPE_SECRETE);


export default stripe