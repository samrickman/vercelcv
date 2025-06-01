export default function Head() {
  return (
    <>
      {/* Canonical link */}
      <link rel="canonical" href="https://www.samrickman.com/" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          "application/ld+json": {
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
                "author": { "@type": "Person", "name": "Sam Rickman", "url": "http://www.samrickman.com" },
                "datePublished": "2024-10-01T18:00",
                "publisher": { "@type": "Organization", "name": "Research Square (pre-print)" },
                "url": "https://doi.org/10.21203/rs.3.rs-5166499/v2",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://doi.org/10.21203/rs.3.rs-5166499/v2" }
              },
              {
                "@type": "ScholarlyArticle",
                "headline": "Evaluating Gender Bias in Large Language Models in Long-Term Care",
                "author": { "@type": "Person", "name": "Sam Rickman", "url": "http://www.samrickman.com" },
                "datePublished": "2025-03-21T18:00",
                "publisher": { "@type": "Organization", "name": "Adult Social Care Policy Research Unit (ASCRU) report" },
                "url": "https://ascru.nihr.ac.uk/wp-content/uploads/2025/03/rickman-2025-evaluating-gender-bias-cpec-working-paper.pdf",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ascru.nihr.ac.uk/wp-content/uploads/2025/03/rickman-2025-evaluating-gender-bias-cpec-working-paper.pdf" }
              },
              {
                "@type": "ScholarlyArticle",
                "headline": "Loneliness as a Risk Factor for Time to Care Home Entry for Older Adults Receiving Community Care",
                "author": { "@type": "Person", "name": "Sam Rickman", "url": "http://www.samrickman.com" },
                "datePublished": "2025-01-15T18:00",
                "publisher": { "@type": "Organization", "name": "Innovation in Aging" },
                "url": "https://doi.org/10.1093/geroni/igaf010",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://doi.org/10.1093/geroni/igaf010" }
              },
              {
                "@type": "ScholarlyArticle",
                "headline": "Understanding Patterns of Loneliness in Older Long-Term Care Users Using NLP and LLMs",
                "author": { "@type": "Person", "name": "Sam Rickman", "url": "http://www.samrickman.com" },
                "datePublished": "2025-04-02T18:00",
                "publisher": { "@type": "Organization", "name": "PLOS One", "url": "http://www.samrickman.com" },
                "url": "https://doi.org/10.1371/journal.pone.0319745",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://doi.org/10.1371/journal.pone.0319745" }
              }
            ],
            "performerIn": [
              {
                "@type": "Event",
                "name": "Fairness in LLMs in the Public Sector",
                "organizer": "LSE International Inequalities Institute",
                "performer": "Sam Rickman",
                "eventStatus": "https://schema.org/EventScheduled",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "startDate": "2025-09-18T14:00",
                "location": {
                  "@type": "Place",
                  "name": " London School of Economics",
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
                "name": "AI Bias in Social Care",
                "organizer": "Global Observatory of Long-Term Care",
                "performer": "Dave Van Veen",
                "performer": "Allison Koenecke",
                "eventStatus": "https://schema.org/EventScheduled",
                "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
                "startDate": "2024-11-15T18:00",
                "endDate": "2024-11-15T18:00",
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
                "name": "Evaluating Gender Bias in Large Language Models (LLMs) in Long-Term Care",
                "organizer": "International Long-Term Care Policy Network",
                "performer": "Sam Rickman",
                "eventStatus": "https://schema.org/EventScheduled",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "startDate": "2024-13-09T14:00",
                "location": {
                  "@type": "Place",
                  "name": " Euskalduna Conference Centre",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Abandoibarra Etorb., 4",
                    "addressLocality": "Abando",
                    "postalCode": "48011 Bilbo",
                    "addressCountry": "Bizkaia, Spain"
                  }
                }
              },
              {
                "@type": "Event",
                "name": "Understanding Patterns of Loneliness in Older Adults using Large Language Models (LLMs) in social care",
                "organizer": "International Long-Term Care Policy Network",
                "performer": "Sam Rickman",
                "eventStatus": "https://schema.org/EventScheduled",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "startDate": "2022-08-09T14:00",
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
          }
        }}
      />
    </>
  );
}
