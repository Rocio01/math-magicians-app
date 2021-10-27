import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

test('matches calculator snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
