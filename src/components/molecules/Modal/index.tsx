import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, ReactElement } from "react";

interface Props {
  isOpen: boolean;
  closeModal: Function;
  children: ReactElement;
  submit: any;
  buttonText: string;
  header?: string;
  caution?: boolean;
}

const Modal = ({
  isOpen,
  closeModal,
  children,
  header,
  buttonText,
  submit,
  caution,
}: Props) => {

  console.log(submit, header)
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            closeModal();
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto [backdrop-filter:blur(7px)] ">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl p-10 text-left align-middle shadow-xl text-white transition-all bg-[#282043]">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl mb-4 font-medium leading-6 text-white"
                  >
                    {header}
                  </Dialog.Title>
                  <div className="mt-2">{children}</div>

                  <div className={`mt-4 ${caution && 'flex justify-center'} `}>
                    <button
                      type="button"
                      className={`inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium ${
                        caution
                          ? "text-white hover:bg-red-600 bg-red-400 "
                          : "text-blue-900  bg-blue-100 hover:bg-blue-200 "
                      } focus:outline-none focus-visible:ring-0`}
                      onClick={() => {
                        submit();
                        // closeModal();
                      }}
                    >
                      {buttonText}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
