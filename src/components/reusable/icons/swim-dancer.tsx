import { component$ } from "@builder.io/qwik";

interface SwimDancerProps {
  className?: string;
}

export const SwimDancer = component$((props: SwimDancerProps) => {
  return (
    <span class={props.className} role="img" aria-label="swim dancer" style={{ fontSize: "40px" }}>
      🤽‍♀️
    </span>
  );
});
