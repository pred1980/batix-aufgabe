<template>
  <div v-if="hasSearched" class="mt-4">
    <h2>{{ totalElements }} Ergebnisse gefunden</h2>
    <div v-if="companies.length > 0">
      <ul class="list-group">
        <li v-for="company in companies" :key="company.id" class="list-group-item">
          <h5 class="mb-1">
            <router-link target="_blank" :to="`/company/${company.id}`">{{ company.company }}</router-link>
          </h5>
          <p class="mb-1">
            {{ company.street }} {{ company.street_number }}, 
            {{ company.postcode ? company.postcode + ',' : '' }}
            {{ company.city }}, 
            {{ company.state ? company.state + ', ' : '' }}
            {{ company.country }}
          </p>
        </li>
      </ul>

      <div v-if="totalElements > 0" class="d-flex justify-content-center mb-3">
        <span class="badge bg-primary">{{ Math.min((currentPage * pageSize), totalElements) }} von {{ totalElements }}</span>
      </div>
    </div>
    <div v-else>
      <p>Keine Ergebnisse gefunden.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Company {
  id: string;
  company: string;
  street: string;
  street_number: string;
  postcode: string | null;
  city: string;
  state: string | null;
  country: string;
}

defineProps<{
  companies: Company[];
  hasSearched: boolean;
  totalElements: number;
  currentPage: number;
  pageSize: number;
}>();
</script>

<style scoped>
.list-group-item {
  margin-bottom: 10px;
  padding: 15px;
}

.router-link {
  text-decoration: none;
  color: inherit;
}

.router-link:hover {
  text-decoration: underline;
  color: #007bff;
}
</style>
