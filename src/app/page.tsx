import styles from './page.module.css';
import prisma from '@/app/lib/client';
import { UpdateForm } from './UpdateForm';
import { AddUser } from './AddUser';

export default async function Home({ ...props }) {
  const users = await prisma.user.findMany();

  return (
    <main className={styles.main}>
      {users.map((user) => (
        <>
          <UpdateForm initialUser={user} />
        </>
      ))}
      <AddUser />
    </main>
  );
}
