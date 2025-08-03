'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { accordionData } from '@/lib/data';

export default function WhySection() {
  const [selectedBrainArea, setSelectedBrainArea] = useState<string | null>(null);

  const brainAreas = {
    limbic: {
      title: "Limbic System",
      description: "The brain's emotional center, including the amygdala and reward pathways. This ancient system prioritizes immediate gratification and survival instincts. It's fast, automatic, and powerful—designed to keep us alive, not necessarily happy or productive."
    },
    prefrontal: {
      title: "Prefrontal Cortex",
      description: "The brain's executive center responsible for planning, decision-making, and impulse control. This newer evolutionary addition allows us to think about the future and make rational decisions. However, it's slower to activate and easily overwhelmed by stress, fatigue, or strong emotions."
    }
  };

  return (
    <section id="why" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Why: Understanding Your Brain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Akrasia isn't a character flaw—it's the result of competing brain systems 
            with different priorities and timelines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive Brain Diagram */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 text-center">
              The Battle in Your Brain
            </h3>
            
            <div className="relative bg-white rounded-lg p-8 shadow-sm">
              {/* Brain SVG */}
              <div className="relative mx-auto w-80 h-64">
                <svg viewBox="0 0 320 256" className="w-full h-full">
                  {/* Brain outline */}
                  <path
                    d="M50 120 Q50 50 120 50 Q200 40 270 80 Q290 100 280 140 Q270 180 220 200 Q150 220 80 200 Q40 180 50 120 Z"
                    fill="#f3f4f6"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />
                  
                  {/* Limbic System */}
                  <circle
                    cx="160"
                    cy="140"
                    r="30"
                    fill={selectedBrainArea === 'limbic' ? '#ef4444' : '#fca5a5'}
                    stroke="#dc2626"
                    strokeWidth="2"
                    className="cursor-pointer transition-colors hover:fill-red-400"
                    onClick={() => setSelectedBrainArea(selectedBrainArea === 'limbic' ? null : 'limbic')}
                  />
                  <text
                    x="160"
                    y="145"
                    textAnchor="middle"
                    className="text-xs font-medium fill-white pointer-events-none"
                  >
                    Limbic
                  </text>
                  
                  {/* Prefrontal Cortex */}
                  <ellipse
                    cx="120"
                    cy="80"
                    rx="40"
                    ry="25"
                    fill={selectedBrainArea === 'prefrontal' ? '#3b82f6' : '#93c5fd'}
                    stroke="#2563eb"
                    strokeWidth="2"
                    className="cursor-pointer transition-colors hover:fill-blue-400"
                    onClick={() => setSelectedBrainArea(selectedBrainArea === 'prefrontal' ? null : 'prefrontal')}
                  />
                  <text
                    x="120"
                    y="85"
                    textAnchor="middle"
                    className="text-xs font-medium fill-white pointer-events-none"
                  >
                    Prefrontal
                  </text>
                </svg>
              </div>
              
              <p className="text-sm text-gray-600 text-center mt-4">
                Click on brain areas to learn more
              </p>
            </div>

            {/* Brain Area Information */}
            {selectedBrainArea && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {brainAreas[selectedBrainArea as keyof typeof brainAreas].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    {brainAreas[selectedBrainArea as keyof typeof brainAreas].description}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Psychological Barriers */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Common Psychological Barriers
            </h3>
            
            <Accordion type="single" collapsible className="space-y-4">
              {accordionData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-2">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">💡</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Key Insight: It's Not About Willpower
              </h4>
              <p className="text-blue-800">
                The solution isn't to strengthen your willpower—it's to design your 
                environment and habits so that your limbic system and prefrontal cortex 
                work together instead of against each other.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}