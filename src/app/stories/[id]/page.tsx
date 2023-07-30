import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Story(props: any) {
  await getServerSession(options);
  const id = props.params.id;

  const res = await fetch(
    "http://localhost:3000/api/stories/getStory?id=" + id
  );
  const data = (await res.json()).data;

  console.log(data);

  return (
    <div>
      <h1>Story id: {id}</h1>
      <h1>{data.title}</h1>
      <h1>{data.description}</h1>
      <h1>{data.writtenOn}</h1>
      <h1>{data.content}</h1>
    </div>
  );
}
