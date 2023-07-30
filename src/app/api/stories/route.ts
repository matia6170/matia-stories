import { NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { db } from "@/my-firebase-admin/firebase";

export async function GET() {
  const storiesRef = db!.collection("stories");
  const snapshot = await storiesRef.get();
  snapshot.forEach((doc:any) => {
    console.log(doc.id, "=>", doc.data());
  });

  const test = {
    name: "mmatia",
  };

  return NextResponse.json(test);
}
