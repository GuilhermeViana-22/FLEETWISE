<template>
  <section id="features" class="py-20 bg-gradient-to-b from-white-100 via-white to-white-100">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4 animate-fadeInUp">Funcionalidades completas</h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto animate-fadeInUp animate-delay-100">
          Tudo que você precisa para gerenciar sua operação de transporte com eficiência
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div 
          v-for="(feature, index) in features"
          :key="index"
          class="relative bg-white/70 backdrop-blur-lg p-6 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 feature-card group"
          :class="`animate-fadeInUp animate-delay-${(index % 4) * 100 + 200}`"
          @mouseenter="hoveredFeature = index"
          @mouseleave="hoveredFeature = null"
        >
          <div 
            class="p-4 rounded-full w-14 h-14 flex items-center justify-center mb-4 transition-all duration-300"
            :class="[
              hoveredFeature === index 
                ? 'bg-opacity-30 scale-110'
                : 'bg-opacity-15',
              feature.bgColor
            ]"
          >
            <svg 
              class="w-7 h-7 transition-transform duration-300" 
              :class="[
                hoveredFeature === index ? 'scale-110' : '',
                feature.iconColor
              ]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                :d="feature.iconPath"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>

          <div 
            v-if="hoveredFeature === index"
            class="absolute -bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium shadow-md transform transition-all duration-300"
            style="animation: pulse 2s infinite"
          >
            + Eficiência
          </div>
        </div>
      </div>

      <div class="mt-20 text-center animate-fadeInUp animate-delay-600">
        <p class="text-gray-600 mb-4">Todas as funcionalidades integradas em uma única plataforma</p>
        <a 
          href="#pricing" 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-primary hover:bg-opacity-90 transition-all transform hover:scale-105"
        >
          Comece agora
          <svg class="ml-3 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      hoveredFeature: null,
      features: [
        {
          title: "Gestão de Documentos",
          description: "Controle completo de documentos fiscais, contratos e licenças com alertas de vencimento.",
          iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
          bgColor: "bg-blue-500",
          iconColor: "text-blue-600"
        },
        {
          title: "Gestão Financeira",
          description: "Controle de receitas, despesas, fluxo de caixa e relatórios financeiros detalhados.",
          iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          bgColor: "bg-green-500",
          iconColor: "text-green-600"
        },
        {
          title: "Gestão de Cargas",
          description: "Rastreamento de cargas, tipos de produtos, volumes e informações de transporte.",
          iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
          bgColor: "bg-purple-500",
          iconColor: "text-purple-600"
        },
        {
          title: "Ordens de Coleta",
          description: "Criação, acompanhamento e gestão de ordens de coleta por tipo de veículo.",
          iconPath: "M9 5l7 7-7 7",
          bgColor: "bg-red-500",
          iconColor: "text-red-600"
        }
      ]
    }
  }
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-delay-100 { animation-delay: 0.1s; }
.animate-delay-200 { animation-delay: 0.2s; }
.animate-delay-300 { animation-delay: 0.3s; }
.animate-delay-400 { animation-delay: 0.4s; }
.animate-delay-500 { animation-delay: 0.5s; }
.animate-delay-600 { animation-delay: 0.6s; }
</style>
