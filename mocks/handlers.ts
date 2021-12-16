import { graphql } from 'msw';

export const handlers = [
  graphql.query(`ViewerQuery`, (req, res, ctx) => {
    return res(
      ctx.data({
        viewer: { id: 1, name: 'John Smith', status: 'live' },
      })
    );
  }),
];
