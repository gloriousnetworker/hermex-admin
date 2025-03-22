"use client";

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function LogoutModal({ isOpen, onConfirm, onCancel }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onCancel}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0" 
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100" 
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95" 
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100" 
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 text-left shadow-2xl transition-all font-sans">
                <Dialog.Title as="h3" className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Ready to say goodbye?
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    It looks like you’re about to log out. We’re sad to see you go, but we appreciate the time you’ve spent with us.
                    Are you sure you want to leave? You can always come back and continue your journey.
                  </p>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={onConfirm}
                    className="flex items-center justify-center rounded-full bg-green-500 p-3 hover:bg-green-600 focus:outline-none"
                  >
                    <CheckIcon className="h-6 w-6 text-white" />
                  </button>
                  <button
                    type="button"
                    onClick={onCancel}
                    className="flex items-center justify-center rounded-full bg-red-500 p-3 hover:bg-red-600 focus:outline-none"
                  >
                    <XMarkIcon className="h-6 w-6 text-white" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
