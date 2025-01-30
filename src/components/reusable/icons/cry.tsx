import { component$ } from "@builder.io/qwik";

interface CryProps {
  className?: string;
}

export const Cry = component$((props: CryProps) => {
  return (
    <span class={props.className} role="img" aria-label="cry" style={{ fontSize: "40px" }}>
      😭
    </span>
  );
});
