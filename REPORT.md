# 📌 Rättningsrapport – fed25s-the-todos-marcuswesterblom

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/R4VHVPzD)
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter)
- Presentera denna på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo tas bort från skärmen och **markeras som klar i javascript-listan**.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. bootstrap, material ui, tailwind eller liknande :)

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Kunna sortera ordningen på dina todos

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för både betyg G och VG. Det finns en hårdkodad lista med todo punkter, de presenteras i en ul/li-struktur, och det finns klickhändelser implementerade för att hantera borttagningen av todos. För att markera todo som klar, sparas ändringarna i javascript-listan och i localStorage【4:3†main.js】. Ett formulär är implementerat som tillåter användare att lägga till nya todos【4:0†index.html】. Användaren kan visa klara händelser och återställa dem till oklara【4:6†visability.js】. Det finns också funktionalitet för att sortera todos【4:2†todolist.js】. Dessutom används Tailwind CSS som ett grafiskt ramverk【4:8†vite.config.js】.

💡 **Förbättringsförslag:**  
Koden kan förbättras med mer detaljerad felhantering och förbättrad strukturering genom att använda fler moduler och komponenter för ökad återanvändbarhet och testbarhet. Att lägga till unit tester skulle öka kodens robusthet och pålitlighet ytterligare.