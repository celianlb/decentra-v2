import Section from "@/components/UI/section";
import { blogArticles } from "@/data/blog";
import { cn } from "@/lib/utils";
import { BlogArticle } from "@/types/blogArticle";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Fonction pour récupérer un article par son slug
function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

// Fonction pour récupérer les articles suggérés
function getSuggestedArticles(currentArticle: BlogArticle): BlogArticle[] {
  return blogArticles
    .filter((article) => article.id !== currentArticle.id)
    .filter(
      (article) =>
        article.category === currentArticle.category ||
        article.tags.some((tag) => currentArticle.tags.includes(tag))
    )
    .slice(0, 3);
}

// Génération des métadonnées pour le SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article non trouvé",
      description: "L'article que vous cherchez n'existe pas.",
    };
  }

  return {
    title: `${article.title} | Blog Decentra`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

// Composant pour les articles suggérés
function SuggestedArticles({ articles }: { articles: BlogArticle[] }) {
  if (articles.length === 0) return null;

  return (
    <Section>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-stara font-bold text-white">
          Articles similaires
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group block"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-ultraviolet-700/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(143,94,238,0.1)]">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-stara font-semibold text-lg group-hover:text-ultraviolet-700 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 font-mansfield text-sm mt-2 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Composant principal de la page
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const suggestedArticles = getSuggestedArticles(article);

  const categoryColors = {
    Blockchain: {
      bg: "from-violet-600/20 to-purple-600/20",
      text: "text-violet-400",
      border: "border-violet-500/30",
    },
    "Développement Web": {
      bg: "from-blue-600/20 to-cyan-600/20",
      text: "text-blue-400",
      border: "border-blue-500/30",
    },
    Web3: {
      bg: "from-green-600/20 to-teal-600/20",
      text: "text-green-400",
      border: "border-green-500/30",
    },
  };

  const colors =
    categoryColors[article.category as keyof typeof categoryColors] ||
    categoryColors.Blockchain;

  return (
    <main>
      {/* Hero Section */}
      <Section className="relative">
        <div className="relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 font-mansfield mb-8">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Accueil
            </Link>
            <span>•</span>
            <Link
              href="#blog"
              className="hover:text-white transition-colors duration-300"
            >
              Blog
            </Link>
            <span>•</span>
            <span className="text-white">{article.title}</span>
          </nav>

          {/* Article Header */}
          <div className="flex flex-col gap-8">
            {/* Category and Reading Info */}
            <div className="flex flex-wrap items-center gap-4">
              <span
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-mansfield font-semibold",
                  "bg-gradient-to-r backdrop-blur-sm",
                  colors.bg,
                  colors.text,
                  "border",
                  colors.border
                )}
              >
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-gray-400 font-mansfield">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {article.readingTime} min de lecture
                </span>
                <span>•</span>
                <span>
                  {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-stara font-bold text-white leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 font-mansfield leading-relaxed max-w-4xl">
              {article.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <p className="text-white font-mansfield font-semibold text-lg">
                  {article.author.name}
                </p>
                <p className="text-gray-400 font-mansfield">
                  {article.author.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Article Image */}
      <Section>
        <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
        </div>
      </Section>

      {/* Article Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg prose-invert max-w-none font-mansfield"
            style={
              {
                "--tw-prose-body": "rgb(209 213 219)",
                "--tw-prose-headings": "rgb(255 255 255)",
                "--tw-prose-lead": "rgb(156 163 175)",
                "--tw-prose-links": "rgb(143 94 238)",
                "--tw-prose-bold": "rgb(255 255 255)",
                "--tw-prose-counters": "rgb(156 163 175)",
                "--tw-prose-bullets": "rgb(75 85 99)",
                "--tw-prose-hr": "rgb(55 65 81)",
                "--tw-prose-quotes": "rgb(209 213 219)",
                "--tw-prose-quote-borders": "rgb(75 85 99)",
                "--tw-prose-captions": "rgb(156 163 175)",
                "--tw-prose-code": "rgb(209 213 219)",
                "--tw-prose-pre-code": "rgb(209 213 219)",
                "--tw-prose-pre-bg": "rgb(17 24 39)",
                "--tw-prose-th-borders": "rgb(55 65 81)",
                "--tw-prose-td-borders": "rgb(75 85 99)",
              } as React.CSSProperties
            }
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </Section>

      {/* Tags */}
      <Section>
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <h3 className="text-white font-stara font-bold text-lg">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-ultraviolet-800/20 text-ultraviolet-700 rounded-full font-mansfield font-semibold hover:bg-ultraviolet-700/30 transition-colors duration-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section>
        <div className="flex justify-center">
          <Link
            href="#blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ultraviolet-900 text-white rounded-full font-mansfield font-semibold hover:bg-ultraviolet-800 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour au blog
          </Link>
        </div>
      </Section>

      {/* Suggested Articles */}
      <SuggestedArticles articles={suggestedArticles} />
    </main>
  );
}
