<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Cabeçalho -->
      <div class="text-center mb-16">
        <span class="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4 animate-fadeIn">
          Potencialize sua operação
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeIn animate-delay-100">
          <span class="relative inline-block">
            Módulos Especializados
            <span class="absolute bottom-0 left-0 w-full h-1 bg-secondary mt-2"></span>
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn animate-delay-200">
          Soluções complementares para atender todas as necessidades da sua transportadora
        </p>
      </div>

      <!-- Grid de Módulos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(module, index) in modules"
          :key="index"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
          :class="`animate-delay-${200 + (index * 100)}`"
        >
          <div class="p-6">
            <!-- Ícone e Cabeçalho -->
            <div class="flex items-center mb-6">
              <div class="flex items-center justify-center w-14 h-14 rounded-lg" :class="module.colorClass">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="module.icon"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 ml-4">{{ module.title }}</h3>
            </div>
            
            <!-- Descrição -->
            <p class="text-gray-600 mb-6">{{ module.description }}</p>
            
            <!-- Benefícios -->
            <ul class="space-y-2">
              <li v-for="(benefit, i) in module.benefits" :key="i" class="flex items-start">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="ml-2 text-gray-700">{{ benefit }}</span>
              </li>
            </ul>
          </div>
          
          <!-- Rodapé com CTA -->
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <button class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors">
              Saiba mais
              <svg class="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Rodapé da Seção -->
      <div class="text-center mt-16 animate-fadeIn animate-delay-600">
        <p class="text-lg text-gray-600 mb-6">Quer saber como esses módulos podem se integrar à sua operação atual?</p>
        <a href="#contact" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary-dark transition-all transform hover:scale-105">
          Fale com nosso especialista
          <svg class="ml-3 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const modules = ref([
  {
    title: "EDI Proceda",
    description: "Troca de documentos eletrônicos padronizados com clientes e parceiros logísticos.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    colorClass: "bg-blue-600",
    benefits: [
      "Padrão Proceda e modelos customizados",
      "Integração com principais ERPs do mercado",
      "Redução de erros manuais em 90%",
      "Histórico completo de transações"
    ]
  },
  {
    title: "Comprovei Cargo",
    description: "Solução completa para gestão e comprovação de ocorrências nas entregas.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    colorClass: "bg-green-600",
    benefits: [
      "Provas digitais de entrega (fotos, assinaturas)",
      "Notificações em tempo real para clientes",
      "Relatórios de SLA e performance",
      "Integração com apps de motoristas"
    ]
  },
  {
    title: "Averbação de Seguros",
    description: "Automatize o processo de averbação de cargas com seguradoras parceiras.",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
    colorClass: "bg-purple-600",
    benefits: [
      "Averbação automática via API",
      "Cálculo de prêmios integrado",
      "Comunicação direta com seguradoras",
      "Documentos fiscais gerados automaticamente"
    ]
  },
  {
    title: "Gerenciamento de Risco",
    description: "Monitoramento inteligente para prevenir roubos e aumentar a segurança.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    colorClass: "bg-red-600",
    benefits: [
      "Alertas de zonas de risco",
      "Monitoramento 24/7 da frota",
      "Relatórios de comportamento de direção",
      "Integração com centrais de segurança"
    ]
  },
  {
    title: "CIOT Automático",
    description: "Geração e gestão automatizada de códigos CIOT para documentos fiscais.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    colorClass: "bg-yellow-600",
    benefits: [
      "Geração automática de códigos",
      "Vinculação com documentos fiscais",
      "Validação de códigos recebidos",
      "Relatórios para compliance fiscal"
    ]
  },
  {
    title: "TMS Embarcadores",
    description: "Integração transparente com sistemas TMS de seus clientes embarcadores.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    colorClass: "bg-indigo-600",
    benefits: [
      "Conexão com principais plataformas TMS",
      "Troca de dados em tempo real",
      "Padrões PLD e outros protocolos",
      "Redução de retrabalho em 70%"
    ]
  }
]);
</script>

<style>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

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

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-delay-100 {
  animation-delay: 0.1s;
}

.animate-delay-200 {
  animation-delay: 0.2s;
}

.animate-delay-300 {
  animation-delay: 0.3s;
}

.animate-delay-400 {
  animation-delay: 0.4s;
}

.animate-delay-500 {
  animation-delay: 0.5s;
}

.animate-delay-600 {
  animation-delay: 0.6s;
}
</style>