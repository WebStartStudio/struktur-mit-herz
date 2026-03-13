import Link from 'next/link';
import { Article } from '@/lib/types/article';
import { Card } from '@/components/ui/Card';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-2">
        <Link href={`/blog/${article.slug}`} className="text-sage hover:underline">
          {article.title}
        </Link>
      </h3>
      <p className="text-foreground/70 mb-4">{article.excerpt}</p>
      <div className="text-sm text-foreground/60">
        Von {article.author} am {new Date(article.date).toLocaleDateString('de-DE')}
      </div>
    </Card>
  );
}