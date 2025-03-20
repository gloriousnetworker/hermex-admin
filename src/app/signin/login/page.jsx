// pages/login.jsx

import Navbar from '../../../components/auth/login/Navbar';
import LoginForm from '../../../components/auth/login/LoginForm';
import Footer from '../../../components/auth/login/Footer';

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
        <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
