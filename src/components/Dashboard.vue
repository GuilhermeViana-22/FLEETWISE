<template>
  <section id="dashboard" class="py-16 bg-white">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 animate-fadeInUp">Dashboard Moderno 2025</h2>
        <p class="text-gray-600 max-w-2xl mx-auto animate-fadeInUp animate-delay-100">
          Interface intuitiva com visualização em tempo real de todos os aspectos da sua operação de transportes.
        </p>
      </div>

      <!-- Dashboard Container -->
      <div class="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-lg animate-fadeInUp animate-delay-200">
        <!-- Dashboard Mockup -->
        <div class="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <!-- Dashboard Header -->
          <div class="bg-gray-800 text-white p-3 sm:p-4 flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span class="font-medium text-sm sm:text-base">FleetWise  Dashboard</span>
            <div class="text-xs sm:text-sm">2025</div>
          </div>
          
          <!-- Dashboard Content -->
          <div class="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Stats Cards -->
            <DashboardStatCard 
              v-for="(stat, index) in stats"
              :key="index"
              :title="stat.title"
              :value="stat.value"
              :percentage="stat.percentage"
              :trend="stat.trend"
              :icon="stat.icon"
              :color="stat.color"
              :class="`animate-fadeInUp animate-delay-${200 + (index * 100)}`"
            />
            
            <!-- Charts -->
            <div class="md:col-span-2 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <h3 class="font-semibold text-lg">Movimentação Mensal</h3>
                <select class="text-sm border border-gray-200 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Últimos 6 meses</option>
                  <option>Últimos 12 meses</option>
                  <option>Este ano</option>
                </select>
              </div>
              <div class="h-64 bg-gray-50 rounded flex items-center justify-center">
                <div class="text-center text-gray-500">
                  <svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  Gráfico de movimentação financeira
                </div>
              </div>
            </div>
            
            <!-- Vehicle Types -->
            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 class="font-semibold text-lg mb-4">Tipos de Veículos</h3>
              <div class="space-y-3">
                <div v-for="(vehicle, index) in vehicles" :key="index">
                  <div class="flex justify-between text-sm mb-1">
                    <span>{{ vehicle.type }}</span>
                    <span>{{ vehicle.percentage }}%</span>
                  </div>
                  <div class="h-2 bg-gray-200 rounded-full">
                    <div class="h-2 rounded-full" :class="`bg-${vehicle.color}`" :style="`width: ${vehicle.percentage}%`"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Recent Orders -->
            <div class="lg:col-span-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 class="font-semibold text-lg mb-4">Últimas Ordens de Coleta</h3>
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th v-for="(header, index) in tableHeaders" :key="index" 
                          class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {{ header }}
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="(order, index) in recentOrders" :key="index" 
                        class="hover:bg-gray-50 transition-colors">
                      <td class="px-4 py-3 whitespace-nowrap text-sm">{{ order.id }}</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm">{{ order.client }}</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm">{{ order.cargo }}</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm">{{ order.vehicle }}</td>
                      <td class="px-4 py-3 whitespace-nowrap">
                        <span :class="`px-2 py-1 text-xs rounded-full ${statusClasses[order.status]}`">
                          {{ order.status }}
                        </span>
                      </td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm">{{ order.date }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-8 animate-fadeInUp animate-delay-500">
        <a href="#pricing" class="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition transform hover:scale-105 shadow-md">
          Experimente Grátis por 7 Dias
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import DashboardStatCard from '../components/DashboardStatCard.vue'

export default {
  name: 'DashboardPreview',
  components: {
    DashboardStatCard
  },
  data() {
    return {
      stats: [
        {
          title: "Faturamento Mensal",
          value: "R$ 84,520",
          percentage: 75,
          trend: "+12% em relação ao mês anterior",
          icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          color: "primary"
        },
        {
          title: "Cargas Transportadas",
          value: "247",
          percentage: 60,
          trend: "+8% em relação ao mês anterior",
          icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
          color: "secondary"
        },
        {
          title: "Documentos Pendentes",
          value: "12",
          percentage: 30,
          trend: "3 com vencimento próximo",
          icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
          color: "tertiary"
        }
      ],
      vehicles: [
        { type: "Carreta", percentage: 42, color: "primary" },
        { type: "Toco", percentage: 28, color: "secondary" },
        { type: "VUC", percentage: 18, color: "tertiary" },
        { type: "Bitrem", percentage: 12, color: "gray-800" }
      ],
      tableHeaders: ["Nº Ordem", "Cliente", "Tipo Carga", "Veículo", "Status", "Data"],
      recentOrders: [
        {
          id: "#OC-2025-042",
          client: "Agropecuária Nova",
          cargo: "Grãos",
          vehicle: "Carreta",
          status: "Concluído",
          date: "15/04/2025"
        },
        {
          id: "#OC-2025-041",
          client: "Indústria ABC",
          cargo: "Máquinas",
          vehicle: "Bitrem",
          status: "Em Trânsito",
          date: "14/04/2025"
        },
        {
          id: "#OC-2025-040",
          client: "Distribuidora XYZ",
          cargo: "Alimentos",
          vehicle: "Toco",
          status: "Pendente",
          date: "13/04/2025"
        }
      ],
      statusClasses: {
        "Concluído": "bg-green-100 text-green-800",
        "Em Trânsito": "bg-blue-100 text-blue-800",
        "Pendente": "bg-yellow-100 text-yellow-800"
      }
    }
  }
}
</script>