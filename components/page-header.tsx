interface PageHeaderProps {
  title: string;
  titleEn?: string;
  description: string;
}

export function PageHeader({ title, titleEn, description }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 bg-foreground text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
          {title}
        </h1>
        {titleEn && (
          <p className="text-lg text-primary font-medium mb-4">{titleEn}</p>
        )}
        <p className="text-lg text-white/80 max-w-2xl mx-auto text-pretty">
          {description}
        </p>
      </div>
    </section>
  );
}
