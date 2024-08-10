<template>
  <div
    class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-8"
  >
    <div
      v-for="(image, index) in images"
      :key="index"
      class="relative w-full h-48 overflow-hidden rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
    >
      <img
        :src="image.src"
        :alt="image.alt"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: "/images/img1.jpg", alt: "Image 1" },
        { src: "/images/img2.jpg", alt: "Image 2" },
        { src: "/images/img3.jpg", alt: "Image 3" },
        // Add more images here
      ],
    };
  },
  mounted() {
    this.randomizeImages();
    setInterval(this.randomizeImages, 5000); // Change images every 5 seconds
  },
  methods: {
    randomizeImages() {
      this.images = this.images.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
