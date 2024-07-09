import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { kindeAuth: any } }) {
    const endpoint = params.kindeAuth;
    return handleAuth(request, params.kindeAuth);
}