import { cleanup, render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { mockMovies } from '../../testUtils/movies';
import Movies from './index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockUseSelector = useSelector as jest.Mock<any>;

describe('<Movies />', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    describe('when movies is undefined', () => {
        beforeEach(() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            mockUseSelector.mockImplementation((selectorFn: any) =>
                selectorFn({
                    movies: {
                        movies: undefined,
                    },
                }),
            );
        });

        it('should render correctly', () => {
            const view = render(<Movies />);

            expect(view.container).toMatchSnapshot();
        });
    });

    describe('when movies is empty ', () => {
        beforeEach(() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            mockUseSelector.mockImplementation((selectorFn: any) =>
                selectorFn({
                    movies: {
                        movies: [],
                    },
                }),
            );
        });

        it('should render correctly', () => {
            const view = render(<Movies />);

            expect(view.container).toMatchSnapshot();
        });
    });

    describe('when movies exist and is not empty', () => {
        beforeEach(() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            mockUseSelector.mockImplementation((selectorFn: any) =>
                selectorFn({
                    movies: {
                        movies: mockMovies,
                    },
                }),
            );
        });

        it('should render correctly', () => {
            const view = render(<Movies />);

            expect(view.container).toMatchSnapshot();
        });
    });
});
