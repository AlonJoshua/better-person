import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Menu } from "../components/contextual/menu/menu";
import { Intro } from "../components/contextual/intro/intro";
import { TipOfTheDay } from "~/components/contextual/tip-of-the-day/tip-of-the-day";
import { SectionSpacer } from "~/components/reusable/section-spacer/section-spacer";
export default component$(() => {
  return (
    <>
      <Menu />
      <Intro />
      <SectionSpacer />
      <TipOfTheDay />
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
