import ListUserPage from '@/pages/index';
import { fireEvent, render} from '@testing-library/react';

describe('ListUserPage Button', () => {
    it('should render the page', () => {
        const { container } = render(<ListUserPage />);

        expect(container).toMatchInlineSnapshot(`
<div>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-blue-100 shadow-sm"
  >
    <div
      class="container-fluid"
    >
      <a
        class="bg-blue-500 p-2"
        href="/"
      >
        Form Makanan
      </a>
    </div>
  </nav>
  <div
    class="mx-0.5"
  >
    <h1
      class="text-center font-bold text-4xl m-9"
    >
      Daftar Makanan
    </h1>
    <div
      class="flex justify-center"
    >
      <input
        class="border border-gray-300 rounded-lg p-2 mb-4 w-200"
        id="search"
        name="search"
        placeholder="Search..."
        type="text"
      />
    </div>
    <ul
      class="grid grid-cols-4 justify-center gap-2"
    />
  </div>
</div>
`);
    });

    it('should click the button', () => {
        const { getByText } = render(<ListUserPage />);
    
        const button = getByText('Detail Menu');
        fireEvent.click(button);
    
        expect(button).toBeInTheDocument();
      });

      it('should handle detail menu', () => {
        const { getByText } = render(<ListUserPage />);
    
        const buttonDetailMenu = getByText('Detail Menu');

        expect(buttonDetailMenu).toBeInTheDocument();

        fireEvent.click(buttonDetailMenu);

        expect(buttonDetailMenu).toBeInTheDocument();
      });
});