import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test("Deve adcionar 'estudar react' na lista", () => {
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId("campo-comentario"),{
            target: {
                value: 'estudar react',
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))
        expect(screen.getByText('estudar react')).toBeInTheDocument()

        fireEvent.change(screen.getByTestId("campo-comentario"),{
            target: {
                value: 'estudar TypeScript',
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))
        expect(screen.getByText('estudar TypeScript')).toBeInTheDocument()
    })
});