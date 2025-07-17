import { cn } from "@/lib/utils";
import { BlogArticle } from "@/types/blogArticle";
import BlogArticleCard from "./blog-article-card";
import NavigationArrows from "./navigation-arrows";

interface BlogCarouselProps {
  articles: BlogArticle[];
  currentIndex: number;
  isTransitioning: boolean;
  onPrevious: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

export default function BlogCarousel({
  articles,
  currentIndex,
  isTransitioning,
  onPrevious,
  onNext,
  canGoBack,
  canGoForward,
}: BlogCarouselProps) {
  const getVisibleArticles = () => {
    const visibleArticles = [];

    // Desktop: 3 articles complets
    for (let i = 0; i < 3; i++) {
      const articleIndex = currentIndex + i;
      if (articleIndex < articles.length) {
        visibleArticles.push(articles[articleIndex]);
      }
    }

    return visibleArticles;
  };

  const getVisibleArticlesTablet = () => {
    const visibleArticles = [];

    // Tablet: 2 articles complets
    for (let i = 0; i < 2; i++) {
      const articleIndex = currentIndex + i;
      if (articleIndex < articles.length) {
        visibleArticles.push(articles[articleIndex]);
      }
    }

    return visibleArticles;
  };

  const getVisibleArticlesMobile = () => {
    // Mobile: 1 article complet
    if (currentIndex < articles.length) {
      return [articles[currentIndex]];
    }
    return [];
  };

  return (
    <div className="relative">
      {/* Articles container */}
      <div className="relative overflow-hidden">
        {/* Desktop: 3 articles complets */}
        <div className="hidden lg:grid lg:grid-cols-3 py-6 gap-6">
          {getVisibleArticles().map((article, index) => (
            <div
              key={`${article.id}-${currentIndex}`}
              className={cn(
                "w-full transform transition-all duration-700 ease-out",
                isTransitioning
                  ? "opacity-0 translate-y-2 scale-98"
                  : "opacity-100 translate-y-0 scale-100"
              )}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <BlogArticleCard article={article} />
            </div>
          ))}
        </div>

        {/* Tablet: 2 articles complets */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
          {getVisibleArticlesTablet().map((article, index) => (
            <div
              key={`${article.id}-${currentIndex}`}
              className={cn(
                "w-full transform transition-all duration-700 ease-out",
                isTransitioning
                  ? "opacity-0 translate-y-2 scale-98"
                  : "opacity-100 translate-y-0 scale-100"
              )}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <BlogArticleCard article={article} />
            </div>
          ))}
        </div>

        {/* Mobile: 1 article complet */}
        <div className="grid grid-cols-1 md:hidden gap-6">
          {getVisibleArticlesMobile().map((article) => (
            <div
              key={`${article.id}-${currentIndex}`}
              className={cn(
                "w-full transform transition-all duration-700 ease-out",
                isTransitioning
                  ? "opacity-0 translate-x-3 scale-98"
                  : "opacity-100 translate-x-0 scale-100"
              )}
            >
              <BlogArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-end mt-8">
        <NavigationArrows
          onPrevious={onPrevious}
          onNext={onNext}
          canGoBack={canGoBack}
          canGoForward={canGoForward}
        />
      </div>
    </div>
  );
}
