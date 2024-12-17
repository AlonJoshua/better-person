import { component$ } from "@builder.io/qwik";
import { Menu } from "../../components/contextual/menu/menu";
import { Intro } from "../../components/contextual/philosophy/intro";

export default component$(() => {
  return (
    <>
      <Menu />
      <Intro />
    </>
  );
});