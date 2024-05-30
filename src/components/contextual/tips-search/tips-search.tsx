import { component$ } from "@builder.io/qwik";

export const TipsSearch = component$(() => {
  return (
    <div class="tips-search-section">
      <div class="search-container">
        <h3 class="search-title">Find tips fit to your goals</h3>
        <input type="text" placeholder="Search for tips" />
      </div>
      <div class="tips-container">
        <div class="tip-card">
          <p class="tip-content">
            <q>
              Merge onto the highway like you're joining a synchronized swimming
              routine, not a demolition derby.
            </q>
          </p>
          <div class="tip-search-tags"></div>
          <div class="tip-icons"></div>
        </div>
        <div class="tip-card">
          <p class="tip-content">
            <q>
              Use your turn signal like you're sending out invitations to a
              dance party, not trying to summon UFOs.
            </q>
          </p>
          <div class="tip-search-tags"></div>
          <div class="tip-icons"></div>
        </div>
        <div class="tip-card">
          <p class="tip-content">
            <q>
              Merge onto the highway like you're joining a synchronized swimming
              routine, not a demolition derby.
            </q>
          </p>
          <div class="tip-search-tags"></div>
          <div class="tip-icons"></div>
        </div>
      </div>
    </div>
  );
});
