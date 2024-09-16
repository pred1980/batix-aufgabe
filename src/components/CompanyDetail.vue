<template>
  <div v-if="company" class="d-flex justify-content-center mt-5">
    <div class="card" style="width: 22rem;">
      <img src="https://picsum.photos/300" :alt="company.company" class="card-img-top">
      
      <div class="card-body">
        <h5 class="card-title">{{ company.company }}</h5>
        <p class="card-text">
          {{ company.street }} {{ company.street_number }}, {{ company.city }}, {{ company.country }}
        </p>
      </div>

      <!-- Kontaktinformationen -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <strong>Kontaktperson:</strong> {{ company.contact_first_name }} {{ company.contact_last_name }}
        </li>
        <li class="list-group-item">
          <strong>Job Title:</strong> {{ company.contact_job_title }}
        </li>
        <li class="list-group-item">
          <strong>Telefon:</strong> {{ company.contact_phone_number }}
        </li>
        <li class="list-group-item">
          <strong>Email:</strong> <a :href="'mailto:' + company.contact_email">{{ company.contact_email }}</a>
        </li>
      </ul>

      <!-- Finanzinformationen -->
      <div class="card-body">
        <h6>Bankinformationen</h6>
        <p class="card-text">
          <strong>IBAN:</strong> {{ company.bank_iban }}
        </p>
        <p class="card-text">
          <strong>Aktiensektor:</strong> {{ company.stock_sector }}
        </p>
        <p class="card-text">
          <strong>Branche:</strong> {{ company.stock_industry }}
        </p>
      </div>
    </div>  
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

interface Company {
  id: string;
  company: string;
  street: string;
  street_number: string;
  city: string;
  country: string;
  contact_first_name: string;
  contact_last_name: string;
  contact_job_title: string;
  contact_phone_number: string;
  contact_email: string;
  bank_iban: string;
  stock_sector: string;
  stock_industry: string;
}

const route = useRoute();
const company = ref<Company | null>(null);

const companyId = route.params.id as string;

onMounted(async () => {
  const response = await fetch(`https://exercises.batix.help/api/v2/company/${companyId}`);
  const data = await response.json();
  company.value = data;
});
</script>

<style scoped>
.card {
  margin: 20px;
}
</style>
