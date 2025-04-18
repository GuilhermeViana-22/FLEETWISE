<template>
    <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm" :class="`hover:shadow-md transition-shadow`">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-sm text-gray-500">{{ title }}</p>
          <p class="text-2xl font-bold">{{ value }}</p>
        </div>
        <div :class="`bg-${color} text-white p-2 rounded-full`">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon"></path>
          </svg>
        </div>
      </div>
      <div class="mt-2">
        <div class="h-2 bg-gray-200 rounded-full">
          <div class="h-2 rounded-full" :class="`bg-${color}`" :style="`width: ${percentage}%`"></div>
        </div>
        <p class="text-xs text-gray-500 mt-1">{{ trend }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardStatCard',
    props: {
      title: String,
      value: String,
      percentage: Number,
      trend: String,
      icon: String,
      color: String
    }
  }
  </script>