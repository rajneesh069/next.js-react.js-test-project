import CardWrapper from "./CardWrapper";
import useCustomHook from "./CustomHook";

export default function Test(): JSX.Element {
  const data: string = useCustomHook();
  return (
    <div>
      {data}
      <CardWrapper>Hello</CardWrapper>
    </div>
  );
}
