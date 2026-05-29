import { redirect } from "next/navigation";

export default function GdprRedirectPage() {
  redirect("/privacy");
}
