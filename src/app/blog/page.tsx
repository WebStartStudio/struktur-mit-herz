import { mockArticles } from '@/lib/api/mockArticles';
import { ArticleCard } from '@/components/cards/ArticleCard';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
          Blog
        </h1>
        <p className="text-center mb-12 text-foreground/70">
          Inspiration und Tipps für ein strukturiertes Leben.
        </p>
        <div className="space-y-8">
          {mockArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}