import { gql, useQuery } from "@apollo/client";
import {
  getAccessToken,
  useUser,
  withPageAuthRequired,
} from "@auth0/nextjs-auth0";
import { useGetProductsQuery } from "../../graphql/generated/graphql";
import {
  getServerPageGetProducts,
  ssrGetProducts,
  useMe,
} from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

function Home() {
  const { user } = useUser();
  const { data: me } = useMe();

  return (
    <div className="text-violet-500">
      <h1>Hello World</h1>
      <pre>{JSON.stringify(me, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    return {
      props: {},
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
