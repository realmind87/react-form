import React, { useState, useCallback, FunctionComponent, FormEvent, ChangeEvent } from 'react'

export type FormData = {
    thumbnail: string,
    email: string,
    nickname: string,
    userId: string,
    desc: string,
    agree: boolean
}

export type FormProps = {
    onSubmit: (data: FormData) => void;
}

const SignupForm :FunctionComponent<FormProps> = ({ onSubmit }) => {
    const [data, setData] = useState<FormData>({
        thumbnail: '',
        email: '',
        nickname: '',
        userId: '',
        desc: '',
        agree: false
    })

    const {thumbnail, email, nickname, userId, desc, agree} = data

    const handleFormSumbit = useCallback(( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        setData(data)
        onSubmit(data)
    }, [data])

    const onInputChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const { type, name, value, checked } = e.target as HTMLInputElement
        setData(prevData => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    return (
        <form id="form" onSubmit={handleFormSumbit}>
            <div>
                <label htmlFor='type-thumbnail'>이미지 업로드</label>
                <input type='file' id="type-thumbnail" name="thumbnail" value={thumbnail} onChange={onInputChange} />
            </div>

            <div>
                <label htmlFor='type-email'>이메일</label>
                <input type='email' id="type-email" name="email" value={email} onChange={onInputChange} />
            </div>

            <div>
                <label htmlFor='type-nickname'>닉네임</label>
                <input type='text' id="type-nickname" name="nickname" value={nickname} onChange={onInputChange} />
            </div>

            <div>
                <label htmlFor='type-id'>아이디</label>
                <input type='text' id="type-id" name="userId" value={userId} onChange={onInputChange} />
            </div>

            <div>
                <label htmlFor='type-desc'>한줄소개</label>
                <input type='text' id='type-desc' name="desc" value={desc} onChange={onInputChange} />
            </div>

            <div>
                <label htmlFor='type-agree'>동의합니다</label>
                <input type='checkbox' id='type-agree' name="agree" checked={agree} onChange={onInputChange} />
            </div>

            <button type='submit'>등록</button>
        </form>
    )
}

export default SignupForm