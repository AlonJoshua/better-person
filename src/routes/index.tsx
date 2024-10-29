import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Menu } from "../components/contextual/menu/menu";
import { Intro } from "../components/contextual/intro/intro";
import { TipOfTheDay } from "~/components/contextual/tip-of-the-day/tip-of-the-day";
import { SectionSpacer } from "~/components/reusable/section-spacer";
import { TipsSearch } from "~/components/contextual/tips-search/tips-search";
import { routeLoader$ } from '@builder.io/qwik-city';
import { GetDailyTip } from "~/db/GetDailyTip";
import { GetAllTips } from "~/db/GetAllTips";

export const useDailyTip = routeLoader$(() => {
  return GetDailyTip();
});

export const useAllTips = routeLoader$(() => {
  return GetAllTips();
});

export default component$(() => {

  const dailyTip = useDailyTip() as { value: any };
  const allTips = useAllTips() as { value: any };

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
      <TipsSearch tips={allTips.value} />
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
