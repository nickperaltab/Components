# CRM Components Library

A collection of reusable React components for CRM applications, built with Material-UI and Storybook.

## Components

- **Button**: Primary and secondary button variants with disabled states
- **ContactForm**: Form for managing contact information with validation
- **DataTable**: Data display component with loading and empty states
- **Sidebar**: Collapsible navigation sidebar
- **PageLayout**: Standard page layout with sidebar and header

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd crm-components
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook:
```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`

## Development

### Project Structure

```
src/
  ├── components/     # React components
  ├── stories/       # Storybook stories
  └── ...
```

### Adding New Components

1. Create a new component in `src/components/`
2. Create corresponding stories in `src/stories/`
3. Run Storybook to test and document your component

### Building

To build the Storybook static site:

```bash
npm run build-storybook
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
