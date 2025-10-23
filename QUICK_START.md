# Quick Start Guide - Pre-Assessment Form with PDF Download

## 🚀 Setup in 3 Steps

### 1. Configure Database
```bash
# Create .env file and add your MongoDB connection
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/patientapp"

# Push schema to database
npm run prisma:push
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Test the Form
Navigate to the Pre-Assessment Form page and start filling it out!

---

## ✨ Features Available

### 📝 Form Submission
- Fill out comprehensive patient pre-assessment
- Save as draft or submit
- All data stored in MongoDB via Prisma

### 📄 PDF Generation
Two ways to generate PDF:

#### **Option A: Preview PDF (Anytime)**
1. Fill out form fields
2. Click **"Preview PDF"** button
3. PDF downloads immediately with current data
4. No submission required

#### **Option B: Download After Submit**
1. Complete and submit the form
2. Green success message appears
3. Click **"Download PDF"** button
4. PDF downloads with all submitted data

---

## 📋 Form Sections Included in PDF

✅ **Patient Demographics**
- Name (First, Middle, Last)
- Gender, Date of Birth, SSN
- Address (Street, City, State, ZIP, County)
- Location coordinates (from map picker)

✅ **Contact & Insurance**
- Cell phone, home phone, email
- Healthfirst ID, Medicaid ID

✅ **Vitals & Medical History**
- Height (ft/in), Weight (lbs)
- Needs help with, Lives with, Pets
- Mobility aids used

✅ **Schedule Information**
- Authorized hours (Monday-Sunday)
- Start/End times (Monday-Sunday)

✅ **Emergency Contacts** (Multiple)
- Name, relationship, phone, email
- Primary contact designation

✅ **Primary Care Physician**
- Name, NPI, contact info, address

✅ **Pharmacy**
- Name, contact info, address

---

## 🎨 PDF Styling

The generated PDF includes:
- Professional purple section headers
- Organized data layout
- Tables for schedules and hours
- Page numbers
- Auto-generated filename: `PreAssessment_LastName_FirstName_Date.pdf`

---

## 🛠️ Technical Stack

### Backend
- **Prisma** - ORM for MongoDB
- **Next.js API Routes** - RESTful endpoints
- **MongoDB** - Database

### Frontend
- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

### PDF Generation
- **jsPDF** - PDF creation
- **jspdf-autotable** - Table formatting

---

## 📁 Key Files

```
src/
├── app/api/pre-assessment/
│   └── route.ts                    # API endpoint
├── components/PreAssessment/
│   └── PreAssessmentForm.tsx       # Main form component
├── lib/
│   ├── prisma.ts                   # Prisma client
│   └── pdfGenerator.ts             # PDF generation logic
├── types/
│   ├── pre-assessment.ts           # TypeScript types
│   └── jspdf-autotable.d.ts        # Type declarations
└── prisma/
    └── schema.prisma               # Database schema
```

---

## 🧪 Testing the Flow

### Test Scenario 1: Preview PDF
```
1. Open the pre-assessment form
2. Fill in at least:
   - Patient first name: "John"
   - Patient last name: "Doe"
   - Gender: "Male"
   - Date of Birth: Select a date
   - SSN: "123-45-6789"
   - State: "New York"
   - Cell Phone: "555-1234"
   - Email: "john@example.com"
   - Healthfirst ID: "HF123456"
   - Medicaid ID: "MC789012"
   - Height: 5 ft 10 in
   - Weight: 180 lbs
3. Click "Preview PDF"
4. Check Downloads folder for PDF
5. Open PDF to verify data
```

### Test Scenario 2: Full Submission with PDF
```
1. Fill out ALL form fields
2. Add multiple emergency contacts
3. Fill in Primary Care Physician details
4. Fill in Pharmacy information
5. Click "Submit"
6. Wait for green success message
7. Click "Download PDF" in success message
8. Verify PDF has all submitted data
9. Check MongoDB (npm run prisma:studio) to verify data was saved
```

---

## 🐛 Troubleshooting

**PDF doesn't download:**
- Check browser console (F12)
- Allow popups for the site
- Try different browser

**Form submission fails:**
- Check `.env` has correct DATABASE_URL
- Verify MongoDB is accessible
- Check console for error messages

**Missing data in PDF:**
- Ensure required fields are filled
- Check that form state is updating (use console.log)

---

## 📊 Database Management

### View Submitted Data
```bash
npm run prisma:studio
# Opens http://localhost:5555
```

### Update Schema
```bash
# After editing schema.prisma
npm run prisma:push
npm run prisma:generate
```

---

## 🎯 Next Steps

1. ✅ Test form submission
2. ✅ Test PDF download
3. ✅ Review PDF formatting
4. 🔜 Customize PDF styling (optional)
5. 🔜 Add validation rules (optional)
6. 🔜 Add file upload features (optional)

---

## 📚 Additional Documentation

- `PRISMA_SETUP.md` - Detailed Prisma/MongoDB setup
- `PDF_FEATURE.md` - Comprehensive PDF feature guide
- `README.md` - Project overview

---

## 🎉 You're Ready!

The pre-assessment form is fully functional with:
- ✅ Complete state management
- ✅ API endpoints for CRUD operations
- ✅ MongoDB database integration
- ✅ PDF generation and download
- ✅ Professional styling

Start by filling out the form and clicking **"Preview PDF"** to see it in action!
