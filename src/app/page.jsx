"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import * as styles from "../styles/styles";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    employeeId: "",
    password: "",
    department: "",
    keepSignedIn: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.employeeId.trim()) {
      newErrors.employeeId = "Employee ID is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.department) {
      newErrors.department = "Department is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Login attempt:", formData);
      router.push("/dashboard/admin-dashboard");
    }
  };

  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/admin-background.png'), linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
          backdropFilter: "blur(4px)",
        }}
      />
      
      <div className="relative z-10">
        <nav
          className="w-full px-6 py-4 flex justify-between items-center"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <div 
            className="text-white px-4 py-2 rounded-md"
            style={{ backgroundColor: "#623DC1", fontFamily: "Space Grotesk" }}
          >
            Voyager
          </div>
          <div
            style={{
              color: "#5320FD",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              fontFamily: "Space Grotesk",
            }}
          >
            Support
          </div>
        </nav>

        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
          <div
            className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
            style={{ border: "1px solid #E5E5E5" }}
          >
            <div className="flex flex-col items-center mb-6">
              <div className="mb-4">
                <User className="w-8 h-8 text-gray-500" />
              </div>
              <h2 className="text-xl font-medium text-gray-800" style={{ fontFamily: "Space Grotesk" }}>
                Employee Portal
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className={styles.labelClass}>
                  Employee ID
                </label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleInputChange}
                  placeholder="EMP001"
                  className={`${styles.inputClass} ${errors.employeeId ? 'border-red-500' : ''}`}
                />
                {errors.employeeId && (
                  <p className="text-red-500 text-sm mt-1" style={{ fontFamily: "Space Grotesk" }}>
                    {errors.employeeId}
                  </p>
                )}
              </div>

              <div>
                <label className={styles.labelClass}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={`${styles.inputClass} ${errors.password ? 'border-red-500' : ''}`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1" style={{ fontFamily: "Space Grotesk" }}>
                    {errors.password}
                  </p>
                )}
              </div>

              <div>
                <label className={styles.labelClass}>
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className={`${styles.selectClass} ${errors.department ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Department</option>
                  <option value="hr">Human Resources</option>
                  <option value="it">Information Technology</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
                  <option value="operations">Operations</option>
                </select>
                {errors.department && (
                  <p className="text-red-500 text-sm mt-1" style={{ fontFamily: "Space Grotesk" }}>
                    {errors.department}
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="keepSignedIn"
                  checked={formData.keepSignedIn}
                  onChange={handleInputChange}
                  className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-[#623DC1]"
                  style={{ accentColor: "#623DC1" }}
                />
                <label className="ml-2 text-sm text-gray-600" style={{ fontFamily: "Space Grotesk" }}>
                  Keep me signed in
                </label>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full text-white py-3 px-4 rounded-md hover:opacity-90 transition-opacity"
                style={{ 
                  backgroundColor: "#623DC1",
                  fontFamily: "Space Grotesk",
                  fontWeight: 500
                }}
              >
                Sign in as Employee
              </button>
            </div>

            <div className="mt-6">
              <hr className="border-gray-200" />
              <p className="text-center text-sm text-gray-600 mt-4" style={{ fontFamily: "Space Grotesk" }}>
                Need access? Contact IT Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}