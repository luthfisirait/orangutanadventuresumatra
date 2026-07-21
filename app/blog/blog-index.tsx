import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { StaticFooter, StaticHeader } from "../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../seo";
import type { Locale } from "../site-content";
import { blogPosts } from "../travel-content";
import {
  blogIndexLanguageAlternates,
  blogIndexPath,
  blogPostLocale,
  blogPostPath
} from "./blog-routing";

const blogIndexCopy = {
  en: {
    title: "Bukit Lawang Travel Blog | Orangutan Trekking",
    description:
      "Bukit Lawang travel guides for orangutan trekking, transport, packing, safety, costs, best time to visit, and ethical jungle tours.",
    kicker: "Travel blog",
    heading: "Bukit Lawang travel guides for European travelers",
    read: "Read article"
  },
  de: {
    title: "Bukit Lawang Reiseführer | Orang-Utan-Trekking",
    description:
      "Reiseführer für Bukit Lawang mit Orang-Utan-Trekking, Transport, Sicherheit, Kosten und ethischen Dschungeltouren.",
    kicker: "Reiseblog",
    heading: "Bukit Lawang Reiseführer für deutschsprachige Reisende",
    read: "Artikel lesen"
  },
  fr: {
    title: "Guide de voyage Bukit Lawang | Trek orang-outan",
    description:
      "Guides pratiques sur Bukit Lawang : trek orang-outan, transport, sécurité, prix et tourisme responsable dans la jungle.",
    kicker: "Guide de voyage",
    heading: "Guides de Bukit Lawang pour les voyageurs francophones",
    read: "Lire l'article"
  },
  nl: {
    title: "Bukit Lawang Reisgids | Orang-oetan trekking",
    description:
      "Praktische Bukit Lawang reisgidsen over orang-oetan trekking, vervoer, veiligheid, prijzen en verantwoord jungletoerisme.",
    kicker: "Reisgids",
    heading: "Bukit Lawang reisgidsen voor Nederlandstalige reizigers",
    read: "Lees artikel"
  }
} satisfies Record<Locale, Record<string, string>>;

export function metadataForBlogIndex(locale: Locale): Metadata {
  const copy = blogIndexCopy[locale];
  const path = blogIndexPath(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: blogIndexLanguageAlternates
    },
    keywords: [
      "Bukit Lawang blog",
      "orangutan trekking Sumatra blog",
      "Sumatra travel guide",
      "ethical orangutan trekking"
    ],
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: path,
      siteName,
      type: "website",
      images: [
        {
          url: "/images/link-preview.jpg",
          width: 1200,
          height: 630,
          alt: `${siteName} ${copy.kicker}`
        }
      ]
    }
  };
}

export function BlogIndexView({ locale }: { locale: Locale }) {
  const copy = blogIndexCopy[locale];
  const posts = blogPosts.filter((post) => blogPostLocale(post) === locale);
  const path = blogIndexPath(locale);
  const localizedHome = locale === "en" ? "/" : `/${locale}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${absoluteUrl(path)}#blog`,
        name: copy.title,
        description: copy.description,
        url: absoluteUrl(path),
        inLanguage: locale,
        publisher: {
          "@type": "TravelAgency",
          name: siteName,
          url: siteUrl
        },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          inLanguage: locale,
          url: absoluteUrl(blogPostPath(post)),
          datePublished: post.date,
          dateModified: post.dateModified ?? post.date,
          image: absoluteUrl(post.image)
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(path)}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteName,
            item: absoluteUrl(localizedHome)
          },
          {
            "@type": "ListItem",
            position: 2,
            name: copy.kicker,
            item: absoluteUrl(path)
          }
        ]
      }
    ]
  };

  return (
    <main className="resource-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <StaticHeader locale={locale} />
      <section className="resource-hero blog-hero">
        <Image
          src="/images/blog-index-hero.webp"
          alt="Travel planning at a Bukit Lawang rainforest lookout"
          fill
          priority
          sizes="100vw"
        />
        <div className="resource-hero-shade" />
        <div className="resource-hero-content">
          <span className="section-kicker">{copy.kicker}</span>
          <h1>{copy.heading}</h1>
          <p>{copy.description}</p>
        </div>
      </section>

      <section className="resource-content">
        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <Link className="blog-card-image" href={blogPostPath(post)} aria-label={post.title}>
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </Link>
              <div className="blog-card-body">
                <div className="blog-meta">
                  <span>{new Date(post.date).getFullYear()}</span>
                  <span>
                    <Clock3 size={14} />
                    {post.readingTime}
                  </span>
                </div>
                <h2>
                  <Link href={blogPostPath(post)}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
                <Link className="card-link" href={blogPostPath(post)}>
                  {copy.read}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <StaticFooter locale={locale} />
    </main>
  );
}
