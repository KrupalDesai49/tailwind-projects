import React from "react";

const Mini2 = () => {
  return (
    <>
      {/* Globle Container */}
      <div className="flex min-h-screen  items-center  justify-center bg-slate-800">
        {/* Flex Container */}
        <div className="my-6 flex flex-col space-y-6 md:my-0 md:flex-row md:space-x-6 md:space-y-0">


          {/* Colom 1 */}
          <div className="rounded-xl bg-slate-700 text-white">
            {/* Upper Container */}
            <div className="mx-3 mt-3 rounded-t-xl bg-slate-800 p-8">
              <div className="text-center uppercase">Basic</div>
              <h2 className="mt-10 text-center font-serif text-5xl">100GB</h2>
              <h3 className="mt-2 text-center">$1.99/Month</h3>
              <div className="flex justify-center">
              <a
              href="#"
                className="my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 text-center duration-200 hover:border-violet-800 hover:bg-violet-800"
              >
                Purchase
              </a></div>
            </div>
            <div className="border-t border-slate-700"></div>
            {/* Lower Container */}
            <div className="mx-3 mb-3 rounded-b-xl  bg-slate-800 p-8">
              {/* List Container */}
              <div className="flex flex-col space-y-2"></div>
              {/* List Item 1 */}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="ml-1 text-sm">100 GB of storage</span>
              </div>
              {/* List Item 2 */}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="ml-1 text-sm">Option to add members</span>
              </div>
              {/* List Item 3 */}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="ml-1 text-sm">100 GB of storage</span>
              </div>
            </div>
          </div>

          


          {/* Colom 2 */}
          <div className="rounded-xl bg-violet-600 text-white">
            {/* Upper Container */}
            <div className="mx-3 mt-3 rounded-t-xl bg-slate-800 p-8">
              <div className="text-center uppercase">Standard</div>
              <h2 className="mt-10 text-center font-serif text-5xl">200GB</h2>
              <h3 className="mt-2 text-center">$3.99/Month</h3>
              <div className="flex justify-center">
              <a
              href="#"
                className="my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 text-center duration-200 hover:border-violet-800 hover:bg-violet-800 bg-violet-600"
              >
                Purchase
              </a></div>
            </div>
            <div className="border-t border-slate-700"></div>
            {/* Lower Container */}
            <div className="mx-3 mb-3 rounded-b-xl  bg-slate-800 p-8">
              {/* List Container */}
              <div className="flex flex-col space-y-2"></div>
              {/* List Item 1 */}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="ml-1 text-sm">200 GB of storage</span>
              </div>
              {/* List Item 2 */}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="ml-1 text-sm">Option to add members</span>
              </div>
              {/* List Item 3 */}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="ml-1 text-sm">100 GB of storage</span>
              </div>
            </div>
          </div>



          {/* Colom 3 */}
          <div className="rounded-xl bg-slate-700 text-white">
            {/* Upper Container */}
            <div className="mx-3 mt-3 rounded-t-xl bg-slate-800 p-8">
              <div className="text-center uppercase">Premium</div>
              <h2 className="mt-10 text-center font-serif text-5xl">2 TB</h2>
              <h3 className="mt-2 text-center">$8.99/Month</h3>
              <div className="flex justify-center">
              <a
              href="#"
                className="my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 text-center duration-200 hover:border-violet-800 hover:bg-violet-800"
              >
                Purchase
              </a></div>
            </div>
            <div className="border-t border-slate-700"></div>
            {/* Lower Container */}
            <div className="mx-3 mb-3 rounded-b-xl  bg-slate-800 p-8">
              {/* List Container */}
              <div className="flex flex-col space-y-2"></div>
              {/* List Item 1 */}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="ml-1 text-sm">2 TB of storage</span>
              </div>
              {/* List Item 2 */}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="ml-1 text-sm">Option to add members</span>
              </div>
              {/* List Item 3 */}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="ml-1 text-sm">100 GB of storage</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Mini2;
