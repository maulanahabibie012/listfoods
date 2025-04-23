import DetailMenu from `@/pages/food/[id]`;
import { fireEvent, render} from '@testing-library/react';

describe('Tambah Makanan Test', () => {
    it('should render the page', () => {
        const { container } = render(<DetailMenu />);

        expect(container).toMatchInlineSnapshot();
      });

    it('should check if label Nama Makanan available', () => {
        const { getByLabelText } = render(<DetailMenu />);
    
        expect(getByLabelText('Nama Makanan')).toBeInTheDocument();
      });

      it('should check if label Deskripsi Makanan available', () => {
        const { getByLabelText } = render(<DetailMenu />);
    
        expect(getByLabelText('Deskripsi Makanan')).toBeInTheDocument();
      });

      it('should check if label Harga Makanan available', () => {
        const { getByLabelText } = render(<DetailMenu />);
    
        expect(getByLabelText('Harga Makanan')).toBeInTheDocument();
      });

      it('should check if label Gambar Makanan available', () => {
        const { getByLabelText } = render(<DetailMenu />);
    
        expect(getByLabelText('Gambar Makanan')).toBeInTheDocument();
      });

      it('should click the button', () => {
        const { getByText } = render(<DetailMenu />);
    
        const button = getByText('Submit');
        fireEvent.click(button);
    
        expect(button).toBeInTheDocument();
      });

      it('should handle submit', () => {
        const { getByLabelText, getByText } = render(<DetailMenu />);
        
        const inputName = getByLabelText('Nama Makanan');
        const inputDescription = getByLabelText('Deskripsi Makanan');
        const inputPrice = getByLabelText('Harga Makanan');
        const inputImage = getByLabelText('Gambar Makanan');
        const buttonSubmit = getByText('Submit');

        fireEvent.change(inputName, { target: { value: 'Bebek Geprek Mercon' } });
        fireEvent.change(inputDescription, { target: { value: 'Bebek Geprek Sambal Mercon' } });
        fireEvent.change(inputPrice, { target: { value: '40000' } });
        fireEvent.change(inputImage, { target: { value: 'https://img-global.cpcdn.com/recipes/4f29e3debf3bd281/680x482cq70/ayam-geprek-sambal-matah-foto-resep-utama.jpg' } }); 
        fireEvent.click(buttonSubmit);

        expect(inputName).toBeInTheDocument();
        expect(inputDescription).toBeInTheDocument();
        expect(inputPrice).toBeInTheDocument();
        expect(inputImage).toBeInTheDocument();
        expect(buttonSubmit).toBeInTheDocument();
      });
});