import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const DepartmentSection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-12">Empower Every Department</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Marketing Teams</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>Visual campaign planning</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>ROI tracking and optimization</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>Integrated market analysis</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Sales Operations</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>Territory planning</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>Pipeline visualization</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>Performance tracking</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Product Management</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>Roadmap visualization</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>Feature prioritization</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>Sprint planning</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Legal & Compliance</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>Risk assessment mapping</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>Compliance tracking</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-purple-600">→</span>
                <span>Policy management</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};