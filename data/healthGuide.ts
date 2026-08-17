export interface HealthGuideArticle {
  slug: string;
  term: string;
  title: string;
  intro: string;
  definition: string;
  types?: string[];
  symptoms: string[];
  causes: string[];
  treatment: string[];
  prevention: string[];
  whenToSeeDoctor: string;
  faq: { question: string; answer: string }[];
  relatedServices: string[];
  metaTitle: string;
  metaDesc: string;
}

export const healthGuideArticles: HealthGuideArticle[] = [
  {
    slug: "what-is-diabetes",
    term: "Diabetes",
    title: "What is Diabetes? — Causes, Symptoms & Treatment",
    intro:
      "Diabetes is one of India's most common chronic conditions, affecting over 77 million adults. Understanding diabetes — its types, warning signs, and management options — is the first step to living well with this condition.",
    definition:
      "Diabetes mellitus is a group of metabolic diseases characterised by high blood sugar (hyperglycaemia) resulting from defects in insulin production, insulin action, or both. When blood glucose levels remain consistently elevated, it damages blood vessels and nerves throughout the body over time.",
    types: ["Type 1 Diabetes", "Type 2 Diabetes", "Gestational Diabetes", "Prediabetes"],
    symptoms: [
      "Excessive thirst (polydipsia)",
      "Frequent urination (polyuria)",
      "Unexplained weight loss",
      "Fatigue and weakness",
      "Blurred vision",
      "Slow-healing wounds",
      "Numbness or tingling in hands and feet",
      "Recurrent infections",
    ],
    causes: [
      "Insulin deficiency (Type 1 — autoimmune)",
      "Insulin resistance (Type 2 — lifestyle and genetics)",
      "Family history of diabetes",
      "Obesity and physical inactivity",
      "Unhealthy diet high in refined carbohydrates",
      "Hormonal changes during pregnancy (gestational diabetes)",
    ],
    treatment: [
      "Blood glucose monitoring (glucometer, continuous glucose monitor)",
      "HbA1c testing every 3 months",
      "Oral antidiabetic medications (metformin, glipizide, etc.)",
      "Insulin therapy for Type 1 and some Type 2 patients",
      "Dietary modification — low glycaemic index foods",
      "Regular physical activity",
      "Regular follow-up with a diabetologist",
    ],
    prevention: [
      "Maintain a healthy weight — even 5–10% weight loss reduces Type 2 risk significantly",
      "Exercise at least 30 minutes daily, 5 days a week",
      "Eat a balanced diet — less sugar, refined carbs, and processed food",
      "Get regular blood sugar checks if you have risk factors",
      "Quit smoking — smokers have 30–40% higher risk of Type 2 diabetes",
    ],
    whenToSeeDoctor:
      "See a doctor immediately if you experience excessive thirst, frequent urination, unexplained weight loss, or blurred vision. If you have risk factors (family history, obesity, sedentary lifestyle), get a fasting blood sugar test at least once a year.",
    faq: [
      {
        question: "Can diabetes be cured?",
        answer:
          "Type 1 diabetes currently has no cure, but can be managed with insulin therapy. Type 2 diabetes can go into remission with significant weight loss and lifestyle changes, though ongoing monitoring is recommended. Prediabetes can be reversed with early intervention.",
      },
      {
        question: "What is a normal blood sugar level?",
        answer:
          "A normal fasting blood glucose is below 100 mg/dL. Prediabetes is 100–125 mg/dL. Diabetes is diagnosed at 126 mg/dL or above (on two separate tests). After meals (2-hour postprandial), below 140 mg/dL is normal.",
      },
      {
        question: "Is diabetes genetic?",
        answer:
          "Both Type 1 and Type 2 diabetes have a genetic component. If a parent has Type 2 diabetes, your lifetime risk roughly doubles. However, lifestyle choices (diet, exercise, weight management) play an equally important role and can significantly reduce your risk.",
      },
    ],
    relatedServices: ["diabetes-management"],
    metaTitle: "What is Diabetes? Causes, Symptoms & Treatment | Sunshine Hospital Kolhapur",
    metaDesc:
      "Learn about diabetes — types, causes, symptoms, and treatment options. Expert guide by Dr. Onkar Kakare, Diabetologist at Sunshine Multi-Speciality Center, Kolhapur.",
  },
  {
    slug: "what-is-hypertension",
    term: "Hypertension",
    title: "What is Hypertension (High Blood Pressure)? — Guide for Indian Patients",
    intro:
      "High blood pressure (hypertension) is called the 'silent killer' because it rarely causes symptoms until it has caused serious damage. In India, 1 in 4 adults has hypertension — and many don't know it.",
    definition:
      "Hypertension is a condition in which the force of blood against artery walls is consistently too high (140/90 mmHg or above). Over time, this pressure damages arteries and vital organs including the heart, brain, and kidneys — significantly increasing the risk of heart attack, stroke, and kidney failure.",
    symptoms: [
      "Often no symptoms in early stages",
      "Headache (especially early morning)",
      "Dizziness or lightheadedness",
      "Blurred vision",
      "Shortness of breath",
      "Chest pain (in severe cases — seek emergency care immediately)",
      "Nosebleeds (in severe hypertensive crises)",
    ],
    causes: [
      "Excess salt (sodium) intake — common in Indian diets",
      "Obesity and overweight",
      "Physical inactivity",
      "Excessive alcohol consumption",
      "Stress",
      "Family history of hypertension",
      "Chronic kidney disease",
      "Older age",
    ],
    treatment: [
      "Antihypertensive medications (ACE inhibitors, ARBs, beta-blockers, calcium channel blockers)",
      "Low-sodium diet (reduce salt, pickles, processed foods)",
      "Regular aerobic exercise (30 min, 5×/week)",
      "Weight loss if overweight",
      "Quit smoking and reduce alcohol",
      "Stress management — yoga, meditation",
      "Regular blood pressure monitoring at home",
    ],
    prevention: [
      "Limit salt intake to less than 5g/day (about 1 teaspoon)",
      "Eat plenty of fruits, vegetables, and low-fat dairy (DASH diet)",
      "Exercise regularly",
      "Maintain healthy weight",
      "Limit alcohol",
      "Get blood pressure checked at least annually if you are over 30",
    ],
    whenToSeeDoctor:
      "Visit a doctor if your blood pressure consistently reads 140/90 mmHg or above. Seek emergency care immediately if your reading exceeds 180/120 mmHg (hypertensive crisis) or if you have chest pain, severe headache, or vision changes.",
    faq: [
      {
        question: "What blood pressure number is dangerous?",
        answer:
          "A reading of 180/120 mmHg or above is a hypertensive crisis and requires immediate medical attention. Readings consistently above 140/90 mmHg indicate hypertension that needs treatment.",
      },
      {
        question: "Can hypertension be controlled with only lifestyle changes?",
        answer:
          "Stage 1 hypertension (130–139/80–89 mmHg) can sometimes be managed with lifestyle changes alone for 3–6 months. Stage 2 (140/90 or above) usually requires medication alongside lifestyle changes. Your doctor will advise based on your specific situation.",
      },
    ],
    relatedServices: ["diabetes-management"],
    metaTitle: "What is Hypertension? Blood Pressure Guide | Sunshine Hospital Kolhapur",
    metaDesc:
      "Complete guide to hypertension (high blood pressure) — causes, symptoms, treatment and prevention. Expert advice from Dr. Onkar Kakare at Sunshine Hospital, Kolhapur.",
  },
  {
    slug: "managing-thyroid-disorders",
    term: "Thyroid Disorders",
    title: "Thyroid Disorders — Hypothyroidism, Hyperthyroidism & Treatment",
    intro:
      "Thyroid disorders are surprisingly common, especially in Indian women. Many patients go undiagnosed for years, suffering from fatigue, weight changes, and mood disturbances that are actually caused by an underactive or overactive thyroid gland.",
    definition:
      "The thyroid is a butterfly-shaped gland in the neck that produces hormones (T3 and T4) regulating metabolism, energy levels, heart rate, and many other body functions. Thyroid disorders occur when this gland produces too little hormone (hypothyroidism) or too much (hyperthyroidism).",
    types: ["Hypothyroidism", "Hyperthyroidism", "Goitre (thyroid enlargement)", "Thyroid nodules", "Hashimoto's thyroiditis", "Graves' disease"],
    symptoms: [
      "Unexplained weight gain (hypothyroidism) or weight loss (hyperthyroidism)",
      "Persistent fatigue and weakness",
      "Hair loss or thinning",
      "Sensitivity to cold (hypothyroidism) or heat (hyperthyroidism)",
      "Constipation or diarrhoea",
      "Depression or anxiety",
      "Heart palpitations",
      "Neck swelling (goitre)",
    ],
    causes: [
      "Iodine deficiency (hypothyroidism) — common in inland India",
      "Autoimmune conditions (Hashimoto's, Graves' disease)",
      "Thyroid surgery or radioiodine therapy",
      "Certain medications (lithium, amiodarone)",
      "Radiation therapy to the head/neck",
      "Family history of thyroid disease",
    ],
    treatment: [
      "Thyroid blood tests: TSH, Free T3, Free T4",
      "Thyroid ultrasound",
      "Levothyroxine (thyroxine) for hypothyroidism",
      "Anti-thyroid drugs (carbimazole, propylthiouracil) for hyperthyroidism",
      "Beta-blockers for symptom control (palpitations, tremor)",
      "Radioiodine therapy for selected hyperthyroid cases",
      "Surgical referral for large goitres or suspicious nodules",
    ],
    prevention: [
      "Ensure adequate iodine intake through iodised salt",
      "Regular thyroid screening — especially women over 35",
      "If you have a family history, get TSH tested annually",
      "Avoid excessive intake of goitrogenic foods (raw cabbage, kale, soy) if you have thyroid conditions",
    ],
    whenToSeeDoctor:
      "See a doctor if you notice a lump or swelling in your neck, persistent fatigue without explanation, unexplained weight changes, or heart palpitations. A simple TSH blood test can diagnose most thyroid conditions.",
    faq: [
      {
        question: "Is thyroid disease permanent?",
        answer:
          "Hypothyroidism usually requires lifelong thyroxine replacement. Hyperthyroidism may resolve with medication (in some cases), radioiodine therapy, or surgery — and some patients achieve remission. Your doctor will advise the best approach for your specific condition.",
      },
      {
        question: "Can I get pregnant if I have thyroid disease?",
        answer:
          "Yes, but thyroid disease — especially hypothyroidism — needs to be well-controlled before and during pregnancy. Uncontrolled thyroid function during pregnancy can affect foetal development. Inform your doctor if you are planning pregnancy.",
      },
    ],
    relatedServices: ["thyroid-treatment"],
    metaTitle: "Thyroid Disorders Guide — Hypothyroidism & Hyperthyroidism | Sunshine Hospital",
    metaDesc:
      "Complete guide to thyroid disorders — hypothyroidism, hyperthyroidism, goitre. Causes, symptoms, and treatment explained by Dr. Onkar Kakare, Sunshine Hospital Kolhapur.",
  },
];
