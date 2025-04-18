<template>
  <div class="max-w-7xl mx-auto px-4 py-16 bg-gray-50">

    <!-- Cabeçalho -->
    <div class="flex flex-col items-center mb-16 relative">
      <span class="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Dúvidas Comuns</span>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 text-center">
        <span class="relative">
          Como o FleetWise pode ajudar sua operação
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary mt-3"></span>
        </span>
      </h2>
      <p class="mt-6 text-lg text-center text-gray-600 max-w-3xl">
        Respostas para as principais perguntas sobre gestão de frotas, rastreamento, documentação e otimização logística.
      </p>
    </div>

    <!-- Seção de Perguntas e Respostas -->
    <div class="max-w-screen-xl mx-auto px-5 min-h-sceen">
      <div class="grid divide-y divide-gray-200 max-w-3xl mx-auto mt-8">

        <div class="py-5" v-for="(question, index) in questions" :key="index">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span class="text-gray-800 group-open:text-primary text-lg"> {{ question.question }} </span>
              <span class="transition group-open:rotate-180 text-primary">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="text-gray-600 mt-3 group-open:animate-fadeIn">
              {{ question.answer }}
            </p>
          </details>
        </div>
       
      </div>
    </div>

    <!-- CTA Final -->
    <div class="text-center mt-16">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Ainda tem dúvidas?</h3>
      <p class="text-gray-600 mb-6 max-w-2xl mx-auto">Nossa equipe está pronta para mostrar como o FleetWise pode transformar sua gestão de transportes.</p>
      <a href="#contact" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-all transform hover:scale-105">
        Fale com nossos especialistas
        <svg class="ml-3 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const questions = ref([
  {
    question: 'Como o FleetWise otimiza minhas rotas de entrega?',
    answer: 'Nosso sistema analisa tráfego em tempo real, restrições veiculares e janelas de entrega para sugerir as rotas mais eficientes. Reduza em até 30% seu tempo de deslocamento e combustível com algoritmos inteligentes que aprendem com seus padrões operacionais.'
  },
  {
    question: 'O sistema ajuda com a documentação obrigatória?',
    answer: 'Sim! Automatizamos a gestão de documentos como: MDF-e, CT-e, licenças, seguros e vistorias. Você recebe alertas de vencimentos, pode armazenar digitalmente e gerar relatórios para auditorias com poucos cliques.'
  },
  {
    question: 'Posso monitorar minhas cargas em tempo real?',
    answer: 'Completamente. Nosso rastreamento mostra a localização exata da carga, condições de transporte (como temperatura para perecíveis) e estimativa de entrega. Integramos com dispositivos IoT para monitoramento avançado.'
  },
  {
    question: 'Como é feita a gestão de ordens de coleta?',
    answer: 'Digitalizamos todo o processo: desde o agendamento com clientes, alocação automática de veículos por tipo de carga, até a confirmação eletrônica de coleta. Reduza falhas de comunicação e melhore seu SLA em até 40%.'
  },
  {
    question: 'O FleetWise ajuda no controle de custos?',
    answer: 'Absolutamente. Temos módulos específicos para: controle de combustível (com alertas de abastecimento suspeito), manutenção preventiva, análise de custos por rota/veículo e integração com seu contas a pagar. Identifique oportunidades de economia com nossos dashboards financeiros.'
  },
  {
    question: 'Como funciona o rastreamento da frota?',
    answer: 'Usamos tecnologia GPS de última geração com atualização em tempo real, relatórios de horímetro, monitoramento de comportamento do motorista (frenagens bruscas, excesso de velocidade) e histórico detalhado de rotas. Tudo acessível via web e aplicativo móvel.'
  },
  {
    question: 'O sistema emite alertas para manutenção?',
    answer: 'Sim, baseado em quilometragem, horas de operação e diagnósticos OBD. Criamos um plano de manutenção preventiva personalizado para cada veículo, com orçamentos integrados a oficinas parceiras quando desejado.'
  },
  {
    question: 'Posso integrar com outros sistemas da empresa?',
    answer: 'Temos APIs abertas para integração com ERPs, sistemas contábeis, WMS e outras plataformas. Já possuímos conectores prontos para os principais sistemas do mercado logístico.'
  },
  {
    question: 'Como é o controle de jornada dos motoristas?',
    answer: 'Atendemos todas as exigências da lei 13.103/15 (Lei do Motorista) com registro eletrônico de jornada, alertas de excesso de horas, geração automática de arquivos AFD e relatórios para compliance.'
  },
  {
    question: 'O FleetWise ajuda na gestão de fretes?',
    answer: 'Totalmente. Desde a cotação com base em tabelas de frete configuráveis, emissão automática de contratos e conhecimentos, até o acompanhamento de pagamentos e cobranças com conciliação bancária integrada.'
  },
  {
    question: 'Como é a implementação do sistema?',
    answer: 'Nossa equipe especializada faz todo o onboarding em 4 etapas: diagnóstico operacional, configuração personalizada, treinamento in loco e acompanhamento pós-implantação. Temos 95% das implementações concluídas em menos de 30 dias.'
  },
  {
    question: 'E se eu precisar de suporte técnico?',
    answer: 'Oferecemos suporte 24/7 via chat, telefone e remoto. Nossa equipe de Customer Success faz acompanhamento contínuo para garantir que você esteja extraindo o máximo valor da plataforma, com relatórios mensais de performance.'
  }
]);
</script>

<style scoped>
details {
  transition: all 0.3s ease;
}

details[open] {
  padding-bottom: 10px;
  background-color: #f8fafc;
  border-radius: 0.375rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.group-open:animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}

summary::-webkit-details-marker {
  display: none;
}

summary {
  transition: color 0.2s ease;
  padding: 0.5rem 0;
}

summary:hover {
  color: #1e40af;
}
</style>