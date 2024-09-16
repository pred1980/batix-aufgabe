<!-- src/components/Pagination.vue -->
<template>
    <div v-if="totalPages > 1" class="pagination justify-content-center">
      <nav aria-label="Company Page Navigation">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" 
              href="#" 
              :class="{ disabled: currentPage <= 1 }" 
              @click.prevent="previousPage">Vorherige Seite</a>
          </li>
          <li class="page-link">{{ currentPage }}/{{ totalPages }}</li>
          <li class="page-item">
            <a class="page-link" 
              href="#"
              :class="{ disabled: currentPage >= totalPages }"
              @click.prevent="nextPage">Nächste Seite</a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    currentPage: number;
    totalPages: number;
  }>();
  
  const emit = defineEmits<{
    (e: 'changePage', page: number): void;
  }>();
  
  const previousPage = () => {
    if (props.currentPage > 1) {
      emit('changePage', props.currentPage - 1); // Vorherige Seite
    }
  };
  
  const nextPage = () => {
    if (props.currentPage < props.totalPages) {
      emit('changePage', props.currentPage + 1); // Nächste Seite
    }
  };
  </script>
  
  <style scoped>
  .page-link {
    cursor: pointer;
  }
  </style>
  