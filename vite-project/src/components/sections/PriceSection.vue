<script setup lang="ts">
import { ref } from 'vue'
import PriceTable from '../PriceTable.vue'

const isAnnual = ref(false)
interface Props {
  yearly: boolean
  popular?: boolean
  planName: string
  price: {
    monthly: number
    yearly: number
  }
  planDescription: string
  features: string[]
}

const props = defineProps<Props>()

</script>

<template>
    <section>

        <!-- Pricing toggle -->
        <div class="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
            <div class="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
                <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                    <span class="absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out" :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
                </span>
                <button
                    class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
                    :class="isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'"
                    @click="isAnnual = true"
                    :aria-pressed="isAnnual"
                >Yearly <span
                    :class="isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'"></span></button>
                <button
                    class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
                    :class="isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'"
                    @click="isAnnual = false"
                    :aria-pressed="isAnnual"
                >Monthly</button>
            </div>
        </div>        
        <!-- Pricing table -->
        <div class="max-w-sm mx-auto grid gap-6 lg:grid-cols-4 items-start lg:max-w-none">

            <!-- Pricing tab 1 -->
            <div class="h-full">
                <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                    <div class="mb-5">
                        <div class="text-slate-900 dark:text-slate-200 font-semibold mb-1">pro</div>
                        <div class="inline-flex items-baseline mb-2">
                            <span class="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                            <span class="text-slate-900 dark:text-slate-200 font-bold text-4xl" v-text="isAnnual ? '0' : '0'"></span>
                            <span class="text-slate-500 font-medium">/mo</span>
                        </div>

                        <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                            DEMARER
                        </a>
                    </div>
                    <div class="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                    <ul class="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Facture</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Devis</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Facturation HT / TTC</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Gestion des acomptes</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Votre logo sur les documents

                                Support client gratuit par chat en 6h</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Support client gratuit par chat en 6h</span>
                        </li>
                    </ul>
                </div>
            </div>
        
            <!-- Pricing tab 2 -->
            <div class="h-full dark">
                <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                    <div class="absolute top-0 right-0 mr-6 -mt-4">
                        <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
                    </div>
                    <div class="mb-5">
                        <div class="text-slate-900 dark:text-slate-200 font-semibold mb-1">Perform</div>
                        <div class="inline-flex items-baseline mb-2">
                            <span class="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                            <span class="text-slate-900 dark:text-slate-200 font-bold text-4xl" v-text="isAnnual ? '12' : '15'"></span>
                            <span class="text-slate-500 font-medium">/mo</span>
                        </div>

                        <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                            DEMARER
                        </a>
                    </div>
                    <div class="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                    <ul class="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Personnalisation complète des documents</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Téléchargement des documents via email</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Suivi commercial des devis</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Support client gratuit par chat en 5mn</span>
                        </li>
                    </ul>
                </div>
            </div>
        
            <!-- Pricing tab 3 -->
            <div class="h-full">
                <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                    <div class="mb-5">
                        <div class="text-slate-900 dark:text-slate-200 font-semibold mb-1">VIP</div>
                        <div class="inline-flex items-baseline mb-2">
                            <span class="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                            <span class="text-slate-900 dark:text-slate-200 font-bold text-4xl" v-text="isAnnual ? '55' : '59'"></span>
                            <span class="text-slate-500 font-medium">/mo</span>
                        </div>

                        <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                            DEMARER
                        </a>
                    </div>
                    <div class="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                    <ul class="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Factures d’avancements</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Factures d’abonnements</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Support client gratuit par chat en 1mn</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Pricing tab 5 -->
            <div class="h-full">
                <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                    <div class="mb-5">
                        <div class="text-slate-900 dark:text-slate-200 font-semibold mb-1">Pilotage</div>
                        <div class="inline-flex items-baseline mb-2">
                            <span class="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                            <span class="text-slate-900 dark:text-slate-200 font-bold text-4xl" v-text="isAnnual ? '500' : '550'"></span>
                            <span class="text-slate-500 font-medium">/mo</span>
                        </div>

                        <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                            DEMARER
                        </a>
                    </div>
                    <div class="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                    <ul class="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Fonctions complémentaires</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Suivi des objectifs et indicateurs clés en temps réel</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Accompagnement au pilotage d’entreprise par un Expert</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        
        </div>
    </section>
</template>