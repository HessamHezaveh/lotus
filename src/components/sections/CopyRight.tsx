import { footerData } from '@/utils/data'
import React from 'react'

const CopyRight = () => {
  return (
    
    <div className="flex bg-mh-mainBlue justify-center items-center text-white py-3">
    <p className="text-sm">
      © {new Date().getFullYear()}{" "}
      <a
        className="hover:text-mh-gold transition-all duration-300 ease-in-out"
        href="/"
      >
        {footerData.copyright.text}
      </a>
      . All rights reserved.
    </p>
  </div>
  )
}

export default CopyRight