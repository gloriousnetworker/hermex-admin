import React from 'react';
import { Calendar, MessageCircle, Clock } from 'lucide-react';

const CompanyOverview = () => {
  const companyStats = [
    { label: 'Active', value: '12' },
    { label: 'Domains', value: '02' },
    { label: 'Total Active Users', value: '20' },
    { label: 'Active Tickets', value: '24' }
  ];

  const upcomingEvents = [
    { title: 'Client Meeting - TechCorp', time: '2:30 PM', description: 'Quarterly review and support discussion' },
    { title: 'Team Standup', time: '3:30 PM', description: 'Daily standup and task updates' },
    { title: 'Training Session', time: 'Tomorrow 10:00 AM', description: 'New CRM system training' }
  ];

  const followUps = [
    { email: 'john.doe@techcorp.com', type: 'Billing inquiry', priority: 'High', urgency: '2h ago' },
    { email: 'Live Chat #4521', type: 'Technical support - escalation needed', priority: 'High', urgency: '4h ago' },
    { email: 'management@startup.co', type: 'Feature request follow-up', priority: 'Medium', urgency: '1d ago' }
  ];

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Company Overview</h2>
        
        <div className="space-y-4">
          {companyStats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{stat.label}</span>
              <span className="text-sm font-medium text-gray-900">{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <div className="text-sm text-gray-600">Top Domains</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-900">sales.company.com</span>
              <span className="text-green-600 font-medium">Active</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-900">support.company.com</span>
              <span className="text-green-600 font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
          <button className="text-sm text-[#623DC1] hover:underline">View All</button>
        </div>
        
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Calendar className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{event.title}</div>
                <div className="text-xs text-gray-500">{event.time}</div>
                <div className="text-xs text-gray-600 mt-1">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Follow-ups Needed</h2>
          <div className="flex space-x-2">
            <button className="text-sm bg-[#623DC1] text-white px-3 py-1 rounded hover:bg-[#5230a9] transition-colors">
              Email
            </button>
            <button className="text-sm text-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors">
              Chats
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {followUps.map((followUp, index) => (
            <div key={index} className="border-l-4 border-orange-400 pl-4">
              <div className="text-sm font-medium text-gray-900">{followUp.email}</div>
              <div className="text-xs text-gray-600">{followUp.type}</div>
              <div className="flex items-center justify-between mt-1">
                <span className={`text-xs px-2 py-1 rounded ${
                  followUp.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {followUp.priority}
                </span>
                <span className="text-xs text-gray-500">{followUp.urgency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompanyOverview;