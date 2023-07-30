import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import ListView from "@/components/listview/ListView";
import ListItem from "@/components/listview/ListItem";

export default async function Stories() {
  const session = await getServerSession(options);


  const res = await fetch("http://localhost:3000/api/stories");

  const data = await res.json();
  console.log(data);



  return (
    <div>
      <h1 className="text-3xl font-thin">stories</h1>
        <ListView>
            <ListItem/>
        </ListView>
        <div className="flex flex-col border border-white p-4 ">
            <span className=" border border-white ">
                <h2 className="text-2xl font-thin">title</h2>
            </span>
            <div className="inline-block bg-gray-200 px-4 py-2 rounded-md">
  Your text content goes here.
</div>
        </div>
        

    </div>
  );
}
