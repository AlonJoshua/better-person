import { component$ } from "@builder.io/qwik";
import { Menu } from "../../components/contextual/menu/menu";
import { Intro } from "../../components/contextual/philosophy/intro";
import { Footer } from "~/components/contextual/footer/footer";

export default component$(() => {
  return (
    <>
      <Menu />
      <Intro />
      <Footer />
    </>
  );
});