<template>
  <div class="search-box flex rounded p-3">
    <h2 class="my-4">Finden Sie Ihr Unternehmen schnell und zuverlässig.</h2>
    <p>
      <strong>Maximieren Sie Ihre Effizienz.</strong> Unsere Suchfunktion bietet Ihnen einen schnellen und gezielten Zugang zu relevanten Unternehmensdaten.
    </p>
    
    <div class="row">
      <div class="col-md-4 col-12">
        <input type="text" v-model="searchCompany" class="form-control" placeholder="Nach Unternehmen suchen...">
      </div>
      <div class="col-md-4 col-12">
        <input type="text" v-model="searchSector" class="form-control" placeholder="Nach Aktiensektor suchen...">
      </div>
      <div class="col-md-4 col-12">
        <input type="text" v-model="searchIndustry" class="form-control" placeholder="Nach Industrie suchen...">
      </div>
      <div class="col-md-4 col-12 mt-3">
        <button class="btn btn-custom" :disabled="isButtonDisabled" @click="handleSearch()">Suchen</button>
      </div>
    </div>

    <CompanyList 
      :companies="companies" 
      :hasSearched="hasSearched" 
      :totalElements="totalElements" 
      :currentPage="currentPage" 
      :pageSize="pageSize" 
    />
    
    <Pagination 
      :currentPage="currentPage" 
      :totalPages="totalPages"
      @changePage="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { useSearch } from '../composables/useSearch';
import CompanyList from './CompanyList.vue';
import Pagination from './Pagination.vue';

const { searchCompany, searchSector, searchIndustry, companies, currentPage, totalPages, totalElements, pageSize, hasSearched, isButtonDisabled, handleSearch } = useSearch();
</script>

<style scoped lang="scss">
.search-box {
  background-color: $bg-primary-subtle;
}
</style>
