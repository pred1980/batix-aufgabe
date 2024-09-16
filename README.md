Projektstruktur

Damit das Ganze übersichtlich bleibt, habe ich das Projekt in verschiedene Ordner unterteilt. So ist die Logik sauber getrennt und es ist leicht, sich im Code zurechtzufinden oder später Änderungen vorzunehmen.

    components: Hier liegen die UI-Komponenten, also alles, was mit der Darstellung zu tun hat. Zum Beispiel:
        CompanyList.vue: Zeigt die Liste der Suchergebnisse an.
        SearchForm.vue: Das Formular, um die Sucheingaben zu machen.
        Pagination.vue: Steuert die Paginierung, also das Blättern durch die Ergebnisse.
        CompanyDetail.vue: Zeigt die Detailansicht eines Unternehmens, wenn man auf einen Eintrag in der Liste klickt.

    composables: Hier habe ich die gesamte Logik der Suche untergebracht.
        useSearch.ts: Enthält den Zustand und die Methoden für die Suche (also alles, was mit der API-Kommunikation und den Suchparametern zu tun hat).

    services: Dieser Ordner kümmert sich um die API-Aufrufe.
        SearchService.ts: Hier wird der eigentliche API-Call gemacht und die Daten von der Batix Company API abgeholt.

    views: In den Views landen die Seiten der App. Aktuell gibt es hier nur eine Ansicht:
        SearchView.vue: Diese Seite enthält das Suchformular und zeigt die Suchergebnisse an.

Warum diese Aufteilung?

Ich habe das so gemacht, damit der Code modular bleibt. Das bedeutet, dass UI und Logik schön voneinander getrennt sind. So ist es später leichter, etwas zu ändern oder zu erweitern, ohne sich durch unübersichtlichen Code wühlen zu müssen. (zumindest finde ich das recht angenehm so ^^)

Installation & Start

1. Abhängigkeiten installieren: npm install
2. Projekt starten: npm start