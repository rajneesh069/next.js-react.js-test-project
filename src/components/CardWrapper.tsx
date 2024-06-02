export default function CardWrapper({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  console.log("children:", children);
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
  );
}
