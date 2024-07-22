import { PrismaClient } from '@prisma/client'
import { fa, faker, fakerBASE } from '@faker-js/faker'

interface ITodo {
  title: string;   // Fixed typo from 'titel' to 'title'
  body: string;
  // userId?: string;  // Uncomment and use if needed
  // completed?: boolean;  // Uncomment and use if needed
}


const prisma = new PrismaClient()

// async function main() {
//   const user = await prisma.user.createMany({

//     data: Array.from({ length: 25 }, () => ( {
//       name: faker.internet.userName(),
//       email: faker.internet.email(),
//       address: {
//         street: faker.location.streetAddress(),
//         city: faker.location.city(),
//         state: faker.location.state(),
//         zip: faker.location.zipCode(),
//       }
//     })),
//   })
//   console.log(user)
// }


// npx prisma db push
async function main() {

  
  const user = await prisma.todo.createMany({
    data: Array.from({ length: 25 }, () => ({
      titel: faker.lorem.word(5),  // Corrected property name
      body: faker.lorem.paragraph(2),
      userId: "1"
      // completed: faker.datatype.boolean(),
    })),
  });
  console.log(user);
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })