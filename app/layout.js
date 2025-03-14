import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import { DetailLevelProvider, useDetailLevel } from "@/context/DetailLevelContext";
import BackgroundManager from "@/components/BackgroundManager"; // for "pastoral mode"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sam Rickman",
  description: "Social data scientist",
};

export default function RootLayout({ children }) {
  // I don't love putting this here but apparently
  // this is where it needs to be for Google to index it
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sam Rickman",
    "jobTitle": "Data Scientist and AI Researcher",
    "url": "https://www.samrickman.com/",
    "image": "https://www.samrickman.com/portrait4.png",
    "sameAs": [
      "https://orcid.org/0000-0003-1921-5258",
      "https://github.com/samrickman",
      "https://scholar.google.com/citations?user=jzrMI-4AAAAJ&hl=en&oi=ao",
      "https://stackoverflow.com/users/12545041/samr"
    ],
    "affiliation": {
      "@type": "Organization",
      "name": "London School of Economics",
      "url": "https://www.lse.ac.uk/cpec"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "University of Cambridge"
      },
      {
        "@type": "EducationalOrganization",
        "name": "London School of Economics"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Goldsmiths College, University of London"
      }
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Large Language Models",
      "Natural Language Processing",
      "Machine Learning",
      "Data Science",
      "Social Care Analytics",
      "Health Informatics"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Research Fellow",
      "estimatedSalary": [
        {
          "@type": "MonetaryAmountDistribution",
          "name": "base",
          "currency": "GBP",
          "duration": "P1Y",
          "median": 60000,
        }
      ],
      "occupationLocation": [{
        "@type": "City",
        "name": "London"
      }]
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Care Policy and Evaluation Centre",
      "url": "https://www.lse.ac.uk/cpec"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "PhD",
        "educationalProgram": "Understanding Adult Social Care Using Large Language Models",
        "awardingInstitution": {
          "@type": "EducationalOrganization",
          "name": "London School of Economics"
        }
      }
    ],
    "hasPublication": [
      {
        "@type": "ScholarlyArticle",
        "headline": "Evaluating Gender Bias in Large Language Models in Long-Term Care",
        "author": { "@type": "Person", "name": "Sam Rickman" },
        "datePublished": "2024-10-01",
        "publisher": { "@type": "Organization", "name": "PLOS One" },
        "url": "https://doi.org/10.21203/rs.3.rs-5166499/v2",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://doi.org/10.21203/rs.3.rs-5166499/v2" }
      },
      {
        "@type": "ScholarlyArticle",
        "headline": "Loneliness as a Risk Factor for Time to Care Home Entry for Older Adults Receiving Community Care",
        "author": { "@type": "Person", "name": "Sam Rickman" },
        "datePublished": "2025-01-15",
        "publisher": { "@type": "Organization", "name": "Innovation in Aging" },
        "url": "https://doi.org/10.1093/geroni/igaf010",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://doi.org/10.1093/geroni/igaf010" }
      },
      {
        "@type": "ScholarlyArticle",
        "headline": "Understanding Patterns of Loneliness in Older Long-Term Care Users Using NLP",
        "author": { "@type": "Person", "name": "Sam Rickman" },
        "datePublished": "2025-02-10",
        "publisher": { "@type": "Organization", "name": "PLOS One" },
        "url": "https://eprints.lse.ac.uk/127374/",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eprints.lse.ac.uk/127374/" }
      }
    ],
    "performerIn": [
      {
        "@type": "Event",
        "name": "AI Bias in Social Care",
        "startDate": "2024-11-15T18:00",
        "location": {
          "@type": "Place",
          "name": "London School of Economics",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Houghton St",
            "addressLocality": "London",
            "postalCode": "WC2A 2AE",
            "addressCountry": "UK"
          }
        }
      },
      {
        "@type": "Event",
        "name": "Understanding Patterns of Loneliness in Older Adults",
        "startDate": "2025-02-10T14:00",
        "location": {
          "@type": "Place",
          "name": "ILPN Conference",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Houghton St",
            "addressLocality": "London",
            "postalCode": "WC2A 2AE",
            "addressCountry": "UK"
          }
        }
      }
    ],
    "award": [
      {
        "@type": "Award",
        "name": "2022 ILPN Josh Weiner Award – Best Conference Presentation"
      }
    ],
    "contributorTo": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Evaluating LLM Gender Bias in Social Care",
        "codeRepository": "https://github.com/samrickman/evaluate-llm-gender-bias-ltc"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Loneliness Detection Model",
        "codeRepository": "https://github.com/samrickman/lonelinessmodel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Imbalanced Classifier Comparison",
        "codeRepository": "https://github.com/samrickman/imbalanced-classifier-comparison"
      }
    ]
  };
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.samrickman.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <DetailLevelProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <NavbarWrapper>{children}</NavbarWrapper>
          <BackgroundManager />
        </body>
      </DetailLevelProvider>
    </html>
  );
}

