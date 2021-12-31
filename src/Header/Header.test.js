import Header from './Header';
import { render , screen} from '@testing-library/react';

describe('test header', () => {
    test('Verify that title is rendered corrected', () => {
        render(<Header />);
        let titleSpan = screen.getByText(/Quiz Time/)
        expect(titleSpan).toBeInTheDocument();

    })
})