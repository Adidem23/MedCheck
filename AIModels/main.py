from typing import Union
import pandas as pd
from fastapi import FastAPI

app = FastAPI()

import pandas as pd
df = pd.read_csv('./drug_to_drug.csv', low_memory=False)

def check_compatibility(drug1, drug2, df):
    drug1_id = df[df['name'].str.lower() == drug1.lower()]['drugbank-id'].iloc[0]
    drug2_id = df[df['name'].str.lower() == drug2.lower()]['drugbank-id'].iloc[0]

    # Get incompatible drugs list for drug1
    incompatible_drugs_ids = df[df['drugbank-id'] == drug1_id]['drug-interactions'].iloc[0].split()

    # Check compatibility
    if drug2_id in incompatible_drugs_ids:
        return f"Notcompatible"
    else:
        return f"Compatible"


@app.post("/check/{drug_name1}/{drug_name2}")
async def get_compatibility(drug_name1: str, drug_name2: str):
        result = check_compatibility(drug_name1, drug_name2,df)
        return result