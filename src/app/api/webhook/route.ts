import { createBooking, updateHotelRoom } from "@/src/libs/apis";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const checkout_session_completed = "checkout.session.completed";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-04-10',
}); 

export async function POST(req: Request, res: Response) {
    const reqBody = await req.text();
    const signature = req.headers.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event: Stripe.Event;

    try {
        if (!signature || !webhookSecret) {
            return;
        }
        event = stripe.webhooks.constructEvent(reqBody, signature, webhookSecret);
    } catch (error: any) {
        return new NextResponse(`Webhook Error: ${error.message}` , {status: 500});
    }

    switch (event.type) {
        case checkout_session_completed:
            const session = event.data.object;
            
            const {
                metadata: {
                    adults,
                    checkInDate,
                    checkOutDate,
                    children,
                    hotelRoom,
                    totalPrice,
                    user,
                    discount,
                    numberOfDays,
                },
            } = session;

            await createBooking({adults : Number(adults), checkInDate, checkOutDate, children: Number(children), hotelRoom, totalPrice : Number(totalPrice), user, discount : Number(discount), numberOfDays: Number(numberOfDays)});

            await updateHotelRoom(hotelRoom);

            return NextResponse.json("Booking Successful", {
                status: 200,
                statusText: "Booking Successful"
            });
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json("Event Received", {
        status: 200,
        statusText: "Event Received",
    });
};