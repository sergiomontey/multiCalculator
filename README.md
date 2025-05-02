📱 Calculator App (React Native + TypeScript)

This is a fully functional calculator built with **React**, **TypeScript**, and **Expo**—designed to demonstrate real-world application of modern **software design principles** and **UI component patterns**.

**Features**

* Responsive 5-column layout with advanced operations (`√`, `^`, `Ans`, `+/-`, `()`)
* Scrollable calculation history
* Dark/light mode toggle using Context API
* Clean visual styling with rounded buttons and modular spacing

**Design Principles Used**

* **Single Responsibility Principle (SRP):** Each component focuses on one task (UI, logic, or state).
* **DRY (Don't Repeat Yourself):** Reusable styles, functions, and component logic.
* **Open/Closed Principle:** New button types can be added without changing existing code.
* **Separation of Concerns:** UI, styling, and logic are split across different files.
* **Defensive Programming:** Handles malformed input, empty expressions, and runtime errors gracefully.

**Patterns Implemented**

* **Presentational Component Pattern:** UI-only buttons (CalculatorButton).
* **Container Component Pattern:** Logic-managed parent (HomeScreen).
* **Strategy Pattern:** Dynamic styling via prop-based maps.
* **Context Pattern:** Global theming using React Context API.


