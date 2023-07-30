type Props = {
  children: React.ReactNode;
};
export default function ListView({ children }: Props) {
  return (
    <ul className="p-4">
      <li className="px-4 py-2 underline">lastest</li>
      {children}
    </ul>
  );
}
