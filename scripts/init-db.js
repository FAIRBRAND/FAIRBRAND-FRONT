const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
    console.log('🚀 Initialisation de la base de données...');

    // Vérifier la connexion
    try {
        await prisma.$connect();
        console.log('✅ Connexion à la base de données réussie');
    } catch (error) {
        console.error('❌ Erreur de connexion à la base de données:', error);
        process.exit(1);
    }

    // Créer un utilisateur de test si nécessaire
    const testUser = await prisma.user.findUnique({
        where: { email: 'test@example.com' }
    });

    if (!testUser) {
        const bcrypt = require('bcryptjs');
        const hashedPassword = await bcrypt.hash('password123', 12);

        await prisma.user.create({
            data: {
                email: 'test@example.com',
                password: hashedPassword,
                firstName: 'Test',
                lastName: 'User',
                name: 'Test User',
            },
        });
        console.log('✅ Utilisateur de test créé (test@example.com / password123)');
    } else {
        console.log('ℹ️ Utilisateur de test déjà existant');
    }

    console.log('🎉 Initialisation terminée avec succès');
}

main()
    .catch((e) => {
        console.error('❌ Erreur lors de l\'initialisation:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 