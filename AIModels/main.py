from fastapi import FastAPI, HTTPException
import pandas as pd
import itertools
import csv

app = FastAPI()

# Load data
df = pd.read_csv('./drug_to_drug.csv', low_memory=False)

def check_compatibility(drug1, drug2, df):
    drug1_matches = df[df['name'].str.lower() == drug1.lower()]
    drug2_matches = df[df['name'].str.lower() == drug2.lower()]

    if drug1_matches.empty and drug2_matches.empty:
        return f"Sorry for the inconvenience, information about both {drug1} and {drug2} is unavailable."
    elif drug1_matches.empty:
        return f"Sorry for the inconvenience, information about {drug1} is unavailable."
    elif drug2_matches.empty:
        return f"Sorry for the inconvenience, information about {drug2} is unavailable."
    
    drug1_id = drug1_matches['drugbank-id'].iloc[0]
    drug2_id = drug2_matches['drugbank-id'].iloc[0]

    incompatible_drugs_ids = df[df['drugbank-id'] == drug1_id]['drug-interactions'].iloc[0].split()

    if drug2_id in incompatible_drugs_ids:
        return f"{drug1} and {drug2} are not compatible."
    else:
        return f"{drug1} and {drug2} are compatible."

def check_compatibility_for_multiple_drugs(drug_names, df):
    drugs = [name.strip() for name in drug_names.split(',')]
    unavailable_drugs = []
    available_drugs = []
    
    # First loop: Check for unavailable drugs and remove them from the list
    for drug in drugs:
        drug_matches = df[df['name'].str.lower() == drug.lower()]
        if drug_matches.empty:
            unavailable_drugs.append(drug)
        else:
            available_drugs.append(drug)
    
    for drug in unavailable_drugs:
        print(f"Sorry for the inconvenience, information about {drug} is unavailable.")
        drugs.remove(drug)
    
    # Second loop: Check compatibility for available drugs
    result = []
    for i in range(len(available_drugs)):
        for j in range(i + 1, len(available_drugs)):
            result.append(check_compatibility(available_drugs[i], available_drugs[j], df))
    return result

@app.post("/check/{drug_names}")
async def check_compatibility_endpoint(drug_names: str):
    results = check_compatibility_for_multiple_drugs(drug_names, df)
    for res in results:
        print(res)
    return results


df1 = pd.read_csv('./medicine_dataset.csv',low_memory=False)

def get_substitute_drugs(drug_name, df1):
    first_word = drug_name.split()[0].lower()

    drug_row = df1[df1['name'].str.startswith(first_word)]

    if drug_row.empty:
        return f"No substitute drugs found for {drug_name}."
    else:
        substitutes = drug_row[['substitute0', 'substitute1', 'substitute2', 'substitute3', 'substitute4']].iloc[0]
        substitutes = substitutes.dropna()
        return f"{substitutes.to_string(index=False)}"


@app.post("/Suggest/{drug_name}")
async def suugest_compatibility_endpoint(drug_name: str):
    substitute_drugs = get_substitute_drugs(drug_name, df1)
    print(substitute_drugs)
    return substitute_drugs


def get_precautions(drug_name, df):
    drug_row = df[df['name'].str.lower() == drug_name.lower()]

    if drug_row.empty:
        return f"Precautions for {drug_name} are not available."
    else:
        precautions = drug_row['food-interactions'].iloc[0]
        return f"{precautions}"

@app.post("/food/{drug_names}")
async def food_endpoints(drug_names: str):
    drug_names_list = [drug.strip() for drug in drug_names.split(',')]
    all_precautions = []

    for drug_name in drug_names_list:
        precautions = get_precautions(drug_name, df)
        all_precautions.append(precautions)

    final_output = ' '.join(all_precautions)
    print(final_output)
    return final_output


def search_drug(csv_file, drug_name, drug_component):
    with open(csv_file, mode='r') as file:
        csv_reader = csv.reader(file)
        next(csv_reader)
        for row in csv_reader:
            row_name = row[1].strip().lower()
            row_component1 = row[7].strip().lower()
            row_component2 = row[8].strip().lower()
            if drug_name.strip().lower() in row_name and (drug_component.strip().lower() in row_component1 or drug_component.strip().lower() in row_component2):
                return row_name, row[1]
    return None, None

@app.post("/allergy/{Allergy_c}/{drug_names}")
async def allergy_endpoints(Allergy_c:str,drug_names:str):
    user_drug_name = Allergy_c.strip()
    user_drug_component = drug_names.strip()
    csv_file_path = './A_Z_medicines_dataset_of_India.csv'

    drug_name_found, product_name = search_drug(csv_file_path, user_drug_name, user_drug_component)
    if drug_name_found and product_name:
        return "Avoid This Drug!"
    else:
       return "You Can use this Drug"