export const handleReadMoreButton = (navigationURL) => {
  console.log(`click read more ..! `)
}

export const handleBannerButton = (navigationURL) => {
  console.log(`click shop now ..! `)
}

export const handleBannerDealButton = (navigationURL) => {
  console.log(`click deal now ..! `)
}

export const handleFooterSubscribe = (formData, setFormData) => {
  console.log(`click ..! ${formData}`)
  setFormData('');
}

export const handleFooterSocialMediaBtn = (text) => {
  console.log(`click ..! ${text}`)
}

export const handleClosePopup = () => {
  const newLetter = document.getElementById('newLetter');
  newLetter.style.display = 'none';
  console.log(`click pop-pup..! `)
}


