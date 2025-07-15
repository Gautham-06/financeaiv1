import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { title: 'Documents Processed', value: '150+', icon: '📄', color: 'bg-blue-50 text-blue-600' },
    { title: 'Bank Statements', value: '45', icon: '🏦', color: 'bg-green-50 text-green-600' },
    { title: 'Form 16s', value: '28', icon: '📋', color: 'bg-purple-50 text-purple-600' },
    { title: 'Payslips', value: '77', icon: '💰', color: 'bg-orange-50 text-orange-600' }
  ];

  const recentActivity = [
    { type: 'Bank Statement', name: 'HDFC Bank Statement', date: '2 hours ago', status: 'Processed' },
    { type: 'Form 16', name: 'FY 2023-24 Form 16', date: '5 hours ago', status: 'Processing' },
    { type: 'Payslip', name: 'March 2024 Payslip', date: '1 day ago', status: 'Processed' },
    { type: 'Invoice', name: 'Invoice #2024-001', date: '2 days ago', status: 'Processed' }
  ];

  return (
    <div className="py-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.username || 'User'}! 👋</h1>
        <p className="text-gray-600">Here's what's happening with your documents</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`card ${stat.color} ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold mb-1">{stat.value}</p>
                <h3 className="text-sm">{stat.title}</h3>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Upload Section */}
        <div className={`card ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <h2 className="text-xl font-semibold mb-4">Quick Upload</h2>
          <div className="space-y-4">
            <button className="btn btn-primary w-100">
              <span>📄</span> Upload New Document
            </button>
            <p className="text-sm text-gray-600">
              Supported formats: PDF, JPG, PNG (Max size: 10MB)
            </p>
          </div>
        </div>

        {/* AI Assistant Section */}
        <div className={`card ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <h2 className="text-xl font-semibold mb-4">AI Assistant</h2>
          <div className="space-y-4">
            <button className="btn btn-secondary w-100">
              <span>🤖</span> Ask AI Assistant
            </button>
            <p className="text-sm text-gray-600">
              Get instant answers about your financial documents
            </p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={`card ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <button className="text-blue-600 text-sm hover:text-primary">View All</button>
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{
                  activity.type === 'Bank Statement' ? '🏦' :
                  activity.type === 'Form 16' ? '📋' :
                  activity.type === 'Payslip' ? '💰' : '📄'
                }</div>
                <div>
                  <p className="font-medium">{activity.name}</p>
                  <p className="text-sm text-gray-600">{activity.date}</p>
                </div>
              </div>
              <span className={`status ${activity.status === 'Processed' ? 'success' : 'warning'}`}>
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 