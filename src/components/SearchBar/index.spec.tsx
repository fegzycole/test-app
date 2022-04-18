import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import SearchBar, { SearchBarProps } from './index';
import { getMovies } from '../../store/movies/actions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockUseDispatch = useDispatch as jest.Mock<any>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockGetMovies = getMovies as jest.Mock<any>;
const mockDispatch = jest.fn();

const mockProps: SearchBarProps = {
    searchText: '',
    handleChange: jest.fn(),
};

jest.mock('../../store/movies/actions', () => ({
    getMovies: jest.fn(),
}));

describe('<SearchBar />', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });
    describe('when the search text is empty', () => {
        it('should render correctly', () => {
            const view = render(<SearchBar {...mockProps} />);

            expect(view.container).toMatchSnapshot();
        });
    });

    describe('when the search text is not empty', () => {
        const mockNewProps = { ...mockProps, searchText: 'Mock Search Text' };
        it('should render correctly', () => {
            const view = render(<SearchBar {...mockNewProps} />);

            expect(view.container).toMatchSnapshot();
        });

        describe('when the search button is clicked', () => {
            beforeEach(() => {
                mockUseDispatch.mockImplementation(() => mockDispatch);
                render(<SearchBar {...mockNewProps} />);

                const mockSearchBtn = screen.getByTestId('btn');
                fireEvent.click(mockSearchBtn);
            });

            it('should dispatch an action to fetch the movies matching the search text', () => {
                expect.assertions(2);
                expect(mockDispatch).toHaveBeenCalled();
                expect(mockGetMovies).toHaveBeenCalledWith(mockNewProps.searchText);
            });
        });
    });
});
