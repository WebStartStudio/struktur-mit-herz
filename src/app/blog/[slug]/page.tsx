import { notFound } from 'next/navigation';
import { mockArticles } from '@/lib/api/mockArticles';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = mockArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              {article.title}
            </h1>
            <div className="text-foreground/60">
              Von {article.author} am {new Date(article.date).toLocaleDateString('de-DE')}
            </div>
          </header>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-xl mb-6 text-foreground/80">{article.excerpt}</p>
            <div>{article.content}</div>
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return mockArticles.map((article) => ({
    slug: article.slug,
  }));
}