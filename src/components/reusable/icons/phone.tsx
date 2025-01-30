import { component$ } from "@builder.io/qwik";

interface PhoneProps {
  className?: string;
}

export const Phone = component$((props: PhoneProps) => {
  return (
    <span class={props.className} role="img" aria-label="phone" style={{ fontSize: "40px" }}>
      📲
    </span>
  );
});
