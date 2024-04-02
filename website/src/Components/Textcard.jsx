import React from "react";

export default function Textcard() {
  return (
    <>
      <div class="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    کھانے سے پہلے کی دعا
                  </p>
                </div>
              </div>
            </li>

            <li class="py-3 sm:py-4">
              <div class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    بِسْمِ اللّٰہِ وَعَلٰی بَرَكَةِ اللّٰہِ
                  </p>
                </div>
              </div>
            </li>

            <li class="py-3 sm:py-4">
              <div class="flex items-center ">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    In the name of Allah and with the blessings of Allah I begin
                    (eating) In the name of Allah and with the blessings of
                    Allah I begin (eating) In the name of Allah and with the
                    blessings of Allah I begin (eating)
                  </p>
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    میں نے الله کے نام کے ساتھ اور الله کی برکت پر کھانا شروع
                    کیا
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
