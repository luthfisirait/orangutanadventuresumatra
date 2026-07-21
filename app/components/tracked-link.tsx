"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { trackEvent, type AnalyticsEventName, type AnalyticsParams } from "../analytics";

type TrackedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  children: ReactNode;
  eventName: AnalyticsEventName;
  eventParams?: AnalyticsParams;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  prefetch?: boolean;
};

export function TrackedLink({
  children,
  eventName,
  eventParams,
  href,
  onClick,
  prefetch,
  ...anchorProps
}: TrackedLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onClick?.(event);
    trackEvent(eventName, {
      link_url: href,
      ...eventParams
    });
  };
  const isInternalPage = href.startsWith("/") && !href.startsWith("//");

  if (isInternalPage) {
    return (
      <Link href={href} onClick={handleClick} prefetch={prefetch} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} onClick={handleClick} {...anchorProps}>
      {children}
    </a>
  );
}
