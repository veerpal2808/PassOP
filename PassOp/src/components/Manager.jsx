import React, { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })

    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem('passwords');
        if (passwords) { 
            setpasswordArray(JSON.parse(passwords))
        }
    })

    const savePassword = () => {
        if(form.site.length>3 && form.username.length>3 && form.password.length>3){
        setpasswordArray([...passwordArray, {...form, id:uuidv4()}])
        localStorage.setItem('password', JSON.stringify([...passwordArray, {...form, id:uuidv4()}]))
        console.log([...passwordArray, form])
        setform({ site: "", username: "", password: "" })
        }else{
            toast('Error:Password not saved!')
        }
    } 

    const editPassword=(id) => {
        console.log('Editing password with id: ',id)
        setform(passwordArray.filter(i=>i.id===id)[0])
        setpasswordArray(passwordArray.filter(item=>item.id!==id))

      }

    const deletePassword=(id) => {
        let c=confirm('Do you really want to delete this password?')
        if(c){
            console.log('Deleting password with id: ',id)
            setpasswordArray(passwordArray.filter(item=>item.id!==id))
            localStorage.setItem('password', JSON.stringify(passwordArray.filter(item=>item.id!==id)))
      
      
        }
      
    }
    

    const copyText = (text) => {
        toast('copied to clipboard!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        navigator.clipboard.writeText(text)
    }


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />

            <ToastContainer />
            <div className="absolute top-0 -z-10 h-full w-full bg-green-50"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-green-300 opacity-50 blur-[80px]"></div></div>

            <div className="mx-auto container p-2 md:p-0 md:mycontainer">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-700 '>&lt; </span>
                    Pass
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
                <div className=" flex flex-col p-4 text-black gap-5 items-center">
                    <input placeholder='Enter Website URL' value={form.site} onChange={handleChange} className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='site' id='site' />
                    <div className="flex w-full justify-between gap-3">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='username' id='username' />
                        <div className="relative">
                            <input onChange={handleChange} placeholder='Enter Password' value={form.password} className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name='password' id='password' />
                            <span className='absolute right-0 top-0 px-1 cursor-pointer'></span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full w-fit px-4 py-2 gap-3'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Save</button>

                </div>

                <div>
                    <h2 className='font-bold text-2xl py-2 '>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-sm overflow-hidden">
                            <thead className='bg-green-700 text-white'>
                                <tr >
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Passwords</th>
                                    <th className='py-2'>Actions</th>

                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((items, index) => {
                                    return <tr key={index}>
                                        <td className='py-2 text-center w-32 border border-white gap-2'>
                                            <div className="flex items-center justify-center">

                                                <a href={items.site} target='_blank'>
                                                    {items.site}</a>
                                                <div className="lordiconcopy cursor-pointer py-1 " onClick={() => { { copyText(items.site) } }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/depeqmsz.json"
                                                        trigger="hover"
                                                        style={{
                                                            "width": "22px", "height": "22px",
                                                            "padding": "3px"
                                                        }}
                                                    >
                                                    </lord-icon></div></div>
                                        </td>
                                        <td className='py-2 text-center w-32 border border-white'>
                                            <div className="flex items-center justify-center">
                                                <span> {items.username}</span>
                                                <div className="lordiconcopy cursor-pointer py-1" onClick={() => { { copyText(items.username) } }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/depeqmsz.json"
                                                        trigger="hover"
                                                        style={{
                                                            "width": "22px", "height": "22px",
                                                            "padding": "3px"
                                                        }}
                                                    >
                                                    </lord-icon></div></div>
                                        </td>
                                        <td className='py-2 text-center w-32 border border-white'>
                                            <div className="flex items-center justify-center">
                                                <span>{items.password}</span>
                                                <div className="lordiconcopy cursor-pointer py-1" onClick={() => { { copyText(items.password) } }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/depeqmsz.json"
                                                        trigger="hover"
                                                        style={{
                                                            "width": "22px", "height": "22px",
                                                            "padding": "3px"
                                                        }}
                                                    >
                                                    </lord-icon></div></div>
                                        </td>


                                        <td className='py-2 text-center w-32 border border-white '>

                                            <span className='mx-2' onClick={()=>{editPassword(items.id)}}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/wkvacbiw.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>

                                            <span className='mx-2' onClick={()=>{deletePassword(items.id)}}><lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon></span>


                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    }
                </div>

            </div>


        </>
    )
}

export default Manager