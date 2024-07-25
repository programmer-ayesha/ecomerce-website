// // src/components/Views/NavbarServer.tsx
// import { GetServerSideProps, GetServerSidePropsContext } from 'next';
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import Navbar from './Navbar';
// import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

// interface ServerSideProps {
//   user: KindeUser | null;
// }

// export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context: GetServerSidePropsContext) => {
//   const { getUser } = getKindeServerSession(context.req as any, context.res as any);
//   const user = await getUser();

//   return {
//     props: {
//       user,
//     },
//   };
// };

// const NavbarServer = ({ user }: ServerSideProps) => {
//   return <Navbar initialUser={user} />;
// };

// export default NavbarServer;

