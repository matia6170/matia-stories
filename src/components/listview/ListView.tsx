type Props = {
  children: React.ReactNode;
};
export default function ListView({ children }: Props) {
  return (
    <ul className="border border-white p-4">
      <li className="border border-white px-4 py-2 ">lastest</li>
      {children}
      <li>end of list</li>
    </ul>
  );
}
