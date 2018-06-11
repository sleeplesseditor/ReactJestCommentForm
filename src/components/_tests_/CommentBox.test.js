import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount( <CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('Button').length).toEqual(1);
});

describe('text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: '' }
        });
        wrapped.update();
    });

    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
    
    it('when form is submitted, text area gets emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();    
        expect(wrapped.find('textarea').prop('value')).toEqual('');       
    });

});

