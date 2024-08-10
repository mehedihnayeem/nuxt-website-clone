<template>
  <div
    class="mx-auto py-8 md:py-28 flex flex-col px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24"
  >
    <div>
      <div
        class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
      >
        <p>Built by developers</p>
        <p class="text-customGreen">around the world.</p>
      </div>
      <p class="mt-6 text-lg/8 text-gray-600">
        The development of Nuxt and its ecosystem is led by an international
        team. From contributors to developer advocates, the community is made up
        of members with different horizons and skills. We are happy to see new
        members every day and encourage anyone to join us and help in many ways:
        answering questions, giving a talk, creating modules and contributing to
        the core.
      </p>
      <div class="flex gap-3 py-8">
        <div
          class="bg-black text-white p-3 py-1.5 w-28 rounded-md flex gap-2 text-sm cursor-pointer"
        >
          <span class="simple-icons--nuxtdotjs pt-1"></span> Nuxters
        </div>
        <div
          class="ring-gray-300 bg-gray-50 ring-1 p-3 py-1.5 w-[6.5rem] rounded-md flex gap-2 text-sm cursor-pointer"
        >
          <span><i class="pi pi-discord text-lg"></i></span>
          Discord
        </div>
        <div
          class="ring-gray-300 bg-gray-50 ring-1 p-3 py-1.5 w-[6.2rem] rounded-md flex gap-2 text-sm cursor-pointer"
        >
          <span><i class="pi pi-github text-lg"></i></span> GitHub
        </div>
        <div
          class="ring-gray-300 bg-gray-50 ring-1 p-3 py-1.5 w-[7.5rem] rounded-md flex gap-2 text-sm cursor-pointer"
        >
          <span><i class="pi pi-twitter text-lg"></i></span> X / Twitter
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.simple-icons--nuxtdotjs {
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M13.464 19.83h8.922c.283 0 .562-.073.807-.21a1.6 1.6 0 0 0 .591-.574a1.53 1.53 0 0 0 .216-.783a1.53 1.53 0 0 0-.217-.782L17.792 7.414a1.6 1.6 0 0 0-.591-.573a1.65 1.65 0 0 0-.807-.21c-.283 0-.562.073-.807.21a1.6 1.6 0 0 0-.59.573L13.463 9.99L10.47 4.953a1.6 1.6 0 0 0-.591-.573a1.65 1.65 0 0 0-.807-.21c-.284 0-.562.073-.807.21a1.6 1.6 0 0 0-.591.573L.216 17.481a1.53 1.53 0 0 0-.217.782c0 .275.074.545.216.783a1.6 1.6 0 0 0 .59.574c.246.137.525.21.808.21h5.6c2.22 0 3.856-.946 4.982-2.79l2.733-4.593l1.464-2.457l4.395 7.382h-5.859Zm-6.341-2.46l-3.908-.002l5.858-9.842l2.923 4.921l-1.957 3.29c-.748 1.196-1.597 1.632-2.916 1.632'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
