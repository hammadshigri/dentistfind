Report on Implementation: Card Example of Summary of Practice

1. Selection of Components and their Presentation
   Organisation of the Components: The implementation of the PracticeSummaryCard follows a compositional approach in which the main component (PracticeSummaryCard) serves as a container for smaller, more specific components (MetricItem, StatusBadge, TrendVisualisation) and keeps everything separate to ensure that the "logical pieces" of information (like the conversion-rate-based calculation of the Status Colour) remain isolated from the rest of the code and the code is more readable and testable overall.

Styling Decisions: For styling purposes, I chose to use TailwindCSS as my CSS framework for this project. This allows for rapid development of a highly polished, visually attractive interface with great control over the spacing and typography of the text, while reducing the need to leave the HTML coding for styling purposes. Additionally, Tailwind provides a complete hover-timing and transition-management tool, which keeps me from creating separate styles for each Component when implementing hover states and transitions.

Standardisation and Responsiveness: To achieve visual consistency, I used a standardised spacing scale (e.g., all practices are 8pts apart) and handled font weights to make the Practice name larger than its corresponding Metric. To implement responsiveness, I built the PracticeSummaryCard component using a mobile-first design approach and, consequently, implemented a flexible layout (Flexbox) for the cards. For mobile views, the cards will stack vertically and for desktop views, the cards will be displayed in a grid or row layout.

Scaling and Use Within the Real World
Dashboard Integration:
To create a UI library of using common components, such as the StatusBadge or MetricItem, as a base design system or Storybook would be useful to enable reusability of the generic metadata across all of the applications created for PracticeFuel.

Theming: It would be helpful to create a centralised Theme Provider to enable globally-changing Themes for colours, spacing, and all the elements that are used in practice.
uture Improvements (Additional Day Plan)

Accessibility- Add comprehensive ARIA labels for the trend visualisation and ensure all status indicators have hidden text so that screen readers can pick them up.

Testing- Write unit tests in Jest and React Testing Library for the High Performer/ At-risk status logic. Write integration tests for rendering responsively.

Localization- To support multiple languages, use translation files to extract all hard-coded strings e.g. ‘new patients this month’.

Animation- To enhance the feeling of dynamism with the data represented in the trend bar, we will add subtle animations at their point of entry e.g. Framer Motion.

3 Time Management

The development time of two hours was allocated as follows;

Set Up (15 min)- Created the project structure, established the TypeScript type for PracticeSummary and created the mock data objects.
Layout/Structure (45 min)- Built core React functional components and mapped the data model to the UI components.
Styling & Polish (45 min)- Created trends visualised in CSS and improved mobile/ desktop response by adding hover effects.
Documentation (15 min)- Adapted the README.md to describe the technical decisions as well as scaling strategies.

## How to Run the Project

1. Clone the repo.

2. Navigate to the project directory:

   ```bash
   cd dentistfind-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)
