import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import ListView from "@/components/listview/ListView";
import BlogListItem from "@/components/listview/BlogListItem";

export default async function Stories() {
  const session = await getServerSession(options);

  const res = await fetch("http://localhost:3000/api/stories/getStories");

  const data = await res.json();
  const blogArr = Object.values(data);


  return (
    <div>
      <h1 className="text-3xl font-thin">stories</h1>
      <ListView>
        {blogArr.map((blog: any) => {
          if (blog.id === "main") return;
          return (
            <BlogListItem
              key={blog.id}
              title={blog.title}
              date={blog.writtenOn}
              description={blog.description}
              id={blog.id}
            />
          );
        })}
      </ListView>
    </div>
  );
}
