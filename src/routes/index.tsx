import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Menu } from "../components/contextual/menu/menu";
import { Intro } from "../components/contextual/homepage/intro/intro";
import { TipOfTheDay } from "~/components/contextual/tip-of-the-day/tip-of-the-day";
import { SectionSpacer } from "~/components/reusable/section-spacer";
import { TipsSearch } from "~/components/contextual/tips-search/tips-search";
import { routeLoader$ } from '@builder.io/qwik-city';
import { GetDailyTip } from "~/db/GetDailyTip";
import { GetSearchedTips } from "~/db/GetSearchedTips";
import { Footer } from "~/components/contextual/footer/footer";

export const useDailyTip = routeLoader$(() => {
  return GetDailyTip();
});

export const useFirstRenderTips = routeLoader$(() => {
  return GetSearchedTips();
});

export default component$(() => {

  const dailyTip = useDailyTip() as { value: any };
  const firstRenderTips = useFirstRenderTips() as { value: any };

  return (
    <>
      <Menu />
      <Intro />
      <SectionSpacer />
      {dailyTip.value ? (
        <TipOfTheDay tip={dailyTip.value} />
      ) : (
        <div>No tip available for today.</div>
      )}
      <SectionSpacer />
      <TipsSearch firstRenderTips={firstRenderTips.value} />
      <Footer />
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
