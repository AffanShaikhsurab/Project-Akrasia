import { Card, CardContent } from '@/components/ui/card';

export default function ParadoxSection() {
  return (
    <section id="paradox" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Paradox
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why do we act against our own best interests, even when we know better?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What is Akrasia?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Akrasia (pronounced "uh-KRAY-see-uh") is an ancient Greek term meaning 
                "acting against one's better judgment." It describes the puzzling human 
                tendency to do what we know is bad for us, or to avoid doing what we 
                know is good for us.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Modern Reality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Despite having more information about health, productivity, and well-being 
                than any generation before us, we still struggle with basic behaviors: 
                taking medication, exercising regularly, eating well, or completing 
                important tasks.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <blockquote className="text-2xl font-medium text-gray-900 mb-4">
            "I see the better way and approve it, but I follow the worse."
          </blockquote>
          <cite className="text-gray-600">
            — Ovid, Roman poet (43 BC – 17/18 AD)
          </cite>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            This 2,000-year-old observation captures a timeless human struggle. 
            The gap between knowing and doing isn't a modern problem—it's a 
            fundamental aspect of human psychology.
          </p>
        </div>
      </div>
    </section>
  );
};