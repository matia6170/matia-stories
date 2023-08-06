import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { Markup } from "interweave";
import { renderToStaticMarkup } from "react-dom/server";
import styles from "./story.module.css"

export default async function Story(props: any) {
  await getServerSession(options);
  const id = props.params.id;

  const res = await fetch(
    "http://localhost:3000/api/stories/getStory?id=" + id
  );
  const data = (await res.json()).data;

//   console.log(data);

  return (
    <div>
      <h1>Story id: {id}</h1>
      <h1 className="text-3xl">{data.title}</h1>
      <h1>{data.description}</h1>
      <h1 className="text-sm">{data.writtenOn}</h1>
      <br/>


      <div className="mx-4" dangerouslySetInnerHTML={{ __html: data.content }}></div>

    </div>
  );
}
