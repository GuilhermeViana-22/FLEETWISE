<script setup>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import Intrudocao from '@/components/Intrudocao.vue';
import Funcionalidades  from '@/components/Funcionalidades.vue';
import Orcamentos from '@/components/Orcamentos.vue';
import Footer from '@/components/Footer.vue';
import Informacoes from '@/components/Informacoes.vue';
import WhatsAppButton from '@/components/WhatsAppButton.vue';
import Embesed from '@/components/embesed/Embesed.vue';

import Dashboard from '@/components/Dashboard.vue';
</script>
<template>
  <div class="relative">
 
     <Navbar />
    <Banner />
    
    <div class="relative z-10">
      <Intrudocao />
      <Funcionalidades  />
      <Dashboard />
      <Orcamentos />
      <Embesed />
      <Informacoes />
      <Footer />

    </div>
    
    <WhatsAppButton />

  </div>
</template>
