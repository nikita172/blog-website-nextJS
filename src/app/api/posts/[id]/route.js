import { NextResponse } from "next/server"
import connect from "@/utils/db.js"
import Post from "@/models/Post";
export const GET = async (request, { params }) => {
  const { id } = params
  //fetch
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 })


  } catch (err) {
    return new NextResponse("Database error", { status: 500 })

  }

}