// SectionTwo.jsx
export default function SectionTwo() {
    return (
      <section className="bg-gray-100 dark:bg-gray-800 py-16" id="section2">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">User Authentication</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Secure login system with "Keep me logged in" feature and auto logout after inactivity.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Interactive Dashboards</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Visualize key business metrics through interactive charts and graphs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Data Management</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Efficiently manage and analyze large sets of user or sales data.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  