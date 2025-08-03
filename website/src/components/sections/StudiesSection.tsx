import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { studiesData } from '@/lib/data';

export default function StudiesSection() {
  return (
    <section id="studies" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Studies: The Science Behind Akrasia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Decades of research have revealed the psychological mechanisms 
            behind the intention-action gap and effective interventions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {studiesData.map((study, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg text-gray-900 pr-4">
                    {study.title}
                  </CardTitle>
                  <Badge variant="outline" className="flex-shrink-0">
                    Research
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {study.finding}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Source:</span>
                  <span className="ml-2">{study.source}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Insights */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            What the Research Tells Us
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Brain-Based Solutions
              </h4>
              <p className="text-gray-600 text-sm">
                Neuroimaging studies show that successful behavior change 
                involves strengthening prefrontal cortex activity while 
                managing limbic system responses.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Planning Matters
              </h4>
              <p className="text-gray-600 text-sm">
                Implementation intentions (if-then plans) consistently 
                show large effect sizes across hundreds of studies, 
                making them one of the most reliable interventions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Environment Design
              </h4>
              <p className="text-gray-600 text-sm">
                Choice architecture and environmental modifications 
                produce sustainable behavior change without relying 
                on willpower or motivation.
              </p>
            </div>
          </div>
        </div>

        {/* Meta-Analysis Summary */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">
              📊 Meta-Analysis Summary
            </h4>
            <p className="text-blue-800 max-w-4xl mx-auto">
              A comprehensive review of over 300 studies on behavior change interventions 
              found that the most effective approaches combine multiple strategies: 
              environmental design (effect size d = 0.45), implementation intentions 
              (d = 0.65), and social accountability (d = 0.35). When used together, 
              these evidence-based techniques can increase goal achievement rates by 
              200-400% compared to relying on motivation alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}