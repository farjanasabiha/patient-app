export type UserRole = "SuperAdmin" | "RN" | "Caregiver" | "Patient";

export interface DemoUser {
    email: string;
    password: string;
    role: UserRole;
    name: string;
}

export const demoUsers: DemoUser[] = [
    {
        email: "superadmin@demo.com",
        password: "superadmin123",
        role: "SuperAdmin",
        name: "Super Admin"
    },
    {
        email: "rn@demo.com",
        password: "rn123",
        role: "RN",
        name: "Registered Nurse"
    },
    {
        email: "caregiver@demo.com",
        password: "caregiver123",
        role: "Caregiver",
        name: "Care Giver"
    },
    {
        email: "patient@demo.com",
        password: "patient123",
        role: "Patient",
        name: "Demo Patient"
    }
]; 