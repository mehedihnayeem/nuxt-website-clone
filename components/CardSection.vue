<template>
  <div
    class="mx-auto py-8 md:pt-0 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col gap-16 sm:gap-y-16"
  >
    <div
      class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl text-center"
    >
      <p>Compose with</p>
      <p class="text-customGreen">everything you need.</p>
    </div>

    <div class="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 xl:grid-cols-4">
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon1.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">Routing & Layouts</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              File based routing system to build complex views and interfaces
              with a powerful and conventional approach.
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon2.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">Data Fetching</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              Composables that run on the server to fetch data for your
              components and enable you to render content in different ways.
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon3.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">Assets & Style</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              Image, Font and Script optimizations with a built-in support for
              CSS Modules, Sass, PostCSS, CSS-in-JS and more.
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon4.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">SEO & Meta Tags</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              Production ready and indexable by search engines while giving the
              feeling of an app to the end-users.
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon5.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">Middleware</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              Run custom code such as authentication, localization or A/B
              testing before rendering a page or a group of pages.
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon6.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">State Management</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              Nuxt provides a simple way to share a reactive and SSR-friendly
              state between components.
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon7.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">Transitions</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              Create smooth transitions between layouts, pages and components
              with a built-in support for Vue & browser transitions.
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon8.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">Error Handling</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              Built-in error handling and logging to help you debug your
              application and provide a better user experience.
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon9.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">Layers</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              Extend your Nuxt application with another Nuxt application to
              reuse components, composables, layouts, pages and more.
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon10.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">Server Routes</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              Create API endpoints and server routes to securely connect with
              third party services and consume from your frontend.
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon11.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">Auto Imports</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              Nuxt auto-imports helpers, composables, and Vue APIs to use across
              your app without explicitly importing them.
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 border-2 hover:border-customGreen flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-100 bg-white hover:bg-opacity-90 transition-colors duration-200 ease-in-out"
      >
        <div
          class="flex flex-col flex-1 gap-x-8 gap-y-4 gap-2 px-4 py-5 sm:p-6"
        >
          <div>
            <img src="../static/images/icons/icon12.svg" />
          </div>
          <div>
            <p class="text-gray-900 font-bold">TypeScript</p>
          </div>
          <div>
            <p class="text-[15px] text-gray-500">
              Nuxt provides helpful shortcuts to ensure you have access to
              accurate type information when you are coding.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
