<!-- ./components/forms/LoginForm.vue -->
<script>


export default {
  
  name:"Client",
 
}
</script>

<template>
  <div class="shadow-lg p-10 rounded">
    
  <div class="flex justify-center items-center h-screen">
   
  <Vueform @submit="submitForm">
    <template #empty>
      <h1 class="text-2xl font-semibold mb-8">Nouveau Client</h1>
      <FormTabs>
        
        <FormTab
          name="particulier"
          label="Particulier"
          :elements="['civilité','nom','prenom','adresse','suite_adresse','pays','adresse_email','tlf']"
        />
        <FormTab
          name="professionel"
          label="Professionel "
          :elements="['societe','numéro_siret','numeroTVA','adresse1','contact']"
        />
       
      </FormTabs>

      <FormElements class="text-center flex">
      
        

          <TextElement
            name="civilité"
            label="Civilité"
            placeholder="civilité"
            :columns="3"
            v-model="civilité"
          />
          <TextElement
            name="nom"
           label="Nom"
            placeholder="Nom"
            rules="required"
            :columns="3"
            v-model="nom"
          />
          <TextElement
            name="prenom"
           label="Prenom"
            placeholder="Prenom"
            rules="required"
            :columns="3"
            v-model="prenom"
          />

        <TextElement
          name="adresse"
          label="Adresse"
          :columns="9"
          v-model="adresse"
        />
        
        <TextElement
          name="suite_adresse"
          label="Suite adresse"
          :columns="9"
          v-model="suite_adresse"
        />
        <TextElement
          name="pays"
          label="Pays"
          :columns="4"
          v-model="pays"
        />
        
        <TextElement
          name="email"
          label="Email"
          placeholder="exemple@gmail.com"
          :columns="5"
          v-model="email"
        />
      
        <TextElement
          name="telephone"
          label="Téléphone"
          :columns="9"
          
        />
        
         <TextElement
            name="societe"
            label="Nom Societe"
            placeholder="Nom Societe"
            :columns="4"
          />
          <TextElement
            name="numéro_siret"
           label="SIRET"
            placeholder="SIRET"
            
            :columns="4"
          />
       
          <TextElement
            name="numeroTVA"
           label="TVA"
            placeholder="TVA"
           :columns="8"
          />
          <TextElement
          name="contact"
          label="Contact"
          :columns="8"
        />
        <ButtonElement
      name="register"
      :submits="true"
      button-label="Enregistrer"
      :full="true"
      size="lg"
    />
   
       
    
       
      </FormElements>
      <br/>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      
    </template>
  </Vueform>

  </div>
</div>
</template>