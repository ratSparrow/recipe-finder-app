import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const RandomRecipeModal = ({ isOpen, onClose, recipe }: any) => {
  if (!recipe) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title className="text-2xl font-bold mb-4">
                  {recipe.strMeal}
                </Dialog.Title>
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p className="mb-3">
                  <strong>Category:</strong> {recipe.strCategory} <br />
                  <strong>Area:</strong> {recipe.strArea}
                </p>
                <a
                  href={recipe.strSource || recipe.strYoutube}
                  target="_blank"
                  className="text-blue-600 underline"
                  rel="noreferrer"
                >
                  View Full Recipe
                </a>
                <div className="mt-6 text-right">
                  <button
                    onClick={onClose}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
