const stats = [
  { value: "15+", label: "বছরের অভিজ্ঞতা", sublabel: "Years of Experience" },
  { value: "1000+", label: "সফল শিক্ষার্থী", sublabel: "Successful Students" },
  { value: "98%", label: "ভিসা সাক্সেস রেট", sublabel: "Visa Success Rate" },
  { value: "50+", label: "পার্টনার ইনস্টিটিউট", sublabel: "Partner Institutes" },
];

export function Stats() {
  return (
    <section className="py-20 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-medium text-white mb-1">{stat.label}</p>
              <p className="text-sm text-white/60">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
