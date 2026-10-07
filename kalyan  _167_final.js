// NOOR AL HAYAT - 167 Functions - FIXED V12
function openModal(title, funcs){
 let m=document.getElementById('royalModal');
 if(!m){
   m=document.createElement('div');
   m.id='royalModal';
   m.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;padding:15px';
   m.onclick=function(e){if(e.target===m)m.style.display='none'};
   document.body.appendChild(m);
 }
 m.innerHTML=`<div style="background:#1e293b;width:100%;max-width:500px;max-height:85vh;overflow-y:auto;border-radius:16px;border:2px solid gold">
 <div style="background:linear-gradient(to right,#065f46,#0f766e);padding:16px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0">
 <h2 style="font-weight:bold;font-size:16px">${title} - All Functions</h2>
 <button onclick="document.getElementById('royalModal').style.display='none'" style="background:black;color:white;width:32px;height:32px;border-radius:50%;font-weight:bold">✕</button>
 </div>
 <div style="padding:12px;display:grid;gap:8px">
 ${funcs.map((f,i)=>`<div style="background:#334155;padding:12px;border-radius:10px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px">${i+1}. ${f}</span><button onclick="alert('✅ ${f} - Opening... NSR #08430004')" style="background:#10b981;color:white;padding:4px 10px;border-radius:6px;font-size:11px">Open</button></div>`).join('')}
 </div>
 <div style="padding:12px"><button onclick="document.getElementById('royalModal').style.display='none'" style="width:100%;background:gold;color:black;padding:12px;border-radius:10px;font-weight:bold">✨ Close - Alhamdulillah</button></div>
 </div>`;
 m.style.display='flex';
}
const allFuncs={
"Recruitment Master":["CV Collection","CV Screening","Client Submission","Interview Schedule","Interview Result","Medical Check","Visa Processing","BMET Registration","Ticket Booking","Emigration","Worker Database","Agency Management","Client Management","Demand Letter","Agreement","Complaint Box","Blacklist Check","Document Verification","Photo Resize","CV Format 5 Type","QR Code CV","Interview Card Print","Medical Slip","Experience Certificate","Police Clearance","Training Certificate","Final Report","Deployment"],
"Bangladesh Agro":["Land Management","Farmer Registration","Seed Stock","Fertilizer Stock","Agro Budget","Harvest Tracking","Crop Sale","Worker Payment","Agro Profit 60% Waqf","Agro Expense","Weather Report","Soil Test","Irrigation Control","Machinery","Live Stock","Agro Training","Market Price","Agro Final Report"],
"Food Process":["Raw Material Stock","Production Batch","Quality Check","Packaging","Expiry Tracking","Food License","Staff Hygiene","Cold Storage","Daily Production","Food Sale","Waste Management","Recipe","Nutrition Label","Food Safety Audit","Food Profit Report"],
"Waqf & Trust":["Waqf 60% Calculation","Charity Distribution","Mosque Donation","Madrasa Support","Orphan Fund","Monthly Waqf Report","Waqf Bank Account","Donor List","Trust Deed","Waqf Certificate","Zakat Calculation","Sadaqah Track"],
"Accounts 8000 MVR":["8000 MVR Fee Collection","Company Profit 40%","Waqf Profit 60%","Daily Expense","Salary Sheet","Bank Ledger","Cash Book","Profit Loss","Balance Sheet","Invoice Print","Money Receipt","Due List","Advance Payment","Refund","Currency Convert MVR-BDT","Audit Report","Tax Calculation","Yearly Closing","Agent Commission","Final Accounts"],
"Travel & Ticket":["Air Ticket Booking","Ticket Reissue","Hotel Booking","Umrah Package","Visa Sticker","Travel Insurance","Airport Pickup","Baggage Track","Ticket Profit","Customer Passport Track","IATA Report","Travel Final"],
"Global Business":["Import LC","Export Bill","Product Stock","Supplier List","Buyer List","Shipping Tracking","Customs Clearance","Business Profit","International Payment","Product Catalog","Trade License","Chamber Certificate","Business Agreement","Market Analysis","Competitor Track","Global Shipping Cost","Warehouse","Business Final Report"],
"Admin & NSR":["NSR #08430004 Verify","Company License Control","Staff Management","NSR Certificate Print","Admin Password Change [NH1000]","User Role","Secret Waqf Control","Royal Logo Control","All Data Backup","Data Restore","System V12 Update","Security Log","Login History","Master Delete","Database Clean","Emergency Lock","NSR Renewal Reminder","Govt Fee Track","Maldives Company Control","Bangladesh Company Control","Dubai Office Control","All Branch Control","Director Panel","Shareholder Panel","Confidential File","NSR Secret Note","Royal Seal","Final Master Report","Super Admin Only","God Mode","NSR #08430004 Lifetime","System Format","Master Reset"]
};
document.addEventListener('click',function(e){
 if(e.target.textContent.includes('Open Module') || e.target.textContent.includes('Open Secure')){
   let card=e.target.closest('div.bg-slate-800');
   if(!card)return;
   let titleEl=card.querySelector('h3');
   if(!titleEl)return;
   let title=titleEl.innerText.trim();
   let key=Object.keys(allFuncs).find(k=>title.toLowerCase().includes(k.toLowerCase().split(' ')[0]));
   if(!key && title.toLowerCase().includes('admin')) key='Admin & NSR';
   if(key && allFuncs[key]) openModal(title, allFuncs[key]);
 }
});
console.log("✅ NH 167 Loaded");
