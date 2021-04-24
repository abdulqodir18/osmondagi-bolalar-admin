import React from 'react'
import TableController from '../TableContoller/TableController'
import './UserTable.scss'
import { useAsync } from '../../hooks/useAsync'
import { client } from '../../utils/api-client'

function UserTable() {
    const [page, setPage] = React.useState(1)

    const [elements, setElements] = React.useState(0)

    const elList = React.useRef(null)
    const elItem = React.useRef(null)

    const { data, isSuccess, run } = useAsync()

    React.useEffect(() => {
        run(client(`users?limit=5&page=${page}`))
    }, [run, page])

    React.useEffect(() => {
        setElements(elList?.current?.childElementCount)
    }, [data])

    function handleDoubleClick(evt) {
        client('userscore', { data: { user_tg_id: evt.target.id } })
    }

    return (
        <div className='user-table__wrapper'>
            <h2 className='user-section__heading title'>
                Barcha user uchun Takliflar
            </h2>
            <table className='user-table'>
                <thead className='user-table__head'>
                    <tr className='user-table__head-tr'>
                        <th className='user-table__head-th user-table__head-th-id'>
                            ID
                        </th>
                        <th className='user-table__head-th user-table__head-th-name'>
                            Ismi
                        </th>
                        <th className='user-table__head-th user-table__head-th-surname'>
                            Familiyasi
                        </th>
                        <th className='user-table__head-th user-table__head-th-profession'>
                            Kasbi
                        </th>
                        <th className='user-table__head-th user-table__head-th-birth'>
                            Tug'ilgan yili
                        </th>
                        <th className='user-table__head-th user-table__head-th-gender'>
                            Jins
                        </th>
                        <th className='user-table__head-th user-table__head-th-region'>
                            Region
                        </th>
                        <th className='user-table__head-th user-table__head-th-score'>
                            Score
                        </th>
                    </tr>
                </thead>
                <tbody className='user-table__body' ref={elList}>
                    {isSuccess &&
                        data?.map((user, index) => (
                            <tr
                                className='user-table__body'
                                key={user.id + Math.random()}>
                                <td className='user-table__body-td user-table__body-td-id'>
                                    {index ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-name'>
                                    {user.name ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-surname'>
                                    {user.surname ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-profession'>
                                    {user.profession ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-birth'>
                                    {user.birthyear ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-gender'>
                                    {user.gender ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-region'>
                                    {user.region ?? '-'}
                                </td>
                                <td
                                    className='user-table__body-td user-table__body-td-score'
                                    ref={elItem}>
                                    <button
                                        className='user-table__score-clear'
                                        id={user.user_tg_id}
                                        onDoubleClick={handleDoubleClick}>
                                        &#128465;
                                    </button>
                                    {user.score ?? '-'}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <TableController
                setPage={setPage}
                page={page}
                numberLi={elements}
            />
        </div>
    )
}

export default UserTable
