import { getUserData } from "@/src/libs/apis";
import { authOptions } from "@/src/libs/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return new NextResponse("Authentication Required", {status: 500});
    }

    const userId = session.user.id;

    try {
        const data = await getUserData(userId);
        return NextResponse.json(data, {status: 200, statusText: "Successful"});
    } catch (error) {
        return new NextResponse("Unable to fetch", {status: 400});
    }
};

export async function POST(req: Request, res: Response) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return new NextResponse('Authentication Required', {status: 500})
    }

    const {roomId, reviewText, ratingValue} = await req.json();

    const userId = session.user.id;

    try {
        let data;

        return NextResponse.json(data, {status: 200, statusText: 'Successful'});
    } catch (error) {
        return new NextResponse('Unable to create review', {status: 500});
    }
}