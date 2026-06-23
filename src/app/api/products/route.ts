import { NextResponse } from "next/server";
// In a real app, you would import dbConnect and Product model here
// import dbConnect from "@/lib/dbConnect";
// import Product from "@/lib/models/Product";

export async function GET() {
  try {
    // await dbConnect();
    // const products = await Product.find({});
    
    // For now, we return mock data based on our UI requirements
    const mockProducts = [
      { id: "1", title: "Titan X Pro Smart Handset", price: 899.99, tag: "FLASH SALE" },
      { id: "2", title: "Acoustic S10 ANC Headphones", price: 199.99, tag: "FLASH SALE" },
    ];
    
    return NextResponse.json({ success: true, data: mockProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // await dbConnect();
    // const product = await Product.create(body);
    
    return NextResponse.json({ success: true, data: body }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
