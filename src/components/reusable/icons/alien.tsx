import { component$ } from "@builder.io/qwik";

interface AlienProps {
  className?: string;
}

export const Alien = component$((props: AlienProps) => {
  return (
    <span class={props.className} role="img" aria-label="alien" style={{ fontSize: "40px" }}>
      🛸
    </span>
  );
});
