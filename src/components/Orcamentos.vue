<template>
     <!-- Pricing -->
     <section id="pricing" class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-6">Planos que Cabem no Seu Orçamento</h2>
            <p class="text-center text-tertiary max-w-2xl mx-auto mb-12">Escolha o plano ideal para o tamanho da sua operação de transportes.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <!-- Basic Plan -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-primary transition">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Básico</h3>
                        <p class="text-tertiary mb-4">Ideal para pequenos transportadores</p>
                        <div class="mb-6">
                            <span class="text-4xl font-bold">R$ 250</span>
                            <span class="text-tertiary">/mês</span>
                        </div>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Gestão de até 50 documentos/mês
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Controle financeiro básico
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Até 30 ordens de coleta/mês
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                3 tipos de veículos
                            </li>
                            <li class="flex items-center text-tertiary">
                                <svg class="w-5 h-5 text-gray-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                Relatórios avançados
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full bg-gray-100 text-dark text-center py-3 rounded-md font-medium hover:bg-gray-200 transition">Assinar Plano</a>
                    </div>
                </div>
                
                <!-- Professional Plan (Featured) -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-primary transform md:-translate-y-4">
                    <div class="bg-primary text-white text-center py-2">
                        <span class="font-medium">Mais Popular</span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Profissional</h3>
                        <p class="text-tertiary mb-4">Perfeito para médias transportadoras</p>
                        <div class="mb-6">
                            <span class="text-4xl font-bold">R$ 350</span>
                            <span class="text-tertiary">/mês</span>
                        </div>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Gestão de até 200 documentos/mês
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Controle financeiro completo
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Até 100 ordens de coleta/mês
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                6 tipos de veículos
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Relatórios personalizados
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full bg-primary text-white text-center py-3 rounded-md font-medium hover:bg-opacity-90 transition">Assinar Plano</a>
                    </div>
                </div>
                
                <!-- Enterprise Plan -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-secondary transition">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Empresarial</h3>
                        <p class="text-tertiary mb-4">Para grandes operações de transporte</p>
                        <div class="mb-6">
                            <span class="text-4xl font-bold">R$ 400</span>
                            <span class="text-tertiary">/mês</span>
                        </div>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Documentos ilimitados
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Gestão financeira avançada
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Ordens de coleta ilimitadas
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Todos tipos de veículos
                            </li>
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Relatórios e analytics avançados
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full bg-secondary text-white text-center py-3 rounded-md font-medium hover:bg-opacity-90 transition">Assinar Plano</a>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-8">
                <p class="text-tertiary">Precisa de um plano personalizado? <a href="#contact" class="text-primary font-medium hover:underline">Fale conosco</a></p>
            </div>
        </div>
    </section>
</template>