// SectionThree.jsx
export default function SectionThree() {
    return (
      <section className="bg-white dark:bg-gray-900 py-16" id="section3">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            What Clients Say
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="w-1/3 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-900 dark:text-white">
                "This BI tool has transformed how we approach data analysis. It's easy to use, fast, and insightful!"
              </p>
              <p className="text-gray-500 dark:text-gray-300 mt-4">- John Doe, CEO</p>
            </div>
            <div className="w-1/3 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-900 dark:text-white">
                "The dashboard is so intuitive. We've seen a significant increase in productivity by using this tool."
              </p>
              <p className="text-gray-500 dark:text-gray-300 mt-4">- Jane Smith, Product Manager</p>
            </div>
          </div>
        </div>
      </section>
    );
}
