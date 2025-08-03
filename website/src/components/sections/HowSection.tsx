'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Loader2, Calendar, ExternalLink } from 'lucide-react';
import { strategyData } from '@/lib/data';
import { marked } from 'marked';

export default function HowSection() {
  const [expandedStrategy, setExpandedStrategy] = useState<number | null>(null);
  const [userTask, setUserTask] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleStrategy = (index: number) => {
    setExpandedStrategy(expandedStrategy === index ? null : index);
  };

  const callGeminiApi = async () => {
    if (!userTask.trim()) {
      setError('Please enter a task or goal.');
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedPlan('');

    try {
      // Note: In a real application, this should be handled by a backend API
      // to keep the API key secure. For demo purposes, we'll show the structure.
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('Gemini API key not configured. Please add NEXT_PUBLIC_GEMINI_API_KEY to your environment variables.');
      }

      const prompt = `You are an expert behavioral scientist specializing in overcoming akrasia (the gap between intention and action). A user wants help with: "${userTask}"

Create a personalized, science-based action plan using these evidence-backed strategies:

1. **Implementation Intentions**: Create specific "if-then" plans
2. **Habit & Environmental Design**: Modify surroundings to reduce friction
3. **Temptation Bundling**: Pair enjoyable activities with necessary tasks
4. **Productive Boredom**: Remove distractions to make the task more appealing
5. **5-Minute Rule**: Start with tiny, manageable steps
6. **Cognitive Restructuring**: Reframe negative thoughts

Format your response as a numbered action plan with:
- Clear, specific steps
- Which strategy each step uses
- Why it works psychologically

Keep it practical and immediately actionable.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const planText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!planText) {
        throw new Error('No response generated from API');
      }

      const htmlPlan = await marked.parse(planText);
      setGeneratedPlan(processPlanOutput(htmlPlan));
    } catch (err) {
      console.error('Error calling Gemini API:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate plan. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const processPlanOutput = (htmlContent: string) => {
    // Add calendar integration buttons to each numbered step
    return htmlContent.replace(
      /(\d+\.)\s*([^\n]+)/g,
      (match, number, stepText) => {
        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(stepText.trim())}&details=${encodeURIComponent(`Action step from your Akrasia Effect plan: ${stepText.trim()}`)}`;
        return `${match} <a href="${calendarUrl}" target="_blank" class="inline-flex items-center ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"><svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>Add to Calendar</a>`;
      }
    );
  };

  return (
    <section id="how" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The How: Evidence-Based Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These scientifically-proven techniques can help you bridge the gap 
            between intention and action.
          </p>
        </div>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {strategyData.map((strategy, index) => (
            <Card key={index} className="cursor-pointer transition-all hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{strategy.icon}</span>
                  <CardTitle className="text-lg">{strategy.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  {strategy.summary}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleStrategy(index)}
                  className="w-full"
                >
                  {expandedStrategy === index ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Learn More
                    </>
                  )}
                </Button>
                {expandedStrategy === index && (
                  <div 
                    className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-700"
                    dangerouslySetInnerHTML={{ __html: strategy.details }}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Action Plan Generator */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              🤖 AI-Powered Action Plan Generator
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a personalized, science-based action plan for any goal or task. 
              Our AI combines behavioral science research with your specific situation.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <div>
                <label htmlFor="task-input" className="block text-sm font-medium text-gray-700 mb-2">
                  What would you like to accomplish?
                </label>
                <Input
                  id="task-input"
                  type="text"
                  placeholder="e.g., Exercise regularly, finish my thesis, eat healthier..."
                  value={userTask}
                  onChange={(e) => setUserTask(e.target.value)}
                  className="w-full"
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && callGeminiApi()}
                />
              </div>
              
              <Button 
                onClick={callGeminiApi} 
                disabled={isLoading || !userTask.trim()}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating Your Plan...
                  </>
                ) : (
                  'Generate Action Plan'
                )}
              </Button>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {generatedPlan && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Your Personalized Action Plan
                  </h4>
                  <Badge variant="secondary">AI Generated</Badge>
                </div>
                <div 
                  className="gemini-output prose prose-sm max-w-none bg-gray-50 rounded-lg p-6"
                  dangerouslySetInnerHTML={{ __html: generatedPlan }}
                />
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>💡 Pro Tip:</strong> Use the "Add to Calendar" buttons to schedule 
                    each step. Research shows that scheduling specific times for tasks 
                    increases follow-through by up to 300%.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}