// SectionOne.jsx
export default function SectionOne() {
    return (
      <section className="bg-white dark:bg-gray-900 py-16" id="section1">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Welcome to Our Business Intelligence Tool
          </h2>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Effortlessly track your business metrics, analyze trends, and make data-driven decisions.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </section>
    );
}
