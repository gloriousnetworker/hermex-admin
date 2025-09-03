import React, { useState, useRef, useEffect } from 'react';
import { Bell, User, ChevronDown, X, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showEmployeeVerification, setShowEmployeeVerification] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [verificationData, setVerificationData] = useState({
    username: '',
    idNumber: '',
    department: ''
  });
  
  const dropdownRef = useRef(null);
  const verificationRef = useRef(null);
  const settingsButtonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (verificationRef.current && showEmployeeVerification && 
          !verificationRef.current.contains(event.target) &&
          !settingsButtonRef.current.contains(event.target)) {
        setShowEmployeeVerification(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showEmployeeVerification]);

  const handleDropdownClick = (dropdown, event) => {
    event.stopPropagation();
    if (dropdown === 'settings') {
      setShowEmployeeVerification(true);
      setActiveDropdown('settings');
      return;
    }
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleNavigation = (route) => {
    router.push(`/${route}`);
    setActiveDropdown(null);
    setIsMenuOpen(false);
    setShowEmployeeVerification(false);
  };

  const handleNotificationClick = () => {
    router.push('/dashboard/admin-dashboard/notifications');
  };

  const handleProfileClick = () => {
    router.push('/dashboard/admin-dashboard/profile');
  };

  const handleVerificationSubmit = () => {
    setShowEmployeeVerification(false);
    setVerificationData({ username: '', idNumber: '', department: '' });
  };

  const closeVerificationModal = () => {
    setShowEmployeeVerification(false);
  };

  const isFormValid = verificationData.username && verificationData.idNumber && verificationData.department;

  const spendingMenuItems = [
    { label: 'Spending Details', route: 'dashboard/admin-dashboard/spending-details' },
    { label: 'POS', route: 'dashboard/admin-dashboard/pos' },
    { label: 'Collaborations', route: 'dashboard/admin-dashboard/collaborations' },
    { label: 'Customer Profile', route: 'dashboard/admin-dashboard/customer-profile' }
  ];

  const communicationMenuItems = [
    { label: 'Event Calendar', route: 'dashboard/admin-dashboard/event-calendar' },
    { label: 'Team Support Manager', route: 'dashboard/admin-dashboard/team-support-manager' },
    { label: 'Emails and Chats', route: 'dashboard/admin-dashboard/email-and-chats' },
    { label: 'Blog', route: 'dashboard/admin-dashboard/blog' },
    { label: 'Comments', route: 'dashboard/admin-dashboard/comments' },
    { label: 'Social media', route: 'dashboard/admin-dashboard/social-media' },
    { label: 'Newsletter', route: 'dashboard/admin-dashboard/newsletter' }
  ];

  const settingsMenuItems = [
    { label: 'Event Calendar', route: 'dashboard/admin-dashboard/event-calendar' },
    { label: 'Team Support Manager', route: 'dashboard/admin-dashboard/team-support-manager' },
    { label: 'Employee Management', route: 'dashboard/admin-dashboard/employee-management' },
    { label: 'Document Library', route: 'dashboard/admin-dashboard/document-library' },
    { label: 'Emp. Directory', route: 'dashboard/admin-dashboard/employee-directory' }
  ];

  return (
    <div className="relative">
      <nav className="bg-transparent px-4 md:px-6 py-3 mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button className="bg-[#623DC1] text-white px-4 py-2 rounded-md text-sm font-medium border border-[#E5E7EB] hover:bg-[#5230a9] transition-colors font-space-grotesk">
              Voyager
            </button>
           
            <div className="hidden lg:flex items-center space-x-8">
              <span 
                className="text-[#2C0637] font-medium cursor-pointer hover:text-[#623DC1] transition-colors font-space-grotesk"
                onClick={() => handleNavigation('dashboard/admin-dashboard')}
              >
                Dashboard
              </span>
              
              <div className="relative">
                <div 
                  className="flex items-center space-x-1 text-[#858BE3] cursor-pointer hover:text-[#623DC1] transition-colors font-space-grotesk"
                  onClick={(e) => handleDropdownClick('spending', e)}
                >
                  <span>Spending and Sales</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                {activeDropdown === 'spending' && (
                  <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {spendingMenuItems.map((item, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-[#858BE3] hover:bg-gray-50 hover:text-[#623DC1] cursor-pointer transition-colors text-sm font-space-grotesk"
                        onClick={() => handleNavigation(item.route)}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <div 
                  className="flex items-center space-x-1 text-[#858BE3] cursor-pointer hover:text-[#623DC1] transition-colors font-space-grotesk"
                  onClick={(e) => handleDropdownClick('communication', e)}
                >
                  <span>Communication</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                {activeDropdown === 'communication' && (
                  <div className="absolute top-full mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {communicationMenuItems.map((item, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-[#858BE3] hover:bg-gray-50 hover:text-[#623DC1] cursor-pointer transition-colors text-sm font-space-grotesk"
                        onClick={() => handleNavigation(item.route)}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <span 
                className="text-[#858BE3] cursor-pointer hover:text-[#623DC1] transition-colors font-space-grotesk"
                onClick={() => handleNavigation('dashboard/admin-dashboard/analytics')}
              >
                Analytics
              </span>

              <div className="relative">
                <div 
                  ref={settingsButtonRef}
                  className="flex items-center space-x-1 text-[#858BE3] cursor-pointer hover:text-[#623DC1] transition-colors font-space-grotesk"
                  onClick={(e) => handleDropdownClick('settings', e)}
                >
                  <span>Settings</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                {activeDropdown === 'settings' && (
                  <div className="absolute top-full mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {settingsMenuItems.map((item, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-[#858BE3] hover:bg-gray-50 hover:text-[#623DC1] cursor-pointer transition-colors text-sm font-space-grotesk"
                        onClick={() => handleNavigation(item.route)}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button 
              className="lg:hidden text-[#858BE3] hover:text-[#623DC1] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell 
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#623DC1] transition-colors" 
                onClick={handleNotificationClick}
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
           
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={handleProfileClick}
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-medium text-gray-900 font-space-grotesk">Shannon Smith</div>
                <div className="text-xs text-gray-500 font-space-grotesk">Support Manager</div>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
            <div 
              className="px-4 py-2 text-[#2C0637] font-medium cursor-pointer hover:bg-gray-50 transition-colors font-space-grotesk"
              onClick={() => handleNavigation('dashboard/admin-dashboard')}
            >
              Dashboard
            </div>
            
            <div className="px-4 py-2">
              <div 
                className="flex items-center justify-between text-[#858BE3] cursor-pointer hover:text-[#623DC1] transition-colors font-space-grotesk"
                onClick={(e) => handleDropdownClick('mobile-spending', e)}
              >
                <span>Spending and Sales</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {activeDropdown === 'mobile-spending' && (
                <div className="mt-2 ml-4 space-y-2">
                  {spendingMenuItems.map((item, index) => (
                    <div
                      key={index}
                      className="text-[#858BE3] hover:text-[#623DC1] cursor-pointer transition-colors text-sm font-space-grotesk"
                      onClick={() => handleNavigation(item.route)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <div 
                className="flex items-center justify-between text-[#858BE3] cursor-pointer hover:text-[#623DC1] transition-colors font-space-grotesk"
                onClick={(e) => handleDropdownClick('mobile-communication', e)}
              >
                <span>Communication</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {activeDropdown === 'mobile-communication' && (
                <div className="mt-2 ml-4 space-y-2">
                  {communicationMenuItems.map((item, index) => (
                    <div
                      key={index}
                      className="text-[#858BE3] hover:text-[#623DC1] cursor-pointer transition-colors text-sm font-space-grotesk"
                      onClick={() => handleNavigation(item.route)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div 
              className="px-4 py-2 text-[#858BE3] cursor-pointer hover:text-[#623DC1] transition-colors font-space-grotesk"
              onClick={() => handleNavigation('dashboard/admin-dashboard/analytics')}
            >
              Analytics
            </div>

            <div className="px-4 py-2">
              <div 
                className="flex items-center justify-between text-[#858BE3] cursor-pointer hover:text-[#623DC1] transition-colors font-space-grotesk"
                onClick={(e) => handleDropdownClick('mobile-settings', e)}
              >
                <span>Settings</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {activeDropdown === 'mobile-settings' && (
                <div className="mt-2 ml-4 space-y-2">
                  {settingsMenuItems.map((item, index) => (
                    <div
                      key={index}
                      className="text-[#858BE3] hover:text-[#623DC1] cursor-pointer transition-colors text-sm font-space-grotesk"
                      onClick={() => handleNavigation(item.route)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {showEmployeeVerification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 lg:items-start lg:justify-end lg:pt-16 lg:pr-4">
          <div 
            ref={verificationRef}
            className="bg-white rounded-lg p-4 w-full max-w-sm mx-4 relative font-space-grotesk lg:mx-0 lg:shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-[#000000]">Verification to Make Changes</h3>
              <button 
                onClick={closeVerificationModal}
                className="text-black hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Username"
                  value={verificationData.username}
                  onChange={(e) => setVerificationData(prev => ({ ...prev, username: e.target.value }))}
                  className="flex-1 rounded-md border border-[#E5E7EB] px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-[#623DC1] font-space-grotesk"
                />
                <input
                  type="text"
                  placeholder="ID Number"
                  value={verificationData.idNumber}
                  onChange={(e) => setVerificationData(prev => ({ ...prev, idNumber: e.target.value }))}
                  className="flex-1 rounded-md border border-[#E5E7EB] px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-[#623DC1] font-space-grotesk"
                />
              </div>
              
              <input
                type="text"
                placeholder="Department"
                value={verificationData.department}
                onChange={(e) => setVerificationData(prev => ({ ...prev, department: e.target.value }))}
                className="w-full rounded-md border border-[#E5E7EB] px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-[#623DC1] font-space-grotesk"
              />

              <button
                onClick={handleVerificationSubmit}
                disabled={!isFormValid}
                className={`w-full py-1.5 rounded-md text-white font-medium transition-colors text-xs font-space-grotesk ${
                  isFormValid 
                    ? 'bg-[#623DC1] hover:bg-[#5230a9]' 
                    : 'bg-[#858BE3] cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;