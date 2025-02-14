import { hash } from '@node-rs/argon2';
import { prisma } from '../src/lib/server/db/prisma';

const passwordHash = await hash('123Password', {
	// recommended minimum parameters
	memoryCost: 19456,
	timeCost: 2,
	outputLen: 32,
	parallelism: 1
});

async function main() {
	const response = await Promise.all([
		prisma.user.upsert({
			where: { username: 'adunham' },
			update: {},
			create: {
				id: '1',
				username: 'adunham',
				passwordHash
			}
		})
	]);
	console.log(response);
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
