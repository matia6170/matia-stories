/* eslint-disable react/no-children-prop */
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function Story(props: any) {
  await getServerSession(options);
  const id = props.params.id;

  const res = await fetch(
    "http://localhost:3000/api/stories/getStory?id=" + id
  );
  const data = (await res.json()).data;


  return (
    <div>
      <h1>Story id: {id}</h1>
      <h1 className="text-3xl">{data.title}</h1>
      <h1>{data.description}</h1>
      <h1 className="text-sm">{data.writtenOn}</h1>
      <br/>


      
      <ReactMarkdown
        components={{
          
          a: ({ node, ...props }) => (
            <a className="text-blue-500 hover:underline" {...props} />
          ),
          table: ({ node, ...props }) => (
            <table className="table-auto border border-white" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="border text-lg border-white" {...props} />
          ),
          img: ({ node, ...props }) => <img className="mx-auto" {...props} />,
         
        }}
        children={data.content.replaceAll("\\n", "\n")}
        remarkPlugins={[remarkGfm]}
      />


    </div>
  );
}
