import { component$ } from "@builder.io/qwik";

interface VillainProps {
  className?: string;
}

export const Villain = component$((props: VillainProps) => {
  return (
    <span class={props.className} role="img" aria-label="villain" style={{ fontSize: "40px" }}>
      🦹
    </span>
  );
});
