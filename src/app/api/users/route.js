import { ConnectDb } from "@/lib/db/ConnectDb";
import { UserModal } from "@/lib/models/User";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
      await ConnectDb();
      const users = await UserModal.find();
      return NextResponse.json({
          message: "Users fetched successfully",
          users,
      }, { status: 200 });
  } catch (error) {
      console.error("Error fetching users:", error);
      return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
      await ConnectDb();
      const obj = await request.json();
      const newuser = new UserModal(obj);
      await newuser.save();
      return NextResponse.json({
          message: "User created successfully",
          newuser,
      }, { status: 201 });
  } catch (error) {
      console.error("Error creating user:", error);
      return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

 
export async function PUT(request) {}
 
export async function DELETE(request) {}