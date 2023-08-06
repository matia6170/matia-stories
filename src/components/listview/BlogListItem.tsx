import Link from "next/link";

type BlogListItemProps = {
  title: string;
  date: string;
  description: string;
  id: string;
};

export default function BlogListItem({
  title,
  date,
  description,
  id,
}: BlogListItemProps) {
  return (
    <Link href={"/stories/" + id}>
      <li className=" border border-white pl-2 pr-4 py-2 my-2 transition hover:bg-slate-600 rounded-md">
        <h1 className="text-2xl">{title}</h1>
        <h2 className="text-base">{description}</h2>
        <h2 className="text-xs font-normal">{date}</h2>
      </li>
    </Link>
  );
}
