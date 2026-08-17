export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string; // Lucide icon name
  symptoms: string[];
  treatments: string[];
  metaTitle: string;
  metaDesc: string;
}

export const services: Service[] = [
  {
    slug: "diabetes-management",
    title: "Diabetes & Blood Pressure Management",
    shortDesc:
      "Expert care for Type 1, Type 2 diabetes and hypertension with personalized treatment plans.",
    fullDesc:
      "Dr. Onkar Kakare provides comprehensive diabetes and hypertension management including blood sugar monitoring, HbA1c tracking, lifestyle counselling, and medication management. Patients receive individualized care plans designed to minimize complications and improve quality of life.",
    icon: "Activity",
    symptoms: [
      "High blood sugar",
      "Frequent urination",
      "Fatigue",
      "Elevated blood pressure",
      "Blurred vision",
      "Numbness in feet",
    ],
    treatments: [
      "Blood glucose monitoring",
      "HbA1c testing",
      "Insulin therapy",
      "Antihypertensive medication",
      "Diet & lifestyle counselling",
      "Regular follow-up care",
    ],
    metaTitle: "Diabetes & Blood Pressure Treatment | Sunshine Hospital Kolhapur",
    metaDesc:
      "Expert diabetes and blood pressure management at Sunshine Multi-Speciality Center, Rankala, Kolhapur. Dr. Onkar Kakare — Diabetologist & Internal Medicine Specialist.",
  },
  {
    slug: "pain-management",
    title: "Pain Management",
    shortDesc:
      "Effective relief for chronic and acute pain conditions through tailored treatment protocols.",
    fullDesc:
      "Our pain management services address both acute and chronic pain conditions. Dr. Kakare evaluates the underlying cause of pain and creates comprehensive treatment plans including medication, physiotherapy referrals, and lifestyle modifications to restore your quality of life.",
    icon: "Shield",
    symptoms: [
      "Chronic back pain",
      "Joint pain",
      "Muscle aches",
      "Nerve pain",
      "Headaches",
      "Post-surgical pain",
    ],
    treatments: [
      "Pain assessment & diagnosis",
      "Medication management",
      "Anti-inflammatory therapy",
      "Physiotherapy referral",
      "Nerve block consultation",
      "Lifestyle modification",
    ],
    metaTitle: "Pain Management Specialist | Sunshine Hospital Kolhapur",
    metaDesc:
      "Chronic and acute pain management at Sunshine Multi-Speciality Center, Kolhapur. Personalized pain relief treatment by Dr. Onkar Kakare.",
  },
  {
    slug: "thyroid-treatment",
    title: "Thyroid Disease Treatment",
    shortDesc:
      "Diagnosis and management of hypothyroidism, hyperthyroidism, and thyroid nodules.",
    fullDesc:
      "Thyroid disorders affect millions of Indians and often go undiagnosed. Sunshine Hospital offers comprehensive thyroid evaluation including TSH, T3, T4 testing, ultrasound referral, and long-term management of hypothyroidism, hyperthyroidism, and goitre under Dr. Kakare's expert guidance.",
    icon: "Zap",
    symptoms: [
      "Unexplained weight gain or loss",
      "Fatigue and weakness",
      "Hair loss",
      "Cold or heat intolerance",
      "Palpitations",
      "Neck swelling",
    ],
    treatments: [
      "Thyroid function tests (TSH, T3, T4)",
      "Ultrasound thyroid",
      "Thyroxine replacement therapy",
      "Anti-thyroid medication",
      "Radioiodine therapy referral",
      "Surgical referral if required",
    ],
    metaTitle: "Thyroid Treatment in Kolhapur | Sunshine Hospital",
    metaDesc:
      "Expert thyroid disease diagnosis and treatment in Kolhapur. Hypothyroidism, hyperthyroidism, goitre management by Dr. Onkar Kakare at Sunshine Multi-Speciality Center.",
  },
  {
    slug: "gastric-disorders",
    title: "Gastric Disorders",
    shortDesc:
      "Treatment for acidity, GERD, IBS, gastritis, and other digestive system conditions.",
    fullDesc:
      "Digestive health is central to overall wellbeing. Our gastric disorder services cover evaluation and treatment of acidity, gastroesophageal reflux (GERD), irritable bowel syndrome (IBS), peptic ulcers, and gastritis. Dr. Kakare provides detailed dietary counselling alongside medical management.",
    icon: "Heart",
    symptoms: [
      "Persistent acidity",
      "Heartburn",
      "Bloating and gas",
      "Nausea and vomiting",
      "Abdominal pain",
      "Altered bowel habits",
    ],
    treatments: [
      "Detailed dietary assessment",
      "H. pylori testing",
      "Antacid & PPI therapy",
      "Endoscopy referral",
      "Probiotic therapy",
      "Lifestyle and diet counselling",
    ],
    metaTitle: "Gastric Disorder Treatment | Sunshine Hospital Kolhapur",
    metaDesc:
      "Acidity, GERD, IBS, and gastritis treatment in Kolhapur. Sunshine Multi-Speciality Center offers expert gastric care by Dr. Onkar Kakare.",
  },
  {
    slug: "respiratory-problems",
    title: "Respiratory Problems",
    shortDesc:
      "Diagnosis and treatment of asthma, bronchitis, pneumonia, and other lung conditions.",
    fullDesc:
      "Respiratory conditions can significantly impact daily life. Sunshine Hospital provides comprehensive evaluation and management of asthma, COPD, bronchitis, pneumonia, and upper respiratory infections. We offer spirometry, chest X-ray referral, and evidence-based treatment protocols.",
    icon: "Wind",
    symptoms: [
      "Shortness of breath",
      "Persistent cough",
      "Wheezing",
      "Chest tightness",
      "Frequent respiratory infections",
      "Coughing up blood (haemoptysis)",
    ],
    treatments: [
      "Spirometry testing",
      "Chest X-ray & CT referral",
      "Bronchodilator therapy",
      "Inhaled corticosteroids",
      "Antibiotic therapy",
      "Pulmonologist referral",
    ],
    metaTitle: "Respiratory Treatment | Sunshine Hospital Kolhapur",
    metaDesc:
      "Expert treatment for asthma, bronchitis, pneumonia and respiratory conditions in Kolhapur. Dr. Onkar Kakare at Sunshine Multi-Speciality Center.",
  },
  {
    slug: "emergency-care",
    title: "Emergency & 24/7 Care",
    shortDesc:
      "Round-the-clock emergency services with immediate medical attention, 24 hours a day, 7 days a week.",
    fullDesc:
      "Sunshine Multi-Speciality Center operates 24/7 to ensure you receive immediate medical attention whenever an emergency arises. Our facility is equipped for medical emergencies including acute chest pain, severe breathlessness, diabetic crises, and trauma — with prompt triage and specialist referral when needed.",
    icon: "AlertCircle",
    symptoms: [
      "Severe chest pain",
      "Difficulty breathing",
      "High fever",
      "Severe abdominal pain",
      "Diabetic emergencies",
      "Acute trauma",
    ],
    treatments: [
      "24/7 emergency triage",
      "IV fluid management",
      "Emergency medication",
      "Oxygen therapy",
      "ECG monitoring",
      "Specialist referral & transfer",
    ],
    metaTitle: "24/7 Emergency Hospital Kolhapur | Sunshine Multi-Speciality Center",
    metaDesc:
      "24-hour emergency hospital in Rankala, Kolhapur. Sunshine Multi-Speciality Center provides round-the-clock medical care and emergency services.",
  },
];
