import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

import Link from 'next/link';

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;

const User = () => {
  const { data, loading } = useQuery(ViewerQuery);

  return (
    <div>
      {loading && <div data-testid='loading'>Loading</div>}
      {data && (
        <div data-testid='details'>
          You're signed in as {data?.viewer?.name} and you're{' '}
          {data?.viewer?.status} goto{' '}
          <Link href='/about'>
            <a>static</a>
          </Link>{' '}
          page.
        </div>
      )}
    </div>
  );
};

export default User;
