import { IndexPage } from '../src/index';

const Index = ({ data }) => {
  console.log(data);
  return <IndexPage />;
};

export async function getStaticProps() {
  return {
    props: {
      data: [{ name: 'Joe Burton', dob: '04/10/79', gender: 'male' }],
    },
  };
}

export default Index;
