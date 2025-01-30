import { component$ } from "@builder.io/qwik";

interface HorseRacerProps {
  className?: string;
}

export const HorseRacer = component$((props: HorseRacerProps) => {
  return (
    <span class={props.className} role="img" aria-label="horse racer" style={{ fontSize: "40px" }}>
      🏇
    </span>
  );
});
