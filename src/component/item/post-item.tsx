import Swal from 'sweetalert2'
import { ActionButton } from '../button';

export interface typePost {
  icon: string;
  follower: number;
  timestamp: string;
  title: string;
  description: string;
  link: string;
  photo: string;
}
const PostItem = (props: typePost) => {
  const { icon, follower, timestamp, title, description, link, photo } = props

  const handleLike = () => {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  }

  const handleComment = () => {

  }

  const handleShare = () => {

  }

  const handleSend = () => {

  }

  const actionList = [
    {
      title: 'Like',
      icon: '/assets/icon/ico_like.svg',
      action: handleLike
    },
    {
      title: 'Comment',
      icon: '/assets/icon/ico_comment.svg',
      action: handleComment
    },
    {
      title: 'Share',
      icon: '/assets/icon/ico_share.svg',
      action: handleShare
    },
    {
      title: 'Send',
      icon: '/assets/icon/ico_send.svg',
      action: handleSend
    },
  ]


  return (
    <div className='flex flex-col bg-white rounded-lg border border-app-gray border-opacity-60'>
      <div className='flex justify-between p-3.5'>
        <div className='flex gap-2.5'>
          <img src={icon} alt={title} className='w-12 h-12' />
          <div className='flex flex-col'>
            <p>{title}</p>
            <p className='text-app-gray-light opacity-60 text-xs'>{follower} followers</p>
            <div className='flex gap-1'>
              <p className='text-app-gray-light opacity-60 text-xs'>{timestamp}</p>
              <p className='text-app-gray-light opacity-60 text-xs'> • </p>
              <img src='/assets/icon/ico_earth.svg' alt='world' className='w-3.5 h-3.4'/>
            </div>
          </div>
        </div>
        <button>
          <img src='/assets/icon/ico_more.svg' alt='more' />
        </button>
      </div>
      <div className='p-3.5'>
        <p>{description}</p>
        <a href={link} target="_blank" className='text-app-blue'>{link}</a>
      </div>
      <img src={photo} alt={title} />
      <div className='flex gap-3 p-3.5 rounded-b-lg'>
        {actionList.map((action, idx) => (
          <ActionButton {...action} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default PostItem