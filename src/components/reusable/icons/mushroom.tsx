import { component$ } from "@builder.io/qwik";

interface MushroomProps {
  className?: string;
}

export const Mushroom = component$((props: MushroomProps) => {
  return (
    <span class={props.className} role="img" aria-label="mushroom" style={{ fontSize: "40px" }}>
      🍄
    </span>
  );
});
