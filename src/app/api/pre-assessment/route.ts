import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received form data:', JSON.stringify(body, null, 2));

    // Create the pre-assessment record
    const preAssessment = await prisma.preAssessment.create({
      data: {
        // Patient Demographics
        patientFirstName: body.patientFirstName || 'Unknown',
        patientMiddleName: body.patientMiddleName,
        patientLastName: body.patientLastName || 'Unknown',
        gender: body.gender || 'other',
        dateOfBirth: body.dateOfBirth ? new Date(body.dateOfBirth) : new Date(),
        ssn: body.ssn || '',
        // languagesSpoken: body.languagesSpoken, // Temporarily commented until Prisma client is regenerated
        
        // Address Information
        streetAddress1: body.streetAddress1,
        streetAddress2: body.streetAddress2,
        city: body.city,
        state: body.state || 'Unknown',
        zipCode: body.zipCode,
        county: body.county,
        
        // Contact Information
        cellPhone: body.cellPhone || '',
        homePhone: body.homePhone,
        email: body.email || '',
        
        // Location Coordinates
        latitude: body.latitude,
        longitude: body.longitude,
        
        // Insurance Information
        healthfirstId: body.healthfirstId || '',
        medicaidId: body.medicaidId || '',
        
        // Vitals
        heightFeet: body.heightFeet || 0,
        heightInches: body.heightInches || 0,
        weightLbs: body.weightLbs || 0,
        
        // Medical History
        // preExistingConditions: body.preExistingConditions, // Temporarily commented until Prisma client is regenerated
        needsHelpWith: body.needsHelpWith,
        livesWith: body.livesWith,
        pets: body.pets,
        mobilityAids: body.mobilityAids,
        
        // Authorized Hours
        authorizedHours: body.authorizedHours,
        
        // Schedule Time
        scheduleTime: body.scheduleTime,
        
        // Emergency Contacts
        emergencyContacts: body.emergencyContacts,
        
        // Primary Care Physician
        primaryCarePhysician: body.primaryCarePhysician,
        
        // Pharmacy
        pharmacy: body.pharmacy,
        
        // Status
        status: body.status || 'draft',
      },
    });

    return NextResponse.json({
      success: true,
      data: preAssessment,
      message: 'Pre-assessment created successfully',
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating pre-assessment:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create pre-assessment',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // Get a specific pre-assessment
      const preAssessment = await prisma.preAssessment.findUnique({
        where: { id },
      });

      if (!preAssessment) {
        return NextResponse.json(
          { success: false, error: 'Pre-assessment not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: preAssessment,
      });
    } else {
      // Get all pre-assessments
      const preAssessments = await prisma.preAssessment.findMany({
        orderBy: { createdAt: 'desc' },
      });

      return NextResponse.json({
        success: true,
        data: preAssessments,
      });
    }
  } catch (error) {
    console.error('Error fetching pre-assessment:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch pre-assessment',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...data } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Pre-assessment ID is required' },
        { status: 400 }
      );
    }

    // Update the pre-assessment record
    const preAssessment = await prisma.preAssessment.update({
      where: { id },
      data: {
        ...data,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      data: preAssessment,
      message: 'Pre-assessment updated successfully',
    });

  } catch (error) {
    console.error('Error updating pre-assessment:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update pre-assessment',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
