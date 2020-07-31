import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatusComponent', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'it-incubator.com'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-incubator.com');
    });
    test('after creation span with status should be displayed', () => {
        const component = create(<ProfileStatus status={'it-incubator.com'}/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });
    test('after creation input should not be displayed', () => {
        const component = create(<ProfileStatus status={'it-incubator.com'}/>);
        const root = component.root;
        expect(() => {
            const input = root.findByType('input');
        }).toThrow();
    });
    test('after creation span with correct status should be displayed', () => {
        const component = create(<ProfileStatus status={'it-incubator.com'}/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe('it-incubator.com');
    });

    test('input should be dispalyed in editMode instead of span', () => {
        const component = create(<ProfileStatus status={'it-incubator.com'}/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('it-incubator.com');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'it-incubator.com'} updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});