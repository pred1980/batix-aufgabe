import { ref, computed } from 'vue';
import { SearchService } from '../services/SearchService';

export function useSearch() {
  const searchCompany = ref<string>('');
  const searchSector = ref<string>('');
  const searchIndustry = ref<string>('');
  const companies = ref<any[]>([]);
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(0);
  const totalElements = ref<number>(0);
  const pageSize = ref<number>(20);
  const hasSearched = ref(false);

  const isButtonDisabled = computed(() => 
    !searchCompany.value && !searchSector.value && !searchIndustry.value
  );

  const handleSearch = async (page = 1) => {
    const searchService = new SearchService(searchCompany.value, searchSector.value, searchIndustry.value);
    const data = await searchService.searchCompanies(page, pageSize.value);
    companies.value = data.content || [];
    totalPages.value = data.totalPages;
    totalElements.value = data.totalElements;
    currentPage.value = data.number;
    pageSize.value = data.pageSize;
    hasSearched.value = true;
    };

  return {
    searchCompany,
    searchSector,
    searchIndustry,
    companies,
    currentPage,
    totalPages,
    totalElements,
    pageSize,
    hasSearched,
    isButtonDisabled,
    handleSearch
  };
}
