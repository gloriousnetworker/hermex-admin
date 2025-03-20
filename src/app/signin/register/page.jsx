// pages/register.jsx

import Navbar from '../../../components/auth/register/Navbar';
import RegisterForm from '../../../components/auth/register/RegisterForm';
import Footer from '../../../components/auth/register/Footer';

export default function RegisterPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
        <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
