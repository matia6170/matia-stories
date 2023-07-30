import { NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { db } from "@/my-firebase-admin/firebase";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const storyRef = db!.collection("stories").doc(id);

  let output:Record<string, any> = {};

  const story = await storyRef.get()
  if(!story.exists){
    return NextResponse.json({
        "error": {
          "code": "INVALID_INPUT",
          "message": "Invalid input data. Please provide a valid name and email.",
          "details": {
            "errors": [
              {
                "field": "name",
                "message": "Name must be at least 3 characters long."
              },
              {
                "field": "email",
                "message": "Email address is not valid."
              }
            ]
          }
        }
      });
    }
  let data = story.data()
  data!.id = id
    

  return NextResponse.json({data:data});
}
