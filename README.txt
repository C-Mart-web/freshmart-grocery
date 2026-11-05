Fresh Mart - Product-wise Self Purchase Eligibility

Files:
1. admin.html - Updated Admin panel file from the current working session.
2. self_purchase_product_eligibility.sql - SQL migration that adds
   fm_products.self_purchase_income_eligible (boolean, default true).

SQL status:
The user has already run this ALTER TABLE successfully. The screenshot
confirmed the column exists with default true. Do NOT run again unless needed;
this SQL uses IF NOT EXISTS and is safe to rerun.

Important limitation:
This package does NOT yet connect the product flag to the actual Self Purchase
income credit function or Daily Cap. Product Add/Edit UI persistence should be
verified in the deployed admin panel before relying on it. Daily Cap must remain
disabled until all eligible income processors are integrated and tested.
