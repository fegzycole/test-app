import { cleanup, render } from '@testing-library/react';
import { mockMovie } from '../../testUtils/movies';
import MovieCard, { MovieCardProps } from './index';

const props: MovieCardProps = {
    movie: mockMovie,
};

describe('<MovieCard />', () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('should render correctly', () => {
        const view = render(<MovieCard {...props} />);

        expect(view.container).toMatchSnapshot();
    });
});
