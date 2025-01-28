import { NextResponse } from "next/server";
import { makeFloodQuote } from "./makeFloodQuote";
import { formType } from "@/app/flood/form";

export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const form: formType = await request.json();
    const result = await makeFloodQuote(form);

    // Create headers for file download
    const headers = new Headers();
    headers.set(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    headers.set(
      "Content-Disposition",
      `attachment; filename="${result.filename}"`
    );

    // Return the file as a downloadable response
    return new NextResponse(result.buffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error in flood quote route:", error);
    return NextResponse.json(
      { error: "Failed to generate quote" },
      { status: 500 }
    );
  }
}
