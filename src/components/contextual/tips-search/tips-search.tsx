import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./tips-search.css?inline";
import { Icon } from "~/components/reusable/icon";

export const TipsSearch = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="tips-search-section section-font-big">
      <div class="background-circle background-circle-left-bottom background-dark-blue"></div>
      <div class="search-container">
        <h3 class="search-title">Find tips fit to your goals</h3>
        <input
          class="tip-search-input"
          type="text"
          placeholder="Search for tips"
        />
      </div>
      <div class="tips-container">
        <div class="tip-card">
          <p class="tip-content">
            <q>
              Merge onto the highway like you're joining a synchronized swimming
              routine, not a demolition derby.
            </q>
            <span class="tip-card-info">
              <Icon name="Question" />
            </span>
          </p>
          <div class="tip-card-footer">
            <div class="tip-search-tags">
              <span class="tag">Driving</span>
              <span class="tag">Safety</span>
            </div>
            <div class="tip-icons">
              <span class="icon">
                <Icon name="Swimming" />
              </span>
              <span class="icon">
                <Icon name="Swimming" />
              </span>
            </div>
          </div>
        </div>
        <div class="tip-card">
          <p class="tip-content">
            <q>
              Use your turn signal like you're sending out invitations to a
              dance party, not trying to summon UFOs.
            </q>
            <span class="tip-card-info">
              <Icon name="Question" />
            </span>
          </p>
          <div class="tip-card-footer">
            <div class="tip-search-tags">
              <span class="tag">Driving</span>
              <span class="tag">Safety</span>
            </div>
            <div class="tip-icons">
              <span class="icon">
                <Icon name="Swimming" />
              </span>
              <span class="icon">
                <Icon name="Swimming" />
              </span>
            </div>
          </div>
        </div>
        <div class="tip-card">
          <p class="tip-content">
            <q>
              Merge onto the highway like you're joining a synchronized swimming
              routine, not a demolition derby.
            </q>
            <span class="tip-card-info">
              <Icon name="Question" />
            </span>
          </p>
          <div class="tip-card-footer">
            <div class="tip-search-tags">
              <span class="tag">Driving</span>
              <span class="tag">Safety</span>
            </div>
            <div class="tip-icons">
              <span class="icon">
                <Icon name="Swimming" />
              </span>
              <span class="icon">
                <Icon name="Swimming" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="background-triangle background-triangle-right-center background-light-pink"></div>
    </div>
  );
});
