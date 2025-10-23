import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { PreAssessmentFormData } from '@/types/pre-assessment';

export const generatePreAssessmentPDF = (data: PreAssessmentFormData) => {
  const doc = new jsPDF();
  let yPosition = 20;

  // Helper function to add section headers
  const addSectionHeader = (title: string) => {
    yPosition += 10;
    doc.setFillColor(139, 92, 246); // Purple color
    doc.rect(10, yPosition - 5, 190, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 15, yPosition);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    yPosition += 10;
  };

  // Helper function to add field
  const addField = (label: string, value: any, checkNewPage = true) => {
    if (checkNewPage && yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`${label}:`, 15, yPosition);
    doc.setFont('helvetica', 'normal');
    const valueStr = value?.toString() || 'Not provided';
    doc.text(valueStr, 80, yPosition);
    yPosition += 7;
  };

  // Helper to check if we need a new page
  const checkPageBreak = () => {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }
  };

  // Title
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Pre-Assessment Report', 105, yPosition, { align: 'center' });
  yPosition += 5;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Generated: ${new Date().toLocaleString()}`, 105, yPosition, { align: 'center' });
  yPosition += 5;

  // Patient Demographics
  addSectionHeader('Patient Demographics');
  addField('First Name', data.patientFirstName);
  addField('Middle Name', data.patientMiddleName);
  addField('Last Name', data.patientLastName);
  addField('Gender', data.gender);
  addField('Date of Birth', data.dateOfBirth ? new Date(data.dateOfBirth).toLocaleDateString() : 'Not provided');
  addField('Social Security Number', data.ssn);

  // Address Information
  addSectionHeader('Address Information');
  addField('Street Address Line 1', data.streetAddress1);
  addField('Street Address Line 2', data.streetAddress2);
  addField('City', data.city);
  addField('State', data.state);
  addField('ZIP Code', data.zipCode);
  addField('County', data.county);

  // Location Coordinates
  if (data.latitude && data.longitude) {
    addField('Coordinates', `${data.latitude}, ${data.longitude}`);
  }

  // Contact Information
  addSectionHeader('Contact Information');
  addField('Cell Phone', data.cellPhone);
  addField('Home Phone', data.homePhone);
  addField('Email', data.email);

  // Insurance Information
  addSectionHeader('Insurance Information');
  addField('Healthfirst ID', data.healthfirstId);
  addField('Medicaid ID', data.medicaidId);

  // Vitals
  addSectionHeader('Vitals');
  addField('Height', `${data.heightFeet} ft ${data.heightInches} in`);
  addField('Weight', `${data.weightLbs} lbs`);

  // Medical History
  addSectionHeader('Medical History');
  addField('Needs Help With', data.needsHelpWith || 'Not provided');
  addField('Lives With', data.livesWith || 'Not provided');
  addField('Pets', data.pets || 'Not provided');
  addField('Mobility Aids', data.mobilityAids || 'Not provided');

  checkPageBreak();

  // Authorized Hours
  if (data.authorizedHours) {
    addSectionHeader('Authorized Hours (Weekly)');
    yPosition += 5;
    autoTable(doc, {
      startY: yPosition,
      head: [['Day', 'Hours']],
      body: [
        ['Monday', data.authorizedHours.monday?.toString() || '0'],
        ['Tuesday', data.authorizedHours.tuesday?.toString() || '0'],
        ['Wednesday', data.authorizedHours.wednesday?.toString() || '0'],
        ['Thursday', data.authorizedHours.thursday?.toString() || '0'],
        ['Friday', data.authorizedHours.friday?.toString() || '0'],
        ['Saturday', data.authorizedHours.saturday?.toString() || '0'],
        ['Sunday', data.authorizedHours.sunday?.toString() || '0'],
      ],
      theme: 'grid',
      headStyles: { fillColor: [139, 92, 246] },
      margin: { left: 15 },
    });
    yPosition = (doc as any).lastAutoTable.finalY + 10;
  }

  checkPageBreak();

  // Schedule Time
  if (data.scheduleTime) {
    addSectionHeader('Schedule Time (Start & End)');
    yPosition += 5;
    const scheduleData = [];
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;
    
    for (const day of days) {
      const schedule = data.scheduleTime[day];
      scheduleData.push([
        day.charAt(0).toUpperCase() + day.slice(1),
        schedule?.startTime || 'Not set',
        schedule?.endTime || 'Not set',
      ]);
    }

    autoTable(doc, {
      startY: yPosition,
      head: [['Day', 'Start Time', 'End Time']],
      body: scheduleData,
      theme: 'grid',
      headStyles: { fillColor: [139, 92, 246] },
      margin: { left: 15 },
    });
    yPosition = (doc as any).lastAutoTable.finalY + 10;
  }

  checkPageBreak();

  // Emergency Contacts
  if (data.emergencyContacts && data.emergencyContacts.length > 0) {
    addSectionHeader('Emergency Contacts');
    
    data.emergencyContacts.forEach((contact, index) => {
      yPosition += 5;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`Contact ${index + 1}${contact.isPrimary ? ' (Primary)' : ''}`, 15, yPosition);
      yPosition += 7;
      
      addField('Name', `${contact.firstName} ${contact.lastName}`, false);
      addField('Relationship', contact.relationship, false);
      addField('Cell Phone', contact.cellPhone, false);
      if (contact.homePhone) addField('Home Phone', contact.homePhone, false);
      if (contact.email) addField('Email', contact.email, false);
      
      checkPageBreak();
    });
  }

  checkPageBreak();

  // Primary Care Physician
  if (data.primaryCarePhysician && Object.keys(data.primaryCarePhysician).length > 0) {
    addSectionHeader('Primary Care Physician');
    const pcp = data.primaryCarePhysician;
    
    addField('Name', pcp.firstName && pcp.lastName ? `${pcp.firstName} ${pcp.lastName}` : 'Not provided');
    addField('NPI', pcp.npi);
    addField('Phone Number', pcp.phoneNumber);
    addField('Fax Number', pcp.faxNumber);
    addField('Email', pcp.email);
    addField('Street Address', pcp.streetAddress1 || 'Not provided');
    if (pcp.streetAddress2) addField('Street Address Line 2', pcp.streetAddress2);
    addField('City', pcp.city);
    addField('State', pcp.state);
    addField('ZIP Code', pcp.zipCode);
  }

  checkPageBreak();

  // Pharmacy
  if (data.pharmacy && Object.keys(data.pharmacy).length > 0) {
    addSectionHeader('Pharmacy Information');
    const pharmacy = data.pharmacy;
    
    addField('Pharmacy Name', pharmacy.name);
    addField('Phone Number', pharmacy.phoneNumber);
    addField('Fax Number', pharmacy.faxNumber);
    addField('Email', pharmacy.email);
    addField('Street Address', pharmacy.streetAddress1);
    if (pharmacy.streetAddress2) addField('Street Address Line 2', pharmacy.streetAddress2);
    addField('City', pharmacy.city);
    addField('State', pharmacy.state);
    addField('ZIP Code', pharmacy.zipCode);
  }

  // Footer on all pages
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128);
    doc.text(
      `Page ${i} of ${pageCount}`,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
  }

  return doc;
};

export const downloadPreAssessmentPDF = (data: PreAssessmentFormData, filename?: string) => {
  const doc = generatePreAssessmentPDF(data);
  const fileName = filename || `PreAssessment_${data.patientLastName}_${data.patientFirstName}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};
