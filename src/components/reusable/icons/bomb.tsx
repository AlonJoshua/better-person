import { component$ } from "@builder.io/qwik";

interface BombProps {
  className?: string;
}

export const Bomb = component$((props: BombProps) => {
  return (
    <span class={props.className} role="img" aria-label="bomb" style={{ fontSize: "40px" }}>
      💣
    </span>
  );
});
