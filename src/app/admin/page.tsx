import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminPage() {
  const session = await getServerSession(options);

  // @ts-ignore
  if (!session?.user?.admin) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-3xl">Admin Page</h1>
      <div className="flex justify-center">
        <Link
          className="border border-white  py-2 px-4  transition hover:bg-slate-600 rounded-md"

          href="/admin/create-story"
        >
          {" "}
          Create Story
        </Link>
      </div>
    </div>
  );
}
