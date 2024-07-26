// import { cartTable, db } from "@/lib/drizzle";
// import { validateDelete, validatePOST, validateUserId } from "@/lib/utils";
// import { log } from "console";
// import { and, eq } from "drizzle-orm";
// import { NextRequest, NextResponse } from "next/server";
// import { z } from "zod";

// export async function GET(req: NextRequest) {
//   let url = req.nextUrl.searchParams;
//   try {
//     if (url.has("userid")) {
//       const { userid } = validateUserId.parse({ userid: url.get("userid") });
//       const cartData = await db.select().from(cartTable).where(eq(cartTable.userid, userid));
//       return NextResponse.json(cartData);
//     } else {
//       throw new Error("user id not found");
//     }
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json(
//         { error: "Invalid request payload" },
//         { status: 422 }
//       );
//     }
//     let rr = (error as { message: string }).message;
//     console.log("Error", rr);
//     return NextResponse.json({ error: rr });
//   }
// }

// export async function POST(req: NextRequest) {
//   const body = await req.json();

//   try {
//     // Log the incoming request body
//     console.log("Request body:", body);

//     // Validate the request body
//     const validatedBody = validatePOST.parse(body);

//     // Log the validated body
//     console.log("Validated body:", validatedBody);

//     // Insert data into the database
//     const cartData = await db.insert(cartTable).values(validatedBody).returning();

//     // Log the inserted data
//     console.log("Inserted data:", cartData);

//     // Return the response

//       const alreadyCartData = await db
//         .select()
//         .from(cartTable)
//         .where(
//           and(
//             eq(cartTable.userid, validatedBody.userid),
//             eq(cartTable.productid, validatedBody.productid)
//           )
//         );
//       if (alreadyCartData.length > 0) {
//         const updatedData = {
//           userid: validatedBody.userid,
//           productid: validatedBody.productid,
//           quantity: (alreadyCartData[0].quantity as number) + 1,
//         };
//         await db
//           .update(cartTable)
//           .set(updatedData)
//           .where(
//             and(
//               eq(cartTable.userid, validatedBody.userid),
//               eq(cartTable.productid, validatedBody.productid)
//             )
//           );
//         return NextResponse.json("OK");
//       } else {
//         const cartData = await db
//           .insert(cartTable)
//           .values(validatedBody)
//           .returning();
//         return NextResponse.json(cartData);
//       }
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         return NextResponse.json(
//           { error: "Invalid request payload" },
//           { status: 422 }
//         );
//       }
//       let rr = (error as { message: string }).message;
//       console.log("Error", rr);
//       return NextResponse.json({ error: rr });
//     }
//   }

//   export async function PUT(req: NextRequest) {
//     const body = await req.json();
//     const validatedBody = validatePOST.parse(body);
  
//     try {
//       await db
//         .update(cartTable)
//         .set(validatedBody)
//         .where(
//           and(
//             eq(cartTable.userid, validatedBody.userid),
//             eq(cartTable.productid, validatedBody.productid)
//           )
//         );
//       return NextResponse.json("OK");
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         return NextResponse.json(
//           { error: "Invalid request payload" },
//           { status: 422 }
//         );
//       }
//       let rr = (error as { message: string }).message;
//       console.log("Error", rr);
//       return NextResponse.json({ error: rr });
//     }
//   }
  
//   export async function DELETE(req: NextRequest) {
//     const url = req.nextUrl.searchParams;
//     const { userid, productid } = validateDelete.parse({
//       userid: url.get("userid"),
//       productid: url.get("productid"),
//     });
  
//     try {
//       await db
//         .delete(cartTable)
//         .where(
//           and(eq(cartTable.userid, userid), eq(cartTable.productid, productid))
//         );
//       return NextResponse.json("OK");
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         return NextResponse.json(
//           { error: "Invalid request payload" },
//           { status: 422 }
//         );
//       }
//       let rr = (error as { message: string }).message;
//       console.log("Error", rr);
//       return NextResponse.json({ error: rr });
//     }
//   }

import { cartTable, db } from "@/lib/drizzle";
import { validateDelete, validatePOST, validateUserId } from "@/lib/utils";
import { log } from "console";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
  let url = req.nextUrl.searchParams;
  try {
    if (url.has("userid")) {
      const { userid } = validateUserId.parse({ userid: url.get("userid") });
      const cartData = await db.select().from(cartTable).where(eq(cartTable.userid, userid));
      return NextResponse.json(cartData);
    } else {
      throw new Error("User ID not found");
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 422 }
      );
    }
    let rr = (error as { message: string }).message;
    console.log("Error", rr);
    return NextResponse.json({ error: rr });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Log the incoming request body
    console.log("Request body:", body);

    // Validate the request body
    const validatedBody = validatePOST.parse(body);

    // Log the validated body
    console.log("Validated body:", validatedBody);

    // Check if the item is already in the cart
    const alreadyCartData = await db
      .select()
      .from(cartTable)
      .where(
        and(
          eq(cartTable.userid, validatedBody.userid),
          eq(cartTable.productid, validatedBody.productid)
        )
      );

    if (alreadyCartData.length > 0) {
      // Update the quantity if the item is already in the cart
      const updatedData = {
        quantity: (alreadyCartData[0].quantity as number) + 1,
      };
      await db
        .update(cartTable)
        .set(updatedData)
        .where(
          and(
            eq(cartTable.userid, validatedBody.userid),
            eq(cartTable.productid, validatedBody.productid)
          )
        );
      return NextResponse.json("OK");
    } else {
      // Insert new item into the cart
      const cartData = await db
        .insert(cartTable)
        .values(validatedBody)
        .returning();
      return NextResponse.json(cartData);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("Validation Error:", error.errors);
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 422 }
      );
    }
    let rr = (error as { message: string }).message;
    console.log("Error", rr);
    return NextResponse.json({ error: rr });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    // Log the incoming request body
    console.log("Request body:", body);

    // Validate the request body
    const validatedBody = validatePOST.parse(body);

    // Log the validated body
    console.log("Validated body:", validatedBody);

    await db
      .update(cartTable)
      .set(validatedBody)
      .where(
        and(
          eq(cartTable.userid, validatedBody.userid),
          eq(cartTable.productid, validatedBody.productid)
        )
      );
    return NextResponse.json("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("Validation Error:", error.errors);
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 422 }
      );
    }
    let rr = (error as { message: string }).message;
    console.log("Error", rr);
    return NextResponse.json({ error: rr });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const url = req.nextUrl.searchParams;
    const { userid, productid } = validateDelete.parse({
      userid: url.get("userid"),
      productid: url.get("productid"),
    });

    await db
      .delete(cartTable)
      .where(
        and(eq(cartTable.userid, userid), eq(cartTable.productid, productid))
      );
    return NextResponse.json("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("Validation Error:", error.errors);
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 422 }
      );
    }
    let rr = (error as { message: string }).message;
    console.log("Error", rr);
    return NextResponse.json({ error: rr });
  }
}
