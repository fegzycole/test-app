import { cleanup, render } from '@testing-library/react';
import MessageBox, { MessageBoxProps } from './index';

const props: MessageBoxProps = {
    text: 'Mock Text',
};

describe('<MessageBox />', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('should render correctly', () => {
        const view = render(<MessageBox {...props} />);

        expect(view.container).toMatchSnapshot();
    });
});
