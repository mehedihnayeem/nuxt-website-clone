<template>
  <hr />
  <div class="mx-auto lg:px-8 px-4 sm:px-6 max-w-7xl py-8">
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-0 text-sm"
    >
      <div>
        <ul class="space-y-4 text-gray-600 hover:text-gray-900">
          <li class="font-semibold text-gray-900">
            <NuxtLink to="/">Community</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"
              >Nuxters
              <i class="pi pi-arrow-up-right text-[10px] text-gray-400"></i
            ></NuxtLink>
          </li>
          <li><NuxtLink to="/">Team</NuxtLink></li>
          <li><NuxtLink to="/">Design Kit</NuxtLink></li>
        </ul>
      </div>
      <div>
        <ul class="space-y-4 text-gray-600 hover:text-gray-900">
          <li class="font-semibold text-gray-900">
            <NuxtLink to="/">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"
              >Nuxt UI Pro
              <i class="pi pi-arrow-up-right text-[10px] text-gray-400"></i
            ></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"
              >Nuxt Studio
              <i class="pi pi-arrow-up-right text-[10px] text-gray-400"></i
            ></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"
              >NuxtHub
              <i class="pi pi-arrow-up-right text-[10px] text-gray-400"></i
            ></NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <ul class="space-y-4 text-gray-600 hover:text-gray-900">
          <li class="font-semibold text-gray-900">
            <NuxtLink to="/">Enterprise</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Support </NuxtLink>
          </li>
          <li><NuxtLink to="/">Agencies</NuxtLink></li>
          <li><NuxtLink to="/">Sponsors</NuxtLink></li>
        </ul>
      </div>
      <div>
        <p class="text-gray-700 text-lg mt-4 lg:mt-0 font-semibold">
          Subscribe to our newsletter
        </p>
        <p class="text-gray-500 py-2">
          Stay updated on new releases and features, guides, and community
          updates.
        </p>
        <div
          class="border-gray-200 p-2 w-[16rem] xl:w-[20rem] flex items-center justify-between border-2 rounded-md my-4"
        >
          <div class="text-gray-400 text-xs">you@domain.com</div>
          <div class="bg-black text-white p-2 rounded-md text-xs">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div
    class="mx-auto lg:px-8 px-4 sm:px-6 max-w-7xl py-4 lg:py-8 flex justify-between"
  >
    <div>
      <p class="text-gray-500 text-sm">
        Copyright © 2016-2024 Nuxt -
        <span class="hover:underline">
          <a
            href="https://go.nuxt.com/license"
            target="_blank"
            rel="noopener noreferrer"
            >MIT License</a
          >
        </span>
      </p>
    </div>

    <div class="text-xl">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">
            <i class="pi pi-twitter"></i>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            <i class="pi pi-linkedin"></i>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            <i class="pi pi-discord"></i>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            <i class="pi pi-github"></i>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
