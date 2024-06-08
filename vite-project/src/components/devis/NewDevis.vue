<template>
  <div class="w-full">
    
<div  class="bg-gray-200 mt-20">
  <div id="pdf" class="container mx-auto px-4">
      <div class="flex justify-center">
          <div class="w-full md:w-3/4 lg:w-1/2 bg-white border-b-4 border-black border-t-4 border-red-600 my-10 shadow-lg">
              <div class="flex justify-between items-center p-10">
              <div class=" ">
                 
                  <img class="w-14 rounded-full  mr-4" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="iamgurdeeposahan">
                 
                  <div>
                      <h5>Customer Name</h5>
                  <p> <i class="fas fa-phone"></i> {{form?.num}}</p>
                          <p><i class="fas fa-envelope"></i>{{form?.nom_entreprise}}</p>
                          <p> <i class="fas fa-map-marker-alt  "></i>{{form?.ville}}</p>
                  </div>
                 
              
              
              </div>
                  <div class="flex items-end">
                      
                     
                      <div class="ml-4">
                          <div>
                  <h3 class="text-blue-900 justifier-center ">Devis </h3>
                  <h2>n°D25555555</h2>
                  <p>En date du : 09/09/2024</p>
                  <p>Valable jusqu'au: 15/10/2024</p>
                  </div>
                       <br/><br/>   
                       <h5>Client</h5>
                  <div class="bg-blue-900 w-3/4 h-1 border border-blue" > </div>
                  
                       <p>Mr john prenom </p>
                      
                  </div>
                  </div>
              </div>

              <hr >
  <content >
    <div id="content" class="flex justify-center  md:p-10 lg:p-20 xl:p-20 print:p-2">
        <table class="w-full text-left table-auto print:text-sm" id="table-items">
            <thead>
              <tr class="text-white bg-blue-900 print:bg-gray-300 print:text-black">
                <th class="px-4 py-2">Item</th>
                <th class="px-4 py-2 text-right">Qty</th>
                <th class="px-4 py-2 text-right">Unit Price</th>
                <th class="px-4 py-2 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 border">Shared Hosting - Simple Plan (Monthly)</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">1</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">$2.45</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">$2.45</td>
              </tr>
              <tr class="bg-blue-100 print:bg-gray-100">
                <td class="px-4 py-2 border">Domain Registration - coolstory.bro - (100% Free for First Year)</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">1</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">$12.00</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">$0.00</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">
                    Dedicated Server - Eco Boost
                    <div class="flex flex-col ml-4 text-xs print:hidden">
                        <span class="flex items-center">Intel® Xeon® Processor E5-1607 v3</span>
                        <span class="uppercase">32GB DDR4 RAM</span>
                        <span>1TB NVMe / Raid 1+0</span>
                        <span>1Gbps Network + CloudFlare DDoS protection</span>
                    </div>
                </td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">1</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">$214.99</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">$214.99</td>
              </tr>
              <tr class="bg-blue-100 print:bg-gray-100">
                <td class="px-4 py-2 border ">
                    Dedicated Server - V8 Turbo
                    <div class="flex flex-col ml-4 text-xs print:hidden">
                      <span class="flex items-center">AMD EPYC™ 7702P</span>
                        <span class="uppercase">128GB DDR4 RAM</span>
                        <span>512GB NVMe / Raid 5</span>
                        <span>100Mbit Network + CloudFlare DDoS protection</span>
                    </div>
                </td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">1</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">$322.45</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">$322.45</td>
              </tr>
              <tr class="text-white bg-blue-900 print:bg-gray-300 print:text-black" >
                <td class="invisible"></td>
                <td class="invisible"></td>
                <td class="px-4 py-2 text-right border"><span class="flag-icon flag-icon-hu print:hidden"></span> VAT</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">27%</td>
              </tr>
              <tr class="text-white bg-blue-900 print:bg-gray-300 print:text-black" >
                <td class="invisible"></td>
                <td class="invisible"></td>
                <td class="px-4 py-2 text-right border">TAX</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">$145.77</td>
              </tr>
              <tr class="text-white bg-blue-900 print:bg-gray-300 print:text-black" >
                <td class="invisible"></td>
                <td class="invisible"></td>
                <td class="px-4 py-2 font-extrabold text-right border">Total</td>
                <td class="px-4 py-2 text-right border tabular-nums slashed-zero">$685.66</td>
              </tr>
            </tbody>
          </table>  
    </div>
</content>
             
<footer class="flex flex-col items-center justify-center pb-10 leading-loose text-white bg-gray-700 print:bg-white print:pb-0">
  <span class="mt-1 text-xs print:mt-0">Invoice generated on 2024/09/06 17:35</span>
  <span class="mt-2 text-base print:text-xs">© 2024 BroHosting.  All rights reserved.</span>

</footer>

          </div>
      </div>
  </div>
</div>
<button type="button" class="w-full rounded-md bg-blue-500 py-2 px-3 text-center text-white hover:bg-blue-700" @click="exportToPDF">Export to PDF</button>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js/dist/html2pdf";

export default {
methods: {
  exportToPDF() {
    html2pdf(document.getElementById("pdf"), {
      margin: 1,
      filename: "i-was-html.pdf",
    });}
},
}
</script>

<style>

</style>