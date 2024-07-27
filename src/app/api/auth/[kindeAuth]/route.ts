import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { kindeAuth: any } }): Promise<void | NextResponse> {
 const endpoint = params.kindeAuth;
 const response = await handleAuth(request, endpoint);

 // Ensure the response is compatible with NextResponse
 if (!(response instanceof NextResponse)) {
 return NextResponse.json({ message: "Good" });
 }

 return response;
}

// import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
// export const GET = handleAuth();


// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
// import { NextRequest } from "next/server";

// export async function GET(request: NextRequest, { params }: { params: { kindeAuth: any } }) {
//     const endpoint = params.kindeAuth;
//     return handleAuth(request, params.kindeAuth);
// }