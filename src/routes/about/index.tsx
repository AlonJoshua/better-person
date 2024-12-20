import { component$ } from "@builder.io/qwik";
import { Menu } from "../../components/contextual/menu/menu";
import { Intro } from "~/components/contextual/about/intro";

export default component$(() => {
  return (
    <>
      <Menu />
      <Intro />
    </>
  );
});