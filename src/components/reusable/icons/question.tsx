import { component$ } from "@builder.io/qwik";

interface QuestionProps {
  classes?: string;
}

export const Question = component$((props: QuestionProps) => {
  return (
    <svg
      width="29"
      height="29"
      class={props.classes}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 10.75C10.75 6.37498 17.625 6.37501 17.625 10.75C17.625 13.875 14.5 13.2499 14.5 16.9999"
        stroke="black"
        stroke-opacity="0.5"
        stroke-width="2.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5 22.0211L14.52 21.9989"
        stroke="black"
        stroke-opacity="0.5"
        stroke-width="2.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5 27C21.4035 27 27 21.4035 27 14.5C27 7.59644 21.4035 2 14.5 2C7.59644 2 2 7.59644 2 14.5C2 16.7768 2.60871 18.9114 3.67228 20.75L2.625 26.375L8.25 25.3278C10.0886 26.3913 12.2232 27 14.5 27Z"
        stroke="black"
        stroke-opacity="0.5"
        stroke-width="2.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
