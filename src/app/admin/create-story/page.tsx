import { getServerSession } from "next-auth/next";
import { options } from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function CreateStoryPage() {
  const session = await getServerSession(options);
  // @ts-ignore
  if (!session?.user?.admin) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-3xl">Create Story</h1>
    </div>
  );
}
