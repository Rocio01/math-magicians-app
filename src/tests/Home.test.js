import renderer from 'react-test-renderer';
import Home from '../pages/Home';

test('matches home snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
