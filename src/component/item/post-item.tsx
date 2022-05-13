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
        confirmButtonText: 'Submit',
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
      icon: 'M19.46 11L15.55 7.08999C14.7815 6.32035 14.2028 5.38221 13.86 4.34999L13.37 2.87999C13.1861 2.33314 12.8353 1.85769 12.3672 1.52047C11.899 1.18326 11.337 1.00123 10.76 0.999988C10.3989 0.998672 10.041 1.0685 9.70687 1.20549C9.37272 1.34247 9.06882 1.54393 8.81253 1.79837C8.55624 2.0528 8.35258 2.35522 8.21317 2.68837C8.07375 3.02151 8.00132 3.37885 8.00001 3.73999V4.85999C8.00224 5.82829 8.15749 6.79015 8.46001 7.70999L8.89001 8.99999H4.12001C3.55775 8.99999 3.01852 9.22334 2.62095 9.62092C2.22337 10.0185 2.00001 10.5577 2.00001 11.12C2.00139 11.4656 2.08566 11.8057 2.24575 12.112C2.40583 12.4182 2.63706 12.6816 2.92001 12.88C2.6368 13.0734 2.405 13.333 2.2447 13.6361C2.08439 13.9393 2.0004 14.277 2.00001 14.62C1.99207 15.0425 2.10938 15.4579 2.33717 15.8138C2.56496 16.1697 2.89303 16.4502 3.28001 16.62C3.10026 16.9229 3.00367 17.2678 3.00001 17.62C2.99914 18.1621 3.20595 18.6839 3.57794 19.0782C3.94992 19.4725 4.45881 19.7093 5.00001 19.74V19.88C5.00001 20.4422 5.22337 20.9815 5.62095 21.3791C6.01852 21.7766 6.55775 22 7.12001 22H14.61C15.852 21.9989 17.0771 21.7114 18.19 21.16L18.5 21H21V11H19.46ZM19 19H18L17.27 19.37C16.4328 19.7816 15.5129 19.9971 14.58 20H7.72001C7.49687 20.0089 7.27717 19.9428 7.09594 19.8123C6.91471 19.6818 6.78237 19.4944 6.72001 19.28L6.47001 18.41L5.62001 18C5.42424 17.9202 5.25877 17.7805 5.14738 17.6008C5.03598 17.4212 4.98439 17.2108 5.00001 17L5.17001 16L4.41001 15.26C4.24466 15.0985 4.14036 14.8847 4.11483 14.655C4.08931 14.4253 4.14414 14.1938 4.27001 14L4.93001 12.91L4.20001 11.81C4.15824 11.7592 4.12712 11.7006 4.10849 11.6375C4.08986 11.5745 4.0841 11.5083 4.09157 11.443C4.09903 11.3777 4.11956 11.3146 4.15194 11.2573C4.18431 11.2001 4.22787 11.15 4.28001 11.11C4.37496 11.0309 4.49675 10.9915 4.62001 11H11.67L10.36 7.07999C10.1211 6.36423 9.99958 5.61455 10 4.85999V3.74999C10.0051 3.55267 10.0857 3.36483 10.2253 3.22526C10.3649 3.08569 10.5527 3.00505 10.75 2.99999C10.9068 3.00011 11.0596 3.04937 11.187 3.14085C11.3144 3.23233 11.4098 3.36143 11.46 3.50999L12 4.99999C12.4315 6.3149 13.1604 7.5126 14.13 8.49999L18.63 13H19V19Z',
      action: handleLike
    },
    {
      title: 'Comment',
      icon: 'M16.5 3H8.5C6.64348 3 4.86301 3.77847 3.55025 5.16416C2.2375 6.54984 1.5 8.42923 1.5 10.3889C1.5 12.3485 2.2375 14.2279 3.55025 15.6136C4.86301 16.9993 6.64348 17.7778 8.5 17.7778H12.5V22L20.66 16.3106C21.5512 15.639 22.2751 14.7495 22.7697 13.7183C23.2643 12.687 23.5148 11.5446 23.5 10.3889C23.5 8.42923 22.7625 6.54984 21.4497 5.16416C20.137 3.77847 18.3565 3 16.5 3ZM8.5 11.7083C8.25277 11.7083 8.0111 11.631 7.80554 11.486C7.59998 11.341 7.43976 11.1349 7.34515 10.8938C7.25054 10.6527 7.22579 10.3874 7.27402 10.1315C7.32225 9.87553 7.4413 9.64043 7.61612 9.4559C7.79093 9.27137 8.01366 9.14571 8.25614 9.0948C8.49861 9.04389 8.74995 9.07002 8.97835 9.16988C9.20676 9.26975 9.40199 9.43886 9.53934 9.65585C9.67669 9.87283 9.75 10.1279 9.75 10.3889C9.75 10.7388 9.6183 11.0744 9.38388 11.3219C9.14946 11.5693 8.83152 11.7083 8.5 11.7083ZM12.5 11.7083C12.2528 11.7083 12.0111 11.631 11.8055 11.486C11.6 11.341 11.4398 11.1349 11.3452 10.8938C11.2505 10.6527 11.2258 10.3874 11.274 10.1315C11.3222 9.87553 11.4413 9.64043 11.6161 9.4559C11.7909 9.27137 12.0137 9.14571 12.2561 9.0948C12.4986 9.04389 12.7499 9.07002 12.9784 9.16988C13.2068 9.26975 13.402 9.43886 13.5393 9.65585C13.6767 9.87283 13.75 10.1279 13.75 10.3889C13.75 10.7388 13.6183 11.0744 13.3839 11.3219C13.1495 11.5693 12.8315 11.7083 12.5 11.7083ZM16.5 11.7083C16.2528 11.7083 16.0111 11.631 15.8055 11.486C15.6 11.341 15.4398 11.1349 15.3452 10.8938C15.2505 10.6527 15.2258 10.3874 15.274 10.1315C15.3222 9.87553 15.4413 9.64043 15.6161 9.4559C15.7909 9.27137 16.0137 9.14571 16.2561 9.0948C16.4986 9.04389 16.7499 9.07002 16.9784 9.16988C17.2068 9.26975 17.402 9.43886 17.5393 9.65585C17.6767 9.87283 17.75 10.1279 17.75 10.3889C17.75 10.7388 17.6183 11.0744 17.3839 11.3219C17.1495 11.5693 16.8315 11.7083 16.5 11.7083Z',
      action: handleComment
    },
    {
      title: 'Share',
      icon: 'M23 12L18.39 19H16L20 13H8C7.48519 12.9894 6.97333 13.0803 6.49367 13.2676C6.014 13.4548 5.57593 13.7347 5.20448 14.0913C4.83302 14.4479 4.53546 14.8742 4.32879 15.3458C4.12212 15.8175 4.0104 16.3252 4 16.84V17C3.99772 17.4208 4.06184 17.8392 4.19 18.24L5.12 21H3L2.27 18.78C2.09089 18.1831 1.99993 17.5632 2 16.94C2.01581 15.3591 2.65492 13.8484 3.77843 12.7361C4.90194 11.6238 6.41904 10.9999 8 11H20L16 5H18.39L23 12Z',
      action: handleShare
    },
    {
      title: 'Send',
      icon: 'M21 3L0 10L7.66 14.26L16 8L9.74 16.34L14 24L21 3Z',
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