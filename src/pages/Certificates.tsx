import React from 'react'
import CertificateCard from '@/components/certificates/CertificateCard'
import { CERTIFICATESINFO } from '@/config'

const Certificates = () => {
  return (
    <main className="w-full p-4 center mt-[7rem] flex flex-col gap-7">
      <h1 className='center text-2xl font-bold'>My Certificates</h1>
      <CertificateCard CertificateInfo={CERTIFICATESINFO}/>
    </main>
  )
}

export default Certificates