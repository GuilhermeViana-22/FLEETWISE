<template>
  <div class="relative overflow-hidden text-white">
    <div class="bg-[#fff6f2] w-full py-24 lg:py-32">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- LOGO OU IMAGEM -->
          <div class="relative max-w-md mx-auto lg:mx-0 group transition-all duration-500 ease-in-out">
            <div class="absolute -inset-4  rounded-3xl blur-lg transform rotate-1"></div>
            <div class="relative p-2 rounded-3xl border-4 border-transparent transition-all duration-500">
              <img 
                src="../assets/logos/logo-fleetWise.png" 
                alt="Logo Fleet Wise" 
                class="w-4/5 mx-auto h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="800"
              />
            </div>
          </div>

          <!-- TEXTO -->
          <div 
            class="space-y-8"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <h1 class="text-center md:text-left text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#f97316] via-[#15803d] to-[#4b5563]">
                Fleet Wise
              </span>
            </h1>

            <p class="text-lg md:text-xl text-[#4b5563] leading-relaxed">
              A <strong class="font-semibold text-[#15803d]">Fleet Wise</strong> é um software desenvolvido especialmente para empresas do setor de logística que ainda não possuem um painel integrado de dados. Com uma plataforma visual moderna e intuitiva, oferecemos uma solução completa para a gestão de coletas, entregas, rastreamento de pedidos e monitoramento inteligente de operações.
            </p>

            <p class="text-lg md:text-xl text-[#4b5563] leading-relaxed">
              Nosso objetivo é simplificar processos, melhorar o fluxo financeiro e oferecer uma visão estratégica sobre a operação logística. A <strong class="text-[#f97316]">Fleet Wise</strong> nasce da vontade de impulsionar a transformação digital no setor de transportes, aliando tecnologia de ponta a uma experiência acessível e eficiente de ponta a ponta.
            </p>

            <!-- CTA -->
            <div class="pt-2 md:pt-4 flex flex-row w-full">
              <a 
                href="https://wa.me/5599999999999" 
                target="_blank"
                class="mx-auto md:mx-0 px-8 py-3 bg-[#15803d] hover:bg-[#f97316] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Solicite uma demonstração agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ONDA COM COR DE FUNDO PERSONALIZADA -->
    <div class="w-full h-24 sm:h-32 md:h-40 overflow-hidden">
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        class="w-full h-full"
      >
        <path 
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
          opacity=".5" 
          class="fill-[#ffeee5]"
        ></path>
      </svg>
    </div>
  </div>
</template>
