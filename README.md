This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the required npm packages by running:

```bash
npm install
```

After the installation is complete, make sure to create your own `env.` This file is used to store environment variables, including your API key. Please replace `your_api_key` with your actual API key in the `env.` file.

Once you have your `env.` file set up, run the development server:


Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

### Environment Variables
### Look in the api_key.txt for api key, i know this is not secure but it was the only for you to get the api key to run this application, you can always create your own api key from WHOISXML, i will delete this api key in 2 or more days
Required environment variables in your `.env`:
```bash
NEXT_PUBLIC_WHOISXML_API_KEY=your_api_key
```

## Application Features

### API Endpoints

#### Domain Lookup API (`/api/lookup`)
- **Endpoint**: POST `/api/lookup`
- **Purpose**: Fetches domain and contact information using the WHOISXML API
- **Request Body**:
  ```json
  {
    "domain": "example.com",
    "type": "domain" | "contact"
  }
  ```
- **Response**: Returns detailed domain or contact information based on the lookup type

### Key Components

#### DomainLookup (`/app/components/DomainLookup.tsx`)
- Main component that handles the domain lookup interface
- Features:
  - Domain name input field
  - Lookup type selector (domain/contact)
  - Real-time error handling
  - Loading states
  - Animated background with gradient effects

#### DomainInfoTable (`/app/components/DomainInfoTable.tsx`)
- Displays domain-specific information including:
  - Domain name
  - Registrar
  - Registration date
  - Expiration date
  - Estimated domain age

#### ContactInfoTable (`/app/components/ContactInfoTable.tsx`)
- Shows contact-related information including:
  - Registrant details
  - Administrative contact
  - Technical contact
  - Organization information

### Technology Stack

- **Frontend**: Next.js with TypeScript
- **UI Components**: Shadcn UI
- **API Integration**: WHOISXML API
- **Styling**: Tailwind CSS



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
