import { component$ } from "@builder.io/qwik";

interface DogProps {
  className?: string;
}

export const Dog = component$((props: DogProps) => {
  return (
    <span class={props.className} role="img" aria-label="dog" style={{ fontSize: "40px" }}>
      🐕
    </span>
  );
});
