import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./menu.css?inline";

export const Menu = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="main-manu-toolbar">
      <ul class="main-menu">
        <li class="menu-item">
          Better person
        </li>
        <li class="menu-item">
          philosophy
        </li>
        <li class="menu-item">
          about me
        </li>
      </ul>
    </div>
  );
});
