import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

test('matches home snapshot', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});