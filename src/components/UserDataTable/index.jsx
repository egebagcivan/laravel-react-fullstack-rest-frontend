import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import axiosConfig from '../Config/config';
import DeleteModal from './DeleteModal';
import AddUserModal from './AddUserModal';

export default function index() {
  const [users, setUsers] = useState([]);
  const [links, setLinks] = useState([]);
  const [meta, setMeta] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  const setPaginatedData = (res) => {
    setUsers(res.data.data);
    setLinks(res.data.links);
    setMeta(res.data.meta);
  }

  const fetchUsers = async (link) => {
    if (link !== null) {
      const response = await axios.get(link, axiosConfig).then((res) => {
        setPaginatedData(res);
      });
    }
  }

  const deleteUser = (userId) => {
    setShowDeleteModal(true);
    setUserId(userId);
  }

  const addUser = () => {
    setShowAddUserModal(true);
  }

  const prevPage = async () => {
    await fetchUsers(links.prev);
  }
  const nextPage = async () => {
    await fetchUsers(links.next);
  }
  const lastPage = async () => {
    await fetchUsers(links.last);
  }
  const firstPage = async () => {
    await fetchUsers(links.first);
  }

  React.useEffect(() => {
    fetchUsers(`${import.meta.env.VITE_API_URL}api/v1/users`);
  }, [])

  return (
    <div className='mt-10'>
      <button onClick={addUser} className='bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full mb-5'>
        Add User
      </button>
      <table className='table-auto w-full border'>
        <thead>
          <th className='px-4 py-2 border border-gray-400'>
            Name
          </th>
          <th className='px-4 py-2 border border-gray-400'>
            Email
          </th>
          <th className='px-4 py-2 border border-gray-400'>
            Actions
          </th>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key} className='text-left'>
              <td className='px-4 py-2 border border-gray-400'>
                {user.first_name} {user.last_name}
              </td>
              <td className='px-4 py-2 border border-gray-400'>
                {user.email}
              </td>
              <td className='px-4 py-2 border border-gray-400'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mr-2">
                  Edit
                </button>
                <button onClick={() => deleteUser(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full mr-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        meta={meta}
        firstPage={firstPage}
        prevPage={prevPage}
        nextPage={nextPage}
        lastPage={lastPage}
        fetchUsers={fetchUsers}
      />
      {showDeleteModal && <DeleteModal
        setShowDeleteModal={setShowDeleteModal}
        userId={userId}
      />}
      {showAddUserModal && <AddUserModal
        setShowAddUserModal={setShowAddUserModal}
      />}
    </div>
  )
}
