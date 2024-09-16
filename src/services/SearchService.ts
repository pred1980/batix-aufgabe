// API Logik, Business Logik und Datenverarbeitung kommt hier her
export class SearchService {
  private readonly baseUrl = 'https://exercises.batix.help/api/v2/company';
  private company: string;
  private stockSector: string;
  private stockIndustry: string; // Umbenennung für die Industrie

  constructor(company = '', stockSector = '', stockIndustry = '') {
    this.company = company;
    this.stockSector = stockSector;
    this.stockIndustry = stockIndustry;
  }

  createSearchQuery(page: number, pageSize: number): string {
    return [
      this.company ? `search_company=${encodeURIComponent(this.company)}` : '',
      this.stockSector ? `search_stock_sector=${encodeURIComponent(this.stockSector)}` : '', 
      this.stockIndustry ? `search_stock_industry=${encodeURIComponent(this.stockIndustry)}` : '',
      `page=${page}`,
      `size=${pageSize}`
    ].filter(Boolean).join('&');
  }

  async searchCompanies(page: number, pageSize: number) {
    const query = this.createSearchQuery(page, pageSize);
    const apiUrl = this.baseUrl + `?${query}`;
    const response = await fetch(apiUrl, { method: 'GET', headers: { 'Accept': 'application/json'} });
    const data = await response.json();

    return data;
  }
}
