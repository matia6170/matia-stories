import Image from "next/image";
import ReactMarkdown from "react-markdown";
/* eslint-disable react/no-children-prop */
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import remarkGfm from "remark-gfm";
export default async function Home() {
  await getServerSession(options);

  const res = await fetch(
    "http://localhost:3000/api/stories/getStory?id=main"
  );
  const data = (await res.json()).data;


  return (
    <div>
      <h1 className="text-4xl text-center">{data.title}</h1> <br />
      

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
