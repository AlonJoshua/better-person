import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Menu } from "../components/contextual/menu/menu";
// import { MainContent } from "../components/contextual/main-content/main-content";
export default component$(() => {
  return (
    <>
      <Menu />
      {/* <MainContent /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Better Person",
  meta: [
    {
      name: "description",
      content: "Be a Better Person, One Laugh at a Time!",
    },
  ],
};
