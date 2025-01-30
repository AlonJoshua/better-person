import { component$ } from "@builder.io/qwik";

interface BananaProps {
  className?: string;
}

export const Banana = component$((props: BananaProps) => {
  return (
    <span class={props.className} role="img" aria-label="banana" style={{ fontSize: "40px" }}>
      🍌
    </span>
  );
});
