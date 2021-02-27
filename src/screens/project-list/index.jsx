import React from 'react'
import {useState, useEffect} from 'react'
import {SearchPanel} from './search-panel'
import {List} from './list'
import {cleanObject, useMount, useDebounce} from 'utils'
import * as qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: "",
        personId: ""
    })
    const [list, setList] = useState([])

    const debounceParam= useDebounce(param,1000)

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async res => {
            if(res.ok) {
                setList(await res.json())
            }
        })
    }, [debounceParam])
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if(res.ok) {
                setUsers(await res.json())
            }
        })
    })
    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}/>
        <List list={list} users={users}/>
    </div>
}