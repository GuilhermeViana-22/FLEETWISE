<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-2xl font-bold text-primary">FlEET<span class="text-secondary">WISE</span></span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="(item, index) in navItems" 
            :key="index" 
            :href="item.href" 
            class="text-dark hover:text-primary font-medium transition-colors"
            :class="{'bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90': item.isButton}"
          >
            {{ item.text }}
          </a>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMenu" 
          class="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              v-if="!isMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div 
          v-show="isMenuOpen" 
          class="md:hidden mt-4 pb-4 space-y-4"
        >
          <a 
            v-for="(item, index) in navItems" 
            :key="index" 
            :href="item.href" 
            @click="closeMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-gray-50 transition-colors"
            :class="{'bg-primary text-white hover:bg-opacity-90': item.isButton}"
          >
            {{ item.text }}
          </a>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
      navItems: [
        { text: 'Início', href: '#home', isButton: false },
        { text: 'Funcionalidades', href: '#features', isButton: false },
        { text: 'Dashboard', href: '#dashboard', isButton: false },
        { text: 'Planos', href: '#pricing', isButton: false },
        { text: 'Sobre Nós', href: '#about', isButton: false },
        { text: 'Contato', href: '#contact', isButton: true }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>