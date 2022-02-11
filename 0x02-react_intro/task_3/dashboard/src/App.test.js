import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App'

it('Does not crash on the surface...', () => {
  shallow(<App />);
});

it('Does not crash.', () => {
  render(<App />);
});

it('Finds the class App-header is present.', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('div').hasClass('.App-header')).to.equal(true);
})
