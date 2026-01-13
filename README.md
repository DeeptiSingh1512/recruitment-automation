# Recruitment Automation Project

## Overview
This project automates key recruitment workflows for ConsultBae recruiters using **Google Sheets + Apps Script**. It calculates recruiter incentives, generates invoices, tracks cashflow, and provides a live P&L dashboard.

---

## ✅ Sheet Structure

The Google Sheets workbook contains the following sheets:

1. **Closures**  
   - Tracks all candidate closures  
   - Columns: Candidate Name, Company, Role, Source, Sourced By, Screened By, Account Manager, CTC (Offered), Fixed CTC, Joining Month, Incentive %, Incentive Amount, Payment Terms, Invoice Ready, JoiningMonthText  

2. **Invoices**  
   - Generates invoices for clients when "Invoice Ready = Yes"  
   - Columns: Invoice Number, Company, Candidate Name, Role, Invoice Amount, GST Amount, Total Amount, Invoice Date, Status  

3. **Cashflow**  
   - Tracks expected payments from clients  
   - Columns: Company, Invoice Number, Invoice Date, Invoice Amount, GST Amount, Total Amount, Payment Terms, Expected Payment Date, Payment Status  

4. **Recruiter_Incentives**  
   - Calculates monthly recruiter incentives based on closures  
   - Columns: Recruiter Name, Month, No. of Joiners, Total Fixed CTC, Incentive %, Incentive Amount, Payout Status  

5. **GST_Summary**  
   - Summarizes monthly GST for invoices  
   - Columns: Month, Taxable Amount, GST Amount, Total Invoice Amount  

6. **P&L_Dashboard**  
   - Provides a live summary of Revenue, GST, Incentives, Outstanding Receivables, and Net Profit  

---

## 📸 Screenshots

All screenshots are stored in the `screenshots/` folder:

**P&L Dashboard:** `screenshots/pl_dashboard.png`  
**Apps Script Code:** `screenshots/appscript_code.png`

---


## ⚡ Features

- Automatic calculation of **recruiter incentives** based on CTC and joiners  
- Cashflow tracking and **expected payment dates**  
- Automatic **invoice generation** with GST calculation  
- Live **P&L dashboard** summarizing revenue, GST, incentives, and net profit  
- Automated **email alerts** for upcoming joiners using Apps Script  
- Pivot chart for visual representation of monthly P&L metrics  

---

## 🛠 How to Use

1. Open the Google Sheet.  
2. Update **Closures** sheet with new candidate data.  
3. Set **Invoice Ready = Yes** for candidates who need invoices.  
4. Apps Script will:
   - Send email alerts for upcoming joiners  
   - Populate **Invoices sheet** with Invoice Amount, GST, and Total  
5. Check **Cashflow** and **Recruiter_Incentives** sheets for financial tracking.  
6. View **P&L_Dashboard** for live business metrics and pivot chart visualization.  

---

## 🔗 Apps Script

- All automation code is in the Google Apps Script editor of the Sheet  
- Function: `sendRecruitmentAlerts()`  
- Can be scheduled with **time-driven triggers** to run automatically  

---

## 📝 Notes

- Ensure **sheet names match exactly** as listed above.  
- Dates in **Joining Month** must be in **Google Sheets date format** for calculations to work.  
- Adjust **email in Apps Script** for your own inbox.  

---

## 📁 Folder Structure in Repository

Recruitment-Automation/
│
├─ screenshots/ # All sheet & script screenshots
├─ google sheet/ # CSV or sample sheets
├─ apps-script/ # Apps Script code (Code.gs)
└─ README.md
---

### Author

Deepti Singh  
Data Engineering / Recruitment Automation
