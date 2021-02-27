import React from 'react'

export const List = ({list, users}) => {
    console.log(users)
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(item => <tr  key={item.id}>
                    <td>{item.name}</td>
                    <td>{users.find(users => users.id === item.personId)?.name || "暂无数据"}</td>
                </tr>)
            }
        </tbody>
    </table>
}