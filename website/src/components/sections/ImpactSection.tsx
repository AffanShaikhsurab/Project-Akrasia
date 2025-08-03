'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { chartConfigs } from '@/lib/data';

// Chart.js imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function ImpactSection() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    },
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        }
      }
    }
  };

  const resolutionsData = {
    labels: chartConfigs.resolutions.labels,
    datasets: [
      {
        data: chartConfigs.resolutions.data,
        backgroundColor: chartConfigs.resolutions.backgroundColor,
        borderColor: chartConfigs.resolutions.borderColor,
        borderWidth: 2,
      },
    ],
  };

  const medicationData = {
    labels: chartConfigs.medication.labels,
    datasets: [
      {
        data: chartConfigs.medication.data,
        backgroundColor: chartConfigs.medication.backgroundColor,
        borderColor: chartConfigs.medication.borderColor,
        borderWidth: 2,
      },
    ],
  };

  const procrastinationData = {
    labels: chartConfigs.procrastination.labels,
    datasets: [
      {
        data: chartConfigs.procrastination.data,
        backgroundColor: chartConfigs.procrastination.backgroundColor,
        borderWidth: 2,
      },
    ],
  };

  return (
    <section id="impact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Impact: By the Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Akrasia affects millions of people across various aspects of life. 
            Here's what the research reveals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* New Year's Resolutions Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-center">
                New Year's Resolutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="chart-container h-64">
                <Doughnut data={resolutionsData} options={chartOptions} />
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                92% of people fail to achieve their New Year's resolutions, 
                despite having clear intentions and motivation at the start.
              </p>
            </CardContent>
          </Card>

          {/* Medication Adherence Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-center">
                Medication Adherence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="chart-container h-64">
                <Doughnut data={medicationData} options={chartOptions} />
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                Approximately 50% of people don't take their medications as 
                prescribed, even when they understand the health consequences.
              </p>
            </CardContent>
          </Card>

          {/* Procrastination Prevalence Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-center">
                Procrastination Prevalence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="chart-container h-64">
                <Bar data={procrastinationData} options={barChartOptions} />
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                90% of college students and 20% of adults struggle with chronic 
                procrastination that significantly impacts their lives.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Summary */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">
            The Hidden Cost of Akrasia
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                Personal Costs
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Decreased physical and mental health</li>
                <li>• Reduced academic and career performance</li>
                <li>• Increased stress and anxiety</li>
                <li>• Lower self-esteem and confidence</li>
                <li>• Strained relationships</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                Societal Costs
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Billions in healthcare costs from non-adherence</li>
                <li>• Reduced workplace productivity</li>
                <li>• Environmental impact from unfulfilled commitments</li>
                <li>• Economic losses from delayed or abandoned projects</li>
                <li>• Increased burden on support systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}