import { NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { db } from "@/my-firebase-admin/firebase";

export async function GET() {
  const storiesRef = db!.collection("stories");

  const output: Record<string, any> = {};
  console.log("hi")
  const snapshot = await storiesRef.get();
  snapshot.forEach((doc: any) => {
    
    output[doc.id] = doc.data();
    output[doc.id].id = doc.id;
  });

  return NextResponse.json(output);
}
