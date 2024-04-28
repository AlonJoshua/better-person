import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./menu.css?inline";

export const Menu = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="main-manu-toolbar">
      <ul class="main-menu">
        <li class="menu-item">
          <a href="/">Better person</a>
        </li>
        <li class="menu-item">
          <a href="/philosophy">philosophy</a>
        </li>
        <li class="menu-item">
          <a href="/about">about me</a>
        </li>
      </ul>
    </div>
  );
});
