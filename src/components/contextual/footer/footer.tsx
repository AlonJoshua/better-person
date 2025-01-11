import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";
import { Icon } from "~/components/reusable/icon";

export const Footer = component$(() => {
  useStylesScoped$(styles);

  return (
    <footer class="main-footer">
      <div class="footer-inner">
        <div class="footer-content">
          <p>Made using <a href="https://qwik.dev/" target="_blank">Qwik</a></p>
          <a href="https://www.linkedin.com/in/alon-joshua/" target="_blank">
            <Icon name="Linkedin" />
          </a>
          <a href="https://github.com/alonjoshua" target="_blank">
            <Icon name="Github" />
          </a>
        </div>
      </div>
    </footer>
  );
});
