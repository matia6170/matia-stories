import Link from "next/link";
type props = {
  name: string;
  href: string;
  active: boolean;
};
export default function NavBarLink({ name, href, active }: props) {
  return (
    <Link
      href={href}
      className={`inline p-4 ${
        active ? "text-orange-800 " : "text-inherit"
      } transition duration-500 hover:scale-125 `}
    >
      {name}
    </Link>
  );
}
