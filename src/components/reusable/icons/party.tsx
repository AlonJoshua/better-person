import { component$ } from "@builder.io/qwik";

interface PartyProps {
  className?: string;
}

export const Party = component$((props: PartyProps) => {
  return (
    <span class={props.className} role="img" aria-label="party" style={{ fontSize: "40px" }}>
      🎉 
    </span>
  );
});
