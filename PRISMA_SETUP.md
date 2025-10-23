# Prisma with MongoDB Setup

This project uses Prisma as the ORM with MongoDB as the database for managing pre-assessment data.

## Setup Instructions

### 1. Configure Environment Variables

Create a `.env` file in the root directory (if not already present) and add your MongoDB connection string:

```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/patientapp?retryWrites=true&w=majority"
```

**For local MongoDB:**
```env
DATABASE_URL="mongodb://localhost:27017/patientapp"
```

### 2. Install Dependencies

Dependencies are already installed, but if you need to reinstall:

```bash
npm install
```

This will automatically run `prisma generate` via the postinstall script.

### 3. Push Schema to Database

To create the collections in your MongoDB database:

```bash
npm run prisma:push
```

Or manually:
```bash
npx prisma db push
```

## Available Scripts

- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:studio` - Open Prisma Studio (database GUI)
- `npm run prisma:push` - Push schema changes to database

## Schema Overview

The main model is `PreAssessment` which includes:

- **Patient Demographics**: Name, DOB, gender, SSN, address
- **Contact Information**: Phone, email, location coordinates
- **Insurance**: Healthfirst ID, Medicaid ID
- **Vitals**: Height, weight
- **Medical History**: Needs, living situation, pets, mobility aids
- **Authorized Hours**: Weekly schedule (Monday-Sunday)
- **Schedule Time**: Start/end times for each day
- **Emergency Contacts**: Array of contact persons
- **Primary Care Physician**: Doctor information
- **Pharmacy**: Pharmacy details
- **Status**: draft/submitted/completed

## API Routes

### Create Pre-Assessment
```
POST /api/pre-assessment
```

### Get All Pre-Assessments
```
GET /api/pre-assessment
```

### Get Single Pre-Assessment
```
GET /api/pre-assessment?id=<id>
```

### Update Pre-Assessment
```
PUT /api/pre-assessment
```

## Usage in Code

Import the Prisma client:

```typescript
import { prisma } from '@/lib/prisma';

// Example: Fetch all pre-assessments
const assessments = await prisma.preAssessment.findMany();

// Example: Create a new pre-assessment
const newAssessment = await prisma.preAssessment.create({
  data: {
    // ... your data
  },
});
```

## Form Submission

The `PreAssessmentForm` component is fully integrated and ready to submit data:

1. Fill out the form with patient information
2. Click **"Save Draft"** to save without completing
3. Click **"Submit"** to mark as submitted

All form data is automatically collected and sent to the API endpoint.

## Database Management

### View Data
```bash
npm run prisma:studio
```

This opens a web interface at `http://localhost:5555` where you can view and edit data.

### Update Schema

1. Edit `/prisma/schema.prisma`
2. Run `npm run prisma:push` to apply changes
3. Run `npm run prisma:generate` to regenerate the client

## Notes

- The Prisma Client is automatically generated on `npm install` and `npm run build`
- MongoDB requires ObjectId for the `id` field (using `@db.ObjectId`)
- Embedded documents use the `type` keyword instead of `model`
- No migrations are needed for MongoDB (use `db push` instead)
