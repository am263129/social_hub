import axios from 'axios';
import Swal from 'sweetalert2'
import { useAppContext } from '../../contexts/AppContext';
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
  let faucet: any = undefined
  const context = useAppContext()

  const handleLike = () => {
    if (context.walletAddress) {
      axios({
        method: "post",
        data: { "network": "mumbai", "address": context.walletAddress, "token": "maticToken" },
        url: "https://api.faucet.matic.network/transferTokens",
      }).then(response => {
        console.log(response)
        if (response.data.error) {
          Swal.fire({
            icon: 'error',
            title: response.data.error,
            showConfirmButton: false,
            timer: 2500
          })
        }
        else if (response.data.hash) {
          Swal.fire({
            icon: 'success',
            title: 'Success, you will get 0.5 MATIC with in a minute.',
            showConfirmButton: true,
          })
        }
      })
        .catch(error => {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    }
    else
      Swal.fire({
        title: 'Submit your Wallet address',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (address) => {
          context.setWalletAddress(address)
          return axios({
            method: "post",
            data: { "network": "mumbai", "address": address, "token": "maticToken" },
            url: "https://api.faucet.matic.network/transferTokens",
          }).then(response => {
            if (!response.data) {
              throw new Error(response.statusText)
            }
            return response.data
          })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        console.log(result)
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.error ? result.value.error : "Success, you will get 0.5 MATIC with in a minute."}`,
          })
        }
      })
  }

  const handleComment = () => {
    Swal.fire({
      icon: 'success',
      title: 'Comment Action',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleShare = () => {
    Swal.fire({
      icon: 'success',
      title: 'Share Action',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleSend = () => {
    Swal.fire({
      icon: 'success',
      title: 'Send Action',
      showConfirmButton: false,
      timer: 1500
    })
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
              <img src='/assets/icon/ico_earth.svg' alt='world' className='w-3.5 h-3.4' />
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