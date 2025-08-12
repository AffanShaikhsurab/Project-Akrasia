'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { disciplineEquationData } from '@/lib/data';

export default function DisciplineEquationSection() {
  return (
    <section id="discipline-equation" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Discipline Equation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A framework to understand and improve discipline by analyzing three key factors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {disciplineEquationData.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
