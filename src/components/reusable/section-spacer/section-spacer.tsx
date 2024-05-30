import { component$ } from "@builder.io/qwik";

interface SectionSpacerProps {
  className?: string;
}

export const SectionSpacer = component$((props: SectionSpacerProps) => {
  return <div class={`section-spacer ${props.className}`}></div>;
});
