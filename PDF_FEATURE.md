# PDF Download Feature

The Pre-Assessment Form now includes a comprehensive PDF generation and download feature that allows you to visualize and save submitted data as a professional PDF document.

## Features

### 1. **Preview PDF (Before Submission)**
- Click the **"Preview PDF"** button at any time while filling out the form
- Downloads a PDF with all current form data
- Useful for reviewing data before final submission
- No need to submit to database first

### 2. **Download After Submission**
- After successfully submitting the form, a success message appears
- Click the **"Download PDF"** button in the success notification
- Downloads the submitted data as a formatted PDF document

## PDF Contents

The generated PDF includes all form sections:

### Patient Information
- ✅ Patient Demographics (Name, DOB, Gender, SSN)
- ✅ Address Information (Street, City, State, ZIP, County)
- ✅ Location Coordinates (Latitude/Longitude from map)
- ✅ Contact Information (Cell Phone, Home Phone, Email)
- ✅ Insurance Information (Healthfirst ID, Medicaid ID)

### Medical Information
- ✅ Vitals (Height in feet/inches, Weight in lbs)
- ✅ Medical History (Needs help with, Lives with, Pets, Mobility aids)

### Schedule Information
- ✅ Authorized Hours (Weekly schedule with hours per day)
- ✅ Schedule Time (Start and end times for each day of the week)

### Contact Information
- ✅ Emergency Contacts (Multiple contacts with primary designation)
  - Name, Relationship, Phone numbers, Email
- ✅ Primary Care Physician
  - Name, NPI, Contact details, Address
- ✅ Pharmacy Information
  - Name, Contact details, Address

## PDF Styling

The PDF is professionally formatted with:
- **Purple header sections** for each category
- **Organized tables** for authorized hours and schedule times
- **Page numbers** on each page
- **Automatic page breaks** when content is too long
- **Generated timestamp** showing when PDF was created
- **Filename format**: `PreAssessment_LastName_FirstName_YYYY-MM-DD.pdf`

## How to Use

### Option 1: Preview Before Submission
```
1. Fill out the form with patient information
2. Click "Preview PDF" button (bottom right)
3. PDF automatically downloads to your computer
4. Review the PDF
5. Make any necessary changes to the form
6. Submit when ready
```

### Option 2: Download After Submission
```
1. Fill out the form completely
2. Click "Submit" button
3. Wait for success message (green notification)
4. Click "Download PDF" button in the success message
5. PDF automatically downloads with all submitted data
```

## Technical Details

### Libraries Used
- **jsPDF** - Core PDF generation library
- **jspdf-autotable** - Table generation for schedules and authorized hours

### File Location
- PDF Generator: `/src/lib/pdfGenerator.ts`
- Type Definitions: `/src/types/pre-assessment.ts`
- Form Component: `/src/components/PreAssessment/PreAssessmentForm.tsx`

### PDF Generation Process
1. Collects all form data into a structured object
2. Creates a new PDF document with jsPDF
3. Adds sections with headers and formatted data
4. Includes tables for complex data (hours, schedules)
5. Adds page numbers and formatting
6. Triggers browser download

## Customization

To customize the PDF appearance, edit `/src/lib/pdfGenerator.ts`:

```typescript
// Change header color
doc.setFillColor(139, 92, 246); // Purple (RGB)

// Change font sizes
doc.setFontSize(18); // Title
doc.setFontSize(12); // Section headers
doc.setFontSize(10); // Content

// Modify table styling
headStyles: { fillColor: [139, 92, 246] }
```

## Benefits

✅ **Professional Documentation** - Clean, organized PDF reports  
✅ **Easy Sharing** - Share patient assessments with colleagues  
✅ **Record Keeping** - Maintain physical or digital copies  
✅ **Print Ready** - PDF can be printed directly  
✅ **No Internet Required** - Once downloaded, accessible offline  
✅ **HIPAA Compliant** - Data stays on local device after download  

## Troubleshooting

**PDF doesn't download:**
- Check browser popup blocker settings
- Ensure JavaScript is enabled
- Try a different browser (Chrome, Firefox, Safari)

**Missing data in PDF:**
- Verify all required fields are filled
- Check console for errors (F12 → Console tab)

**PDF formatting issues:**
- Clear browser cache
- Update to latest version of the application

## Future Enhancements

Potential improvements:
- [ ] Add patient photo/signature to PDF
- [ ] Include QR code with assessment ID
- [ ] Add custom branding/logo
- [ ] Email PDF directly from the app
- [ ] Batch export multiple assessments
- [ ] PDF encryption with password protection
