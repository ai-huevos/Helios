import pandas as pd
import os

# Define the path to the CSV file (External Data Source)
csv_path = '/Users/tatooine/Documents/Development/Comversa/system0/data/company_info/HLT/Company + Individual financial Stats/profprodsum_2025_full_year.csv'

def clean_currency(x):
    """Cleans currency strings like '1,234.56' to float."""
    if isinstance(x, str):
        return float(x.replace(',', '').replace(' ', ''))
    return x

def analyze_hotel_data():
    print("--- Loading Financial Data from Hotel Los Tajibos ---")
    try:
        if not os.path.exists(csv_path):
             print(f"Error: File not found at {csv_path}")
             return

        # Load the CSV, handling potential delimiter issues
        df = pd.read_csv(csv_path, sep=';', on_bad_lines='skip')
        
        # Columns of interest
        revenue_cols = ['TOTAL_ROOM_REVENUE', 'TOTAL_FB_REVENUE', 'TOTAL_EXTRA_REVENUE', 'TOTAL_NON_REVENUE']
        
        # Clean currency columns
        for col in revenue_cols:
            if col in df.columns:
                df[col] = df[col].apply(clean_currency)
        
        # Calculate Total Revenue per row
        df['TOTAL_REVENUE'] = df[revenue_cols].sum(axis=1)
        
        # 1. Total Revenue Statistics
        total_revenue = df['TOTAL_REVENUE'].sum()
        total_room = df['TOTAL_ROOM_REVENUE'].sum()
        total_fb = df['TOTAL_FB_REVENUE'].sum()
        
        print(f"\n[Financial Summary]")
        print(f"Total Revenue Analyzed: ${total_revenue:,.2f}")
        print(f"  - Room Revenue:       ${total_room:,.2f} ({total_room/total_revenue:.1%})")
        print(f"  - F&B Revenue:        ${total_fb:,.2f} ({total_fb/total_revenue:.1%})")
        
        # 2. VIP Analysis
        if 'VIP_LEVEL' in df.columns:
            print(f"\n[VIP Segmentation]")
            vip_stats = df.groupby('VIP_LEVEL')['TOTAL_REVENUE'].agg(['sum', 'count', 'mean']).sort_values('sum', ascending=False)
            # Handle NaN VIP levels
            vip_stats.index = vip_stats.index.fillna('No VIP')
            
            print(f"{'VIP Level':<15} | {'Count':<8} | {'Total Revenue':<15} | {'Avg Rev/Guest':<15}")
            print("-" * 65)
            for vip, row in vip_stats.head(10).iterrows():
                print(f"{str(vip):<15} | {int(row['count']):<8} | ${row['sum']:<14,.2f} | ${row['mean']:<14,.2f}")
            
        # 3. Efficiency/Opportunity Cost Calculator
        # Based on insights from Comversa Green Tower Executive Brief
        print(f"\n[Business Case: Cost of Manual Operations]")
        print("Based on Comversa Executive Brief findings:")
        
        # Constants from the brief
        hours_per_week_lost = 20
        weeks_per_year = 52
        avg_hourly_manager_rate = 50 # Hypothetical, conservavtive estimate for a Finance Manager
        
        annual_cost = hours_per_week_lost * weeks_per_year * avg_hourly_manager_rate
        print(f"  - Hours spent manually consolidating data: {hours_per_week_lost} hours/week")
        print(f"  - Annual operational waste (at ${avg_hourly_manager_rate}/hr): ${annual_cost:,.2f}")
        print(f"  - Potential margin improvement (Green Tower estimate): $8M - $12M")
        
        return df
        
    except Exception as e:
        print(f"Error processing data: {e}")
        return None

if __name__ == "__main__":
    analyze_hotel_data()
