import { cn } from "@/lib/utils";
import { BlogArticle } from "@/types/blogArticle";
import Image from "next/image";
import Link from "next/link";

interface BlogArticleCardProps {
  article: BlogArticle;
}

export default function BlogArticleCard({ article }: BlogArticleCardProps) {
  // Couleurs unifiées pour toutes les catégories
  const categoryColors = {
    bg: "from-ultraviolet-800/20 to-ultraviolet-700/20",
    text: "text-ultraviolet-700",
    border: "border-ultraviolet-600/30",
  };

  return (
    <Link href={`/blog/${article.slug}`} className="block group h-full">
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-500 cursor-pointer h-full rounded-3xl",
          "bg-gray-900",
          "border border-gray-700/50 hover:border-ultraviolet-700/50",
          "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        )}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-ultraviolet-900/0 via-ultraviolet-900/5 to-ultraviolet-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Image container with frame */}
        <div className="relative p-4">
          <div className="relative h-48 rounded-2xl overflow-hidden border-2 border-gray-600/50 shadow-lg shadow-black/20">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-mansfield font-semibold",
                  "bg-gradient-to-r backdrop-blur-sm",
                  categoryColors.bg,
                  categoryColors.text,
                  "border",
                  categoryColors.border
                )}
              >
                {article.category}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 space-y-4">
          {/* Reading time and date */}
          <div className="flex items-center gap-4 text-sm text-gray-400 font-mansfield">
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
              {article.readingTime} min
            </span>
            <span>•</span>
            <span>
              {new Date(article.publishedAt).toLocaleDateString("fr-FR")}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-stara font-bold text-white group-hover:text-ultraviolet-700 transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-300 font-mansfield text-sm line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author info */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-700/50">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <p className="text-white font-mansfield font-semibold text-sm">
                {article.author.name}
              </p>
              <p className="text-gray-400 font-mansfield text-xs">
                {article.author.role}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-ultraviolet-800/20 text-ultraviolet-700 rounded-full text-xs font-mansfield"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
