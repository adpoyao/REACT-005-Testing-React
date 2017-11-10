import React from 'react'
import { shallow } from 'enzyme'
import Game from './game'

describe('<Game />', () => {
  it('doesn\'t explode', () => {
    shallow(<Game />)
  })

  it('should have correct initial state', () => {
      const wrapper = shallow(<Game />);
      expect(wrapper.state('guesses')).toEqual([]);
      expect(wrapper.state('feedback')).toEqual('Make your guess!');
      expect(wrapper.state('correctAnswer')).toBeGreaterThan(0)
      expect(wrapper.state('correctAnswer')).toBeLessThan(101);
  })
})