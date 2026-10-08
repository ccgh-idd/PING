// PING meetings. Add new meetings at the top of this list.
// Meetings automatically move to "Past Meetings" from the 15th of their month.
// date: "4 September 2026" or "March 2026"
const MEETINGS = [
  {
    date: "8 January 2027 (tbc)",
    talks: [
      { speaker: "Matej Kritznar", title: "Infant pneumococcal transmission dynamics in a high density sampled city" },
      { speaker: "Brenda", title: "Cocooning?" }
    ]
  },
  {
    date: "13 November 2026 (tbc)",
    talks: [
      { speaker: "Greg Barnsley", title: "How epidemiologically different are IDPs really? Pneumococcal carriage and risk factors in Digaale IDP camp and Hargeisa" },
      { speaker: "Kevin van Zandvoort", title: "The impact of a MAC campaign on pneumococcal carriage. Preliminary primary and secondary endpoints from a vaccine trial in Digaale IDP camp" }
    ]
  },
  {
    date: "4 September 2026",
    talks: [
      { speaker: "Emmanuel Mendy", title: "Pneumococcal conjugate vaccine booster dose coverage and the impact of an alternative two-dose schedule compared to the standard three-dose schedule in The Gambia, a modelling study" },
      { speaker: "Lucy Ingaiza", title: "RSV seroinfection patterns in German older adults" }
    ]
  },
  {
    date: "12 June 2026",
    talks: [
      { speaker: "Dexin Gong", title: "Waning protection of long-acting RSV monoclonal antibodies in infants: a Bayesian analysis of clesrovimab and nirsevimab trial data" },
      { speaker: "Yankho Thawani", title: "Age-stratified serology defines the vaccination window to prevent RSV infection in Malawian infants." }
    ]
  },
  {
    date: "March 2026",
    talks: [
      { speaker: "Deus Thindwa", title: "Mathematical modeling to assess the drivers of rebound in 19F invasive pneumococcal disease cases after replacing PCV7 with PCV13 in the United States" },
      { speaker: "Katie Webb", title: "Analysis of the global re-emergence of ST4" }
    ]
  },
  {
    date: "January 2026",
    talks: [
      { speaker: "Kate Mellor", title: "Maternal & environmental influences on pneumococcal colonisation" },
      { speaker: "Matej Kritznar", title: "Inferring transmission direction from carriage studies" }
    ]
  },
  {
    date: "November 2025",
    talks: [
      { speaker: "John Ojal", title: "PCV programme in Kenya" },
      { speaker: "Julia Mayer", title: "Nirsevimab benefit outside RSV season" }
    ]
  },
  {
    date: "September 2025",
    talks: [
      { speaker: "Stefan Flasche", title: "Protection from a single PCV dose in the first year of life" },
      { speaker: "David Hodgson", title: "Antibody kinetics & CoPs for RSV" }
    ]
  },
  {
    date: "July 2025",
    talks: [
      { speaker: "David Hodgson", title: "Antibody kinetics & CoPs for RSV" },
      { speaker: "Kevin van Zandvoort", title: "Early impact of a PCV campaign in a Somali refugee camp" }
    ]
  },
  {
    date: "April 2025",
    talks: [
      { speaker: "Isaac Osei", title: "Identifying specific age-group reservoirs for persistent vaccine-type pneumococcal carriage in rural Gambia" },
      { speaker: "Grant McKenzie", title: "Effectiveness of reduced dose schedules to control pneumococcal carriage and disease in the Gambia, a cRCT" }
    ]
  },
  {
    date: "January 2025",
    talks: [
      { speaker: "Raymond", title: "Understanding the invasiveness of pneumococcus using genomic data" },
      { speaker: "Charles", title: "Urine-based detection of pneumococcal serotype among hospitalised children with acute respiratory infections and high antibiotic exposure in Malawi" }
    ]
  },
  {
    date: "November 2024",
    talks: [
      { speaker: "Akuzike Kalizang'Oma", title: "Three dose PCV schedules; a cRCT in Malawi" },
      { speaker: "Kaiyuan Sun", title: "RSV transmission in South African households" }
    ]
  },
  {
    date: "September 2024",
    talks: [
      { speaker: "Annabelle Wong", title: "The association of post booster IgG response and vaccine efficacy against carriage in Israeli children" },
      { speaker: "Ayaka Monoi", title: "Benefit-risk analysis of maternal RSV vaccine in South Africa" }
    ]
  },
  {
    date: "June 2024",
    talks: [
      { speaker: "Kate Gallagher", title: "A global analysis of pneumococcal invasiveness" }
    ]
  },
  {
    date: "April 2024",
    talks: [
      { speaker: "John Ojal", title: "Impact of the current, and of potential policy options of, PCV programme in Nigeria" },
      { speaker: "Stefan Flasche", title: "What to do with PCV20 in the EU?" }
    ]
  },
  {
    date: "February 2024",
    talks: [
      { speaker: "ISPPD practise", title: "Dam, Momodou, David" }
    ]
  },
  {
    date: "December 2023",
    talks: [
      { speaker: "Yoon Choi", title: "Potential impact of new higher valency PCVs in England – a mathematical modelling study" },
      { speaker: "Harry Hung", title: "A Portable and Scalable Genomic Analysis Pipeline for Streptococcus pneumoniae Surveillance: GPS Pipeline" }
    ]
  },
  {
    date: "September 2023",
    talks: [
      { speaker: "George Qian & Jane Metz", title: "Pneumococcal density, the Live Attenuated Influenza Vaccine and Transmission of Streptococcus Pneumoniae in UK families (the TOP study)" },
      { speaker: "Akuzike Kalizang'oma", title: "Intermediate results of a cRCT comparing 3p+0 and 2p+1 in Blantyre Malawi" }
    ]
  },
  {
    date: "July 2023",
    talks: [
      { speaker: "Akuzike Kalizang'oma", title: "Azithromycin resistance in pneumococci in Malawi following the MODOR trial" },
      { speaker: "Greg Barnsley", title: "Considerations for MDAs with Azithromycin in acute phase humanitarian crises" }
    ]
  },
  {
    date: "May 2023",
    talks: [
      { speaker: "Kate Gallhager", title: "The vaccine efficacy of fractional doses of PCV" },
      { speaker: "Billy Quilty", title: "An overview of the evidence on the ability of a reduced dose PCV schedules to control VT carriage" }
    ]
  },
  {
    date: "March 2023",
    talks: [
      { speaker: "Rasheed", title: "Effect of a PCV booster dose on the density of VT pneumococcal carriage" },
      { speaker: "Jada Hackmann", title: "“Evaluating Methods for Identifying and Quantifying Streptococcus Pneumoniae Subpopulations Using Next-Generation Sequencing”" }
    ]
  },
  {
    date: "January 2023",
    talks: [
      { speaker: "Yicong L", title: "Understanding the impact of pneumococcal conjugate vaccines on the spread of antibiotic resistance using phylogenetics" },
      { speaker: "Nick C", title: "NFDS models to predict the impact of switching to PCV15 or PCV20 in the UK" }
    ]
  },
  {
    date: "November 2022",
    talks: [
      { speaker: "Stephanie Lo", title: "Genomic serotyping for pneumococcal carriage – are we there yet?" },
      { speaker: "Billy Quilty", title: "Non-inferiority of reduced dose pneumococcal schedules in Nha Trang, Vietnam" }
    ]
  },
  {
    date: "September 2022",
    talks: [
      { speaker: "Megan Verma", title: "Streptococcus pneumoniae carriage in 75 countries from the RESPICAR dataset" }
    ]
  },
  {
    date: "June 2022",
    talks: [
      { speaker: "ISPPD preparation", title: "George Quian, Dam Khan, Modupeh Betts, Katherine Gallagher" }
    ]
  },
  {
    date: "March 2022",
    talks: [
      { speaker: "Brenda", title: "Widespread sharing of pneumococcal strains in a rural African setting: proximate villages are more likely to share similar strains that are carried at multiple timepoints" },
      { speaker: "Aisha", title: "Monitoring the post PCV disease burden in Nigeria through carriage surveys" }
    ]
  },
  {
    date: "January 2022",
    talks: [
      { speaker: "Deus Thindwa", title: "Immunogenicity of alternative ten-valent pneumococcal conjugate vaccine schedules in infants in Ho Chi Minh City, Vietnam: results from a single-blind, parallel-group, open-label, randomised, controlled trial" },
      { speaker: "Stephanie Lo", title: "Decoding pneumococcal genomes to inform future vaccine design" }
    ]
  },
  {
    date: "November 2021",
    talks: [
      { speaker: "Tomoka Nakamura", title: "Decline in pneumococcal disease in young children during the COVID-19 pandemic associated with suppression of seasonal respiratory viruses, despite persistent pneumococcal carriage: A prospective cohort study" },
      { speaker: "Yang Liu", title: "PCV uptake in the private market in China, a systematic review" }
    ]
  }
];
