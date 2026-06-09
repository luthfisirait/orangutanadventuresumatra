import { getGoogleReviewsData } from "./google-reviews";
import { HomeContent } from "./home-content";

export const revalidate = 86400;

export default async function Home() {
  const googleReviews = await getGoogleReviewsData();

  return <HomeContent initialGoogleReviews={googleReviews} />;
}
