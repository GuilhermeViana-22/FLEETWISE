<template>
  <section id="home" class="relative bg-gradient-to-r from-primary to-secondary py-32 overflow-hidden">
    <!-- Elementos animados de fundo -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Caminhões animados -->
      <div v-for="i in 3" :key="'truck'+i" 
           class="absolute truck-animation"
           :style="{
             top: `${10 + (i * 20)}%`,
             animationDuration: `${15 + (i * 5)}s`,
             animationDelay: `${i * 2}s`
           }">
        <svg class="w-16 h-16 text-white opacity-20" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7h2v2h-2V7z"/>
        </svg>
      </div>

      <!-- Linhas de rodovia -->
      <div class="absolute inset-0 flex flex-col justify-between highway-lines">
        <div v-for="i in 5" :key="'line'+i" 
             class="h-px bg-white bg-opacity-10 w-full"
             :style="{ top: `${i * 20}%` }"></div>
      </div>
    </div>

    <!-- Conteúdo principal -->
    <div class="container mx-auto px-6 relative z-10 text-center max-w-4xl">
      <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-8 animate-fadeInUp leading-tight">
        Potencialize sua Transportadora com um Sistema Inteligente
      </h1>
      <p class="text-white text-xl md:text-2xl mb-10 opacity-90 animate-fadeInUp animate-delay-100">
        Plataforma SaaS completa para otimizar operações de transporte, automatizar tarefas e aumentar sua eficiência em até 85%.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-6 animate-fadeInUp animate-delay-200">
        <a href="#pricing" class="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105 shadow-xl">
          Conheça nossos planos
        </a>
        <a href="#dashboard" class="bg-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105 shadow-xl">
          Ver demonstração
        </a>
      </div>
    </div>
  </section>
</template>
