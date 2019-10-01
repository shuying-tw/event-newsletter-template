import React from 'react'
import { Table } from './table';
import { render } from '@testing-library/react'

describe('table', () => {
    it('should render child component', () => {
        const { getByTestId } = render(
            <Table>
                <tbody>
                    <tr>
                        <td data-testid="child">hello</td>
                    </tr>
                </tbody>
            </Table>
          )
        const result = getByTestId('child');
        expect(result.innerHTML).toEqual('hello')
    })

    it('should pass style as props',() => {
        const style = {
            width: '30px'
        }
        const { getByTestId } = render(
            <Table data-testid="tb" tableStyle={style}>
            </Table>
          )
        const result = getByTestId('tb');
        expect(result.getAttribute('style')).toEqual('width: 30px;')
    })
})
