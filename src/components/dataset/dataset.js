const dataset = {
    "I feel Redness, Itching, Peeling skin, Rashes": {
        "Disease": "Fungal infection",
        "Description": "Fungal infection is a common skin condition caused by fungi.",
        "Medicines": ['Clotrimazole', 'Fluconazole'],
        "Diet": [" 'Probiotics'", " 'Coconut oil'", " 'Turmeric']"]
    },
    "I feel Sneezing, Runny nose, Itchy eyes, Hives": {
        "Disease": "Allergy",
        "Description": "Allergy is an immune system reaction to a substance in the environment.",
        "Medicines": ['Cetirizine', 'Prednisolone'],
        "Diet": [" 'Omega-3-rich foods'", " 'Quercetin-rich foods'", " 'Probiotics']"]
    },
    "I feel Heartburn, Chest pain, Regurgitation, Nausea": {
        "Disease": "GERD",
        "Description": "GERD (Gastroesophageal Reflux Disease) is a digestive disorder that affects the lower esophageal sphincter.",
        "Medicines": ['Omeprazole', 'Ranitidine'],
        "Diet": [" 'Fiber-rich foods'", " 'Licorice'", " 'Aloe vera juice']"]
    },
    "I feel Jaundice, Bone pain, Weight loss, Dark urine": {
        "Disease": "Chronic cholestasis",
        "Description": "Chronic cholestasis is a condition where bile flow from the liver is reduced for a prolonged period.",
        "Medicines": ['Ursodeoxycholic acid', 'Cholestyramine'],
        "Diet": [" 'High-Fiber Diet'", " 'Whole grains'", " 'Fresh fruits and vegetables']"]
    },
    "I feel Rashes, Fever, Swelling, Breathing difficulty": {
        "Disease": "Drug Reaction",
        "Description": "Drug Reaction occurs when the body reacts adversely to a medication.",
        "Medicines": ['Diphenhydramine', 'Hydrocortisone'],
        "Diet": [" 'Omega-3-rich foods'", " 'Quercetin-rich foods'", " 'Probiotics']"]
    },
    "I feel Stomach pain, Indigestion, Belching, Vomiting": {
        "Disease": "Peptic ulcer disease",
        "Description": "Peptic ulcer disease involves sores that develop on the inner lining of the stomach and small intestine.",
        "Medicines": ['Omeprazole', 'Amoxicillin'],
        "Diet": [" 'Fiber-rich foods'", " 'Licorice'", " 'Aloe vera juice']"]
    },
    "I feel Fever, Shortness of breath, Night sweats, Severe headache": {
        "Disease": "AIDS",
        "Description": "AIDS (Acquired Immunodeficiency Syndrome) is a disease caused by HIV that weakens the immune system.",
        "Medicines": ['Antiretroviral therapy (ART)'],
        "Diet": [" 'Protein-rich foods'", " 'Whole grains'", " 'Healthy fats']"]
    },
    "I feel Increased thirst, Frequent urination, Dry skin, Blurred vision": {
        "Disease": "Diabetes",
        "Description": "Diabetes is a chronic condition that affects the way the body processes blood sugar.",
        "Medicines": ['Insulin', 'Metformin'],
        "Diet": [" 'Fiber-rich foods'", " 'Healthy fats'", " 'Low-fat dairy']"]
    },
    "I feel Diarrhea, Abdominal bloating, Stomach cramps, Lethargy": {
        "Disease": "Gastroenteritis",
        "Description": "Gastroenteritis is an inflammation of the stomach and intestines, typically caused by a virus or bacteria.",
        "Medicines": ['Oral Rehydration Salts (ORS)', 'Ondansetron'],
        "Diet": [" 'Bananas'", " 'Applesauce'", " 'Toast']"]
    },
    "I feel Wheezing, Shortness of breath, Chest tightness, Coughing": {
        "Disease": "Bronchial Asthma",
        "Description": "Bronchial Asthma is a respiratory condition characterized by inflammation of the airways.",
        "Medicines": ['Salbutamol', 'Beclomethasone'],
        "Diet": [" 'Omega-3-rich foods'", " 'Whole grains'", " 'Lean proteins']"]
    },
    "I feel Headache, Irregular heartbeat, Shortness of breath, Nosebleeds": {
        "Disease": "Hypertension",
        "Description": "Hypertension, or high blood pressure, is a common cardiovascular condition.",
        "Medicines": ['Enalapril', 'Atenolol'],
        "Diet": [" 'Low-sodium foods'", " 'Whole grains'", " 'Lean proteins']"]
    },
    "I feel Throbbing pain, Neck stiffness, Sensitivity to light, Sensitivity to sound": {
        "Disease": "Migraine",
        "Description": "Migraine is a type of headache that often involves severe pain and sensitivity to light and sound.",
        "Medicines": ['Sumatriptan', 'Ibuprofen'],
        "Diet": [" 'Low-Tyramine Diet'", " 'Hydration'", " 'Magnesium-rich foods']"]
    },
    "I feel Neck pain, Stiffness, Shoulder pain, Numbness": {
        "Disease": "Cervical spondylosis",
        "Description": "Cervical spondylosis is a degenerative condition of the cervical spine.",
        "Medicines": ['Diclofenac', 'Physiotherapy'],
        "Diet": [" 'Anti-Inflammatory Diet'", " 'Fruits and vegetables'", " 'Whole grains']"]
    },
    "I feel Loss of movement, Loss of sensation, Speech difficulty, Vision problems": {
        "Disease": "Paralysis (brain hemorrhage)",
        "Description": "Paralysis (brain hemorrhage) refers to the loss of muscle function due to bleeding in the brain.",
        "Medicines": ['Warfarin', 'Physiotherapy'],
        "Diet": [" 'Low-sodium foods'", " 'Whole grains'", " 'Lean proteins']"]
    },
    "I feel Yellow skin, Yellow eyes, Fatigue, Dark urine": {
        "Disease": "Jaundice",
        "Description": "Jaundice is a yellow discoloration of the skin and eyes, often indicating liver problems.",
        "Medicines": ['Depends on the cause; antiviral medications, surgery', 'Artemisinin-based combination therapies'],
        "Diet": [" 'Low-fat Diet'", " 'Whole grains'", " 'Lean proteins']"]
    },
    "I feel Fever, Chills, Sweating, Muscle pain": {
        "Disease": "Malaria",
        "Description": "Malaria is a mosquito-borne infectious disease affecting humans and other animals.",
        "Medicines": ['Chloroquine', 'Artemether-Lumefantrine', 'Antihistamines'],
        "Diet": [" 'Hydration'", " 'Soft and bland foods'", " 'Oral rehydration solutions']"]
    },
    "I feel Itchy rash, Fever, Lethargy, Weakness": {
        "Disease": "Chicken pox",
        "Description": "Chicken pox is a highly contagious viral infection causing an itchy rash.",
        "Medicines": ['Acyclovir', 'Calamine lotion', 'Pain relievers'],
        "Diet": [" 'High-Calorie Diet'", " 'Hydration'", " 'Protein-rich foods']"]
    },
    "I feel High fever, Severe headache, Pain behind eyes, Muscle and joint pains": {
        "Disease": "Dengue",
        "Description": "Dengue is a mosquito-borne viral infection causing flu-like symptoms.",
        "Medicines": ['Paracetamol', 'Rehydration fluids', 'Azithromycin'],
        "Diet": [" 'Hydration'", " 'Soft and bland foods'", " 'Protein-rich foods']"]
    },
    "I feel High fever, Abdominal pain, Rash, Weakness": {
        "Disease": "Typhoid",
        "Description": "Typhoid is a bacterial infection that can lead to a high fever and gastrointestinal symptoms.",
        "Medicines": ['Ciprofloxacin', 'Azithromycin'],
        "Diet": [" 'High-Calorie Diet'", " 'Hydration'", " 'Protein-rich foods']"]
    },
    "I feel Lethargy, Nausea, Loss of appetite, Jaundice": {
        "Disease": "Hepatitis A",
        "Description": "Hepatitis A is a viral liver disease.",
        "Medicines": ['Supportive care (rest, hydration)', 'Hydration'],
        "Diet": [" 'High-Calorie Diet'", " 'Hydration'", " 'Protein-rich foods']"]
    },
    "I feel Fatigue, Abdominal pain, Jaundice, Dark urine": {
        "Disease": "Hepatitis B",
        "Description": "Hepatitis B is a viral infection that attacks the liver.",
        "Medicines": ['Tenofovir', 'Entecavir'],
        "Diet": [" 'High-Calorie Diet'", " 'Hydration'", " 'Protein-rich foods']"]
    },
    "I feel Fatigue, Joint pain, Jaundice, Nausea": {
        "Disease": "Hepatitis C",
        "Description": "Hepatitis C is a viral infection that causes liver inflammation.",
        "Medicines": ['Sofosbuvir', 'Ribavirin'],
        "Diet": [" 'High-Calorie Diet'", " 'Hydration'", " 'Protein-rich foods']"]
    },
    "I feel Fatigue, Abdominal pain, Jaundice, Dark urine": {
        "Disease": "Hepatitis D",
        "Description": "Hepatitis D is a serious liver disease caused by the hepatitis D virus.",
        "Medicines": ['Interferon-alpha'],
        "Diet": [" 'High-Calorie Diet'", " 'Hydration'", " 'Protein-rich foods']"]
    },
    "I feel Fatigue, Abdominal pain, Jaundice, Nausea": {
        "Disease": "Hepatitis E",
        "Description": "Hepatitis E is a viral infection that causes liver inflammation.",
        "Medicines": ['Supportive care (rest, hydration)', ' hydration)'],
        "Diet": [" 'High-Calorie Diet'", " 'Hydration'", " 'Protein-rich foods']"]
    },
    "I feel Anorexia, Enlarged spleen, Confusion, Muscle weakness": {
        "Disease": "Alcoholic hepatitis",
        "Description": "Alcoholic hepatitis is inflammation of the liver due to alcohol consumption.",
        "Medicines": ['Prednisolone', 'Abstinence from alcohol'],
        "Diet": [" 'Low-fat Diet'", " 'Whole grains'", " 'Lean proteins']"]
    },
    "I feel Cough, Night sweats, Weight loss, Fever": {
        "Disease": "Tuberculosis",
        "Description": "Tuberculosis is a bacterial infection that primarily affects the lungs.",
        "Medicines": ['Isoniazid', 'Rifampin'],
        "Diet": [" 'High-Calorie Diet'", " 'Hydration'", " 'Protein-rich foods']"]
    },
    "I feel Runny nose, Sore throat, Cough, Sneezing": {
        "Disease": "Common Cold",
        "Description": "Common Cold is a viral infection of the upper respiratory tract.",
        "Medicines": ['Pseudoephedrine', 'Diphenhydramine'],
        "Diet": [" 'Hydration'", " 'Rest'", " 'Honey and lemon tea']"]
    },
    "I feel Cough, Bluish lips, Chest pain, Difficulty breathing": {
        "Disease": "Pneumonia",
        "Description": "Pneumonia is an inflammatory condition affecting the air sacs in the lungs.",
        "Medicines": ['Azithromycin', 'Levofloxacin'],
        "Diet": [" 'High-Calorie Diet'", " 'Hydration'", " 'Protein-rich foods']"]
    },
    "I feel Pain during bowel movements, Itching, Swelling, Bleeding": {
        "Disease": "Dimorphic hemmorhoids(piles)",
        "Description": "Dimorphic hemmorhoids(piles) is a condition characterized by swollen blood vessels in the rectum.",
        "Medicines": ['Hydrocortisone cream', 'Hemorrhoidectomy'],
        "Diet": [" 'High-Fiber Diet'", " 'Warm baths'", " 'Stool softeners']"]
    },
    "I feel Chest pain, Shortness of breath, Cold sweat, Anxiety": {
        "Disease": "Heart attack",
        "Description": "Heart attack is a sudden and severe reduction in blood flow to the heart muscle.",
        "Medicines": ['Aspirin', 'Clopidogrel'],
        "Diet": [" 'Low-sodium foods'", " 'Whole grains'", " 'Lean proteins']"]
    },
    "I feel Swelling, Aching, Itching, Skin discoloration": {
        "Disease": "Varicose veins",
        "Description": "Varicose veins are enlarged, twisted veins that usually appear on the legs.",
        "Medicines": ['Compression stockings', 'Sclerotherapy'],
        "Diet": [" 'High-Fiber Diet'", " 'Whole grains'", " 'Low-sodium foods']"]
    },
    "I feel Fatigue, Weight gain, Cold intolerance, Depression": {
        "Disease": "Hypothyroidism",
        "Description": "Hypothyroidism is a condition where the thyroid gland doesn't produce enough thyroid hormone.",
        "Medicines": ['Levothyroxine'],
        "Diet": [" 'Iodine-rich foods'", " 'Fruits and vegetables'", " 'Whole grains']"]
    },
    "I feel Tremors, Rapid heartbeat, Sweating, Nervousness": {
        "Disease": "Hyperthyroidism",
        "Description": "Hyperthyroidism is a condition where the thyroid gland produces too much thyroid hormone.",
        "Medicines": ['Methimazole', 'Radioactive iodine'],
        "Diet": [" 'Low-Iodine Diet'", " 'Selenium-rich foods'", " 'Fruits and vegetables']"]
    },
    "I feel Tingling, Hunger, Dizziness, Confusion": {
        "Disease": "Hypoglycemia",
        "Description": "Hypoglycemia is a condition characterized by abnormally low blood sugar levels.",
        "Medicines": ['Dextrose tablets', 'Glucagon injection'],
        "Diet": [" 'Complex carbohydrates'", " 'Fiber-rich foods'", " 'Healthy fats']"]
    },
    "I feel Tenderness, Stiffness, Swelling, Reduced flexibility": {
        "Disease": "Osteoarthritis",
        "Description": "Osteoarthritis is a degenerative joint disease that affects the cartilage in joints.",
        "Medicines": ['Diclofenac', 'Physiotherapy'],
        "Diet": [" 'Anti-Inflammatory Diet'", " 'Fruits and vegetables'", " 'Whole grains']"]
    },
    "I feel Joint pain, Stiffness, Warmth, Redness": {
        "Disease": "Arthritis",
        "Description": "Arthritis is inflammation of one or more joints, causing pain and stiffness.",
        "Medicines": ['Diclofenac', 'Prednisolone'],
        "Diet": [" 'Anti-Inflammatory Diet'", " 'Fruits and vegetables'", " 'Whole grains']"]
    },
    "I feel Dizziness, Nausea, Balance problems, Headache": {
        "Disease": "(vertigo) Paroymsal Positional Vertigo",
        "Description": "(Vertigo) Paroymsal Positional Vertigo is a type of dizziness caused by specific head movements.",
        "Medicines": ['Betahistine', 'Epley maneuver'],
        "Diet": [" 'Low-Salt Diet'", " 'Ginger tea'", " 'Vitamin D-rich foods']"]
    },
    "I feel Pimples, Blackheads, Whiteheads, Cysts": {
        "Disease": "Acne",
        "Description": "Acne is a skin condition that occurs when hair follicles become clogged with oil and dead skin cells.",
        "Medicines": ['Benzoyl peroxide', 'Tretinoin'],
        "Diet": [" 'Low-Glycemic Diet'", " 'Fruits and vegetables'", " 'Probiotics']"]
    },
    "I feel Burning sensation during urination, Frequent urination, Cloudy urine, Pelvic pain": {
        "Disease": "Urinary tract infection",
        "Description": "Urinary tract infection is an infection in any part of the urinary system.",
        "Medicines": ['Ciprofloxacin', 'Trimethoprim/Sulfamethoxazole'],
        "Diet": [" 'Hydration'", " 'Probiotics'", " 'Vitamin C-rich foods']"]
    },
    "I feel Red patches, Itching, Scaly skin, Dry skin": {
        "Disease": "Psoriasis",
        "Description": "Psoriasis is a chronic skin condition characterized by red, itchy, and scaly patches.",
        "Medicines": ['Betamethasone', 'Methotrexate'],
        "Diet": [" 'Anti-Inflammatory Diet'", " 'Fruits and vegetables'", " 'Whole grains']"]
    },
    "I feel Red sores, Itching, Blisters, Swollen lymph nodes": {
        "Disease": "Impetigo",
        "Description": "Impetigo is a highly contagious skin infection causing red sores that can break open.",
        "Medicines": ['Fusidic acid', 'Cephalexin'],
        "Diet": [" 'Antibiotic treatment'", " 'Hydration'", " 'Protein-rich foods']"]
    },
    "I feel Mouth sores, Severe diarrhea, Reduces appetite, Eye inflammation": {
        "Disease": "Crohn's Disease",
        "Description": "Crohn's Disease is a type of inflammatory bowel disease that causes inflammation of the digestive tract, which can lead to abdominal pain, severe diarrhea, fatigue, weight loss, and malnutrition.",
        "Medicines": ['Prednisolone', 'Azathioprine'],
        "Diet": [' yougurt']
    },
    "I feel Abdominal pain, Bloody diarrhea, Fatigue, Weight loss": {
        "Disease": "Ulcerative Colitis",
        "Description": "Ulcerative Colitis is a chronic inflammatory bowel disease that causes long-lasting inflammation and ulcers in the digestive tract.",
        "Medicines": ['Mesalazine', 'Prednisolone'],
        "Diet": [" 'Seeds and nuts (if tolerated)' "]
    },
    "I feel Fatigue, Joint pain, Skin rashes, Fever": {
        "Disease": "Lupus",
        "Description": "Lupus is an autoimmune disease in which the immune system attacks its own tissues, causing widespread inflammation and tissue damage in the affected organs.",
        "Medicines": ['Hydroxychloroquine', 'Prednisolone'],
        "Diet": [" 'Healthy Fats'"]
    },
    "I feel Abdominal pain, Diarrhea, Bloating, Weight loss": {
        "Disease": "Celiac Disease",
        "Description": "Celiac Disease is an immune reaction to eating gluten, a protein found in wheat, barley, and rye, leading to damage in the small intestine.",
        "Medicines": ['Gluten-free diet'],
        "Diet": ['Quinoa', ' Chicken']
    },
    "I feel Persistent cough, Wheezing, Frequent lung infections, Poor growth": {
        "Disease": "Cystic Fibrosis",
        "Description": "Cystic Fibrosis is a genetic disorder affecting the respiratory and digestive systems, leading to severe lung infections and difficulty breathing.",
        "Medicines": ['Azithromycin', 'Dornase alfa'],
        "Diet": ['Avocado', ' Salmon']
    },
    "I feel Excessive bleeding, Bruising, Joint pain, Seizures": {
        "Disease": "Hemophilia",
        "Description": "Hemophilia is a genetic disorder where the blood doesn't clot properly, leading to excessive bleeding from even minor injuries.",
        "Medicines": ['Factor VIII replacement therapy'],
        "Diet": ['Lean beef', ' Oranges']
    },
    "I feel Muscle stiffness, Difficulty walking, Tingling, Vision problems": {
        "Disease": "Multiple Sclerosis",
        "Description": "Multiple Sclerosis is a disease where the immune system attacks the protective sheath covering nerve fibers, causing communication problems between the brain and the rest of the body.",
        "Medicines": ['Interferon beta', 'Glatiramer acetate'],
        "Diet": ['Eggs', ' Almonds']
    },
    "I feel Joint pain, swelling, Stiffness, Redness": {
        "Disease": "Rheumatoid Arthritis",
        "Description": "Rheumatoid Arthritis is an autoimmune disorder that primarily affects joints, causing warm, swollen, and painful joints.",
        "Medicines": ['Methotrexate', 'Adalimumab'],
        "Diet": ['Salmon', ' Leafy greens']
    },
    "I feel Shortness of breath, Wheezing, Chest tightness, Coughing": {
        "Disease": "Asthma",
        "Description": "Asthma is a chronic condition in which the airways narrow and swell, producing extra mucus that can make breathing difficult and trigger coughing, wheezing, and shortness of breath.",
        "Medicines": ['Salbutamol', 'Beclomethasone'],
        "Diet": ['Apples', ' Lean chicken']
    },
    "I feel Increased thirst, Frequent urination, Increased hunger, Blurred vision": {
        "Disease": "Diabetes Mellitus",
        "Description": "Diabetes Mellitus is a group of diseases that result in too much sugar in the blood (high blood glucose).",
        "Medicines": ['Insulin', 'Metformin'],
        "Diet": ['Garlic', ' Watermelon juice']
    },
    "I feel Brittle bones, Wheezing, Chest tightness, Chronic cough": {
        "Disease": "Chronic Obstructive Pulmonary Disease",
        "Description": "Chronic Obstructive Pulmonary Disease (COPD) is a chronic inflammatory lung disease that causes obstructed airflow from the lungs.",
        "Medicines": ['Salbutamol', 'Ipratropium'],
        "Diet": ['Oats', ' Chicken']
    },
    "I feel Memory loss, Confusion, Difficulty completing tasks, Changes in personality": {
        "Disease": "Alzheimer's Disease",
        "Description": "Alzheimer's Disease is a progressive neurologic disorder that causes the brain to shrink and brain cells to die, leading to memory loss and cognitive decline.",
        "Medicines": ['Donepezil', 'Memantine'],
        "Diet": ['Berries', ' Walnuts']
    },
    "I feel Chest pain, Shortness of breath, Irregular heart rhythms, Severe fatigue": {
        "Disease": "Coronary Artery Disease",
        "Description": "Coronary Artery Disease is the narrowing or blockage of the coronary arteries, usually caused by atherosclerosis.",
        "Medicines": ['Aspirin', 'Atorvastatin'],
        "Diet": ['Oatmeal', ' Nuts']
    },
    "I feel Seizures, Loss of consciousness, Confusion, Jerking movements": {
        "Disease": "Epilepsy",
        "Description": "Epilepsy is a neurological disorder marked by sudden recurrent episodes of sensory disturbance, loss of consciousness, or convulsions, associated with abnormal electrical activity in the brain.",
        "Medicines": ['Carbamazepine', 'Valproate'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Cold hands, Rapid breathing, Pale skin, Shortness of breath": {
        "Disease": "Anemia",
        "Description": "Anemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues, causing fatigue and weakness.",
        "Medicines": ['Ferrous sulfate', 'Folic acid'],
        "Diet": ['Lentils', ' Beef']
    },
    "I feel Bone pain, Weight loss, Stooped posture, Fractures": {
        "Disease": "Osteoporosis",
        "Description": "Osteoporosis is a bone disease that occurs when the body loses too much bone, makes too little bone, or both, resulting in weak and brittle bones.",
        "Medicines": ['Alendronate', 'Calcitriol'],
        "Diet": ['Milk', ' Sardines']
    },
    "I feel Skin rash, Fever, Headache, Fatigue": {
        "Disease": "Lyme Disease",
        "Description": "Lyme Disease is an infectious disease caused by the Borrelia bacterium, spread by ticks, characterized by a skin rash, fever, headache, and fatigue.",
        "Medicines": ['Doxycycline', 'Amoxicillin'],
        "Diet": ['Garlic', ' Green tea']
    },
    "I feel Jaundice, Abdominal pain, Fatigue, Dark urine": {
        "Disease": "Hepatitis",
        "Description": "Hepatitis is an inflammation of the liver, often caused by a viral infection, resulting in liver damage and a range of health problems.",
        "Medicines": ['Tenofovir', 'Ribavirin'],
        "Diet": ['Leafy greens', ' Yogurt']
    },
    "I feel Fever, Stuffy nose, Sore throat, Body aches": {
        "Disease": "Influenza",
        "Description": "Influenza, or the flu, is a viral infection that attacks your respiratory system  your nose, throat, and lungs.",
        "Medicines": ['Oseltamivir', 'Zanamivir'],
        "Diet": ['Chicken soup', ' Honey']
    },
    "I feel Fever, Rash, Joint pain, Red eyes": {
        "Disease": "Zika Virus",
        "Description": "Zika Virus is a mosquito-borne flavivirus that can cause a mild illness known as Zika fever or Zika virus disease.",
        "Medicines": ['Supportive care'],
        "Diet": ['Coconut water', ' Chicken']
    },
    "I feel Joint swelling, Severe joint pain, Headache, Rash": {
        "Disease": "Chikungunya",
        "Description": "Chikungunya is a viral disease transmitted to humans by infected mosquitoes, causing fever and severe joint pain.",
        "Medicines": ['Paracetamol', 'Ibuprofen'],
        "Diet": ['Garlic', ' Berry smoothie']
    },
    "I feel High Fever, Chills, Jaundice, Back pain": {
        "Disease": "Yellow Fever",
        "Description": "Yellow Fever is a viral hemorrhagic disease transmitted by infected mosquitoes, characterized by fever, chills, and jaundice.",
        "Medicines": ['Supportive care'],
        "Diet": ['Garlic', ' Orange juice']
    },
    "I feel Red rash, Itchy eyes, Swollen lymph nodes behind ears, Runny nose": {
        "Disease": "Rubella",
        "Description": "Rubella, also known as German measles, is a contagious viral infection best known by its distinctive red rash.",
        "Medicines": ['Supportive care'],
        "Diet": ['Chicken soup', ' Oranges']
    },
    "I feel Cough, Red eyes, Runny nose, Rash": {
        "Disease": "Measles",
        "Description": "Measles is a highly contagious viral disease that causes a total-body skin rash and flu-like symptoms.",
        "Medicines": ['Vitamin A', 'Paracetamol'],
        "Diet": ['Oranges', ' Spinach']
    },
    "I feel Swollen salivary glands, Fever, Swelling of jaw, Muscle aches": {
        "Disease": "Mumps",
        "Description": "Mumps is a viral infection that primarily affects saliva-producing (salivary) glands that are located near your ears.",
        "Medicines": ['Supportive care', 'Paracetamol'],
        "Diet": ['Carrots', ' Mint lemonade']
    },
    "I feel Itchy rash, Blisters, Fever, Fatigue": {
        "Disease": "Chickenpox",
        "Description": "Chickenpox is a highly contagious viral infection causing an itchy, blister-like rash on the skin.",
        "Medicines": ['Acyclovir', 'Calamine lotion'],
        "Diet": []
    },
    "I feel Muscle spasms, Stiffness, Trouble swallowing, High blood pressure": {
        "Disease": "Tetanus",
        "Description": "Tetanus is a serious bacterial infection that causes painful muscle spasms and can lead to death.",
        "Medicines": ['Metronidazole', 'Tetanus immunoglobulin'],
        "Diet": ['Garlic', ' Pomegranate juice']
    },
    "I feel Severe coughing fits, Whooping sound, Vomiting, Exhaustion": {
        "Disease": "Whooping Cough",
        "Description": "Whooping Cough, or pertussis, is a highly contagious respiratory tract infection that is particularly dangerous for infants.",
        "Medicines": ['Azithromycin', 'Erythromycin'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Sore throat, Fever, Swollen glands, Barking cough": {
        "Disease": "Diphtheria",
        "Description": "Diphtheria is a serious bacterial infection affecting the mucous membranes of the throat and nose.",
        "Medicines": ['Erythromycin', 'Diphtheria antitoxin'],
        "Diet": ['Garlic', ' Ginger tea']
    },
    "I feel Red rash, Sore throat, Fever, Strawberry tongue": {
        "Disease": "Scarlet Fever",
        "Description": "Scarlet Fever is a bacterial illness that develops in some people who have strep throat, characterized by a bright red rash.",
        "Medicines": ['Penicillin', 'Erythromycin'],
        "Diet": ['Carrots', ' Herbal tea']
    },
    "I feel Cough, Mucus production, Chest discomfort, Shortness of breath": {
        "Disease": "Bronchitis",
        "Description": "Bronchitis is an inflammation of the lining of your bronchial tubes, which carry air to and from your lungs.",
        "Medicines": ['Amoxicillin', 'Doxycycline'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Facial pain, Blocked nose, Headache, Nasal discharge": {
        "Disease": "Sinusitis",
        "Description": "Sinusitis is an inflammation or swelling of the tissue lining the sinuses, often causing a blocked nose and facial pain.",
        "Medicines": ['Amoxicillin', 'Clarithromycin'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Ear pain, Hearing loss, Irritability": {
        "Disease": "Otitis Media",
        "Description": "Otitis Media is an infection or inflammation of the middle ear, common in young children.",
        "Medicines": ['Amoxicillin', 'Cefuroxime'],
        "Diet": ['Carrots', ' Ginger tea']
    },
    "I feel Sore throat, Difficulty swallowing, Red tonsils, Fever": {
        "Disease": "Tonsillitis",
        "Description": "Tonsillitis is an inflammation of the tonsils, two oval-shaped pads of tissue at the back of the throat.",
        "Medicines": ['Penicillin', 'Amoxicillin'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Hoarseness, Loss of voice, Sore throat, Dry cough": {
        "Disease": "Laryngitis",
        "Description": "Laryngitis is an inflammation of your voice box (larynx) from overuse, irritation, or infection.",
        "Medicines": ['Erythromycin', 'Amoxicillin'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Red gums, Swollen gums, Bleeding gums, Bad breath": {
        "Disease": "Gingivitis",
        "Description": "Gingivitis is a common and mild form of gum disease (periodontal disease) that causes irritation, redness, and swelling of your gingiva, the part of your gum around the base of your teeth.",
        "Medicines": ['Chlorhexidine', 'Metronidazole'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Swollen gums, Bleeding gums, Loose teeth, Bad breath": {
        "Disease": "Periodontitis",
        "Description": "Periodontitis is a serious gum infection that damages the soft tissue and destroys the bone that supports your teeth.",
        "Medicines": ['Amoxicillin', 'Metronidazole'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Mouth ulcers, Swollen gums, Sore mouth, Red patches": {
        "Disease": "Stomatitis",
        "Description": "Stomatitis is an inflammation of the mouth and lips.",
        "Medicines": ['Hydrocortisone', 'Lidocaine'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Heartburn, Difficulty swallowing, Chest pain, Acid regurgitation": {
        "Disease": "Esophagitis",
        "Description": "Esophagitis is an inflammation that may damage the tissues of the esophagus, the muscular tube that delivers food from your mouth to your stomach.",
        "Medicines": ['Omeprazole', 'Ranitidine'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Stomach pain, Nausea, Pain radiating to back, Bloating": {
        "Disease": "Gastritis",
        "Description": "Gastritis is a general term for a group of conditions with one thing in common: inflammation of the lining of the stomach.",
        "Medicines": ['Omeprazole', 'Ranitidine'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Burning stomach pain, Bloating, Heartburn, Nausea": {
        "Disease": "Peptic Ulcer",
        "Description": "Peptic Ulcer is a sore that develops on the lining of the esophagus, stomach, or small intestine.",
        "Medicines": ['Omeprazole', 'Amoxicillin'],
        "Diet": ['Carrots', ' Ginger tea']
    },
    "I feel Abdominal pain, Bloating, Gas, Diarrhea": {
        "Disease": "Irritable Bowel Syndrome",
        "Description": "Irritable Bowel Syndrome (IBS) is a common disorder affecting the large intestine, causing symptoms like cramping, abdominal pain, bloating, gas, and diarrhea or constipation.",
        "Medicines": ['Hyoscine', 'Mebeverine'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Abdominal pain, Fever, Nausea, Change in bowel habits": {
        "Disease": "Diverticulitis",
        "Description": "Diverticulitis is the infection or inflammation of pouches that can form in your intestines.",
        "Medicines": ['Ciprofloxacin', 'Metronidazole'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Upper abdominal pain, Tenderness in abdomen, Vomiting, Yellow skin": {
        "Disease": "Pancreatitis",
        "Description": "Pancreatitis is inflammation of the pancreas.",
        "Medicines": ['Pancrelipase', 'Ibuprofen'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Severe pain in the upper right abdomen, Fever, Nausea, Vomiting": {
        "Disease": "Cholecystitis",
        "Description": "Cholecystitis is inflammation of the gallbladder.",
        "Medicines": ['Ciprofloxacin', 'Metronidazole'],
        "Diet": ['Carrots', ' Herbal tea']
    },
    "I feel Fatigue, Jaundice, Swelling in legs, Weight loss": {
        "Disease": "Cirrhosis",
        "Description": "Cirrhosis is late-stage liver disease marked by the liver's scarring (fibrosis) and irreversible damage.",
        "Medicines": ['Furosemide', 'Spironolactone'],
        "Diet": ['Garlic', ' Green smoothie']
    },
    "I feel Pain in right shoulder, Upper abdominal pain, Jaundice, Feeling sick": {
        "Disease": "Hepatocellular Carcinoma",
        "Description": "Hepatocellular Carcinoma is the most common type of primary liver cancer.",
        "Medicines": ['Sorafenib', 'Doxorubicin'],
        "Diet": ['Ginger tea', ' Ginger tea']
    },
    "I feel Sudden intense pain, Nausea, Vomiting, Fever": {
        "Disease": "Gallstones",
        "Description": "Gallstones are hardened deposits of digestive fluid that can form in your gallbladder.",
        "Medicines": ['Ursodeoxycholic acid', 'Chenodeoxycholic acid'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Lower right abdominal pain, Nausea, Pain with walking, Loss of appetite": {
        "Disease": "Appendicitis",
        "Description": "Appendicitis is an inflammation of the appendix, a small pouch attached to the large intestine.",
        "Medicines": ['Ceftriaxone', 'Metronidazole'],
        "Diet": ['Carrots', ' Carrots']
    },
    "I feel Bulge in abdomen, Pain at site, Discomfort, Weakness": {
        "Disease": "Hernia",
        "Description": "A hernia occurs when an organ or tissue protrudes through a weak spot in the abdominal muscles.",
        "Medicines": ['Surgical repair'],
        "Diet": ['Carrots', ' Herbal tea']
    },
    "I feel Swollen scrotum, Discomfort, Heaviness, Pain": {
        "Disease": "Hydrocele",
        "Description": "A hydrocele is a fluid-filled sac around a testicle, often causing swelling of the scrotum.",
        "Medicines": ['Surgical repair'],
        "Diet": ['Garlic', ' Ginger tea']
    },
    "I feel Swelling, Pain, Testicular discomfort, Heaviness": {
        "Disease": "Varicocele",
        "Description": "A varicocele is an enlargement of the veins within the scrotum.",
        "Medicines": ['Surgical repair'],
        "Diet": ['Ginger tea', ' Herbal tea']
    },
    "I feel Sudden severe pain in scrotum, Swelling, Abdominal pain, Nausea": {
        "Disease": "Testicular Torsion",
        "Description": "Testicular torsion is a medical emergency that occurs when the spermatic cord twists, cutting off the blood supply to the testicle.",
        "Medicines": ['Surgical repair'],
        "Diet": ['Garlic', ' Ginger tea']
    },
    "I feel Pelvic pain, Painful urination, Frequent urination, Pain during ejaculation": {
        "Disease": "Prostatitis",
        "Description": "Prostatitis is an inflammation of the prostate gland.",
        "Medicines": ['Ciprofloxacin', 'Doxycycline'],
        "Diet": ['Carrots', ' Carrots']
    },
    "I feel Frequent urination, Urgency to urinate, Weak urine stream, Difficulty starting urination": {
        "Disease": "Benign Prostatic Hyperplasia",
        "Description": "Benign Prostatic Hyperplasia is an enlargement of the prostate gland that can cause urinary problems.",
        "Medicines": ['Tamsulosin', 'Finasteride'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Difficulty urinating, Blood in urine, Pelvic discomfort, Bone pain": {
        "Disease": "Prostate Cancer",
        "Description": "Prostate Cancer is a cancer in a man's prostate, a small walnut-sized gland that produces seminal fluid.",
        "Medicines": ['Leuprolide', 'Docetaxel'],
        "Diet": ['Ginger tea', ' Ginger tea']
    },
    "I feel Difficulty getting an erection, Reduced sexual desire, Anxiety, Depression": {
        "Disease": "Erectile Dysfunction",
        "Description": "Erectile Dysfunction is the inability to get or keep an erection firm enough for sexual intercourse.",
        "Medicines": ['Sildenafil', 'Tadalafil'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Pelvic pain, Bloating, Pain during bowel movements, Frequent urination": {
        "Disease": "Ovarian Cysts",
        "Description": "Ovarian Cysts are fluid-filled sacs or pockets within or on the surface of an ovary.",
        "Medicines": ['Combined oral contraceptives', 'Ibuprofen'],
        "Diet": ['Carrots', ' Ginger tea']
    },
    "I feel Painful bowel movements, Severe menstrual cramps, Pain with urination during periods": {
        "Disease": "Endometriosis",
        "Description": "Endometriosis is a disorder in which tissue similar to the tissue that normally lines the inside of your uterus grows outside your uterus.",
        "Medicines": ['Naproxen', 'Combined oral contraceptives'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Heavy menstrual bleeding, Pelvic pressure or pain, Frequent urination": {
        "Disease": "Uterine Fibroids",
        "Description": "Uterine Fibroids are noncancerous growths of the uterus that often appear during childbearing years.",
        "Medicines": ['Leuprolide', 'Tranexamic acid'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Vaginal bleeding between periods, Unusual vaginal discharge, Pain during intercourse": {
        "Disease": "Cervical Cancer",
        "Description": "Cervical Cancer is a type of cancer that occurs in the cells of the cervix.",
        "Medicines": ['Cisplatin', 'Paclitaxel'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Bloating or abdominal swelling, Rapid feeling of fullness when eating, Changes in bowel habits, such as constipation": {
        "Disease": "Ovarian Cancer",
        "Description": "Ovarian Cancer is a type of cancer that begins in the ovaries.",
        "Medicines": ['Carboplatin', 'Paclitaxel'],
        "Diet": ['Carrots', ' Ginger tea']
    },
    "I feel New lump or mass in the breast, Breast or nipple pain, Skin irritation or dimpling": {
        "Disease": "Breast Cancer",
        "Description": "Breast Cancer is a type of cancer that forms in the cells of the breasts.",
        "Medicines": ['Tamoxifen', 'Trastuzumab'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Pain in the lower abdomen, Unusual and heavy vaginal discharge, Pain during sex": {
        "Disease": "Pelvic Inflammatory Disease",
        "Description": "Pelvic Inflammatory Disease is an infection of the female reproductive organs.",
        "Medicines": ['Ceftriaxone', 'Doxycycline'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Irregular menstrual cycles, Excessive hair growth (hirsutism), Severe acne": {
        "Disease": "Polycystic Ovary Syndrome",
        "Description": "Polycystic Ovary Syndrome (PCOS) is a hormonal disorder common among women of reproductive age.",
        "Medicines": ['Metformin', 'Clomiphene'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Menstrual flow requiring double sanitary protection, Bleeding longer than a week, Passing large blood clots": {
        "Disease": "Menorrhagia",
        "Description": "Menorrhagia is the medical term for menstrual periods with abnormally heavy or prolonged bleeding.",
        "Medicines": ['Tranexamic acid', 'Mefenamic acid'],
        "Diet": ['Carrots', ' Ginger tea']
    },
    "I feel Nausea or vomiting, Loose stools, Headache": {
        "Disease": "Dysmenorrhea",
        "Description": "Dysmenorrhea refers to the medical term for painful menstrual cramps.",
        "Medicines": ['Ibuprofen', 'Naproxen'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Milky nipple discharge, Hair loss, Pelvic pain": {
        "Disease": "Amenorrhea",
        "Description": "Amenorrhea is the absence of menstruation, one or more missed menstrual periods.",
        "Medicines": ['Estrogen therapy', 'Progesterone therapy'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Sharp or stabbing pelvic pain, Light to heavy vaginal spotting or bleeding, Shoulder pain": {
        "Disease": "Ectopic Pregnancy",
        "Description": "Ectopic Pregnancy is a complication of pregnancy in which the embryo attaches outside the uterus.",
        "Medicines": ['Methotrexate', 'Surgical intervention'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Increased thirst, Frequent urination, Blurred vision": {
        "Disease": "Gestational Diabetes",
        "Description": "Gestational Diabetes is a type of diabetes that develops during pregnancy.",
        "Medicines": ['Insulin', 'Metformin'],
        "Diet": ['Carrots', ' Ginger tea']
    },
    "I feel Severe headaches, Vision changes, Upper abdominal pain, usually under the ribs on the right side": {
        "Disease": "Preeclampsia",
        "Description": "Preeclampsia is a pregnancy complication characterized by high blood pressure and signs of damage to another organ system, most often the liver and kidneys.",
        "Medicines": ['Methyldopa', 'Labetalol'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Bright red vaginal bleeding without pain during the second half of pregnancy, Preterm contractions, Lower back pain": {
        "Disease": "Placenta Previa",
        "Description": "Placenta Previa is a condition where the placenta covers the cervix partially or completely.",
        "Medicines": ['Corticosteroids', 'Emergency delivery'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Sudden onset of abdominal pain, Uterine tenderness or rigidity, Decreased fetal movement": {
        "Disease": "Placental Abruption",
        "Description": "Placental Abruption is a serious pregnancy complication in which the placenta detaches from the womb (uterus).",
        "Medicines": ['Blood transfusion', 'Emergency delivery'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Severe mood swings, Withdrawal from family and friends, Thoughts of harming oneself or the baby": {
        "Disease": "Postpartum Depression",
        "Description": "Postpartum Depression is a complex mix of physical, emotional, and behavioral changes that happen in a woman after giving birth.",
        "Medicines": ['Sertraline', 'Cognitive behavioral therapy (CBT)'],
        "Diet": ['Carrots', ' Ginger tea']
    },
    "I feel Swollen, wedge-shaped area on the breast, Breast lump, Flu-like symptoms, including fever and chills": {
        "Disease": "Mastitis",
        "Description": "Mastitis is an infection of the breast tissue that results in breast pain, swelling, warmth, and redness.",
        "Medicines": ['Dicloxacillin', 'Cephalexin'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Neck tenderness or swelling, Hoarseness, Difficulty swallowing": {
        "Disease": "Thyroiditis",
        "Description": "Thyroiditis is an inflammation of the thyroid gland.",
        "Medicines": ['Levothyroxine', 'Prednisolone'],
        "Diet": ['Carrots', ' Apple juice']
    },
    "I feel Darkening of the skin (hyperpigmentation), Low blood pressure, Salt craving": {
        "Disease": "Addison's Disease",
        "Description": "Addison's Disease is a disorder that occurs when your body produces insufficient amounts of certain hormones produced by your adrenal glands.",
        "Medicines": ['Hydrocortisone', 'Fludrocortisone'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Round, red, full face (moon face), Slow healing of cuts, insect bites, and infections, Bone loss": {
        "Disease": "Cushing's Syndrome",
        "Description": "Cushing's Syndrome occurs when your body is exposed to high levels of the hormone cortisol for a long time.",
        "Medicines": ['Ketoconazole', 'Metyrapone'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Fragile bones that easily fracture (osteoporosis), Kidney stones, Excessive urination": {
        "Disease": "Hyperparathyroidism",
        "Description": "Hyperparathyroidism is an excess of parathyroid hormone in the bloodstream due to overactivity of one or more of the body's four parathyroid glands.",
        "Medicines": ['Cinacalcet', 'Bisphosphonates'],
        "Diet": ['Garlic', ' Orange juice']
    },
    "I feel Muscle spasms or cramps (tetany), Paresthesia (tingling or burning) in fingertips, toes, and lips, Painful menstrual periods": {
        "Disease": "Hypoparathyroidism",
        "Description": "Hypoparathyroidism is an uncommon condition in which your body secretes abnormally low levels of parathyroid hormone (PTH).",
        "Medicines": ['Calcium carbonate', 'Vitamin D'],
        "Diet": ['Carrots', ' Cranberry juice']
    },
    "I feel Enlarged hands and feet, Coarse, oily, thickened skin, Enlarged facial features": {
        "Disease": "Acromegaly",
        "Description": "Acromegaly is a hormonal disorder that develops when your pituitary gland produces too much growth hormone during adulthood.",
        "Medicines": ['Octreotide', 'Pegvisomant'],
        "Diet": ['Garlic', ' Pomegranate juice']
    },
    "I feel Abnormally rapid growth, especially in height, Delayed puberty, Double vision or difficulty with peripheral (side) vision": {
        "Disease": "Gigantism",
        "Description": "Gigantism is a rare condition that causes abnormal growth in children.",
        "Medicines": ['Octreotide', 'Pegvisomant'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Short trunk with normal-sized limbs (in some types), Delayed motor skills development, Bowed legs": {
        "Disease": "Dwarfism",
        "Description": "Dwarfism is a condition of short stature, defined as an adult height of 4 feet 10 inches or under.",
        "Medicines": ['Growth hormone therapy'],
        "Diet": ['Garlic', ' Grape juice']
    },
    "I feel Persistent headaches, Vision loss, particularly peripheral vision, Hormonal imbalances leading to various symptoms": {
        "Disease": "Pituitary Adenoma",
        "Description": "Pituitary Adenomas are tumors that occur in the pituitary gland.",
        "Medicines": ['Cabergoline', 'Bromocriptine'],
        "Diet": ['Carrots', ' Pineapple juice']
    },
    "I feel Weight loss, Low blood pressure, Muscle weakness": {
        "Disease": "Hypopituitarism",
        "Description": "Hypopituitarism is a rare disorder in which your pituitary gland fails to produce one or more hormones, or doesn't produce enough hormones.",
        "Medicines": ['Hormone replacement therapy'],
        "Diet": ['Garlic', ' Tomato juice']
    },
    "I feel Intense thirst, Excessive urination, Dehydration": {
        "Disease": "Diabetes Insipidus",
        "Description": "Diabetes Insipidus is an uncommon disorder that causes an imbalance of fluids in the body, leading to intense thirst and the excretion of large amounts of urine.",
        "Medicines": ['Desmopressin', 'Hydrochlorothiazide'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Increased waist circumference, High blood sugar, High blood pressure": {
        "Disease": "Metabolic Syndrome",
        "Description": "Metabolic Syndrome is a cluster of conditions that occur together, increasing your risk of heart disease, stroke, and type 2 diabetes.",
        "Medicines": ['Metformin', 'Atorvastatin'],
        "Diet": ['Garlic', ' Green smoothie']
    },
    "I feel Excess body fat, Shortness of breath, Joint pain": {
        "Disease": "Obesity",
        "Description": "Obesity is a complex disease involving an excessive amount of body fat, increasing the risk of health problems.",
        "Medicines": ['Orlistat', 'Liraglutide'],
        "Diet": ['Carrots', ' Lemon water']
    },
    "I feel Extremely low body weight, Fear of gaining weight, Distorted body image": {
        "Disease": "Anorexia Nervosa",
        "Description": "Anorexia Nervosa is an eating disorder characterized by an abnormally low body weight, an intense fear of gaining weight, and a distorted perception of weight.",
        "Medicines": ['Olanzapine', 'Fluoxetine'],
        "Diet": ['Garlic', ' Cucumber juice']
    },
    "I feel Binge eating, Self-induced vomiting, Distorted body image": {
        "Disease": "Bulimia Nervosa",
        "Description": "Bulimia Nervosa is a serious eating disorder marked by bingeing, followed by methods to avoid weight gain, such as vomiting.",
        "Medicines": ['Fluoxetine', 'Topiramate'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Eating large amounts of food, Feeling out of control, Guilt about eating": {
        "Disease": "Binge Eating Disorder",
        "Description": "Binge Eating Disorder is a serious eating disorder in which you frequently consume unusually large amounts of food and feel unable to stop eating.",
        "Medicines": ['Lisdexamfetamine', 'Topiramate'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Persistent sadness, Loss of interest, Changes in appetite": {
        "Disease": "Depression",
        "Description": "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest.",
        "Medicines": ['Sertraline', 'Escitalopram'],
        "Diet": ['Carrots', ' Mint lemonade']
    },
    "I feel Excessive worry, Restlessness, Difficulty concentrating": {
        "Disease": "Anxiety Disorder",
        "Description": "Anxiety Disorder is a mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one's daily activities.",
        "Medicines": ['Alprazolam', 'Diazepam'],
        "Diet": ['Garlic', ' Mango juice']
    },
    "I feel Mood swings, Mania, Depression": {
        "Disease": "Bipolar Disorder",
        "Description": "Bipolar Disorder is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).",
        "Medicines": ['Lithium', 'Valproate'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Hallucinations, Delusions, Disorganized thinking": {
        "Disease": "Schizophrenia",
        "Description": "Schizophrenia is a serious mental disorder in which people interpret reality abnormally, leading to hallucinations, delusions, and extremely disordered thinking and behavior.",
        "Medicines": ['Risperidone', 'Olanzapine'],
        "Diet": ['Garlic', ' Watermelon juice']
    },
    "I feel Obsessions, Compulsions, Anxiety": {
        "Disease": "Obsessive-Compulsive Disorder",
        "Description": "Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by unwanted repetitive thoughts (obsessions) and actions (compulsions).",
        "Medicines": ['Fluoxetine', 'Clomipramine'],
        "Diet": ['Carrots', ' Pear juice']
    },
    "I feel Flashbacks, Nightmares, Severe anxiety": {
        "Disease": "Post-Traumatic Stress Disorder",
        "Description": "Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by a terrifying event  either experiencing it or witnessing it.",
        "Medicines": ['Sertraline', 'Paroxetine'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Inattention, Hyperactivity, Impulsivity": {
        "Disease": "Attention Deficit Hyperactivity Disorder",
        "Description": "Attention Deficit Hyperactivity Disorder (ADHD) is a mental health disorder that includes a combination of persistent problems, such as difficulty paying attention, hyperactivity, and impulsive behavior.",
        "Medicines": ['Methylphenidate', 'Amphetamine'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Difficulty with communication, Repetitive behaviors, Narrow range of interests": {
        "Disease": "Autism Spectrum Disorder",
        "Description": "Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication and behavior.",
        "Medicines": ['Risperidone', 'Aripiprazole'],
        "Diet": ['Garlic', ' Blueberry juice']
    },
    "I feel Difficulty socializing, Repetitive behaviors, Narrow interests": {
        "Disease": "Asperger Syndrome",
        "Description": "Asperger Syndrome is a developmental disorder affecting the ability to effectively socialize and communicate.",
        "Medicines": ['Risperidone', 'Aripiprazole'],
        "Diet": ['Carrots', ' Cherry juice']
    },
    "I feel Tics, Repetitive movements, Unwanted sounds": {
        "Disease": "Tourette Syndrome",
        "Description": "Tourette Syndrome is a disorder that involves repetitive movements or unwanted sounds (tics) that can't be easily controlled.",
        "Medicines": ['Haloperidol', 'Clonidine'],
        "Diet": ['Garlic', ' Beet juice']
    },
    "I feel Memory loss, Depersonalization, Identity confusion": {
        "Disease": "Dissociative Identity Disorder",
        "Description": "Dissociative Identity Disorder (DID) is a severe condition in which two or more distinct identities, or personality states, are present in  and alternately take control of  an individual.",
        "Medicines": ['Sertraline', 'Cognitive behavioral therapy (CBT)'],
        "Diet": ['Carrots', ' Apple juice']
    },
    "I feel Intense fear of abandonment, Unstable relationships, Impulsive behaviors": {
        "Disease": "Borderline Personality Disorder",
        "Description": "Borderline Personality Disorder is a mental illness characterized by a long-term pattern of unstable relationships, distorted sense of self, and strong emotional reactions.",
        "Medicines": ['Olanzapine', 'Cognitive behavioral therapy (CBT)'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Lack of empathy, Manipulative behavior, Aggressiveness": {
        "Disease": "Antisocial Personality Disorder",
        "Description": "Antisocial Personality Disorder is a mental condition in which a person consistently shows no regard for right and wrong and ignores the rights and feelings of others.",
        "Medicines": ['Risperidone', 'Cognitive behavioral therapy (CBT)'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Joint pain, Butterfly-shaped rash, Fever": {
        "Disease": "Systemic Lupus Erythematosus (Lupus)",
        "Description": "Lupus is a chronic autoimmune disease where the immune system attacks healthy tissue, leading to inflammation and damage in various body parts.",
        "Medicines": ['Hydroxychloroquine', 'Prednisolone'],
        "Diet": ['Garlic', ' Orange juice']
    },
    "I feel Increased thirst, Frequent urination, Blurred vision": {
        "Disease": "Type 1 Diabetes",
        "Description": "Type 1 Diabetes is a chronic condition in which the pancreas produces little or no insulin due to the immune system attacking insulin-producing cells.",
        "Medicines": ['Insulin'],
        "Diet": ['Carrots', ' Cranberry juice']
    },
    "I feel Weight gain, Cold intolerance, Muscle weakness": {
        "Disease": "Hashimoto's Thyroiditis",
        "Description": "Hashimoto's Thyroiditis is an autoimmune disorder where the immune system attacks the thyroid, leading to hypothyroidism.",
        "Medicines": ['Levothyroxine'],
        "Diet": ['Garlic', ' Pomegranate juice']
    },
    "I feel Weight loss, Rapid heartbeat, Sweating": {
        "Disease": "Graves' Disease",
        "Description": "Graves' Disease is an autoimmune disorder that causes hyperthyroidism, or overactive thyroid.",
        "Medicines": ['Methimazole', 'Propylthiouracil'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Back pain, Stiffness, Reduced flexibility": {
        "Disease": "Ankylosing Spondylitis",
        "Description": "Ankylosing Spondylitis is an inflammatory disease that can cause some of the vertebrae in the spine to fuse.",
        "Medicines": ['Adalimumab', 'Etanercept'],
        "Diet": ['Garlic', ' Grape juice']
    },
    "I feel Dry eyes, Dry mouth, Joint pain": {
        "Disease": "Sjögren's Syndrome",
        "Description": "Sjögren's Syndrome is an autoimmune disorder characterized by dry eyes and dry mouth.",
        "Medicines": ['Hydroxychloroquine', 'Pilocarpine'],
        "Diet": ['Carrots', ' Pineapple juice']
    },
    "I feel Hair loss, Round bald patches, Itching": {
        "Disease": "Alopecia Areata",
        "Description": "Alopecia Areata is an autoimmune disorder that causes hair loss, usually in small, round patches on the scalp.",
        "Medicines": ['Clobetasol', 'Minoxidil'],
        "Diet": ['Garlic', ' Watermelon juice']
    },
    "I feel White patches on skin, Premature graying of hair, Loss of skin color": {
        "Disease": "Vitiligo",
        "Description": "Vitiligo is an autoimmune disorder that causes the loss of skin color in patches due to the destruction of melanocytes.",
        "Medicines": ['Tacrolimus', 'Topical corticosteroids'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Blisters, Sores, Itching": {
        "Disease": "Pemphigus Vulgaris",
        "Description": "Pemphigus Vulgaris is a rare autoimmune disorder that causes blisters and sores on the skin and mucous membranes.",
        "Medicines": ['Prednisolone', 'Azathioprine'],
        "Diet": ['Garlic', ' Green smoothie']
    },
    "I feel Muscle weakness, Drooping eyelids, Double vision": {
        "Disease": "Myasthenia Gravis",
        "Description": "Myasthenia Gravis is an autoimmune disorder characterized by weakness and rapid fatigue of voluntary muscles.",
        "Medicines": ['Pyridostigmine', 'Prednisolone'],
        "Diet": ['Garlic', ' Green smoothie']
    },
    "I feel Skin rash, Difficulty swallowing": {
        "Disease": "Dermatomyositis",
        "Description": "Dermatomyositis is an inflammatory disease marked by muscle weakness and a distinctive skin rash.",
        "Medicines": ['Prednisolone', 'Methotrexate'],
        "Diet": ['Garlic', ' Cucumber juice']
    },
    "I feel Joint pain, Chest pain": {
        "Disease": "Rheumatic Fever",
        "Description": "Rheumatic Fever is an inflammatory disease that can develop as a complication of untreated or poorly treated strep throat or scarlet fever.",
        "Medicines": ['Penicillin', 'Aspirin'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Tingling sensation, Unsteady walking, Difficulty breathing": {
        "Disease": "Guillain-Barré Syndrome",
        "Description": "Guillain-Barré Syndrome is a rare autoimmune disorder where the body's immune system attacks the nerves, leading to muscle weakness and paralysis.",
        "Medicines": ['Plasmapheresis', 'Intravenous immunoglobulin'],
        "Diet": ['Garlic', ' Berry smoothie']
    },
    "I feel Nervousness, Shortness of breath, Pale skin": {
        "Disease": "Pernicious Anemia",
        "Description": "Pernicious Anemia is an autoimmune disorder that affects the absorption of vitamin B12, leading to a decrease in red blood cells.",
        "Medicines": ['Cyanocobalamin', 'Hydroxocobalamin'],
        "Diet": ['Carrots', ' Mint lemonade']
    },
    "I feel Back pain, Jaundice, Abdominal pain": {
        "Disease": "Autoimmune Hepatitis",
        "Description": "Autoimmune Hepatitis is a chronic disease in which the body's immune system attacks the liver, causing inflammation and liver damage.",
        "Medicines": ['Prednisolone', 'Azathioprine'],
        "Diet": ['Garlic', ' Mango juice']
    },
    "I feel Nosebleeds, Coughing up blood, Shortness of breath": {
        "Disease": "Wegener's Granulomatosis",
        "Description": "Wegener's Granulomatosis, now known as Granulomatosis with Polyangiitis, is a rare autoimmune disorder that causes inflammation of the blood vessels.",
        "Medicines": ['Cyclophosphamide', 'Rituximab'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Difficulty swallowing, Shortness of breath": {
        "Disease": "Polymyositis",
        "Description": "Polymyositis is an inflammatory muscle disease causing muscle weakness on both sides of the body.",
        "Medicines": ['Prednisolone', 'Methotrexate'],
        "Diet": ['Garlic', ' Watermelon juice']
    },
    "I feel Hardening of skin, Joint pain, Heartburn": {
        "Disease": "Scleroderma",
        "Description": "Scleroderma is a group of autoimmune diseases that cause the skin and connective tissues to harden and tighten.",
        "Medicines": ['Mycophenolate mofetil', 'Cyclophosphamide'],
        "Diet": ['Carrots', ' Pear juice']
    },
    "I feel Eye inflammation, Painful urination, Skin rashes": {
        "Disease": "Reactive Arthritis",
        "Description": "Reactive Arthritis is an inflammatory condition that affects the joints, eyes, and urinary tract.",
        "Medicines": ['NSAIDs', 'Methotrexate'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Itchy skin, Jaundice, Abdominal pain": {
        "Disease": "Primary Biliary Cholangitis",
        "Description": "Primary Biliary Cholangitis is a chronic liver disease caused by the destruction of the bile ducts in the liver.",
        "Medicines": ['Ursodeoxycholic acid', 'Obeticholic acid'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Eye pain, Blurred vision, Redness in eye, Light sensitivity": {
        "Disease": "Autoimmune Uveitis",
        "Description": "Autoimmune Uveitis is inflammation of the uvea, the middle layer of the eye, due to an autoimmune reaction.",
        "Medicines": ['Prednisolone', 'Methotrexate'],
        "Diet": ['Garlic', ' Blueberry juice']
    },
    "I feel Seizures, Memory loss, Confusion, Weakness": {
        "Disease": "Autoimmune Encephalitis",
        "Description": "Autoimmune Encephalitis is a group of conditions where the body's immune system attacks the brain, causing inflammation.",
        "Medicines": ['Prednisolone', 'Intravenous immunoglobulin'],
        "Diet": []
    },
    "I feel Weakness in legs and arms, Tingling sensations, Loss of reflexes, Difficulty walking": {
        "Disease": "Chronic Inflammatory Demyelinating Polyneuropathy (CIDP)",
        "Description": "CIDP is a neurological disorder characterized by progressive weakness and impaired sensory function in the legs and arms.",
        "Medicines": ['Prednisolone', 'Intravenous immunoglobulin'],
        "Diet": ['Carrots', ' Cherry juice']
    },
    "I feel Blood clots, Frequent miscarriages, Lacy rash, Headaches": {
        "Disease": "Antiphospholipid Syndrome",
        "Description": "Antiphospholipid Syndrome is an autoimmune disorder that increases the risk of blood clots.",
        "Medicines": ['Warfarin', 'Aspirin'],
        "Diet": ['Carrots', ' Apple juice']
    },
    "I feel Shortness of breath, Rapid heartbeat, Pale skin": {
        "Disease": "Autoimmune Hemolytic Anemia",
        "Description": "Autoimmune Hemolytic Anemia is a condition where the immune system destroys red blood cells faster than they can be produced.",
        "Medicines": ['Prednisolone', 'Rituximab'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Blisters, Itching, Red skin, Burning sensation": {
        "Disease": "Bullous Pemphigoid",
        "Description": "Bullous Pemphigoid is a rare skin condition that causes large, fluid-filled blisters.",
        "Medicines": ['Prednisolone', 'Doxycycline'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Stiffness, Pain in shoulders, Pain in hips": {
        "Disease": "Polymyalgia Rheumatica",
        "Description": "Polymyalgia Rheumatica is an inflammatory disorder that causes muscle pain and stiffness, especially in the shoulders.",
        "Medicines": ['Prednisolone', 'Methotrexate'],
        "Diet": ['Carrots', ' Mint lemonade']
    },
    "I feel High blood pressure, Arm pain, Dizziness, Headaches": {
        "Disease": "Takayasu's Arteritis",
        "Description": "Takayasu's Arteritis is a rare type of vasculitis that causes inflammation of the large arteries.",
        "Medicines": ['Prednisolone', 'Methotrexate'],
        "Diet": ['Carrots', ' Cranberry juice']
    },
    "I feel Asthma, Skin rashes, Nerve pain, Fever": {
        "Disease": "Eosinophilic Granulomatosis with Polyangiitis",
        "Description": "Eosinophilic Granulomatosis with Polyangiitis, formerly known as Churg-Strauss Syndrome, is a disorder marked by blood vessel inflammation.",
        "Medicines": ['Prednisolone', 'Cyclophosphamide'],
        "Diet": ['Garlic', ' Pomegranate juice']
    },
    "I feel Joint pain, Kidney issues": {
        "Disease": "Cryoglobulinemia",
        "Description": "Cryoglobulinemia is a condition where abnormal proteins in the blood thicken in cold temperatures, leading to restricted blood flow.",
        "Medicines": ['Prednisolone', 'Cyclophosphamide'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Coughing up blood, Shortness of breath, Nausea": {
        "Disease": "Goodpasture Syndrome",
        "Description": "Goodpasture Syndrome is a rare autoimmune disease that attacks the lungs and kidneys.",
        "Medicines": ['Prednisolone', 'Cyclophosphamide'],
        "Diet": ['Garlic', ' Grape juice']
    },
    "I feel Vertigo, Hearing loss, Tinnitus, Ear fullness": {
        "Disease": "Meniere's Disease",
        "Description": "Meniere's Disease is an inner ear disorder that causes episodes of vertigo, ringing in the ears (tinnitus), hearing loss, and a feeling of fullness in the ear.",
        "Medicines": ['Betahistine', 'Diuretics'],
        "Diet": ['Carrots', ' Pineapple juice']
    },
    "I feel Rash, Red eyes, Swollen lymph nodes, Strawberry tongue": {
        "Disease": "Kawasaki Disease",
        "Description": "Kawasaki Disease is a condition that causes inflammation in the walls of some blood vessels in the body and primarily affects children.",
        "Medicines": ['Aspirin', 'Intravenous immunoglobulin'],
        "Diet": ['Garlic', ' Tomato juice']
    },
    "I feel Headache, Jaw pain, Vision problems, Scalp tenderness": {
        "Disease": "Giant Cell Arteritis",
        "Description": "Giant Cell Arteritis is an inflammation of the lining of the arteries, most often the arteries in the head.",
        "Medicines": ['Prednisolone', 'Methotrexate'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Abdominal pain, Nausea, Vomiting, Weight loss": {
        "Disease": "Autoimmune Pancreatitis",
        "Description": "Autoimmune Pancreatitis is a type of chronic pancreatitis that is thought to be caused by the body's immune system attacking the pancreas.",
        "Medicines": ['Prednisolone', 'Azathioprine'],
        "Diet": ['Garlic', ' Green smoothie']
    },
    "I feel Ear pain, Joint pain, Inflammation of cartilage, Shortness of breath": {
        "Disease": "Relapsing Polychondritis",
        "Description": "Relapsing Polychondritis is a rare disorder characterized by recurrent inflammation of cartilage and other tissues throughout the body.",
        "Medicines": ['Prednisolone', 'Methotrexate'],
        "Diet": ['Carrots', ' Lemon water']
    },
    "I feel Rash, Abdominal pain, Joint pain, Kidney issues": {
        "Disease": "Henoch-Schönlein Purpura",
        "Description": "Henoch-Schönlein Purpura is a disease involving inflammation of small blood vessels that causes a rash, arthritis, and kidney problems.",
        "Medicines": ['Prednisolone', 'Cyclophosphamide'],
        "Diet": ['Garlic', ' Cucumber juice']
    },
    "I feel Hearing loss, Vertigo, Tinnitus, Ear fullness": {
        "Disease": "Autoimmune Inner Ear Disease",
        "Description": "Autoimmune Inner Ear Disease is a rare disorder characterized by progressive hearing loss and dizziness caused by the immune system attacking the inner ear.",
        "Medicines": ['Prednisolone', 'Methotrexate'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Weakness, Paralysis, Pain, Sensory issues": {
        "Disease": "Transverse Myelitis",
        "Description": "Transverse Myelitis is an inflammation of both sides of one section of the spinal cord, affecting the nervous system and often leading to muscle weakness.",
        "Medicines": ['Prednisolone', 'Plasmapheresis'],
        "Diet": ['Garlic', ' Berry smoothie']
    },
    "I feel Enlarged lymph nodes, Anemia, Frequent infections": {
        "Disease": "Autoimmune Lymphoproliferative Syndrome",
        "Description": "Autoimmune Lymphoproliferative Syndrome is a disorder of the immune system characterized by the abnormal proliferation of lymphocytes.",
        "Medicines": ['Prednisolone', 'Sirolimus'],
        "Diet": ['Carrots', ' Mint lemonade']
    },
    "I feel heacy menstrual flow, Easy bruising, Nosebleeds, Bleeding gums": {
        "Disease": "Idiopathic Thrombocytopenic Purpura",
        "Description": "Idiopathic Thrombocytopenic Purpura is a blood disorder characterized by an abnormal decrease in the number of platelets in the blood.",
        "Medicines": ['Intravenous immunoglobulin', 'Prednisolone', ' '],
        "Diet": ['Garlic', ' Mango juice']
    },
    "I feel Petechiae, Nosebleeds, Bleeding gums": {
        "Disease": "Immune Thrombocytopenic Purpura",
        "Description": "Immune Thrombocytopenic Purpura is an autoimmune disorder that leads to easy or excessive bruising and bleeding.",
        "Medicines": ['Rituximab', 'Prednisolone'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Jaundice, Itchy skin, Abdominal pain": {
        "Disease": "Primary Sclerosing Cholangitis",
        "Description": "Primary Sclerosing Cholangitis is a disease of the bile ducts that causes inflammation and subsequent obstruction of bile ducts both inside and outside the liver.",
        "Medicines": ['Obeticholic acid', 'Ursodeoxycholic acid'],
        "Diet": ['Garlic', ' Watermelon juice']
    },
    "I feel foamy urine, Blood in urine, Swelling in hands and feet, High blood pressure": {
        "Disease": "IgA Nephropathy",
        "Description": "IgA Nephropathy is a kidney disease that occurs when an antibody called immunoglobulin A (IgA) builds up in the kidneys, leading to inflammation.",
        "Medicines": ['Prednisolone', 'Cyclophosphamide', 'Cyclophosphamide'],
        "Diet": ['Carrots', ' Pear juice']
    },
    "I feel Painful sores, Purple or reddish lesions, Itching, Hair loss": {
        "Disease": "Lichen Planus",
        "Description": "Lichen Planus is a condition that causes swelling and irritation in the skin, hair, nails, and mucous membranes.",
        "Medicines": ['Tacrolimus', 'Clobetasol', 'Tacrolimus'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Swollen glands, Dry eyes, Dry mouth, Joint pain": {
        "Disease": "Sjogren's Syndrome",
        "Description": "Sjogren's Syndrome is an autoimmune disorder characterized by dry eyes and dry mouth.",
        "Medicines": ['Pilocarpine', 'Hydroxychloroquine'],
        "Diet": []
    },
    "I feel Jaundice, Swollen feet and ankles": {
        "Disease": "Primary Biliary Cirrhosis",
        "Description": "Primary Biliary Cirrhosis is a chronic disease in which the bile ducts in the liver are slowly destroyed.",
        "Medicines": ['Ursodeoxycholic acid', 'Obeticholic acid'],
        "Diet": ['Garlic', ' Blueberry juice']
    },
    "I feel Rash, Joint pain, Muscle weakness, Swollen hands": {
        "Disease": "Mixed Connective Tissue Disease",
        "Description": "Mixed Connective Tissue Disease is a rare autoimmune disorder that has features of several other connective tissue diseases.",
        "Medicines": ['Methotrexate', 'Prednisolone'],
        "Diet": ['Carrots', ' Cherry juice']
    },
    "I feel Muscle and joint pain, Fever, Weight loss, Fatigue": {
        "Disease": "Microscopic Polyangiitis",
        "Description": "Microscopic Polyangiitis is an autoimmune disease that affects small blood vessels.",
        "Medicines": ['Cyclophosphamide', 'Prednisolone'],
        "Diet": ['Garlic', ' Beet juice']
    },
    "I feel Poor response to treatment, Frequent infections, Growth delays, Autoimmune disorders": {
        "Disease": "Primary Immunodeficiency",
        "Description": "Primary Immunodeficiency is a group of disorders in which part of the body's immune system is missing or does not function properly.",
        "Medicines": ['Antibiotics', 'Intravenous immunoglobulin'],
        "Diet": ['Carrots', ' Apple juice']
    },
    "I feel Joint pain, Stiffness, Swelling": {
        "Disease": "Psoriatic Arthritis",
        "Description": "Psoriatic Arthritis is a form of arthritis that affects some people who have psoriasis.",
        "Medicines": ['Etanercept', 'Methotrexate'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Painful sores, Cold fingers or toes, Color changes in skin, Numbness": {
        "Disease": "Raynaud's Phenomenon",
        "Description": "Raynaud's Phenomenon is a condition in which smaller arteries that supply blood to your skin constrict excessively in response to cold or stress, limiting blood supply to affected areas.",
        "Medicines": ['Amlodipine', 'Nifedipine'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Eye inflammation, Painful urination, Skin rashes": {
        "Disease": "Reiter's Syndrome",
        "Description": "Reiter's Syndrome, also known as Reactive Arthritis, is a form of inflammatory arthritis that develops in response to an infection in another part of the body.",
        "Medicines": ['Methotrexate', 'NSAIDs'],
        "Diet": ['Garlic', ' Orange juice']
    },
    "I feel Redness in eye, Sensitivity to light, Blurred vision": {
        "Disease": "Scleritis",
        "Description": "Scleritis is a serious inflammatory disease that affects the white outer coating of the eye (sclera).",
        "Medicines": ['Methotrexate', 'Prednisolone'],
        "Diet": ['Carrots', ' Cranberry juice']
    },
    "I feel Fever, Painful skin lesions, Joint pain": {
        "Disease": "Sweet's Syndrome",
        "Description": "Sweet's Syndrome is a rare skin condition characterized by fever and painful skin lesions that appear mainly on your arms, neck, head, and trunk.",
        "Medicines": ['Potassium iodide', 'Prednisolone'],
        "Diet": ['Garlic', ' Pomegranate juice']
    },
    "I feel Eye redness, Bulging eyes": {
        "Disease": "Thyroid Eye Disease",
        "Description": "Thyroid Eye Disease is an autoimmune condition that causes inflammation and swelling of the muscles and tissues around the eyes.",
        "Medicines": ['Methotrexate', 'Prednisolone'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Fever, Weight loss, Joint pain": {
        "Disease": "Vasculitis",
        "Description": "Vasculitis is inflammation of the blood vessels that causes changes in the blood vessel walls.",
        "Medicines": ['Cyclophosphamide', 'Prednisolone'],
        "Diet": ['Garlic', ' Grape juice']
    },
    "I feel Frequent infections, Poor growth, Diarrhea": {
        "Disease": "X-linked Agammaglobulinemia",
        "Description": "X-linked Agammaglobulinemia is a condition that affects the immune system and occurs almost exclusively in males.",
        "Medicines": ['Antibiotics', 'Intravenous immunoglobulin'],
        "Diet": ['Carrots', ' Pineapple juice']
    },
    "I feel Bloody diarrhea, Eczema, Easy bruising, Recurrent infections": {
        "Disease": "Wiskott-Aldrich Syndrome",
        "Description": "Wiskott-Aldrich Syndrome is a rare X-linked recessive disease characterized by eczema, thrombocytopenia (low platelet count), immune deficiency, and bloody diarrhea (secondary to the thrombocytopenia).",
        "Medicines": ['Rituximab', 'Stem cell transplantation'],
        "Diet": ['Garlic', ' Tomato juice']
    },
    "I feel Low blood pressure, Severe pain, Vomiting, Diarrhea": {
        "Disease": "Addisonian Crisis",
        "Description": "Addisonian Crisis is a life-threatening medical emergency caused by insufficient levels of cortisol.",
        "Medicines": ['Fludrocortisone', 'Hydrocortisone'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Limited range of motion, Joint pain, Limping, Pain in groin": {
        "Disease": "Avascular Necrosis",
        "Description": "Avascular Necrosis is the death of bone tissue due to a lack of blood supply.",
        "Medicines": ['Surgical intervention', 'Bisphosphonates'],
        "Diet": ['Garlic', ' Green smoothie']
    },
    "I feel Skin rashes, Mouth sores, Genital sores, Eye inflammation": {
        "Disease": "Behçet's Disease",
        "Description": "Behçet's Disease is a rare disorder causing blood vessel inflammation throughout the body.",
        "Medicines": ['Azathioprine', 'Colchicine'],
        "Diet": ['Carrots', ' Lemon water']
    },
    "I feel Vomiting blood, Abdominal pain, Swelling, Jaundice": {
        "Disease": "Budd-Chiari Syndrome",
        "Description": "Budd-Chiari Syndrome is a rare condition caused by the narrowing and obstruction of the veins of the liver.",
        "Medicines": ['TIPS procedure', 'Warfarin'],
        "Diet": ['Garlic', ' Cucumber juice']
    },
    "I feel Burning sensation, Intense itching, Blisters, Rash": {
        "Disease": "Dermatitis Herpetiformis",
        "Description": "Dermatitis Herpetiformis is a chronic skin condition characterized by blistering, intensely itchy skin.",
        "Medicines": ['Gluten-free diet', 'Dapsone'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Chest pain, Difficulty swallowing, Food impaction, Heartburn": {
        "Disease": "Eosinophilic Esophagitis",
        "Description": "Eosinophilic Esophagitis is a chronic, allergic inflammatory disease of the esophagus.",
        "Medicines": ['Prednisolone', 'Fluticasone'],
        "Diet": ['Garlic', ' Berry smoothie']
    },
    "I feel High blood pressure, Headache, Neck pain, Dizziness": {
        "Disease": "Fibromuscular Dysplasia",
        "Description": "Fibromuscular Dysplasia is a condition that causes abnormal cell growth in the walls of one or more arteries.",
        "Medicines": ['Aspirin', 'Angioplasty'],
        "Diet": ['Carrots', ' Mint lemonade']
    },
    "I feel Fever, Abdominal pain, Jaundice": {
        "Disease": "Granulomatous Hepatitis",
        "Description": "Granulomatous Hepatitis is a rare disorder characterized by the presence of granulomas in the liver.",
        "Medicines": ['Prednisolone', 'Methotrexate'],
        "Diet": ['Garlic', ' Mango juice']
    },
    "I feel Shortness of breath, Skin rashes, Unexplained weight loss": {
        "Disease": "Hypereosinophilic Syndrome",
        "Description": "Hypereosinophilic Syndrome is a group of disorders characterized by high levels of eosinophils in the blood, leading to organ damage.",
        "Medicines": ['Prednisolone', 'Imatinib'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Organ enlargement, Fibrosis, Pain, Weight loss": {
        "Disease": "IgG4-Related Disease",
        "Description": "IgG4-Related Disease is a condition characterized by infiltration of IgG4-positive plasma cells into various organs, causing inflammation and fibrosis.",
        "Medicines": ['Prednisolone', 'Rituximab'],
        "Diet": ['Garlic', ' Watermelon juice']
    },
    "I feel Skin lesions, Lymphadenopathy, Fever": {
        "Disease": "Lymphomatoid Granulomatosis",
        "Description": "Lymphomatoid Granulomatosis is a rare disorder characterized by an abnormal proliferation of lymphoid cells.",
        "Medicines": ['Rituximab', 'Prednisolone'],
        "Diet": ['Carrots', ' Pear juice']
    },
    "I feel Nerve damage, Enlarged organs, Endocrine problems, Skin changes": {
        "Disease": "POEMS Syndrome",
        "Description": "POEMS Syndrome is a rare blood disorder that damages your nerves and affects many other parts of the body.",
        "Medicines": ['Bortezomib', 'Dexamethasone'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Fever, Hypertension": {
        "Disease": "Polyarteritis Nodosa",
        "Description": "Polyarteritis Nodosa is a rare disease that results from blood vessel inflammation causing injury to organ systems.",
        "Medicines": ['Prednisolone', 'Cyclophosphamide'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Abdominal pain, Weight loss, Back pain, Kidney problems": {
        "Disease": "Retroperitoneal Fibrosis",
        "Description": "Retroperitoneal Fibrosis is a rare disorder in which inflammation and extensive fibrosis develop in the retroperitoneal space, causing blockage of the ureters.",
        "Medicines": ['Prednisolone', 'Tamoxifen'],
        "Diet": ['Garlic', ' Blueberry juice']
    },
    "I feel Shortness of breath, Wheezing, Chest tightness, Chronic cough": {
        "Disease": "Chronic Obstructive Pulmonary Disease (COPD)",
        "Description": "COPD is a chronic inflammatory lung disease that causes obstructed airflow from the lungs.",
        "Medicines": ['Salbutamol', 'Tiotropium'],
        "Diet": []
    },
    "I feel Fever, Night sweats, Weight loss": {
        "Disease": "HIV/AIDS",
        "Description": "HIV is a virus that attacks the bodys immune system. If not treated, it can lead to AIDS.",
        "Medicines": ['Antiretroviral therapy (ART)'],
        "Diet": ['Carrots', ' Cherry juice']
    },
    "I feel Severe headache, Muscle pain, Weakness": {
        "Disease": "Ebola",
        "Description": "Ebola virus disease (EVD) is a rare but severe, often fatal illness in humans.",
        "Medicines": ['Supportive care', 'Inmazeb'],
        "Diet": ['Carrots', ' Apple juice']
    },
    "I feel High fever, Severe headache, Pain behind the eyes, Joint and muscle pain": {
        "Disease": "Dengue Fever",
        "Description": "Dengue fever is a mosquito-borne viral disease occurring in tropical and subtropical areas.",
        "Medicines": ['Supportive care', 'Acetaminophen'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Tremor, Bradykinesia, Muscle stiffness, Balance problems": {
        "Disease": "Parkinson's Disease",
        "Description": "Parkinson's disease is a neurodegenerative disorder that affects predominately dopamine-producing neurons in a specific area of the brain.",
        "Medicines": ['Levodopa', 'Carbidopa'],
        "Diet": ['Garlic', ' Blueberry juice']
    },
    "I feel Painless sore, Rash, Fever, Swollen lymph nodes": {
        "Disease": "Syphilis",
        "Description": "Syphilis is a bacterial infection usually spread by sexual contact that starts as a painless sore.",
        "Medicines": ['Penicillin', 'Doxycycline'],
        "Diet": ['Garlic', ' Blueberry juice']
    },
    "I feel Painful urination, Abnormal discharge, Lower abdominal pain, Bleeding between periods": {
        "Disease": "Gonorrhea",
        "Description": "Gonorrhea is a sexually transmitted bacterial infection that, if untreated, may cause infertility.",
        "Medicines": ['Ceftriaxone', 'Azithromycin'],
        "Diet": ['Carrots', ' Cranberry juice']
    },
    "I feel Abnormal discharge, Lower abdominal pain, Pain during intercourse": {
        "Disease": "Chlamydia",
        "Description": "Chlamydia is a common sexually transmitted infection caused by the bacterium Chlamydia trachomatis.",
        "Medicines": ['Azithromycin', 'Doxycycline'],
        "Diet": ['Garlic', ' Beet juice']
    },
    "I feel Painful blisters, Itching, Burning sensation, Flu-like symptoms": {
        "Disease": "Herpes Simplex Virus",
        "Description": "Herpes simplex virus (HSV) infection causes herpes, which can appear in various parts of the body, most commonly on the genitals or mouth.",
        "Medicines": ['Acyclovir', 'Valacyclovir'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Frequent infections, Easy bruising, Bleeding": {
        "Disease": "Leukemia",
        "Description": "A type of cancer that affects the blood and bone marrow.",
        "Medicines": ['Imatinib', 'Dasatinib'],
        "Diet": ['Garlic', ' Grape juice']
    },
    "I feel Swollen lymph nodes, Weight loss, Night sweats": {
        "Disease": "Lymphoma",
        "Description": "A group of blood cancers that develop in the lymphatic system.",
        "Medicines": ['Rituximab', 'Cyclophosphamide'],
        "Diet": ['Carrots', ' Pineapple juice']
    },
    "I feel Itchy skin, Red patches, Dry skin, Cracked skin": {
        "Disease": "Eczema",
        "Description": "A condition that makes the skin red and itchy.",
        "Medicines": ['Hydrocortisone', 'Tacrolimus'],
        "Diet": ['Garlic', ' Tomato juice']
    },
    "I feel Fever, Headache, Paralysis": {
        "Disease": "Polio",
        "Description": "A viral infection that can affect nerves and can lead to partial or full paralysis.",
        "Medicines": ['Supportive care', 'Mechanical ventilation'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Uncontrolled movements, Cognitive decline, Behavioral changes, Depression": {
        "Disease": "Huntington's Disease",
        "Description": "A genetic disorder that causes the progressive breakdown of nerve cells in the brain.",
        "Medicines": ['Tetrabenazine', 'Risperidone'],
        "Diet": ['Garlic', ' Green smoothie']
    },
    "I feel Muscle weakness, Difficulty speaking, Difficulty swallowing, Cramps": {
        "Disease": "Amyotrophic Lateral Sclerosis (ALS)",
        "Description": "A progressive neurodegenerative disease that affects nerve cells in the brain and spinal cord.",
        "Medicines": ['Riluzole', 'Edaravone'],
        "Diet": ['Garlic', ' Mango juice']
    },
    "I feel Anemia, Pain, Swelling in hands and feet": {
        "Disease": "Sickle Cell Anemia",
        "Description": "A group of inherited red blood cell disorders.",
        "Medicines": ['Hydroxyurea', 'Penicillin'],
        "Diet": ['Garlic', ' Cucumber juice']
    },
    "I feel Tall stature, Long limbs, Heart problems, Flexible joints": {
        "Disease": "Marfan Syndrome",
        "Description": "A genetic disorder that affects the bodys connective tissue.",
        "Medicines": ['Losartan', 'Atenolol'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Frequent falls, Difficulty getting up, Learning disabilities": {
        "Disease": "Duchenne Muscular Dystrophy",
        "Description": "A genetic disorder characterized by progressive muscle degeneration and weakness.",
        "Medicines": ['Prednisolone', 'Eteplirsen'],
        "Diet": ['Garlic', ' Berry smoothie']
    },
    "I feel Obsessions, Compulsions, Anxiety, Distress": {
        "Disease": "Obsessive-Compulsive Disorder (OCD)",
        "Description": "A disorder in which people have recurring, unwanted thoughts, ideas, or sensations that make them feel driven to do something repetitively.",
        "Medicines": ['Fluoxetine', 'Clomipramine'],
        "Diet": []
    },
    "I feel Flashbacks, Nightmares, Severe anxiety, Uncontrollable thoughts": {
        "Disease": "Post-Traumatic Stress Disorder (PTSD)",
        "Description": "A mental health condition triggered by experiencing or seeing a terrifying event.",
        "Medicines": ['Sertraline', 'Paroxetine'],
        "Diet": []
    },
    "I feel Excessive worry, Restlessness, Difficulty concentrating": {
        "Disease": "Generalized Anxiety Disorder (GAD)",
        "Description": "A mental health condition characterized by excessive, uncontrollable worry about everyday things.",
        "Medicines": ['Alprazolam', 'Diazepam'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Persistent sadness, Loss of interest, Changes in appetite": {
        "Disease": "Major Depressive Disorder (MDD)",
        "Description": "A mental disorder characterized by at least two weeks of low mood that is present across most situations.",
        "Medicines": ['Sertraline', 'Escitalopram'],
        "Diet": ['Garlic', ' Watermelon juice']
    },
    "I feel Fever, Loss of appetite, Nausea": {
        "Disease": "Hepatitis A",
        "Description": "A highly contagious liver infection caused by the hepatitis A virus.",
        "Medicines": ['Supportive care', 'Vaccination'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Eye pain, Blurred vision, Headache, Halos around lights": {
        "Disease": "Glaucoma",
        "Description": "A group of eye conditions that damage the optic nerve.",
        "Medicines": ['Latanoprost', 'Timolol'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Cloudy vision, Difficulty seeing at night, Fading colors, Double vision": {
        "Disease": "Cataracts",
        "Description": "A clouding of the normally clear lens of the eye.",
        "Medicines": ['Surgical removal'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Blurred vision, Difficulty recognizing faces, Need for brighter light, Reduced central vision": {
        "Disease": "Macular Degeneration",
        "Description": "An eye disease that can blur your central vision.",
        "Medicines": ['Ranibizumab', 'Aflibercept'],
        "Diet": ['Garlic', ' Blueberry juice']
    },
    "I feel Widespread pain, Sleep disturbances, Cognitive difficulties": {
        "Disease": "Fibromyalgia",
        "Description": "A disorder characterized by widespread musculoskeletal pain.",
        "Medicines": ['Pregabalin', 'Duloxetine'],
        "Diet": ['Carrots', ' Cherry juice']
    },
    "I feel Extreme fatigue, Sleep problems, Muscle pain, Memory issues": {
        "Disease": "Chronic Fatigue Syndrome",
        "Description": "A disorder characterized by extreme fatigue that can't be explained by any underlying medical condition.",
        "Medicines": ['Cognitive behavioral therapy (CBT)', 'Graded exercise therapy (GET)'],
        "Diet": ['Garlic', ' Beet juice']
    },
    "I feel Irregular periods, Excess hair growth, Acne, Weight gain": {
        "Disease": "Polycystic Ovary Syndrome (PCOS)",
        "Description": "A hormonal disorder causing enlarged ovaries with small cysts on the outer edges.",
        "Medicines": ['Metformin', 'Clomiphene'],
        "Diet": ['Carrots', ' Apple juice']
    },
    "I feel Facial droop, Weakness on one side of the face, Drooling, Pain around the jaw or ear": {
        "Disease": "Bell's Palsy",
        "Description": "A condition that causes a temporary weakness or paralysis of the muscles in the face.",
        "Medicines": ['Prednisolone', 'Acyclovir'],
        "Diet": ['Garlic', ' Blueberry juice']
    },
    "I feel Delayed growth, Bone pain, Muscle weakness, Dental problems": {
        "Disease": "Rickets",
        "Description": "A skeletal disorder that's caused by a lack of vitamin D, calcium, or phosphate.",
        "Medicines": ['Vitamin D', 'Calcium'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Gum disease, Skin problems, Joint pain, Shortness of breath": {
        "Disease": "Scurvy",
        "Description": "A disease resulting from a lack of vitamin C.",
        "Medicines": ['Vitamin C', 'Ascorbic acid'],
        "Diet": ['Garlic', ' Orange juice']
    },
    "I feel Loss of appetite, Weakness, Pain in limbs, Sores in mouth": {
        "Disease": "Beriberi",
        "Description": "A disease caused by a vitamin B-1 deficiency.",
        "Medicines": ['Thiamine', 'Vitamin B-1'],
        "Diet": ['Carrots', ' Cranberry juice']
    },
    "I feel Dermatitis, Diarrhea, Dementia, Sores in mouth": {
        "Disease": "Pellagra",
        "Description": "A disease caused by a lack of the vitamin niacin (B3).",
        "Medicines": ['Niacin', 'Vitamin B3'],
        "Diet": ['Garlic', ' Pomegranate juice']
    },
    "I feel Severe weight loss, Muscle wasting, Stunted growth, Weakness": {
        "Disease": "Marasmus",
        "Description": "A form of severe malnutrition characterized by energy deficiency.",
        "Medicines": ['Nutritional support', 'Multivitamins'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Swelling, Fatty liver, Skin changes, Irritability": {
        "Disease": "Kwashiorkor",
        "Description": "A form of severe protein malnutrition.",
        "Medicines": ['Nutritional support', 'Protein supplementation'],
        "Diet": ['Garlic', ' Grape juice']
    },
    "I feel Mouth sores, Eye inflammation, Skin lesions, Joint pain": {
        "Disease": "Behcet's Disease",
        "Description": "A rare disorder that causes blood vessel inflammation throughout your body.",
        "Medicines": ['Colchicine', 'Azathioprine'],
        "Diet": ['Carrots', ' Lemon water']
    },
    "I feel Shortness of breath, Joint pain, Dry eyes": {
        "Disease": "Sarcoidosis",
        "Description": "An inflammatory disease that affects multiple organs in the body, but mostly the lungs and lymph glands.",
        "Medicines": ['Prednisolone', 'Methotrexate'],
        "Diet": ['Garlic', ' Tomato juice']
    },
    "I feel Weight loss, Swollen legs, Numbness": {
        "Disease": "Amyloidosis",
        "Description": "A rare disease that occurs when a substance called amyloid builds up in your organs.",
        "Medicines": ['Bortezomib', 'Dexamethasone'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Joint pain, Liver disease, Diabetes": {
        "Disease": "Hemochromatosis",
        "Description": "A disorder where too much iron builds up in your body.",
        "Medicines": ['Phlebotomy', 'Deferoxamine'],
        "Diet": ['Garlic', ' Green smoothie']
    },
    "I feel Jaundice, Tremors, Difficulty speaking": {
        "Disease": "Wilson's Disease",
        "Description": "A rare inherited disorder that causes copper to accumulate in your liver, brain, and other vital organs.",
        "Medicines": ['Penicillamine', 'Zinc acetate'],
        "Diet": ['Carrots', ' Lemon water']
    },
    "I feel Intellectual disability, Behavioral problems, Seizures, Skin rashes": {
        "Disease": "Phenylketonuria (PKU)",
        "Description": "A birth defect that causes an amino acid called phenylalanine to build up in the body.",
        "Medicines": ['Sapropterin', 'Pegvaliase'],
        "Diet": ['Garlic', ' Cucumber juice']
    },
    "I feel Poor feeding, Vomiting, Lethargy, Seizures": {
        "Disease": "Maple Syrup Urine Disease",
        "Description": "A rare inherited disorder in which the body is unable to process certain protein building blocks (amino acids) properly.",
        "Medicines": ['Thiamine', 'Special dietary management'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Bone pain, Anemia, Enlarged spleen": {
        "Disease": "Gaucher's Disease",
        "Description": "A genetic disorder in which glucocerebroside accumulates in cells and certain organs.",
        "Medicines": ['Imiglucerase', 'Eliglustat'],
        "Diet": ['Garlic', ' Berry smoothie']
    },
    "I feel Muscle weakness, Loss of motor skills, Seizures, Hearing loss": {
        "Disease": "Tay-Sachs Disease",
        "Description": "A rare inherited disorder that destroys nerve cells in the brain and spinal cord.",
        "Medicines": ['Supportive care'],
        "Diet": ['Carrots', ' Mint lemonade']
    },
    "I feel Respiratory issues, Heart problems, Feeding difficulties": {
        "Disease": "Pompe Disease",
        "Description": "A rare genetic disorder characterized by the buildup of a complex sugar called glycogen in the body's cells.",
        "Medicines": ['Alglucosidase alfa', 'Myozyme'],
        "Diet": ['Garlic', ' Mango juice']
    },
    "I feel Wheezing, Coughing, Chest tightness": {
        "Disease": "Asthma",
        "Description": "A chronic respiratory condition characterized by inflammation and narrowing of the airways, leading to difficulty breathing, coughing, and wheezing.",
        "Medicines": ['Salbutamol', 'Budesonide'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Increased thirst, Frequent urination, Hunger": {
        "Disease": "Diabetes Mellitus",
        "Description": "A metabolic disorder characterized by high blood sugar levels over a prolonged period, due to either insufficient insulin production or the body's cells not responding properly to insulin.",
        "Medicines": ['Insulin', 'Metformin'],
        "Diet": ['Garlic', ' Watermelon juice']
    },
    "I feel Headaches, Nosebleeds, Chest pain": {
        "Disease": "Hypertension",
        "Description": "A condition in which the blood pressure in the arteries is persistently elevated, increasing the risk of heart disease, stroke, and other health problems.",
        "Medicines": ['Amlodipine', 'Lisinopril'],
        "Diet": ['Oatmeal', ' Salmon']
    },
    "I feel Joint pain, Stiffness, Decreased range of motion": {
        "Disease": "Osteoarthritis",
        "Description": "A degenerative joint disease causing cartilage breakdown, leading to pain, stiffness, and decreased mobility in the affected joints.",
        "Medicines": ['Acetaminophen', 'Ibuprofen'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Memory loss, Confusion, Difficulty concentrating, Personality changes": {
        "Disease": "Alzheimer's Disease",
        "Description": "A progressive neurodegenerative disorder characterized by memory loss, cognitive decline, and behavioral changes.",
        "Medicines": ['Donepezil', 'Memantine'],
        "Diet": ['Berries', ' Walnuts']
    },
    "I feel Tremors, Bradykinesia, Muscle rigidity, Postural instability": {
        "Disease": "Parkinson's Disease",
        "Description": "A chronic and progressive movement disorder characterized by tremors, stiffness, slowness of movement, and balance problems.",
        "Medicines": ['Levodopa', 'Carbidopa'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Muscle weakness, Coordination problems, Numbness and tingling, Vision problems": {
        "Disease": "Multiple Sclerosis (MS)",
        "Description": "An autoimmune disease where the immune system attacks the protective covering of nerves, causing communication problems between the brain and the rest of the body.",
        "Medicines": ['Interferon beta-1a', 'Glatiramer acetate'],
        "Diet": ['Carrots', ' Pear juice']
    },
    "I feel Night sweats, Weight loss": {
        "Disease": "HIV/AIDS",
        "Description": "Human Immunodeficiency Virus (HIV) attacks the immune system, and if not treated, it can lead to Acquired Immunodeficiency Syndrome (AIDS).",
        "Medicines": ['Antiretroviral therapy (ART)'],
        "Diet": ['Carrots', ' Cherry juice']
    },
    "I feel Persistent cough, Chest pain, Night sweats": {
        "Disease": "Tuberculosis (TB)",
        "Description": "A bacterial infection that primarily affects the lungs but can also affect other parts of the body, causing symptoms like a persistent cough, fever, and weight loss.",
        "Medicines": ['Isoniazid', 'Rifampicin'],
        "Diet": ['Carrots', ' Apple juice']
    },
    "I feel Swelling in feet and ankles, Frequent urination": {
        "Disease": "Chronic Kidney Disease (CKD)",
        "Description": "A long-term condition where the kidneys do not work as well as they should, leading to a buildup of waste products in the blood.",
        "Medicines": ['Erythropoietin', 'Calcium acetate'],
        "Diet": ['Carrots', ' Cherry juice']
    },
    "I feel ": {
        "Disease": "Hypertension",
        "Description": "Hypertension, or high blood pressure, is a condition where the force of the blood against the artery walls is too high, which can lead to health problems such as heart disease.",
        "Medicines": ['Amlodipine', 'Lisinopril'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Wheezing, Chronic cough": {
        "Disease": "Chronic Obstructive Pulmonary Disease (COPD)",
        "Description": "COPD is a chronic inflammatory lung disease that causes obstructed airflow from the lungs, leading to breathing difficulties, cough, mucus production, and wheezing.",
        "Medicines": ['Salbutamol', 'Tiotropium'],
        "Diet": ['Oats', ' Chicken']
    },
    "I feel Joint pain, Joint stiffness": {
        "Disease": "Rheumatoid Arthritis",
        "Description": "Rheumatoid Arthritis is an autoimmune disorder that causes chronic inflammation of the joints, leading to pain, swelling, and potential joint deformity.",
        "Medicines": ['Methotrexate', 'Hydroxychloroquine'],
        "Diet": ['Salmon', ' Leafy greens']
    },
    "I feel Back pain, Stopped posture, Bone fractures": {
        "Disease": "Osteoporosis",
        "Description": "Osteoporosis is a bone disease that occurs when the body loses too much bone, makes too little bone, or both, resulting in weak and brittle bones that are more prone to fractures.",
        "Medicines": ['Alendronate', 'Calcitriol'],
        "Diet": ['Milk', ' Sardines']
    },
    "I feel Seizures, Staring spells, Uncontrollable jerking movements": {
        "Disease": "Epilepsy",
        "Description": "Epilepsy is a neurological disorder marked by sudden recurrent episodes of sensory disturbance, loss of consciousness, or convulsions, associated with abnormal electrical activity in the brain.",
        "Medicines": ['Valproate', 'Lamotrigine'],
        "Diet": ['Garlic', ' Watermelon juice']
    },
    "I feel Persistent cough, Chest pain, Night sweats, Weight loss": {
        "Disease": "Tuberculosis",
        "Description": "Tuberculosis (TB) is an infectious disease caused by the Mycobacterium tuberculosis bacteria, affecting primarily the lungs but can also affect other parts of the body.",
        "Medicines": ['Isoniazid', 'Rifampicin'],
        "Diet": ['Garlic', ' Brown rice']
    },
    "I feel Swelling in feet and ankles, Frequent urination, Shortness of breath": {
        "Disease": "Chronic Kidney Disease",
        "Description": "Chronic Kidney Disease (CKD) is a long-term condition where the kidneys do not work effectively, leading to a buildup of waste products in the body and other health issues.",
        "Medicines": ['Erythropoietin', 'Calcium acetate'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Jaundice, Dark urine, Abdominal pain": {
        "Disease": "Hepatitis B",
        "Description": "Hepatitis B is a viral infection that attacks the liver and can cause both acute and chronic disease, potentially leading to liver failure, cancer, or cirrhosis.",
        "Medicines": ['Entecavir', 'Tenofovir'],
        "Diet": ['Apples', ' Chicken']
    },
    "I feel Night sweats, Weight loss": {
        "Disease": "HIV/AIDS",
        "Description": "HIV (Human Immunodeficiency Virus) is a virus that attacks the immune system, and if not treated, it can lead to AIDS (Acquired Immunodeficiency Syndrome), a condition in which the immune system fails, leading to life-threatening infections and cancers.",
        "Medicines": ['Antiretroviral therapy (ART)'],
        "Diet": ['Garlic', ' Beet juice']
    },
    "I feel Abdominal pain, Severe diarrhea, Weight loss": {
        "Disease": "Crohn's Disease",
        "Description": "Crohn's Disease is a type of inflammatory bowel disease (IBD) that causes inflammation of the digestive tract, leading to abdominal pain, severe diarrhea, fatigue, weight loss, and malnutrition.",
        "Medicines": ['Infliximab', 'Adalimumab'],
        "Diet": ['Bananas', ' Chicken']
    },
    "I feel Red patches on skin, Silvery scales, Itching, Burning sensation": {
        "Disease": "Psoriasis",
        "Description": "Psoriasis is a chronic skin condition that speeds up the life cycle of skin cells, causing cells to build up rapidly on the surface of the skin, forming scales and red patches that can be itchy and sometimes painful.",
        "Medicines": ['Methotrexate', 'Etanercept'],
        "Diet": ['Leafy greens', ' Lentils']
    },
    "I feel Severe joint pain, Swelling, Redness, Tenderness": {
        "Disease": "Gout",
        "Description": "Gout is a form of arthritis characterized by severe pain, redness, and tenderness in joints, caused by the accumulation of urate crystals.",
        "Medicines": ['Allopurinol', 'Colchicine'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Upper abdominal pain, Nausea, Vomiting, Fever": {
        "Disease": "Pancreatitis",
        "Description": "Pancreatitis is inflammation of the pancreas, which can occur suddenly (acute) or over many years (chronic), and can lead to digestive problems and diabetes.",
        "Medicines": ['Pancrelipase', 'Octreotide'],
        "Diet": ['Garlic', ' Green smoothie']
    },
    "I feel Pain episodes, Swelling in hands and feet, Frequent infections": {
        "Disease": "Sickle Cell Disease",
        "Description": "Sickle Cell Disease is a group of inherited red blood cell disorders that cause red blood cells to become misshapen and break down, leading to anemia, pain, and other complications.",
        "Medicines": ['Hydroxyurea', 'L-glutamine'],
        "Diet": ['Carrots', ' Lemon water']
    },
    "I feel Excessive bleeding, Easy bruising, Swollen joints": {
        "Disease": "Hemophilia",
        "Description": "Hemophilia is a rare genetic disorder where the blood does not clot properly, leading to excessive bleeding even from minor injuries.",
        "Medicines": ['Desmopressin', 'Factor VIII'],
        "Diet": ['Garlic', ' Cucumber juice']
    },
    "I feel Muscle weakness, Difficulty speaking, Difficulty swallowing, Cramps": {
        "Disease": "Amyotrophic Lateral Sclerosis (ALS)",
        "Description": "ALS, also known as Lou Gehrig's Disease, is a progressive neurodegenerative disease that affects nerve cells in the brain and spinal cord, leading to loss of muscle control.",
        "Medicines": ['Riluzole', 'Edaravone'],
        "Diet": ['Carrots', ' Lemon water']
    },
    "I feel Irregular periods, Excess hair growth, Acne, Weight gain": {
        "Disease": "Polycystic Ovary Syndrome (PCOS)",
        "Description": "PCOS is a hormonal disorder common among women of reproductive age, characterized by infrequent or prolonged menstrual periods, excess androgen levels, and polycystic ovaries.",
        "Medicines": ['Metformin', 'Clomiphene'],
        "Diet": ['Garlic', ' Herbal tea']
    },
    "I feel Weight loss, Rapid heartbeat, Increased appetite, Nervousness": {
        "Disease": "Hyperthyroidism",
        "Description": "Hyperthyroidism is a condition in which the thyroid gland produces too much of the hormone thyroxine, accelerating the body's metabolism and causing unintentional weight loss and a rapid or irregular heartbeat.",
        "Medicines": ['Methimazole', 'Propylthiouracil'],
        "Diet": ['Carrots', ' Mint lemonade']
    },
    "I feel Weight gain, Cold intolerance, Depression": {
        "Disease": "Hypothyroidism",
        "Description": "Hypothyroidism is a condition in which the thyroid gland does not produce enough thyroid hormones, leading to fatigue, weight gain, and depression.",
        "Medicines": ['Levothyroxine', 'Liothyronine'],
        "Diet": ['Garlic', ' Mango juice']
    },
    "I feel Back pain, Stiffness, Reduced flexibility, Eye inflammation": {
        "Disease": "Ankylosing Spondylitis",
        "Description": "Ankylosing Spondylitis is a type of arthritis that affects the spine, causing inflammation, pain, and stiffness, and can lead to the fusion of the vertebrae.",
        "Medicines": ['Adalimumab', 'Etanercept'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Sneezing, Runny nose, Sore throat, Coughing": {
        "Disease": "Common Cold",
        "Description": "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way.",
        "Medicines": ['Acetaminophen', 'Ibuprofen'],
        "Diet": ['Oranges', ' Ginger tea']
    },
    "I feel Fever, Chills, Muscle aches, Cough": {
        "Disease": "Influenza (Flu)",
        "Description": "Influenza (flu) is a viral infection that attacks your respiratory system  your nose, throat, and lungs. It is commonly known as the flu.",
        "Medicines": ['Oseltamivir', 'Zanamivir'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Shortness of breath, Wheezing, Chest pain": {
        "Disease": "Cough",
        "Description": "A cough is a reflex action to clear your airways of mucus and irritants such as dust or smoke. It can be a symptom of a common cold or other illnesses.",
        "Medicines": ['Dextromethorphan', 'Guaifenesin'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Painful swallowing, Hoarseness, Swollen glands, Red tonsils": {
        "Disease": "Sore Throat",
        "Description": "A sore throat is pain, scratchiness or irritation of the throat that often worsens when you swallow. It can be caused by viral or bacterial infections.",
        "Medicines": ['Acetaminophen', 'Ibuprofen'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Persistent cough, Production of mucus": {
        "Disease": "Bronchitis",
        "Description": "Bronchitis is an inflammation of the lining of your bronchial tubes, which carry air to and from your lungs. It often develops from a cold or other respiratory infection.",
        "Medicines": ['Amoxicillin', 'Doxycycline'],
        "Diet": ['Carrots', ' Apple juice']
    },
    "I feel Nasal congestion, Facial pain, Headache, Runny nose": {
        "Disease": "Sinusitis",
        "Description": "Sinusitis is an inflammation or swelling of the tissue lining the sinuses. It is usually caused by a viral infection and often improves within two to three weeks.",
        "Medicines": ['Amoxicillin', 'Doxycycline'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Cough with phlegm, Fever, Chills": {
        "Disease": "Pneumonia",
        "Description": "Pneumonia is an infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus, causing cough with phlegm or pus, fever, chills, and difficulty breathing.",
        "Medicines": ['Azithromycin', 'Levofloxacin'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Severe headache, Stiff neck, Sensitivity to light": {
        "Disease": "Meningitis",
        "Description": "Meningitis is an infection that causes inflammation of the membranes (meninges) surrounding your brain and spinal cord. It can be bacterial, viral, or fungal.",
        "Medicines": ['Ceftriaxone', 'Vancomycin'],
        "Diet": ['Garlic', ' Pomegranate juice']
    },
    "I feel Rapid heart rate, Shortness of breath, Confusion": {
        "Disease": "Sepsis",
        "Description": "Sepsis is a life-threatening condition caused by the body's response to an infection. It can lead to tissue damage, organ failure, and death.",
        "Medicines": ['Vancomycin', 'Piperacillin-tazobactam'],
        "Diet": ['Carrots', ' Cranberry juice']
    },
    "I feel Jaw cramping, Muscle spasms, Stiffness, Trouble swallowing": {
        "Disease": "Tetanus",
        "Description": "Tetanus, also known as lockjaw, is a serious bacterial infection that causes painful muscle stiffness and can be fatal. It is caused by Clostridium tetani.",
        "Medicines": ['Metronidazole', 'Tetanus immune globulin'],
        "Diet": ['Garlic', ' Pomegranate juice']
    },
    "I feel Watery diarrhea, Vomiting, Leg cramps, Dehydration": {
        "Disease": "Cholera",
        "Description": "Cholera is an acute diarrheal illness caused by infection of the intestine with the bacterium Vibrio cholerae, typically spread through contaminated water.",
        "Medicines": ['Doxycycline', 'Azithromycin'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Jaundice, Abdominal pain, Nausea": {
        "Disease": "Hepatitis C",
        "Description": "Hepatitis C is a viral infection that causes liver inflammation, sometimes leading to serious liver damage. It spreads through contaminated blood.",
        "Medicines": ['Sofosbuvir', 'Velpatasvir'],
        "Diet": ['Garlic', ' Grape juice']
    },
    "I feel Nausea, Vomiting, Diarrhea, Stomach pain": {
        "Disease": "Norovirus Infection",
        "Description": "Norovirus is a highly contagious virus that causes gastroenteritis, leading to severe vomiting and diarrhea. It spreads easily in closed environments.",
        "Medicines": ['Rehydration therapy'],
        "Diet": ['Carrots', ' Pineapple juice']
    },
    "I feel Fever, Rash, Joint pain, Red eyes": {
        "Disease": "Zika Virus",
        "Description": "Zika Virus is transmitted primarily by Aedes mosquitoes. Infection during pregnancy can cause serious birth defects. It can also be transmitted through sexual contact.",
        "Medicines": ['Supportive care'],
        "Diet": ['Garlic', ' Tomato juice']
    },
    "I feel Severe headache, Muscle pain, Vomiting": {
        "Disease": "Ebola Virus",
        "Description": "Ebola Virus causes severe hemorrhagic fever in humans and other primates, with a high fatality rate. It spreads through direct contact with bodily fluids.",
        "Medicines": ['Inmazeb', 'Supportive care'],
        "Diet": ['Carrots', ' Apple juice']
    },
    "I feel Severe headache, Pain behind the eyes, Nausea": {
        "Disease": "Dengue Fever",
        "Description": "Dengue Fever is a mosquito-borne viral infection causing flu-like illness, and occasionally develops into severe dengue, potentially fatal.",
        "Medicines": ['Acetaminophen', 'Rehydration therapy'],
        "Diet": ['Garlic', ' Green smoothie']
    },
    "I feel Headache, Fatigue, Erythema migrans (rash)": {
        "Disease": "Lyme Disease",
        "Description": "Lyme Disease is a bacterial infection transmitted by ticks. It causes fever, headache, fatigue, and a characteristic skin rash called erythema migrans.",
        "Medicines": ['Doxycycline', 'Amoxicillin'],
        "Diet": ['Garlic', ' Green tea']
    },
    "I feel Itchy rash, Blisters, Tiredness": {
        "Disease": "Chickenpox",
        "Description": "Chickenpox is a highly contagious viral infection causing an itchy, blister-like rash on the skin.",
        "Medicines": ['Acyclovir', 'Valacyclovir'],
        "Diet": ['Chicken soup', ' Oranges']
    },
    "I feel High fever, Cough, Runny nose, Red rash": {
        "Disease": "Measles",
        "Description": "Measles is a highly contagious viral disease characterized by fever, cough, and a rash of red spots.",
        "Medicines": ['Vitamin A', 'Supportive care'],
        "Diet": ['Oranges', ' Spinach']
    },
    "I feel Red rash, Swollen lymph nodes, Joint pain": {
        "Disease": "Rubella (German Measles)",
        "Description": "Rubella is a contagious viral infection preventable by vaccine and is known for its distinctive red rash.",
        "Medicines": ['Supportive care'],
        "Diet": ['Chicken soup', ' Oranges']
    },
    "I feel Swollen cheeks, Headache, Muscle aches": {
        "Disease": "Mumps",
        "Description": "Mumps is a viral infection that affects the salivary glands, causing swelling in the cheeks and jaw.",
        "Medicines": ['Supportive care', 'Ibuprofen'],
        "Diet": ['Chicken soup', ' Blueberries']
    },
    "I feel Severe cough, Vomiting, Exhaustion, Red watery eyes": {
        "Disease": "Whooping Cough (Pertussis)",
        "Description": "Whooping Cough is a highly contagious respiratory tract infection known for uncontrollable, violent coughing.",
        "Medicines": ['Azithromycin', 'Erythromycin'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Fever, Nausea, Abdominal pain": {
        "Disease": "Hepatitis A",
        "Description": "Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus, often spread through contaminated food or water.",
        "Medicines": ['Supportive care', 'Vaccination'],
        "Diet": ['Bananas', ' Rice']
    },
    "I feel Jaundice, Loss of appetite": {
        "Disease": "Hepatitis E",
        "Description": "Hepatitis E is a liver disease caused by the hepatitis E virus, typically spread through fecal-oral transmission.",
        "Medicines": ['Ribavirin', 'Supportive care'],
        "Diet": ['Carrots', ' Apples']
    },
    "I feel Painful blisters, Itching, Burning sensation": {
        "Disease": "Herpes Simplex Virus (HSV)",
        "Description": "HSV causes herpes, which can appear in various parts of the body, most commonly on the genitals or mouth.",
        "Medicines": ['Acyclovir', 'Valacyclovir'],
        "Diet": ['Carrots', ' Pear juice']
    },
    "I feel Painful rash, Blisters, Itching": {
        "Disease": "Varicella-Zoster Virus (Shingles)",
        "Description": "Shingles is a reactivation of the chickenpox virus in the body, causing a painful rash.",
        "Medicines": ['Acyclovir', 'Valacyclovir'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Genital warts, Common warts, Plantar warts, Flat warts": {
        "Disease": "Human Papillomavirus (HPV)",
        "Description": "HPV is a viral infection that causes skin or mucous membrane growths (warts) and can lead to cervical cancer.",
        "Medicines": ['Imiquimod', 'Podofilox'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Painless sore, Rash, Fever, Swollen lymph nodes": {
        "Disease": "Syphilis",
        "Description": "Syphilis is a bacterial infection usually spread by sexual contact, starting as a painless sore.",
        "Medicines": ['Penicillin', 'Doxycycline'],
        "Diet": ['Garlic', ' Blueberry juice']
    },
    "I feel Painful urination, Abnormal discharge, Pelvic pain": {
        "Disease": "Gonorrhea",
        "Description": "Gonorrhea is a sexually transmitted bacterial infection that can cause infertility if left untreated.",
        "Medicines": ['Ceftriaxone', 'Azithromycin'],
        "Diet": ['Carrots', ' Cherry juice']
    },
    "I feel Painful urination, Testicular pain, Vaginal bleeding": {
        "Disease": "Chlamydia",
        "Description": "Chlamydia is a common sexually transmitted infection that may not cause symptoms.",
        "Medicines": ['Azithromycin', 'Doxycycline'],
        "Diet": ['Garlic', ' Beet juice']
    },
    "I feel Genital itching, Burning with urination, Redness": {
        "Disease": "Trichomoniasis",
        "Description": "Trichomoniasis is a sexually transmitted infection caused by a parasite, leading to genital inflammation.",
        "Medicines": ['Metronidazole', 'Tinidazole'],
        "Diet": ['Carrots', ' Apple juice']
    },
    "I feel Chills, Sweats, Headache": {
        "Disease": "Malaria",
        "Description": "Malaria is a life-threatening disease caused by parasites that are transmitted to people through the bites of infected mosquitoes.",
        "Medicines": ['Chloroquine', 'Artemether-lumefantrine'],
        "Diet": ['Garlic', ' Coconut water']
    },
    "I feel Body aches, Joint pain, Muscle pain": {
        "Disease": "West Nile Virus",
        "Description": "West Nile Virus is a mosquito-borne infection that can cause febrile illness, encephalitis, or meningitis.",
        "Medicines": ['Supportive care'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel Chills, Jaundice, Muscle pain": {
        "Disease": "Yellow Fever",
        "Description": "Yellow Fever is a viral hemorrhagic disease transmitted by infected mosquitoes, characterized by fever, chills, and jaundice.",
        "Medicines": ['Supportive care', 'Vaccination'],
        "Diet": ['Rice', ' Bananas']
    },
    "I feel Fever, Chills, Muscle aches": {
        "Disease": "Leptospirosis",
        "Description": "Leptospirosis is a bacterial disease spread through the urine of infected animals, often causing fever, chills, and muscle aches.",
        "Medicines": ['Doxycycline', 'Penicillin'],
        "Diet": ['Carrots', ' Cranberry juice']
    },
    "I feel Muscle weakness, Eye problems": {
        "Disease": "Leprosy (Hansen's Disease)",
        "Description": "Leprosy is a chronic infectious disease caused by Mycobacterium leprae, affecting the skin, nerves, and mucous membranes.",
        "Medicines": ['Dapsone', 'Rifampicin'],
        "Diet": ['Garlic', ' Pomegranate juice']
    },
    "I feel Muscle pain, Swollen lymph nodes, Headache": {
        "Disease": "Toxoplasmosis",
        "Description": "Toxoplasmosis is an infection caused by the parasite Toxoplasma gondii, often spread through undercooked contaminated meat or exposure to infected cat feces.",
        "Medicines": ['Pyrimethamine', 'Sulfadiazine'],
        "Diet": ['Ginger tea', ' Carrots']
    },
    "I feel White patches in mouth, Redness, Itching, Discomfort during urination": {
        "Disease": "Candidiasis (Thrush)",
        "Description": "Candidiasis is a fungal infection caused by Candida, affecting various body parts, including the mouth, throat, and genital area.",
        "Medicines": ['Fluconazole', 'Nystatin'],
        "Diet": ['Garlic', ' Grape juice']
    },
    "I feel Itchy skin, Red, circular rash, Hair loss, Brittle nails": {
        "Disease": "Ringworm (Dermatophytosis)",
        "Description": "Ringworm is a fungal infection of the skin, scalp, or nails, presenting as a red, itchy, circular rash.",
        "Medicines": ['Terbinafine', 'Griseofulvin'],
        "Diet": ['Carrots', ' Pineapple juice']
    }  
};

export default dataset;