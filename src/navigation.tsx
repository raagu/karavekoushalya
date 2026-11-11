import { createContext, useContext, type AnchorHTMLAttributes } from "react";
import { pagePath, type Page, type SiteLocation } from "./routing";
import type { Lang } from "./siteContent";

export const NavigationContext = createContext<{
  location: SiteLocation;
  navigate: (location: SiteLocation) => void;
} | null>(null);

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  page: Page;
  language?: Lang;
  focus?: string;
};

// Real hrefs support crawlers, no-JavaScript navigation and opening new tabs.
// Ordinary clicks retain the existing single-page navigation experience.
export function SiteLink({
  page,
  language,
  focus,
  onClick,
  ...props
}: SiteLinkProps) {
  const navigation = useContext(NavigationContext);
  if (!navigation) throw new Error("SiteLink requires NavigationContext");
  const destination: SiteLocation = {
    lang: language ?? navigation.location.lang,
    page,
    focus,
  };
  return (
    <a
      {...props}
      href={pagePath(destination)}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          (props.target && props.target !== "_self") ||
          props.download !== undefined
        )
          return;
        event.preventDefault();
        navigation.navigate(destination);
      }}
    />
  );
}
