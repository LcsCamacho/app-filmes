import { NextRequest, NextResponse } from "next/server";

export async function POST (req:Request) {
  const { email, password } = await req.json();
  console.log("HANDLER AUTH")
  if (email === "jsmith" && password === "password") {
    return NextResponse.json({
      id: 1,
      name: "John Smith",
      email: "lucas.camachofilho@gmail.com",
      image: "https://via.placeholder.com/150",
    });
  } else {
   return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }
};
