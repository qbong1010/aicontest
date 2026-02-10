import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Papa from 'papaparse';
import { Loader2 } from 'lucide-react';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1R5aQI1XvRDxKfCXySXeYTMlk6T7x2BrgK6sI5l5bb-U/gviz/tq?tqx=out:csv&sheet=설문응답';

interface ChartData {
  name: string;
  value: number;
}

// Color palette matching the screenshot/theme
const COLORS = ['#3B82F6', '#EF4444', '#F59E0B', '#10B981', '#8B5CF6', '#EC4899'];

const SurveyChart = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      Papa.parse(SHEET_URL, {
        download: true,
        header: true,
        complete: (results) => {
          const rows = results.data as any[];
          
          // Count occurrences of "지원 부문 선택(1안)"

          // Initialize counts for specific categories
          const initialCounts: { [key: string]: number } = {
            '기술/개발': 0,
            '기획/행정': 0,
            '디자인': 0,
            '사업관리': 0,
            '기타': 0
          };

          let totalCount = 0;

          rows.forEach(row => {
            const field = row['지원 부문 선택(1안)'];
            if (!field) return;
            
            totalCount++;

            // Simple keyword matching or exact matching
            if (field.includes('개발') || field.includes('기술') || field.includes('Data') || field.includes('Engineer')) {
              initialCounts['기술/개발']++;
            } else if (field.includes('기획') || field.includes('행정') || field.includes('Business')) {
              initialCounts['기획/행정']++;
            } else if (field.includes('디자인') || field.includes('Design') || field.includes('Art')) {
              initialCounts['디자인']++;
            } else if (field.includes('관리') || field.includes('PM') || field.includes('Manager')) {
              initialCounts['사업관리']++;
            } else {
              initialCounts['기타']++;
            }
          });

          // Convert to array for Recharts
          const chartData = [
            { name: '기술/개발', value: initialCounts['기술/개발'] },
            { name: '기획/행정', value: initialCounts['기획/행정'] },
            { name: '디자인', value: initialCounts['디자인'] },
            { name: '사업관리', value: initialCounts['사업관리'] },
            { name: '기타', value: initialCounts['기타'] }
          ].filter(item => item.value > 0); // Hide zero value categories if preferred, or keep them. Let's keep non-zero.

          // Sort by value desc (optional)
          chartData.sort((a, b) => b.value - a.value);

          setData(chartData);
          setTotal(totalCount);
          setLoading(false);
        },
        error: (err) => {
          console.error('Error fetching CSV:', err);
          setLoading(false);
        }
      });
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white/5 rounded-3xl p-6 md:p-8 border border-white/10 backdrop-blur-md">
      <div className="mb-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-300 to-white bg-clip-text text-transparent inline-block">
          실시간 지원 현황
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          현재 총 <span className="text-indigo-400 font-bold">{total}</span>명이 참여하고 있습니다.
        </p>
      </div>

      <div className="w-full h-[400px]" style={{ width: '100%', height: 400, position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                if (!percent || percent < 0.05) return null;
                if (typeof midAngle !== 'number' || typeof cx !== 'number' || typeof cy !== 'number' || typeof innerRadius !== 'number' || typeof outerRadius !== 'number') return null;

                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text 
                    x={x} 
                    y={y} 
                    fill="white" 
                    textAnchor={x > cx ? 'start' : 'end'} 
                    dominantBaseline="central"
                    className="text-xs font-bold drop-shadow-md"
                  >
                    {`${(percent * 100).toFixed(1)}%`}
                  </text>
                );
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(255,255,255,0.1)" />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                borderRadius: '8px',
                color: '#000',
                backdropFilter: 'blur(4px)'
              }} 
              itemStyle={{ color: '#000' }}
            />
            <Legend 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              formatter={(value, entry: any) => {
                 // Custom formatter to show simplified names and maybe counts/percentages if desired
                 return <span className="text-slate-300 text-sm ml-2">{value}</span>;
              }}
              wrapperStyle={{
                paddingLeft: '20px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SurveyChart;
