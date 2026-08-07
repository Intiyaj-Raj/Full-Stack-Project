const bcrypt = require("bcrypt");
const userCollection = require("../models/user");

const createAdmin = async () => {
    try {
        const adminEmail = process.env.APP_ADMIN_EMAIL;
        const adminPassword = process.env.APP_ADMIN_PASSWORD;

        // Check admin credentials
        if (!adminEmail || !adminPassword) {
            throw new Error(
                "APP_ADMIN_EMAIL or APP_ADMIN_PASSWORD is missing in .env"
            );
        }

        // Check if admin already exists
        const adminExists = await userCollection.findOne({
            userEmail: adminEmail,
        });

        if (adminExists) {
            console.log("Admin already exists");
            return;
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(adminPassword, 10);

        // Create admin
        await userCollection.create({
            userName: "Admin",
            userEmail: adminEmail,
            userPass: hashedPassword,
            role: "admin",
        });

        console.log("Admin created successfully");
    } catch (error) {
        console.error("Admin creation error:", error);
        throw error;
    }
};

module.exports = createAdmin;