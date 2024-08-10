<template>
  <div
    class="mx-auto md:py-28 flex flex-col px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24"
  >
    <div class="flex flex-col lg:flex-row gap-24 items-center">
      <div class="flex-1">
        <div
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
        >
          <p>The power of</p>
          <p class="text-customGreen">Vue Components</p>
        </div>
        <p class="mt-6 text-lg/8 text-gray-600">
          We love Vue Single-File Components as much as you do. Simple,
          intuitive and powerful, Nuxt lets you write Vue components in a way
          that makes sense. Every repetitive task is automated, so you can focus
          on writing your full-stack Vue application with confidence.
        </p>

        <div class="flex gap-3 py-8">
          <div
            class="bg-black text-white p-3 py-1.5 w-[12.5rem] rounded-md flex gap-2 text-sm items-center cursor-pointer"
          >
            <span> <img src="../static/images/icons/icon13.svg" /></span>
            Learn about Views
          </div>
          <div
            class="ring-gray-300 bg-gray-50 ring-1 p-3 py-1.5 w-[12.5rem] rounded-md flex gap-2 text-sm cursor-pointer items-center"
          >
            <span><img src="../static/images/icons/icon14.svg" /></span>
            Hello World Example
          </div>
        </div>
      </div>
      <div class="flex-1 border-2 border-gray-100 bg-gray-50 rounded-lg">
        <div
          class="bg-white h-12 flex justify-between items-center p-3 border-b-2 border-gray-100"
        >
          <div class="flex gap-1 items-center">
            <img src="../static/images/icons/icon17.svg" alt="icon" />
            <p class="font-mono text-gray-700 text-sm/6">app.vue</p>
          </div>
          <div><img src="../static/images/icons/icon18.svg" alt="icon" /></div>
        </div>
        <div class="p-2">
          <img src="../static/images/code1.png" />
        </div>
      </div>
    </div>
    <!-- Other Section -->
    <div class="flex flex-col lg:flex-row gap-24 items-center my-40">
      <div class="flex-1 lg:order-last">
        <div
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
        >
          <p>Static or Dynamic,</p>
          <p class="text-customGreen">the choice is yours</p>
        </div>
        <p class="mt-6 text-lg/8 text-gray-600">
          Decide what rendering strategy you need at the route level. By
          leveraging the hybrid rendering, you can get the best of both worlds:
          the performance of a static site and the interactivity of a dynamic
          one.
        </p>

        <div class="flex gap-3 py-8">
          <div
            class="bg-black text-white p-3 py-1.5 w-[16.5rem] rounded-md flex gap-2 text-sm items-center cursor-pointer"
          >
            <span><img src="../static/images/icons/icon15.svg" /></span>
            Learn about Hybrid Rendering
          </div>
          <div
            class="ring-gray-300 bg-gray-50 ring-1 p-3 py-1.5 w-[12.5rem] rounded-md flex gap-2 text-sm cursor-pointer items-center"
          >
            <span><img src="../static/images/icons/icon16.svg" /></span>
            Nuxt on the Edge
          </div>
        </div>
      </div>
      <div class="flex-1 border-2 border-gray-200 bg-gray-50 rounded-lg">
        <div
          class="bg-white h-12 flex justify-between items-center p-3 border-b-2"
        >
          <div class="flex gap-3 items-center">
            <div
              class="flex gap-1 items-center bg-gray-100 px-2 py-1 rounded-md"
            >
              <img src="../static/images/icons/icon19.svg" alt="icon" />
              <p class="font-mono text-gray-700 text-sm/6">nuxt.config.ts</p>
            </div>
            <div class="flex gap-1 items-center">
              <img src="../static/images/icons/icon17.svg" alt="icon" />
              <p class="font-mono text-gray-700 text-sm/6">pages/index.vue</p>
            </div>
          </div>
          <div><img src="../static/images/icons/icon18.svg" alt="icon" /></div>
        </div>
        <div>
          <div class="p-2">
            <img src="../static/images/code2.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
