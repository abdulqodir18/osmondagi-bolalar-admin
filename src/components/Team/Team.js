import React from 'react'
import {useQuery} from 'react-query'
import './Team.scss'


/* 192.168.0.208:5000
192.168.0.208:5501 */
function Team() {
    function handleSubmitTeam(evt) {
        evt.preventDefault()

        const {
            member_fullname,
            member_status,
            member_img,
            member_telegram_link,
            member_facebook_link,
            member_instagram_link,
        } = evt.target.elements

        const formData = new FormData()
        formData.append('member_fullname', member_fullname.value.trim())
        formData.append('member_status', member_status.value.trim())
        formData.append('member_image', member_img.files[0])
        formData.append('telegram', member_telegram_link.value.trim())
        formData.append('facebook', member_facebook_link.value.trim())
        formData.append('instagram', member_instagram_link.value.trim())

        console.log(
            member_fullname.value.trim(),
            member_status.value.trim(),
            member_img.files[0],
            member_telegram_link.value.trim(),
            member_facebook_link.value.trim(),
            member_instagram_link.value.trim()
        )
        fetch('http://192.168.0.208:5000/team', {
            method: 'POST',
            body: formData,
            headers: {
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
            },
        }).then(() => {
            member_fullname.value = ''
            member_status.value = ''
            member_img.value = null
            member_telegram_link.value = ''
            member_facebook_link.value = ''
            member_instagram_link.value = ''
        })
    }

    return (
        <section className='webdash-team-section'>
            <form className='webdash-team__form' onSubmit={handleSubmitTeam}>
                <div className='webdas-team__left'>
                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_fullname'
                            className='webdash-team__label'>
                            Ism va Familiya
                        </label>
                        <input
                            className='webdash-team__input'
                            type='text'
                            id='member_fullname'
                            placeholder='Eshmatov Toshmat...'
                            required
                        />
                    </div>

                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_status'
                            className='webdash-team__label'>
                            Status
                        </label>
                        <input
                            className='webdash-team__input'
                            type='text'
                            id='member_status'
                            placeholder='Fermer...'
                            required
                        />
                    </div>

                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_img'
                            className='webdash-team__label'>
                            Rasmi
                        </label>
                        <input
                            className='webdash-team__input'
                            type='file'
                            id='member_img'
                            required
                        />
                    </div>
                </div>

                <div className='webdash-team__right'>
                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_telegram_link'
                            className='webdash-team__label'>
                            Telegram manzili
                        </label>
                        <input
                            className='webdash-team__input'
                            type='text'
                            id='member_telegram_link'
                            placeholder='link...'
                            required
                        />
                    </div>

                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_facebook_link'
                            className='webdash-team__label'>
                            Facebook manzili
                        </label>
                        <input
                            className='webdash-team__input'
                            type='text'
                            id='member_facebook_link'
                            placeholder='link...'
                            required
                        />
                    </div>

                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_instagram_link'
                            className='webdash-team__label'>
                            Instagram manzili
                        </label>
                        <input
                            className='webdash-team__input'
                            type='text'
                            id='member_instagram_link'
                            placeholder='link...'
                            required
                        />
                    </div>
                </div>

                <button className='webdash-team__submit-btn'>Submit</button>
            </form>
        </section>
    )
}

export default Team
